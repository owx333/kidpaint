/* Redesigned catalogue. Previous IDs remain resolvable for saved artwork. */
(()=>{
const legacy=new Map();for(const list of Object.values(LIST))if(Array.isArray(list))for(const p of list)legacy.set(p.id,p);
const groups=['scene','animal','cartoon','building','people','comic'];
const settings=[['花园','garden'],['海底','sea'],['星空','space'],['森林','forest'],['沙滩','beach'],['雪地','snow'],['小镇','town'],['生日','party'],['山谷','valley'],['雨天','rain'],['河畔','river'],['游乐园','play'],['露营','camp'],['花房','greenhouse'],['书房','library'],['舞台','stage'],['果园','orchard'],['天空','sky'],['农场','farm'],['沙漠','desert'],['火山岛','volcano'],['月球','moon'],['港口','harbor'],['甜品店','bakery']];
function place(b,key,x,y,size,flip=false){if(EL[key])put(b,key,x,y,size,flip)}
function landscape(b,kind,lv){
 const night=['space','moon'].includes(kind);if(night){b.p('M315 32Q279 78 333 91Q282 109 275 73Q270 45 315 32Z');[[45,45],[135,70],[235,33]].forEach(([x,y])=>b.poly(starPts(x,y,10,4)))}else if(!['sea','library','stage','bakery','greenhouse'].includes(kind)){if(kind==='rain'){place(b,'cloud',90,64,83);b.p(cloud(260,69,.7));[[80,112],[290,118],[326,106]].forEach(([x,y])=>b.p(`M${x} ${y}q-10 15 0 18q10 -3 0 -18Z`))}else{b.c(335,57,22);b.p(cloud(35,68,.55))}}
 switch(kind){
 case 'sea':b.p('M0 33Q45 15 100 33T200 33T300 33T400 33L400 400L0 400Z').p('M0 349Q100 326 200 349T400 349L400 400L0 400Z');[45,353].forEach(x=>b.p(`M${x} 351q-20 -38 -9 -71q24 27 17 71Z`));[70,315].forEach(x=>b.c(x,115,12));break;
 case 'beach':case 'harbor':b.p('M0 243Q55 225 110 243T220 243T330 243L400 243L400 400L0 400Z').p('M0 332Q150 294 264 346L400 382L400 400L0 400Z');place(b,'palm',49,226,116);if(kind==='harbor')place(b,'lighthouse',339,210,115);break;
 case 'space':case 'moon':b.p('M0 334Q160 295 280 334T400 330L400 400L0 400Z').e(60,358,26,9).e(329,375,32,10);b.c(88,153,30).e(88,153,47,8,-23);break;
 case 'snow':b.poly('0,259 72,115 175,259').poly('235,269 332,109 420,269').poly('45,164 72,115 98,166 74,155').poly('302,158 332,109 361,159 332,146').p('M0 328Q100 301 200 328T400 328L400 400L0 400Z');break;
 case 'valley':b.poly('-30,250 100,80 220,250').poly('187,262 307,111 433,262').p('M0 304Q170 271 280 313T400 312L400 400L0 400Z');b.p('M186 400Q256 350 211 315L247 315Q291 355 242 400Z');break;
 case 'river':b.p('M0 284Q90 254 200 285T400 284L400 400L0 400Z').p('M56 400Q198 330 145 268L194 268Q247 330 152 400Z');place(b,'bridge',145,287,123);break;
 case 'desert':b.p('M0 270Q100 200 226 270T400 256L400 400L0 400Z').p('M0 350Q190 302 400 350L400 400L0 400Z');place(b,'cactus',48,270,100);place(b,'cactus',352,325,75);break;
 case 'volcano':b.poly('23,297 130,143 210,297').p('M107 176L130 143L153 182L129 171Z').p('M117 118Q97 95 113 77Q143 53 147 94Q143 109 135 117Z').p('M0 348Q140 310 270 348T400 345L400 400L0 400Z');break;
 case 'library':b.rect(24,35,115,217,10);[89,149,210].forEach(y=>{b.l(`M24 ${y}L139 ${y}`);[39,62,85,108].forEach((x,i)=>b.rect(x,y-44,17,44,2))});b.p('M0 309L400 309L400 400L0 400Z');break;
 case 'stage':b.p('M0 0L80 0Q122 100 70 230L0 263Z').p('M400 0L320 0Q278 100 330 230L400 263Z').p('M0 330L400 330L400 400L0 400Z');b.l('M15 15Q85 110 26 222M385 15Q315 110 374 222');b.poly(starPts(200,50,22,10));break;
 case 'greenhouse':b.rect(34,90,332,240,15).p('M34 90L200 22L366 90Z').l('M200 23L200 160M34 90L366 90M60 330L340 330');break;
 case 'bakery':b.rect(25,42,350,285,12).rect(52,83,97,111,10).l('M100 83L100 194M52 138L149 138').p('M23 42L377 42L377 80Q359 101 341 80Q323 101 305 80Q287 101 269 80Q251 101 233 80Q215 101 197 80Q179 101 161 80Q143 101 125 80Q107 101 89 80Q71 101 53 80Q35 101 23 80Z').rect(30,324,340,25,6);break;
 case 'town':case 'farm':place(b,kind==='farm'?'barn':'shop',62,213,123);b.p('M0 334L400 334L400 400L0 400Z').l('M20 366L90 366M150 366L220 366M280 366L350 366');break;
 case 'forest':place(b,'tree',51,200,149);place(b,'pine',347,205,139);b.p('M0 317Q100 286 210 317T400 317L400 400L0 400Z');break;
 case 'orchard':place(b,'tree',59,188,140);place(b,'tree',346,190,141);[[41,149],[80,157],[329,144],[369,160]].forEach(([x,y])=>b.c(x,y,10));b.p('M0 322Q100 290 210 322T400 322L400 400L0 400Z');break;
 case 'party':b.l('M15 35Q200 90 385 35');[[65,47],[137,61],[211,62],[286,52],[350,39]].forEach(([x,y])=>b.poly(`${x-13},${y} ${x+13},${y+3} ${x},${y+25}`));place(b,'balloon',53,167,79);place(b,'balloon',343,145,70);b.e(200,357,150,20);break;
 case 'play':place(b,'ferris',323,157,119);b.p('M0 332Q180 300 400 330L400 400L0 400Z');place(b,'kite',57,157,82);break;
 case 'camp':b.p('M0 319Q200 280 400 319L400 400L0 400Z');place(b,'tent',70,254,126);place(b,'pine',337,218,130);break;
 case 'sky':b.p(cloud(2,345,1.1)).p(cloud(270,330,1));place(b,'bird',77,146,46);break;
 case 'rain':b.p('M0 323Q200 299 400 323L400 400L0 400Z').e(73,357,45,11);place(b,'umbrella',331,194,93);break;
 default:b.p('M0 329Q150 301 290 328T400 328L400 400L0 400Z');place(b,'tulip',50,299,67);place(b,'flower',350,330,58);
 }
 if(lv>=2){const ground=['sea','beach','harbor'].includes(kind);place(b,ground?'star':night?'rocks':'flower',32,376,ground?34:40);place(b,night?'robot':ground?'crab':'butterfly',360,284,night?54:44)}
 if(lv===3){if(!['library','stage','bakery'].includes(kind)){[115,270].forEach((x,i)=>place(b,night?'star':kind==='sea'?'fish':'bird',x,105+i*17,34));}for(let i=0;i<5;i++)place(b,night?'rocks':kind==='sea'?'rocks':'tulip',25+i*83,386,24);}
}
const nature=['waterfall','lighthouse','treehouse','bridge','windmill','boat','pond','tent','snowman','volcano','palm','mountain','campfire','pine','flower','sunflower','mushroom','tulip','rocks','bush','tree','cactus','barn','ferris'];
function create(cat,lv,i){const index=(i+7*(lv-1))%settings.length,b=B(),pool=cat==='scene'?nature:POOLS[cat];const lead=pool[(i+5*(lv-1)+Math.floor(i/settings.length)*7)%pool.length];let [where,kind]=settings[index];if(cat==='animal'&&['fish','whale','octopus','crab'].includes(lead)){[where,kind]=[['珊瑚海底','sea'],['海湾','harbor'],['泡泡海洋','sea'],['贝壳海湾','sea'],['海底花园','sea'],['珍珠海底','sea'],['星光港口','harbor'],['海草森林','sea'],['海底城堡','sea'],['蓝鲸港口','harbor'],['深海探险','sea']][(i+lv)%11]}else if(cat==='animal'&&['turtle','duck','frog'].includes(lead)){[where,kind]=[['河畔','river'],['沙滩','beach'],['荷塘','river'],['溪流','river'],['贝壳小岛','beach']][(i+lv)%5]}landscape(b,kind,lv);if(kind==='sea'){const treasure=['castletower','rocks','gift','star','snail','mushroom','boat'][(i+Math.floor(i/7))%7];place(b,treasure,80,330,58)}let name;
 const placement=i%5;
 const cx=placement===1?235:placement===2?165:200,cy=kind==='sky'?214:kind==='sea'?215:250;
 const size=lv===1?226:lv===2?189:159;
 if(cat==='comic'&&lv>1){b.rect(132,108,230,232,20);place(b,lead,247,240,lv===2?174:144);b.p('M144 120L335 120Q348 120 348 133L348 159Q348 172 335 172L230 172L214 193L214 172L144 172Z');b.t(245,154,20,['出发！','发现啦！','一起创造！','你好！'][i%4]);if(lv===3){b.rect(17,198,106,144,12);place(b,pool[(i+8)%pool.length],70,270,79);b.poly(starPts(65,179,25,11));}name=EL[lead].n+'的'+where+'冒险';}
 else{place(b,lead,cx,cy,size,cat==='animal'&&placement===3);name=cat==='scene'?where+' · '+EL[lead].n:EL[lead].n+'的'+where+'故事';}
 if(lv>=2){const props={animal:['gift','apple','flower','balloon'],cartoon:['cupcake','heart','strawberry','gift'],people:['cupcake','book','gift','apple'],building:['car','tree','flower','bush'],scene:['boat','duck','flower','snail'],comic:['star','gift','moon','heart']}[cat];const prop=props[i%props.length];place(b,EL[prop]?prop:'gift',placement===1?94:310,332,lv===2?75:61);}
 if(lv===3){const companion=pool[(i+9)%pool.length];place(b,companion,cx>200?91:314,234,90,true);if(!['sea','sky','space','moon'].includes(kind)){b.p('M138 400Q178 363 161 331L187 331Q215 365 209 400Z');}if(cat==='building'){place(b,'car',107,365,58);place(b,'kid',326,350,65)}else if(cat==='people'){place(b,'dog',105,362,48)}else{place(b,'gift',249,363,40)}}
 return {name,svg:b.out()};}
for(const cat of groups)for(const lv of [1,2,3]){let index=0;LIST[cat+lv]=LIST[cat+lv].map(p=>{if(!/^(g-|a-)/.test(p.id))return p;const i=index++;return{id:'v2-'+cat+'-'+lv+'-'+i,cat,lv,get name(){return(this._meta||(this._meta=create(cat,lv,i))).name},get svg(){return(this._meta||(this._meta=create(cat,lv,i))).svg}}})}
const lookup=LIST.findById;LIST.findById=id=>lookup(id)||legacy.get(id);renderLevels();
})();
