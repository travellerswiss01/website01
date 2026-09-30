(function(){
var NR="41762552256",$=function(x){return document.querySelector(x)};
var K=[].map.call(document.querySelectorAll(".korb .preis"),function(el){return{id:el.dataset.korb,n:el.dataset.name,p:parseFloat(el.dataset.price)}});
var ZEITEN=[];(function(){for(var m=8*60;m<=18*60;m+=30){ZEITEN.push(("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2))}})();
function nextT(){var n=new Date(),m=Math.ceil((n.getHours()*60+n.getMinutes()+1)/30)*30;if(m<8*60||m>18*60)m=8*60;return ("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2)}
var st={k:K[0].id,n:1,d:"",t:nextT()};
var views=["start","koerbe","ueber-uns","abholung","kontakt"];
function show(){var h=(location.hash||"#start").slice(1);if(views.indexOf(h)<0)h="start";
views.forEach(function(v){$("#"+v).classList.toggle("on",v===h)});
document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});window.scrollTo(0,0)}
window.addEventListener("hashchange",show);show();
function fmt(x){return "CHF "+x.toFixed(2)}
function chips(el,name,items,cur){el.innerHTML=items.map(function(i){return '<label><input type="radio" name="'+name+'" value="'+i.v+'"'+(String(i.v)===String(cur)?" checked":"")+'><span>'+i.l+'</span></label>'}).join("")}
var days=[];
(function(){var w=["So","Mo","Di","Mi","Do","Fr","Sa"],b=new Date();
for(var i=1;i<=7;i++){var x=new Date(b.getFullYear(),b.getMonth(),b.getDate()+i),dd=("0"+x.getDate()).slice(-2)+"."+("0"+(x.getMonth()+1)).slice(-2)+".";
days.push({v:w[x.getDay()]+", "+dd+x.getFullYear(),l:(i===1?"Morgen<br>":w[x.getDay()]+"<br>")+dd})}})();
function render(){
chips($("#cK"),"k",K.map(function(o){return{v:o.id,l:'<b style="font-weight:600">'+o.n.replace("&","&amp;")+'</b><b style="font-weight:600;color:inherit">'+fmt(o.p)+'</b>'}}),st.k);
chips($("#cN"),"n",[1,2,3,4,5].map(function(i){return{v:i,l:i}}),st.n);
chips($("#cD"),"d",days,st.d);
$("#cT").innerHTML=ZEITEN.map(function(z){return "<option"+(z===st.t?" selected":"")+">"+z+"</option>"}).join("");
upd()}
function upd(){var o=K.filter(function(x){return x.id===st.k})[0],tot=o.p*st.n;$("#tot").textContent=fmt(tot);var im=document.querySelector(".k"+(K.indexOf(o)+1)+" .foto img");if(im){$("#sp").src=im.src;$("#sp").alt=im.alt}$("#sn").textContent=o.n;
var ok=st.d&&st.t,go=$("#go");
var text="Hallo Biottos Lädeli, ich möchte gerne bestellen:\n\n"+st.n+" x Geschenkskorb "+o.n+" ("+fmt(tot)+")\nAbholung: "+st.d+", "+st.t+" Uhr\n\nBesten Dank!";
go.href=ok?"https://wa.me/"+NR+"?text="+encodeURIComponent(text):"#";go.style.opacity=ok?1:.55;
$("#msg").textContent=ok?"Die Nachricht ist fertig geschrieben, Sie schicken sie nur noch ab.":"Bitte noch den Tag wählen."}
$("#ov").addEventListener("change",function(e){var n=e.target.name;if(!n)return;st[n]=e.target.value;upd()});
$("#go").addEventListener("click",function(e){if(!(st.d&&st.t))e.preventDefault()});
function open(k){st.k=k||st.k;render();$("#ov").classList.add("on");$("#ov").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function close(){$("#ov").classList.remove("on");$("#ov").setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.addEventListener("click",function(e){var a=e.target.closest("[data-open]");if(a){e.preventDefault();open(a.dataset.open)}});
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
