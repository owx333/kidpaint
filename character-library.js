/* Additional stylized fan-art portraits. Each recipe defines character-specific traits. */
(()=>{
const data=`米妮|mouse|bow|flower
高飞|dog|goofy|skate
布鲁托|dog|pluto|ball
黛丝|duck|bow|flower
史高治|duck|top-hat|coin
奇奇|chipmunk|chip|acorn
蒂蒂|chipmunk|dale|flower
小熊维尼|bear|pooh|honey
跳跳虎|tiger|tigger|ball
小猪皮杰|pig|piglet|flower
屹耳|donkey|eeyore|bow
瑞比|rabbit|rabbit|carrot
史迪奇|alien|stitch|surf
安琪|alien|angel|heart
小飞象|elephant|dumbo|balloon
辛巴|lion|simba|sun
丁满|meerkat|timon|leaf
彭彭|boar|pumbaa|leaf
小鹿斑比|deer|bambi|flower
桑普|rabbit|thumper|carrot
尼莫|fish|nemo|coral
多莉|fish|dory|bubble
雪宝|snowman|olaf|sun
艾莎|human|elsa|snowflake
安娜|human|anna|flower
乐佩|human|rapunzel|lantern
白雪公主|human|snowwhite|apple
灰姑娘|human|cinderella|slipper
爱丽儿|mermaid|ariel|shell
贝儿|human|belle|rose
茉莉公主|human|jasmine|lamp
花木兰|human|mulan|flower
莫娜|human|moana|shell
大白|robot|baymax|heart
瓦力|robot|walle|plant
伊娃|robot|eve|plant
闪电麦昆|car|mcqueen|flag
板牙|car|mater|cone
毛怪苏利文|monster|sully|ball
大眼仔麦克|monster|mike|book
红心马|horse|bullseye|star
抱抱龙|dinosaur|rex|block
火腿猪|pig|hamm|coin
三眼仔|alien|three-eye|planet
弹簧狗|dog|slinky|bone
翠丝|human|jessie|hat
牧羊女宝佩|human|bopeep|sheep
叉叉|fork|forky|block
蛋头先生|potato|potato-man|hat
蛋头太太|potato|potato-lady|flower
草莓熊|bear|lotso|strawberry
Hello Kitty|cat|kitty|bow
美乐蒂|rabbit|melody|flower
酷洛米|rabbit|kuromi|star
玉桂狗|dog|cinnamoroll|cloud
布丁狗|dog|pompom|pudding
可洛比|frog|keroppi|leaf
酷企鹅|penguin|badtz|fish
蛋黄哥|egg|gudetama|plate
皮卡丘|electric|pikachu|lightning
伊布|fox|eevee|leaf
小火龙|dragon|charmander|flame
杰尼龟|turtle|squirtle|bubble
妙蛙种子|frog|bulbasaur|plant
胖丁|round|jigglypuff|microphone
卡比兽|bear|snorlax|apple
喵喵|cat|meowth|coin
可达鸭|duck|psyduck|bubble
耿鬼|monster|gengar|moon
路飞|human|luffy|hat
乔巴|deer|chopper|book
漩涡鸣人|human|naruto|leaf
孙悟空|human|goku|cloud
贝吉塔|human|vegeta|planet
柯南|human|conan|magnifier
面包超人|round|anpanman|bread
龙猫|owl|totoro|umbrella
猫巴士|bus|catbus|leaf
波妞|fish|ponyo|bucket
卡比|round|kirby|star
马里奥|human|mario|mushroom
路易吉|human|luigi|mushroom
耀西|dinosaur|yoshi|egg
索尼克|hedgehog|sonic|ring
塔尔斯|fox|tails|ring
纳克鲁斯|hedgehog|knuckles|gem
海绵宝宝|sponge|spongebob|bubble
派大星|starfish|patrick|shell
章鱼哥|octopus|squidward|clarinet
珊迪|squirrel|sandy|flower
蟹老板|crab|krabs|coin
小蜗加里|snail|gary|shell
小黄人鲍勃|minion|bob|bear
小黄人凯文| minion|kevin|banana
小黄人斯图尔特|minion|stuart|guitar
功夫熊猫阿宝|panda|po|dumpling
无牙仔|dragon|toothless|moon
蝙蝠侠|hero|batman|bat
超人|hero|superman|star
美国队长|hero|captain|shield`.trim().split('\n').map((r,i)=>{const [name,type,feature,prop]=r.split('|');return {id:'star-'+(i+1),name,type:type.trim(),feature,prop}});
const dark=(b,x,y,rx,ry=rx)=>b.raw(`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#2A1B5E" style="stroke:none;pointer-events:none"/>`);
function bow(b,x,y,s=1){b.poly(`${x-25*s},${y-16*s} ${x},${y} ${x-25*s},${y+16*s}`).poly(`${x+25*s},${y-16*s} ${x},${y} ${x+25*s},${y+16*s}`).c(x,y,7*s)}
function prop(b,key){const q=B(),keys={flower:'flower',heart:'heart',ball:'balloon',carrot:'tulip',apple:'apple',strawberry:'strawberry',leaf:'bush',sun:'sun',cloud:'cloud',moon:'moon',planet:'moon',plant:'tulip',bow:'heart',bone:'gift',snowflake:'star',gem:'star',star:'star',mushroom:'mushroom',bubble:'fish',coral:'mushroom',block:'gift',sheep:'bear',bear:'bear',egg:'apple',banana:'lollipop',pudding:'cupcake',bread:'cupcake',dumpling:'cupcake',plate:'donut',hat:'cowboy',lantern:'gift',shell:'snail',bucket:'pond',surf:'boat',flag:'gift',cone:'cactus',skate:'car',bat:'batman'};if(key==='ring'||key==='coin'){b.c(331,317,25).c(331,317,14);if(key==='coin')b.poly(starPts(331,317,9,4));return}if(key==='shield'){b.c(330,292,38).c(330,292,29).c(330,292,18).poly(starPts(330,292,13,6));return}if(key==='lightning'){b.poly('330,263 307,305 327,305 313,346 355,292 334,292 353,263');return}if(key==='honey'){b.rect(305,288,55,52,12).e(333,288,27,9).e(332,312,15,10);return}if(key==='microphone'||key==='magnifier'){b.c(334,280,19).rect(329,299,10,46,4);return}if(key==='book'){b.p('M301 291Q320 282 332 292Q346 281 364 291L364 337Q344 329 332 340Q319 330 301 337Z').l('M332 292L332 340');return}if(key==='guitar'||key==='clarinet'){b.e(328,322,19,25,-15).rect(327,265,11,51,4).l('M330 270L334 338');return}if(key==='flame'){b.p('M330 265Q324 295 344 289Q363 322 336 342Q302 326 320 303Q327 313 330 265Z');return}const k=keys[key]||'flower';if(EL[k])put(b,k,334,316,64,false)}
function make(a){const b=B(),f=a.feature,t=a.type,i=+a.id.split('-')[1];const animal=!['human','hero','robot','car','bus','fish','fork','egg','sponge','starfish','snail','crab','octopus'].includes(t);
 // Six quiet, different settings leave the main portrait readable.
 const scene=i%6;if(scene===0){b.p(cloud(20,64,.6));b.poly(starPts(342,79,17,7));}else if(scene===1){b.c(341,63,22);b.p('M0 353Q100 327 210 353T400 353L400 400L0 400Z')}else if(scene===2){b.rect(23,35,68,105,8).l('M57 35L57 140M23 88L91 88');}else if(scene===3){b.p('M330 33Q293 68 350 91Q307 106 294 75Q287 49 330 33Z');[[42,54],[90,100]].forEach(([x,y])=>b.poly(starPts(x,y,10,4)));}else if(scene===4){b.l('M20 49Q200 89 380 49');[70,135,206,278,342].forEach((x,j)=>b.poly(`${x-12},${63+(j%2)*7} ${x+12},${63+(j%2)*7} ${x},${84+(j%2)*7}`));}else{b.p(cloud(25,60,.5));b.p(cloud(283,98,.5));}b.e(188,367,109,10);
 if(t==='car'||t==='bus'){const bus=t==='bus';b.c(123,330,26).c(271,330,26).c(123,330,13).c(271,330,13).p(bus?'M63 175Q175 119 314 173L339 324L49 324Z':'M56 282L101 235L245 231L306 275Q340 274 345 329L43 329Q35 296 56 282Z').p(bus?'M82 188L307 188L315 249L73 249Z':'M112 238L238 238L270 276L83 276Z');if(bus){b.poly('82,182 64,142 114,163').poly('270,158 319,133 310,183');for(let x=90;x<300;x+=45)b.rect(x,205,32,32,6);b.e(200,290,48,22).l('M200 288L200 310');}else{b.e(148,257,18,15).e(211,257,18,15);dark(b,153,259,5,8);dark(b,207,259,5,8);b.l('M155 306Q196 329 240 303');if(f==='mater')b.rect(180,307,13,20,2).rect(197,307,13,20,2).rect(95,187,116,45,8);else b.poly('285,278 264,301 281,300 254,325 310,294 290,295');}}
 else if(t==='fish'){b.p(f==='nemo'?'M96 150L69 110L73 189L99 185Z':'M100 180L49 128L52 226Z').e(199,183,107,72);b.e(240,162,23,31);dark(b,245,169,8,12);b.p('M284 176Q317 180 289 195Z').p('M158 225Q192 194 227 217L199 259Z');if(f==='nemo'){b.p('M123 126Q141 181 127 236L149 248Q165 184 146 116Z').p('M204 113Q227 179 211 253L236 248Q249 179 231 120Z');b.e(243,166,15,22);dark(b,247,172,5,9)}else if(f==='dory')b.p('M120 149Q189 95 250 130Q176 150 177 219L119 224Z');else{b.e(176,162,22,27).e(229,163,22,27);dark(b,180,169,5,10);dark(b,226,169,5,10);b.p('M142 224Q199 249 256 224L267 276L126 276Z')}}
 else if(t==='snail'){b.p('M80 280Q155 272 288 284L315 321L61 321Z').c(221,230,63).l('M221 231q-35 -25 -40 8q-2 35 35 32q38 -3 29 -45q-8 -42 -53 -31');b.l('M102 280L84 217M131 280L145 211').c(82,209,13).c(146,205,13);dark(b,83,210,4);dark(b,146,206,4)}
 else if(t==='fork'){b.p('M158 180L162 100L174 100L174 145L185 145L185 98L197 98L197 145L209 145L209 96L222 96L224 180Q220 210 200 217L202 327L181 327L183 217Q163 212 158 180Z').l('M167 245L103 227L78 242M216 245L279 226L303 239');b.e(174,172,10,15).e(208,167,12,17);dark(b,174,174,4);dark(b,208,169,5);b.p('M170 197Q191 223 212 194Z').e(155,345,39,13).e(224,345,39,13)}
 else if(t==='egg'){b.p('M54 302Q50 276 91 279Q80 243 124 250Q165 224 182 252Q229 220 246 252Q295 224 302 269Q353 271 325 301Q350 343 301 347Q271 377 241 351Q201 377 168 352Q118 375 114 346Q66 359 54 302Z').e(199,277,78,53);b.l('M162 272L178 272M215 272L231 272').e(198,290,10,5);}
 else {
  // Main body, feet and hands, tailored by character family.
  const human=['human','hero'].includes(t),short=['round','starfish','monster'].includes(t),bodyTop=human?205:218,bodyEnd=short?316:332;
  if(t==='hero')b.p('M142 198L235 198L284 335L103 335Z');
  if(t==='human'&&['elsa','anna','rapunzel','snowwhite','cinderella','belle','jasmine','mulan','moana','jessie','bopeep'].includes(f))b.p('M159 207L219 207L255 340L120 340Z');else if(t==='mermaid')b.p('M146 219L226 219Q241 268 212 292Q238 309 228 330L245 350L207 349L183 337Q145 325 157 285Z');else b.e(190,277,58,61);
  if(!['mermaid','starfish'].includes(t)){b.e(155,345,29,14).e(225,345,29,14)}
  if(t!=='starfish'&&t!=='octopus'){b.e(130,268,19,35,18).e(248,268,19,35,-18)}
  if(['mouse','bear','panda','tiger','lion','pig','chipmunk','meerkat','boar'].includes(t)){b.c(137,99,23).c(241,99,23);if(['bear','panda','pig'].includes(t))b.c(137,99,11).c(241,99,11)}
  if(['rabbit','electric'].includes(t)){b.e(149,73,15,49,-15).e(230,73,15,49,15).e(149,73,7,34,-15).e(230,73,7,34,15)}
  if(['cat','fox','hedgehog','monster','owl'].includes(t)){b.poly('125,118 126,65 163,96').poly('218,95 257,64 255,119')}
  if(t==='dog'){if(f==='cinnamoroll'){b.e(90,150,42,18,-12).e(287,150,42,18,12)}else{b.e(127,144,18,60,-16).e(252,144,18,60,16)}}
  if(t==='deer'||t==='donkey'||t==='horse'){b.e(145,83,15,38,-20).e(234,83,15,38,20);if(t==='deer')b.l('M143 66L128 29M132 43L109 37M128 30L126 16M236 65L257 27M250 42L274 36M257 27L263 14')}
  if(t==='alien'){if(f==='three-eye')b.p('M120 132L83 114L93 147Z').p('M258 132L295 115L286 148Z').l('M190 88L190 55').c(190,46,10);else{b.e(110,132,24,72,-52).e(270,132,24,72,52).e(110,132,14,50,-52).e(270,132,14,50,52);}}
  if(t==='elephant'){b.e(100,155,57,79,-10).e(284,155,57,79,10).e(100,155,41,61,-10).e(284,155,41,61,10)}
  if(t==='dragon'){b.p('M118 215L68 165L60 231L30 241L79 263L116 249Z').p('M257 215L309 165L316 231L350 239L305 267L259 249Z');b.poly('145,108 145,77 163,106').poly('215,106 235,77 235,118')}
  if(t==='robot'&&f==='walle'){b.rect(133,210,117,110,12).rect(151,226,81,69,5);b.rect(112,307,44,44,9).rect(227,307,44,44,9);for(let y=315;y<349;y+=10)b.l(`M116 ${y}L151 ${y}M232 ${y}L266 ${y}`);b.rect(155,106,34,63,5).rect(199,106,34,63,5);b.rect(115,157,72,49,12).rect(193,157,72,49,12).c(151,181,18).c(229,181,18).c(151,181,9).c(229,181,9);}
  else if(t==='robot'&&f==='eve'){b.e(190,165,76,50).p('M131 159Q190 130 249 159L249 181Q190 205 131 181Z').e(164,173,12,7).e(217,173,12,7);b.p('M178 236Q190 217 203 236Q226 255 204 273L178 273Q155 256 178 236Z')}
  else if(t==='robot'){b.e(190,166,61,44);dark(b,164,171,5);dark(b,216,171,5);b.l('M169 171L211 171');b.c(223,241,8).l('M223 235L223 247M217 241L229 241')}
  else if(t==='snowman'){b.c(190,299,48).c(190,224,34).e(190,147,43,56);b.l('M172 99L156 75M185 94L185 59M200 97L215 75');b.e(174,132,9,15).e(204,132,9,15);dark(b,177,137,3,6);dark(b,201,137,3,6);b.poly('189,150 233,162 190,168').p('M161 176Q190 198 220 174Q210 215 188 208Q170 204 161 176Z').rect(180,195,13,17,2);[222,281,309].forEach(y=>b.c(190,y,5))}
  else if(t==='sponge'){b.p('M116 108Q126 96 138 105Q152 90 163 104Q180 88 193 104Q211 91 223 103Q242 94 252 105L252 269L116 269Z').e(163,155,28,31).e(219,155,28,31);b.c(163,155,12).c(219,155,12);dark(b,163,155,5);dark(b,219,155,5);b.e(191,190,10,21).p('M144 215Q189 244 235 213Q218 258 189 254Q161 253 144 215Z').rect(174,224,14,16,2).rect(192,224,14,16,2).rect(116,267,136,28,3).rect(116,295,136,24,3).poly('178,269 201,269 189,281').poly('189,281 177,308 189,318 201,308');[[128,123],[239,135],[131,203],[243,248]].forEach(([x,y])=>b.c(x,y,7));}
  else if(t==='starfish'){b.p('M190 86L218 192L290 250L238 273L247 330L192 306L133 330L142 274L89 249L160 192Z').e(176,175,10,20).e(202,175,10,20);dark(b,177,181,3,7);dark(b,201,181,3,7);b.l('M165 222Q190 243 217 220').p('M144 274L236 274L245 325L211 314L190 299L167 314L136 325Z').poly(starPts(161,293,11,6)).poly(starPts(224,296,10,5))}
  else if(t==='octopus'){b.e(190,152,48,62).e(160,154,17,28).e(211,154,17,28);dark(b,163,168,4,10);dark(b,209,168,4,10);b.e(187,199,17,45).l('M153 150L176 149M195 149L227 150M157 226Q187 240 218 225');[137,160,215,241].forEach(x=>b.p(`M${x} 285q-8 60 12 60q13 -7 4 -20l0 -45Z`))}
  else if(t==='crab'){b.e(189,195,66,42).l('M159 157L143 105M213 155L228 105').e(142,98,13,24).e(229,98,13,24);dark(b,143,104,4,8);dark(b,228,104,4,8);b.p('M109 238Q70 216 79 177L96 190L106 164Q141 199 109 238Z').p('M266 238Q300 209 285 174L274 188L261 166Q234 207 266 238Z').l('M162 204Q189 222 219 202');}
  else if(t==='minion'){b.rect(131,112,119,207,54).rect(129,175,122,15,3);const one=f==='stuart';if(one){b.c(190,183,39).c(190,183,29);dark(b,190,185,10)}else{b.c(163,182,29).c(217,182,29).c(163,182,21).c(217,182,21);dark(b,163,184,7);dark(b,217,184,7)}b.l(f==='bob'?'M166 230Q190 247 215 228':f==='kevin'?'M153 231Q187 257 225 229':'M165 230Q197 243 219 226').rect(153,271,73,50,8).rect(178,282,23,22,5).l('M137 245L165 270M244 246L216 270');for(let n=0;n<(f==='bob'?2:f==='kevin'?5:3);n++)b.l(`M${180+n*6} 113q-7 -22 3 -31`)}
  else if(t==='owl'){b.e(190,181,80,91).e(190,214,55,46).e(162,141,16,22).e(218,141,16,22);dark(b,164,143,5,9);dark(b,216,143,5,9);b.poly('185,160 197,160 190,168');for(let row=0;row<2;row++)for(let n=0;n<3;n++)b.p(`M${161+n*28} ${196+row*20}l9 -9l9 9Z`);b.l('M134 170L155 175M128 187L153 184M226 176L247 170M228 185L254 188')}
  else {
   let rx=t==='human'||t==='hero'?53:t==='round'?76:t==='potato'?60:69,ry=t==='duck'?72:57;if(t==='hedgehog')b.poly('132,127 100,91 145,95 162,67 172,95 210,66 222,97 267,90 251,123');if(t==='dinosaur')b.p('M119 164Q114 107 173 104L204 127Q272 120 269 165Q259 205 208 205L173 188Z');else b.e(190,160,rx,ry);
   if(t==='electric'){b.poly('128,48 137,28 146,63 135,73').poly('222,64 237,32 246,48 234,75');b.poly('247,268 281,237 272,213 308,197 309,226 296,243 308,259 277,289');b.c(145,184,13).c(232,184,13)}
   if(t==='cat'){b.l('M125 168L153 174M125 189L153 183M225 174L255 168M227 184L255 190')}
   if(t==='pig'||t==='boar'){b.e(190,183,33,19).c(178,183,5).c(202,183,5);if(t==='boar')b.poly('141,188 155,215 167,186').poly('213,188 224,215 237,188')}
   if(t==='elephant')b.p('M177 175L178 230Q181 251 160 248L148 238L149 258Q204 290 205 231L202 175Z');
   if(t==='duck'){b.p('M143 177Q190 157 242 174Q278 185 240 201Q190 220 142 199Z')}
   if(t==='turtle')b.e(190,272,40,43).l('M160 246L220 246M151 274L230 274M163 302L217 302M190 230L190 315');
   if(t==='three-eye'||f==='three-eye'){[160,190,220].forEach(x=>{b.e(x,151,11,16);dark(b,x,154,4,7)});}else if(t==='monster'&&f==='mike'){b.c(190,153,38).c(190,153,21);dark(b,190,154,9);b.poly('128,104 136,78 152,113').poly('226,110 245,79 251,109')}else if(t==='frog'){b.c(148,117,24).c(231,117,24);dark(b,148,121,7,11);dark(b,231,121,7,11)}else if(t==='human'||t==='hero'){b.e(169,153,10,17).e(211,153,10,17);dark(b,171,157,3,6);dark(b,209,157,3,6);b.l('M158 130Q168 126 177 131M203 131Q213 126 222 131').p('M191 160L185 177L197 179').l('M172 192Q190 204 210 191')}else if(f!=='kitty'){const wide=['sully','jigglypuff','sonic','tails','gengar'].includes(f);b.e(169,152,wide?16:11,wide?23:17).e(212,152,wide?16:11,wide?23:17);dark(b,172,157,4,7);dark(b,209,157,4,7)}else{dark(b,159,163,5,8);dark(b,220,163,5,8)}
   if(f!=='kitty'&&!['duck','pig','boar','elephant','monster','human','hero'].includes(t)){b.e(190,176,7,5);b.l('M190 181L190 188M190 188Q177 199 166 188M190 188Q203 200 217 189')}
   if(f==='kitty')b.e(190,183,7,5);if(f==='dale')b.e(190,180,13,10).p('M175 101L180 84L192 98L203 82L210 102Z');if(f==='chip')b.poly('181,176 199,176 190,185');if(t==='chipmunk')b.rect(179,191,12,18,2).rect(191,191,12,18,2);if(t==='lion')b.e(174,184,16,10).e(205,184,16,10);if(t==='panda'){b.e(164,153,18,24,-20).e(217,153,18,24,20);b.e(164,153,9,15).e(217,153,9,15)}
  }
  // Distinctive costumes, hair, hats and small features.
  if(['bow','kitty','melody','angel'].includes(f)){bow(b,f==='kitty'?236:191,f==='kitty'?102:85,.9)}
  if(f==='kuromi')b.p('M118 131L118 78L161 99L190 79L219 99L263 76L261 132L245 124Q190 89 132 130Z').c(190,108,9).c(187,106,2).c(193,106,2);
  if(f==='pompom'||f==='goofy'||f==='top-hat'||f==='mario'||f==='luigi'||f==='jessie'||f==='chopper'||f==='luffy'){if(f==='top-hat')b.rect(154,53,75,66,6).e(190,121,65,10);else if(f==='goofy')b.rect(161,69,59,29,11).e(190,102,50,9);else if(f==='luffy')b.p('M143 112Q146 69 190 69Q234 69 237 112Z').rect(145,99,90,13).e(190,112,79,10);else if(f==='chopper')b.rect(133,68,115,58,12).e(190,126,80,12).rect(182,79,16,37,3).rect(172,89,37,16,3);else if(f==='jessie')b.p('M139 109L151 67L225 67L240 108Z').e(190,110,80,13);else{b.p('M132 120Q128 70 190 71Q251 69 246 121Z').e(216,121,57,12);if(f==='mario'||f==='luigi'){b.c(186,100,17);b.t(186,106,18,f==='mario'?'M':'L')}}}
  if(t==='human'||t==='hero'){if(['elsa','rapunzel','snowwhite','belle','anna','jasmine','moana','mulan','bopeep','cinderella'].includes(f)){b.p('M140 144Q123 87 187 92Q244 76 246 143L232 128Q200 130 173 116L146 143Z');if(f==='rapunzel')b.p('M244 122Q269 219 245 328L225 331Q250 216 231 132Z').l('M242 161L248 188M244 213L250 240M241 262L245 286');else if(f==='elsa'||f==='anna')b.p('M240 129Q264 180 236 235L220 226Q246 180 230 140Z');else b.p('M138 140L127 239L148 224L155 177').p('M238 141L253 239L229 224L226 177');b.p('M159 223L217 223L209 247L169 247Z');if(f==='cinderella'||f==='bopeep')bow(b,190,239,.65);if(f==='jasmine')b.rect(150,125,81,11,5).c(190,130,7)}else if(['goku','vegeta','naruto','luffy','conan'].includes(f)){b.poly('134,137 128,111 145,115 135,90 160,98 160,66 180,85 196,57 203,89 230,71 231,104 254,98 244,132 215,121 190,132 164,116');if(f==='naruto'){b.rect(140,126,99,18,4).rect(165,128,49,14,3).l('M175 134q12 -10 18 0q-7 9 -11 0M147 167L161 167M147 175L161 175M218 167L232 167M218 175L232 175')}if(f==='conan'){b.c(165,157,17).c(213,157,17).l('M182 157L196 157');bow(b,190,218,.6)}if(f==='goku'||f==='vegeta')b.p('M151 223L170 251L190 232L212 250L229 223L223 289L159 289Z').rect(154,284,74,13,3);}if(f==='mario'||f==='luigi'){b.p('M170 178Q176 170 188 177Q197 170 206 178L203 190Q190 195 173 190Z');b.rect(160,228,62,92,8).c(170,238,5).c(211,238,5).l('M146 218L165 235M235 218L218 235')}if(t==='hero'){if(f==='batman'){b.poly('145,130 141,80 165,109 218,109 240,79 237,143 228,176 209,175 190,170 166,178 151,164');b.p('M153 240L169 232L178 244L190 234L203 244L212 232L229 241L214 258L165 258Z')}else if(f==='superman')b.poly('158,232 221,232 207,265 178,265').t(190,255,22,'S');else{b.p('M143 125Q190 83 235 125L235 157L209 144L190 158L168 145L144 158Z').t(190,121,21,'A');b.poly(starPts(190,241,22,10))}b.rect(148,288,81,16,4).rect(181,286,23,19,4)}}
  if(f==='pooh')b.p('M134 218L246 218L247 260Q190 282 133 260Z');if(f==='piglet')for(let y=244;y<310;y+=17)b.l(`M146 ${y}L234 ${y}`);if(f==='tigger')for(let y=242;y<314;y+=19)b.poly(`136,${y} 163,${y+9} 136,${y+14}`).poly(`242,${y} 215,${y+9} 242,${y+14}`);if(f==='meowth')b.e(190,113,12,23).l('M190 93L190 131');if(f==='psyduck')b.l('M176 91L174 66M190 89L190 61M205 92L211 67');if(f==='jigglypuff')b.p('M159 113Q156 74 197 85Q226 99 205 119Q186 136 181 113Q180 104 191 105');if(f==='snorlax')b.e(190,277,43,45);if(f==='eevee')b.p('M126 206L146 216L160 201L178 215L193 200L206 217L224 204L249 215L236 240L221 230L207 245L190 233L172 245L159 232L143 241Z');if(f==='anpanman')b.c(159,175,16).c(190,176,17).c(221,175,16).rect(153,271,74,17,4);if(f==='gengar')b.p('M140 189Q190 221 244 186Q218 241 166 214Z').l('M165 201L168 215M186 208L186 224M209 204L207 220M228 197L223 212');if(f==='sully'){[[146,244],[220,252],[174,297],[231,303]].forEach(([x,y])=>b.e(x,y,10,7));}if(f==='kirby'){b.e(141,181,12,5).e(239,181,12,5)}if(f==='bulbasaur')b.p('M160 239Q146 207 163 190Q190 172 215 189Q237 215 220 243L200 218L180 242Z').l('M190 187L190 223');if(f==='yoshi')b.e(190,272,40,44);if(f==='toothless')b.e(163,145,20,17,-12).e(217,145,20,17,12).l('M158 131L163 158M217 130L217 158');if(f==='pluto')b.rect(139,206,99,13,5).c(190,223,12);if(f==='slinky')for(let y=238;y<321;y+=13)b.e(190,y,52,8);if(f==='eeyore')b.l('M190 114L190 193M178 122L164 144M206 122L219 144');
 }

  if(t==='mouse'){b.p('M141 142Q148 105 171 119Q186 98 194 124Q215 101 234 126L239 171Q253 191 227 207Q190 227 154 206Q130 190 144 171Z').e(173,151,10,19).e(209,151,10,19);dark(b,177,157,4,8);dark(b,205,157,4,8);b.e(190,177,15,8).p('M159 191Q190 211 222 191Q207 226 190 219Q172 222 159 191Z').p('M144 246L235 246L248 313L134 313Z');[[156,267],[190,271],[223,267],[150,296],[205,301]].forEach(([x,y])=>b.c(x,y,5));bow(b,223,105,.8)}
  if(f==='stitch'||f==='angel'){b.e(159,157,24,28,-28).e(224,157,24,28,28).e(190,183,20,13).p('M137 187Q190 228 248 185Q240 226 190 228Q146 226 137 187Z');[156,176,206,226].forEach(x=>b.poly(x+',211 '+(x+8)+',214 '+(x+4)+',222'));if(f==='angel')b.l('M171 107Q150 75 155 59M211 109Q234 77 227 56')}
  if(['pooh','lotso','snorlax','tigger','simba','pluto','goofy','bullseye','timon'].includes(f)){b.e(170,180,20,15).e(211,180,20,15).e(190,165,14,9).l('M190 174L190 189M165 187Q178 202 190 189Q202 202 217 187');if(f==='tigger')b.p('M238 309Q307 294 280 219Q271 204 286 197Q320 215 314 256Q311 316 252 332Z').l('M290 219L306 224M296 244L313 247M289 270L306 278');if(f==='goofy')b.e(184,182,33,12).rect(174,192,11,13,2).rect(191,192,11,13,2);if(f==='pluto')b.e(189,184,34,17);}
  if(f==='cinnamoroll'){b.e(155,164,5,10).e(224,164,5,10).l('M175 187Q182 199 190 187Q199 200 207 187').e(148,180,12,6).e(230,180,12,6)}
  if(f==='melody'){b.e(190,164,59,48);dark(b,167,167,4,7);dark(b,211,167,4,7);b.e(190,183,6,4).p('M139 217Q189 240 241 217L234 241L208 232L190 251L171 232L147 240Z')}
  if(f==='eevee'||f==='tails'){b.p('M245 295Q294 239 271 209Q337 204 329 252Q320 303 254 320Z');if(f==='tails')b.p('M249 318Q304 315 317 274Q346 319 304 344L246 335Z');b.p('M289 209Q331 215 328 246L311 239L304 258L297 240L281 247Z')}
  if(f==='totoro'){b.e(190,239,89,112).e(190,266,63,67).e(159,182,16,20).e(220,182,16,20);dark(b,160,183,5,9);dark(b,219,183,5,9);b.poly('182,201 198,201 190,210').l('M110 205L145 217M108 232L144 231M239 218L272 204M239 231L275 232');for(let row=0;row<2;row++)for(let j=0;j<3;j++)b.p('M'+(153+j*30)+' '+(252+row*25)+'l10 -9l10 9Z')}
  if(f==='pikachu'){b.e(164,151,8,15).e(218,151,8,15);dark(b,166,157,4,8);dark(b,216,157,4,8);b.p('M179 197Q190 209 204 197Q201 221 190 220Q181 220 179 197Z')}
  if(f==='sonic'){b.e(192,190,40,21).e(174,147,12,25).e(212,147,12,25);dark(b,178,155,4,10);dark(b,208,155,4,10);b.e(193,175,12,8).l('M201 196Q216 201 227 188').rect(128,334,49,22,8).rect(208,334,49,22,8).l('M132 342L172 342M212 342L252 342')}
  if(f==='chopper'){b.e(167,159,12,22).e(214,159,12,22);dark(b,169,166,4,9);dark(b,212,166,4,9);b.e(190,183,14,9)}
 prop(b,a.prop);return b.out();}
const prepared=data.map(a=>{const svg=make(a);return {...a,svg,score:(svg.match(/class="r"/g)||[]).length*3+(svg.match(/class="ln"/g)||[]).length*2+svg.length/160}}).sort((a,b)=>a.score-b.score||a.id.localeCompare(b.id));for(const [rank,a] of prepared.entries()){const svg=a.svg,lv=rank<34?1:rank<67?2:3;const n=+a.id.split('-')[1],family=n<=51?'Disney 迪士尼':n<=59?'Sanrio 三丽鸥':n<=69?'Pokemon 宝可梦 精灵宝可梦':n<=75?'动漫':n<=79?'吉卜力 Ghibli':n<=86?'游戏 Game':n<=92?'海绵宝宝 SpongeBob':n<=95?'小黄人 Minions':n>=98?'超级英雄 Superhero':'梦工厂 DreamWorks';LIST['characters'+lv].push({searchTerms:a.name+' '+family+' '+a.feature+(n>=41&&n<=51?' Toy Story 玩具总动员':''),id:a.id,name:a.name+' · '+({1:'开心涂色',2:'创作故事',3:'细节挑战'})[lv],cat:'characters',lv,svg});}
window.KIDPAINT_ADDED_CHARACTERS=data.length;renderLevels();
})();
