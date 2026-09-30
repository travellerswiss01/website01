(function(){
var NR="41762552256",$=function(x){return document.querySelector(x)};
var K=[].map.call(document.querySelectorAll(".korb .preis"),function(el){return{id:el.dataset.korb,n:el.dataset.name,p:parseFloat(el.dataset.price)}});
var ZEITEN=[];(function(){for(var m=8*60;m<=18*60;m+=30){ZEITEN.push(("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2))}})();
function nextT(){var n=new Date(),m=Math.ceil((n.getHours()*60+n.getMinutes()+1)/30)*30;if(m<8*60||m>18*60)m=8*60;return ("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2)}
var st={k:K[0].id,n:1,d:"",t:nextT(),step:"k",week:0};
var views=["start","koerbe","traubensaft","suessmost","ueber-uns","abholung","kontakt"];
function show(){var h=(location.hash||"#start").slice(1);if(views.indexOf(h)<0)h="start";views.forEach(function(v){$("#"+v).classList.toggle("on",v===h)});document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});window.scrollTo(0,0)}
window.addEventListener("hashchange",show);show();
function fmt(x){return "CHF "+x.toFixed(2)}
function chips(el,name,items,cur){el.innerHTML=items.map(function(i){return '<label><input type="radio" name="'+name+'" value="'+i.v+'"'+(String(i.v)===String(cur)?" checked":"")+'><span>'+i.l+"</span></label>"}).join("")}
var days=[];
(function(){var b=new Date(),end=new Date(b.getFullYear(),b.getMonth()+3,b.getDate());for(var i=1;;i++){var x=new Date(b.getFullYear(),b.getMonth(),b.getDate()+i);if(x>end)break;if(x.getDay()!==0){var dd=("0"+x.getDate()).slice(-2)+"."+("0"+(x.getMonth()+1)).slice(-2)+".";days.push({date:x,v:["So","Mo","Di","Mi","Do","Fr","Sa"][x.getDay()]+", "+dd+x.getFullYear(),l:(i===1?"Morgen<br>":["So","Mo","Di","Mi","Do","Fr","Sa"][x.getDay()]+"<br>")+dd})}}})();
var dWeek=0,weekBuckets=[];
(function(){var map={};days.forEach(function(x){var dt=x.date,mon=new Date(dt.getFullYear(),dt.getMonth(),dt.getDate()-(dt.getDay()||7)+1),key=mon.getFullYear()+"-"+mon.getMonth()+"-"+mon.getDate();if(!map[key]){map[key]=[];weekBuckets.push(map[key])}map[key].push(x)})})();
function weekItems(){return weekBuckets[dWeek]||[]}
function setStep(s){st.step=s;render()}
function render(){
chips($("#cK"),"k",K.map(function(o){return{v:o.id,l:"<b style='font-weight:600'>"+o.n.replace("&","&amp;")+"</b><b style='font-weight:600;color:inherit'>"+fmt(o.p)+"</b>"}}),st.k);
chips($("#cN"),"n",[1,2,3,4,5].map(function(i){return{v:i,l:i}}),st.n);
var wi=weekItems();
chips($("#cD"),"d",wi,st.d);
$("#cT").innerHTML=ZEITEN.map(function(z){return "<option"+(z===st.t?" selected":"")+">"+z+"</option>"}).join("");
document.querySelectorAll(".order-step").forEach(function(el){el.classList.toggle("active",el.dataset.step===st.step)});
var title=$("#orderTitle"),sub=$("#orderSub");
var titles={k:"Welchen Korb möchten Sie?",d:"Wann möchten Sie ihn abholen?",t:"Um welche Uhrzeit?",n:"Wie viele möchten Sie?"};
if(title)title.textContent=titles[st.step]||"Ihre Bestellung";
if(sub)sub.textContent=st.step==="d"?"Nur die nächsten Tage werden angezeigt. Sie können zur nächsten Woche blättern.":"";
var prev=$("#weekPrev"),next=$("#weekNext"),weekLabel=$("#weekLabel");
if(prev)prev.hidden=dWeek===0;
if(next)next.hidden=dWeek>=weekBuckets.length-1;
if(weekLabel){var first=wi[0],last=wi[wi.length-1];weekLabel.textContent=first&&last?first.l.split("<br>")[0]+" – "+last.l.replace("<br>"," "):""}
upd()
}
function upd(){
var o=K.filter(function(x){return x.id===st.k})[0],tot=o.p*st.n;
$("#tot").textContent=fmt(tot);
var im=document.querySelector(".k"+(K.indexOf(o)+1)+" .foto img");if(im){$("#sp").src=im.src;$("#sp").alt=im.alt}
$("#sn").textContent=st.n+" × "+o.n;
var ok=st.d&&st.t;
var text="Hallo Biottos Lädeli, ich möchte gerne bestellen:\n\n"+st.n+" x Geschenkskorb "+o.n+" ("+fmt(tot)+")\nAbholung: "+st.d+", "+st.t+" Uhr\n\nBesten Dank!";
$("#go").href=ok?"https://wa.me/"+NR+"?text="+encodeURIComponent(text):"#";
$("#go").style.opacity=ok?1:.55;
$("#msg").textContent=ok?"Bestellung bereit – per WhatsApp senden.":"Bitte Auswahl abschliessen.";
}
$("#ov").addEventListener("change",function(e){
var n=e.target.name;if(!n)return;
st[n]=e.target.value;
if(n==="k"){st.step="d";dWeek=0}
else if(n==="d"){st.step="t"}
else if(n==="t"){st.step="n"}
else if(n==="n"){st.step="done"}
render();
});
$("#go").addEventListener("click",function(e){if(!(st.d&&st.t))e.preventDefault()});
document.addEventListener("click",function(e){
var a=e.target.closest("[data-open]");if(a){e.preventDefault();open(a.dataset.open);return}
var b=e.target.closest("[data-step-back]");if(b){e.preventDefault();st.step=b.dataset.stepBack;render();return}
if(e.target.id==="weekNext"){dWeek++;render()}
if(e.target.id==="weekPrev"){dWeek--;render()}
});
function open(k){st.k=k||st.k;st.step="d";dWeek=0;render();$("#ov").classList.add("on");$("#ov").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function close(){$("#ov").classList.remove("on");$("#ov").setAttribute("aria-hidden","true");document.body.style.overflow=""}
$("#x").addEventListener("click",close);
$("#ov").addEventListener("click",function(e){if(e.target.id==="ov")close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
})();
(function(){var lb=document.getElementById("lb"),li=document.getElementById("li");
function close(){lb.classList.remove("on","z");lb.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.addEventListener("click",function(e){var i=e.target.closest(".foto img");if(i){li.src=i.src;li.alt=i.alt;lb.scrollTop=0;lb.scrollLeft=0;lb.classList.add("on");lb.classList.remove("z");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}});
li.addEventListener("click",function(e){e.stopPropagation();var z=lb.classList.toggle("z");if(z){var r=li.getBoundingClientRect();lb.scrollLeft=(lb.scrollWidth-lb.clientWidth)/2;lb.scrollTop=Math.max(0,(e.clientY-r.top)/Math.max(r.height,1)*lb.scrollHeight-lb.clientHeight/2)}else{lb.scrollTop=0;lb.scrollLeft=0}});
lb.addEventListener("click",function(e){if(e.target===lb)close()});
document.getElementById("lx").addEventListener("click",close);
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
})();
(function(){var lg=document.getElementById("lg");
function close(){lg.classList.remove("on");lg.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.addEventListener("click",function(e){var a=e.target.closest("[data-legal]");if(a){e.preventDefault();["impressum","datenschutz"].forEach(function(k){document.getElementById("l-"+k).hidden=(k!==a.dataset.legal)});lg.classList.add("on");lg.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}});
document.getElementById("lgx").addEventListener("click",close);
lg.addEventListener("click",function(e){if(e.target===lg)close()});
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
})();
