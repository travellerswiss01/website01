(function(){
var heroStoryData=[
{img:"img/Zuhause.jpeg",alt:"Zuhause bei Biottos",kicker:"Wo fängt das alles an?",title:"Bei uns daheim.",text:"Biottos Lädeli beginnt nicht irgendwo – sondern zuhause, in Maischhausen und im Garten.",note:"Ein kleines Stück Zuhause."},
{img:"img/obstbäume.jpeg",alt:"Obstbäume bei Biottos",kicker:"Dann geht es nach draussen.",title:"Was bei uns wächst, gehört zur Geschichte.",text:"Obst, Früchte und Gemüse aus unserer Umgebung sind der Anfang vieler Sachen, die später im Lädeli landen.",note:"Vom Baum. Aus dem Garten. Von hier."},
{img:"img/Tomaten.jpeg",alt:"Tomaten bei Biottos",kicker:"In der Küche wird daraus etwas.",title:"Aus Tomaten wird unsere Tomatensauce.",text:"Wir verarbeiten unsere Zutaten zu Sirup, Saucen, Essig und Dörrfrüchten – sorgfältig und in kleinen Mengen.",note:"Aus guten Zutaten wird etwas Eigenes."},
{img:"img/laedeli-angebot.jpg",alt:"Angebot im Biottos Lädeli",kicker:"Dann kommt alles ins Lädeli.",title:"Hier wird ausgesucht und zusammengestellt.",text:"Zwischen all den feinen Sachen entstehen unsere drei Geschenkskörbe – nicht einfach zusammengestellt, sondern mit Gefühl für das Ganze.",note:"Nicht einfach hineingelegt. Schön gemacht."},
{img:"img/laden-fruechte.jpg",alt:"Früchte im Biottos Lädeli",kicker:"Und am Ende wird daraus ein Geschenk.",title:"Ein kleines Stück Thurgau zum Mitnehmen.",text:"Korb auswählen, online bestellen und bei uns in Maischhausen abholen.",note:"Bis bald bei uns im Lädeli."}
];
var heroStoryIndex=0;
function renderHeroStory(i){
var root=document.getElementById("heroStory");if(!root)return;
heroStoryIndex=Math.max(0,Math.min(heroStoryData.length-1,i));
var d=heroStoryData[heroStoryIndex],img=document.querySelector(".hero-grid .hero-photo-target");
if(img){img.src=d.img;img.alt=d.alt}
document.getElementById("heroStoryKicker").textContent=d.kicker;
document.getElementById("heroStoryTitle").textContent=d.title;
document.getElementById("heroStoryText").textContent=d.text;
document.getElementById("heroStoryNote").textContent=d.note;
document.querySelectorAll(".hero-story-step").forEach(function(b,n){b.classList.toggle("active",n===heroStoryIndex);b.setAttribute("aria-current",n===heroStoryIndex?"step":"false")});
var mark=root.querySelector(".hero-story-mark");if(mark)mark.textContent=("0"+(heroStoryIndex+1)).slice(-2)+" / 05";
}
document.querySelectorAll(".hero-story-step").forEach(function(b){b.addEventListener("click",function(){renderHeroStory(Number(b.dataset.heroStory))})});
renderHeroStory(0);
})();
(function(){
var NR="41762552256",$=function(x){return document.querySelector(x)};
var K=[{id:"gross",n:"Gross & Guet",p:49.95},{id:"fein",n:"Fein & Guet",p:29.95},{id:"chili",n:"Chili & Fii",p:19.95}];
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
$("#msg").textContent=ok?"Ihre Auswahl ist bereit.":"Bitte Auswahl abschliessen.";
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
$("#directOrder").addEventListener("click",function(){
  if(!(st.d&&st.t)) return;
  $("#directForm").hidden=false;
  $("#directOrder").hidden=true;
  $("#directConfirm").hidden=true;
  $("#customerName").focus();
});
function syncContactMethod(){
  var method=document.querySelector('input[name="contactMethod"]:checked');
  var email=method&&method.value==="email";
  $("#emailField").hidden=!email;
  $("#phoneField").hidden=email;
  $("#customerEmail").required=email;
  $("#customerPhone").required=!email;
}
document.querySelectorAll('input[name="contactMethod"]').forEach(function(input){
  input.addEventListener("change",syncContactMethod);
});
syncContactMethod();

$("#directForm").addEventListener("submit",function(e){
  e.preventDefault();
  var form=this;
  var method=document.querySelector('input[name="contactMethod"]:checked').value;
  var contact=method==="email"?$("#customerEmail").value.trim():$("#customerPhone").value.trim();
  if(!contact){
    (method==="email"?$("#customerEmail"):$("#customerPhone")).focus();
    return;
  }
  var o=K.filter(function(x){return x.id===st.k})[0],tot=o.p*st.n;
  $("#orderDetails").value=""+
    st.n+" x Geschenkskorb "+o.n+" ("+fmt(tot)+")\n"+
    "Abholung: "+st.d+", "+st.t+" Uhr\n"+
    "Kontaktart: "+(method==="email"?"E-Mail":"Telefon / WhatsApp")+"\n"+
    "Kontakt: "+contact;
  var button=form.querySelector("button[type=submit]");
  button.disabled=true;
  button.textContent="Wird übermittelt …";
  fetch(form.action,{
    method:"POST",
    body:new FormData(form),
    headers:{Accept:"application/json"}
  }).then(function(res){
    if(!res.ok) throw new Error("submit");
    showSuccess(o,contact,method);
    openWhatsAppConfirmation(o,contact,method);
  }).catch(function(){
    button.disabled=false;
    button.textContent="Bestellung verbindlich senden";
    $("#directConfirm").hidden=false;
    $("#directConfirm").innerHTML="<strong>Die Bestellung konnte gerade nicht übermittelt werden.</strong><p>Bitte versuchen Sie es nochmals. Ihre Angaben bleiben hier erhalten.</p>";
  });
});
function openWhatsAppConfirmation(o,contact,method){
  var total=fmt(o.p*st.n);
  var msg="Hallo Biottos Lädeli,\n\nmeine Bestellung wurde soeben online aufgegeben:\n\n"+
    "🧺 "+st.n+" x Geschenkskorb "+o.n+" ("+total+")\n"+
    "📅 Abholung: "+st.d+", "+st.t+" Uhr\n"+
    "👤 Name: "+$("#customerName").value.trim()+"\n"+
    "📞 Kontakt: "+contact+"\n\n"+
    "Danke!";
  var url="https://wa.me/"+NR+"?text="+encodeURIComponent(msg);
  window.open(url,"_blank","noopener");
}
function showSuccess(o,contact,method){
  $("#directForm").hidden=true;
  $("#directConfirm").hidden=true;
  $("#directOrder").hidden=true;
  document.querySelector("[data-step-back='n']").hidden=true;
  $("#tot").parentElement.hidden=true;
  $("#msg").hidden=true;
  $("#successBasket").textContent=o.n+" · "+fmt(o.p*st.n);
  $("#successPickup").textContent=st.d+", "+st.t+" Uhr";
  $("#successQty").textContent=st.n+" ×";
  $("#successContact").textContent=contact;
  var scene=$("#successScene");
  scene.hidden=false;
  scene.classList.remove("play");
  void scene.offsetWidth;
  scene.classList.add("play");
  var conf=$("#successConfetti");
  conf.innerHTML="";
  for(var i=0;i<22;i++){
    var piece=document.createElement("i");
    piece.style.setProperty("--x",((i%11)*10-50)+"px");
    piece.style.setProperty("--r",(i*37)+"deg");
    piece.style.setProperty("--d",(i%5)*.06+"s");
    piece.textContent=i%3===0?"✦":"";
    conf.appendChild(piece);
  }
}
$("#successClose").addEventListener("click",function(){
  location.hash="#start";
  close();
  document.querySelector("[data-step-back='n']").hidden=false;
  $("#tot").parentElement.hidden=false;
  $("#msg").hidden=false;
  $("#successScene").hidden=true;
  var form=$("#directForm");
  form.reset();
  form.hidden=true;
  $("#directOrder").hidden=false;
  var button=form.querySelector("button[type=submit]");
  button.disabled=false;
  button.textContent="Bestellung verbindlich senden";
});
document.addEventListener("keydown",function(e){var card=e.target.closest(".korb-card");if(card&&(e.key==="Enter"||e.key===" ")){e.preventDefault();open(card.dataset.open)}});
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
(function(){
var storyData=[
 {img:"img/gross-oben.jpg",alt:"Ausgewählte Produkte aus dem Gross & Guet Geschenkskorb",title:"Aus unserem Garten",text:"Goldmelisse, Früchte und weitere Zutaten aus der Region bilden den Anfang.",note:"Was bei uns wächst, kommt bei uns in die Küche."},
 {img:"img/fein-oben.jpg",alt:"Hausgemachte Produkte im Fein & Guet Geschenkskorb",title:"Mit Liebe gemacht",text:"Aus den Zutaten entstehen Sirup, Saucen, Essig und Dörrfrüchte – sorgfältig und in kleinen Mengen.",note:"Aus vielen guten Zutaten wird etwas Eigenes."},
 {img:"img/gross-vorne.jpg",alt:"Fertig zusammengestellter Geschenkskorb Gross & Guet",title:"Schön zusammengestellt",text:"Wir wählen die Sachen aus und packen sie so zusammen, dass daraus ein stimmiger Geschenkskorb wird.",note:"Nicht einfach hineingelegt. Schön gemacht."},
 {img:"img/chili-vorne.jpg",alt:"Fertiger Geschenkskorb Chili & Fii",title:"Fertig zum Verschenken",text:"Am Ende ist der Korb bereit – zum Verschenken, Danke sagen oder einfach selber Geniessen.",note:"Ein kleines Stück Thurgau zum Mitnehmen."},
 {img:"img/familie.jpg",alt:"Familie von Biottos Lädeli",title:"Bei uns im Lädeli",text:"Bestellt wird online und abgeholt wird bei uns an der Hauptstrasse 90 in Maischhausen.",note:"Bis bald bei uns im Lädeli."}
];
var storyIndex=0,storyTouchX=null;
function renderStory(i){
 storyIndex=Math.max(0,Math.min(storyData.length-1,i));
 var d=storyData[storyIndex],img=document.getElementById("storyPhoto");
 if(!img)return;
 img.src=d.img;img.alt=d.alt;
 document.getElementById("storyNumber").textContent=("0"+(storyIndex+1)).slice(-2);
 document.getElementById("storyTitle").textContent=d.title;
 document.getElementById("storyText").textContent=d.text;
 document.getElementById("storyNote").textContent=d.note;
 document.querySelectorAll(".story-dot").forEach(function(b,n){b.classList.toggle("active",n===storyIndex);b.setAttribute("aria-current",n===storyIndex?"step":"false")});
 document.getElementById("storyProgress").style.width=((storyIndex+1)/storyData.length*100)+"%";
}
document.querySelectorAll(".story-dot").forEach(function(b){b.addEventListener("click",function(){renderStory(Number(b.dataset.story))})});
var stage=document.querySelector(".story-stage");
if(stage){
 stage.addEventListener("touchstart",function(e){storyTouchX=e.changedTouches[0].clientX},{passive:true});
 stage.addEventListener("touchend",function(e){
  if(storyTouchX===null)return;
  var dx=e.changedTouches[0].clientX-storyTouchX;
  if(Math.abs(dx)>45)renderStory(storyIndex+(dx<0?1:-1));
  storyTouchX=null;
 },{passive:true});
}
renderStory(0);
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
