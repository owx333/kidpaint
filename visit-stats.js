/* One aggregate counter. Cached values are labelled as previous records. */
(()=>{
const count=document.getElementById('busuanzi_site_pv'),status=document.getElementById('visitorStatsStatus');if(!count||window.kidpaintStatsStarted)return;window.kidpaintStatsStarted=true;
const key='kidpaint-last-verified-visits-v1';let cached=null,requesting=false,succeeded=false,attempts=0;
const label=(zh,en)=>window.KIDPAINT_LANGUAGE?.language==='en'?en:zh;
function numeric(value){if(typeof value!=='number'&&!(typeof value==='string'&&/^\d+$/.test(value)))return null;const n=Number(value);return Number.isSafeInteger(n)&&n>=0?n:null}
try{const record=JSON.parse(localStorage.getItem(key)||'null');if(record&&numeric(record.value)!==null&&Number.isFinite(record.at))cached={value:numeric(record.value),at:record.at}}catch{}
function unavailable(reason){if(cached){count.textContent=cached.value.toLocaleString('zh-CN')+label('（上次记录）',' (last recorded)');count.title=label('上次成功读取：','Last successful update: ')+new Date(cached.at).toLocaleString();}else{count.textContent=label('暂不可用','Unavailable');count.removeAttribute('title')}if(status)status.textContent=reason}
if(!['www.kidpaint.my','kidpaint.my'].includes(location.hostname)){unavailable('统计仅在正式网站启用');return}
async function refresh(){
 if(requesting||succeeded||attempts>=2)return;
 if(navigator.onLine===false){unavailable('离线时无法读取统计');return}
 requesting=true;attempts++;const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
 try{
  let referrer='';try{if(document.referrer)referrer=new URL(document.referrer).origin+'/'}catch{}
  window.kidpaintStatsRequest=fetch('https://cdn.busuanzi.cc/api.php',{method:'POST',credentials:'omit',cache:'no-store',referrerPolicy:'strict-origin-when-cross-origin',body:JSON.stringify({url:'https://www.kidpaint.my/',referrer}),signal:controller.signal});
  const response=await window.kidpaintStatsRequest;if(!response.ok)throw Error('Statistics HTTP '+response.status);
  const data=await response.json(),n=numeric(data.busuanzi_site_pv);if(n===null)throw Error('Invalid statistics response');
  cached={value:n,at:Date.now()};try{localStorage.setItem(key,JSON.stringify(cached))}catch{}
  succeeded=true;count.textContent=n.toLocaleString('zh-CN');count.removeAttribute('title');if(status)status.textContent='';
 }catch(error){unavailable('统计服务暂时不可用');console.warn('KidPaint visitor statistics unavailable:',error?.message||String(error))}
 finally{clearTimeout(timer);requesting=false}
}
if(cached)unavailable('正在更新统计');refresh();
// Recover after a lost connection, never count navigation between app screens.
addEventListener('online',refresh);
})();
