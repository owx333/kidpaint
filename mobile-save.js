/* Reliable download request with a visible image fallback for mobile browsers. */
(()=>{
const mobile=()=>/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const label=(zh,en)=>window.KIDPAINT_LANGUAGE?.language==='en'?en:zh;
let activeUrl=null,dialog=null,previousFocus=null;
function close(){dialog?.remove();dialog=null;previousFocus?.isConnected&&previousFocus.focus({preventScroll:true});previousFocus=null;if(activeUrl){const url=activeUrl;setTimeout(()=>URL.revokeObjectURL(url),60000);activeUrl=null}}
async function prepare(task){let timer;try{return await Promise.race([task,new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Image preparation timed out')),25000)})])}finally{clearTimeout(timer)}}
function download(blob,name){const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=name;link.style.display='none';document.body.append(link);link.click();setTimeout(()=>{link.remove();URL.revokeObjectURL(url)},60000)}
function fallback(blob,name){
 close();previousFocus=document.activeElement;activeUrl=URL.createObjectURL(blob);dialog=document.createElement('div');dialog.className='guide-overlay';dialog.id='mobileSave';dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');
 const card=document.createElement('div');card.className='guide-card';const heading=document.createElement('h2');heading.id='mobileSaveTitle';heading.textContent=label('保存你的作品','Save your artwork');dialog.setAttribute('aria-labelledby',heading.id);
 const img=document.createElement('img');img.src=activeUrl;img.alt=label('你的作品，长按图片可保存','Your artwork. Touch and hold to save');img.style.cssText='display:block;width:100%;max-height:55svh;object-fit:contain;touch-action:auto;-webkit-touch-callout:default;user-select:auto';
 const hint=document.createElement('p');hint.textContent=label('没有出现下载？长按图片，选择保存图片。','No download? Touch and hold the image, then choose Save image.');
 const row=document.createElement('div');row.className='center';row.style.cssText='gap:8px;flex-wrap:wrap';
 const again=document.createElement('a');again.className='btn primary';again.href=activeUrl;again.download=name;again.textContent=label('⬇ 下载图片','⬇ Download image');row.append(again);
 const file=new File([blob],name,{type:'image/png'});let canShare=false;try{canShare=!!navigator.share&&!!navigator.canShare?.({files:[file]})}catch{}
 if(canShare){const share=document.createElement('button');share.className='btn';share.textContent=label('保存／分享','Save / share');share.onclick=async()=>{try{await navigator.share({files:[file],title:'KidPaint'})}catch(e){if(e.name!=='AbortError')toast(label('请长按图片保存','Touch and hold the image to save'))}};row.append(share)}
 const done=document.createElement('button');done.className='btn';done.textContent=label('关闭','Close');done.onclick=close;row.append(done);card.append(heading,img,hint,row);dialog.append(card);dialog.onclick=e=>{if(e.target===dialog)close()};document.body.append(dialog);done.focus({preventScroll:true});
 const focusables=[...row.children];dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();close();return}if(e.key==='Tab'){const first=focusables[0],last=focusables.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
}
function save(blob,name){if(!(blob instanceof Blob)||!blob.size)throw Error('Empty artwork');download(blob,name);if(mobile())fallback(blob,name);else toast(label('已请求下载作品','Artwork download requested'))}
async function finishDownload(){const button=$('finSave');button.disabled=true;try{if(!lastBlob)toast(label('正在准备图片…','Preparing image…'));const blob=lastBlob||await prepare(toPngBlob());save(blob,(artFor(cur.id).title||cur.name)+'.png')}catch{toast(label('图片没能生成，请重试','Could not prepare the image. Please try again'))}finally{button.disabled=false}}
const originalFinishDownload=$('finSave').onclick;$('finSave').onclick=event=>window.claude&&!mobile()?originalFinishDownload(event):finishDownload();
const gallery=renderGallery;renderGallery=async function(){await gallery();for(const card of $('artGallery').querySelectorAll('.card')){const id=card.dataset.artworkId,p=id&&pictureById(id),button=card.querySelector('.gallery-actions button:last-child');if(!p||!button)continue;button.onclick=async()=>{button.disabled=true;toast(label('正在准备图片…','Preparing image…'));try{save(await prepare(exportPicture(p)),(artFor(id).title||p.name)+'.png')}catch{toast(label('图片没能生成，请重试','Could not prepare the image. Please try again'))}finally{button.disabled=false}}}};
window.KIDPAINT_SAVE_IMAGE=save;
})();
