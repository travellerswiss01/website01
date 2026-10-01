
(function(){
var LANG_KEY="biottos-lang";
var lang="de";
var dict={
"Geschenkskörbe":"Gschänksharass","Sprache":"Sproch","Zuhause":"Dehai","wo alles beginnt":"wo alles afangt","Garten":"Garte","was bei uns wächst":"wo bi üs wachst","Küche":"Chuchi","was daraus entsteht":"was drus entstoht","Geschenk":"Gschänk","fertig zum Abholen":"fertig zum Abhole",
"Traubensaft":"Truubesaft","Süssmost":"Süessmost","Über uns":"Über üs","Abholung":"Abholig","Kontakt":"Kontakt",
"Geschenke aus Maischhausen.":"Maischhuser Gschänk",
"BIOTTOS LÄDELI · MAISCHHAUSEN":"BIOTTOS LÄDELI · MAISCHHUSE","MAISCHHAUSEN · THURGAU":"MAISCHHUSE · THURGAU","MIT SORGFALT ZUSAMMENGESTELLT":"MIT SORGFALT ZÄMEGSTELLT",

"Wo fängt ein Geschenkskorb an?":"Wo fangt es Gschänksharass aa?",
"Bei uns daheim.":"Bi üs dehai.",
"Wo fängt das alles an?":"Wo fangt das alles ah?",
"Biottos Lädeli beginnt nicht irgendwo – sondern zuhause, in Maischhuuse und im Garten.":"Biottos Lädeli fangt nöd irgenwo - sondern bi üs dehai im Garte ah.",
"Bei uns ziemlich oft im Garten.":"Bi üs ziemlich oft im Garte.",
"Etwas Feines aus unserem Garten – zum Verschenken oder selber Geniessen.":"Öppis Feins us üsere Garte – zum Verschenke oder sälber Gnüsse.",
"Was bei uns wächst, kommt bei uns in die Küche.":"Was bi üs wachst, chunnt bi üs i d Chuchi.",
"Mit Hausgemachtem aus unserer Küche und Feinem aus der Region – in drei Grössen.":"Drü Gschänksharass mit Huusgmachtem und Feinem vo do – i drü Grössene.",
"Maischhauserkorb":"Maischhuserharass","Welcher darf's sein?":"Wele darfs sii?","Unsere Geschenkskörbe entdecken":"Üsi Gschenkschörb entdecke",
"ausgewählt & hausgemacht":"uusglese & hausgmacht",
"der grosse":"de grosse","der mittlere":"de mittlere","der kleine":"de chliine",
"Wenn's etwas Besonderes sein darf.":"Wenn's öppis Bsunders derf sii.",
"Für ein kleines Dankeschön.":"Für es chliises Dankeschön.",
"Für Menschen mit Geschmack.":"Für Lüüt mit Gschmack.",
"Korb anschauen":"Gschänksharass aluege","Was ist drin?":"Was isch dinne?",
"Tippen":"Antippe","Sie auf einen Korb – dann geht's direkt zum Bestellzettel.":"en Gschänksharass – denn gaht's grad zum Bestellzettel.",
"aus unserem Garten in Maischhuuse":"us üsere Garte i Maischhuuse",
"Die blauen Trauben wachsen bei uns im Garten in Maischhuuse, wo wir wohnen. Wir haben sie selber gepflückt, als sie schön reif waren.":"Diä blaue Truube wachsed bi üs im Garte z Maischhuse, wo mir wohned. Mir hend sie selber gärntet, wo sie schön rief gsi sind.",
"Otto, der Familienvater, hat daraus zusammen mit Bernadette mit einer Handpresse einen köstlichen Traubensaft gemacht.":"De Otto, üse Familievater, het zäme mit de Bernadette mit de Handpress en feine Truubesaft gmacht.",
"Fein zum Zmorge, zum Znüni oder als alkoholfreie Alternative am Tisch.":"Fein zum Zmorge, zum Znüni oder als alkoholfreii Alternative am Tisch.",
"Fragen Sie uns einfach per WhatsApp, ob gerade Traubensaft im Lädeli bereitsteht.":"Fröged üs eifach per WhatsApp, öb grad Trubesaft im Lädeli parat isch.",
"Nach Traubensaft fragen":"Noch Truubesaft fröge",
"von Hand aufgelesen":"vo Hand ufglese","Apfelernte bei Biottos – Anhänger voller reifer Äpfel, von Hand aufgelesen":"Öpfelernte bi Biottos – Anhänger voll riife Öpfel, vo Hand ufglese",
"Die Äpfel haben wir von Hand aufgelesen – ganze 33 verschiedene Sorten aus unserem Obstgarten.":"D Öpfel hend mir vo Hand ufglese – grad 33 verschideni Sorte us üsere Obschtgarte.",
"Jede Sorte hat ihren eigenen Charakter: die einen süss und mild, die anderen etwas säuerlich und würzig. Zusammen ergeben sie diesen besonderen Süssmost mit seiner warmen, tiefen Note.":"Jedi Sorte het ihre eigete Charakter: die eine süess und mild, die andere chli säuerlich und würzig. Zäme ergäbed sie dä bsunderi Süessmost mit sinere warme, tüüfe Note.",
"Wir pressen ihn naturtrüb und ohne Zusätze – einfach so, wie er vom Baum kommt. Fein zum Zmorge, zum Znüni oder als kleines Stück Herbst im Glas.":"Mir presse en naturtrüeb und ohni Zuesätz – eifach so, wie er vom Baum chunnt. Fein zum Zmorge, zum Znüni oder als chliises Stück Herbscht im Glas.",
"Schreiben Sie uns einfach per WhatsApp, ob gerade Süssmost im Lädeli bereitsteht.":"Schriebed üs eifach per WhatsApp, öb grad Süessmost im Lädeli parat isch.",
"Nach Süssmost fragen":"Nach Süessmost fröge",
"Über uns":"Über üs",
"Was bei uns im Garten wächst, kommt bei uns in die Küche. Daraus machen wir Goldmelissensirup, Tomatensauce, feine Essige und Balsamicos sowie verschiedene Dörrfrüchte.":"Was bi üs im Garte wachst, chunnt bi üs i d Chuchi. Usdem mached mir Goldmelissensirup, Tomatesauce, feini Essig und Balsamicos sowie verschideni Dörrfrücht.",
"Daraus entstehen unsere drei Geschenkskörbe – mit hausgemachten Sachen und einem kleinen Stück von unserem Zuhause.":"So entstönd üsi Geschenkskörb – mit huusgmachte Sache und emne chline Stuck vo üsem Dihai.",
"Abholung im Lädeli":"Abholig im Lädeli","Wo?":"Wo?","Was?":"Was?","Wann?":"Wänn?",
"Der Korb, den Sie online bestellt haben.":"De Gschänksharass, wo Sie online bstellt hend.",
"Zu dem Datum und der Uhrzeit, die Sie auf dem Bestellzettel angeben.":"Am Datum und zu de Ziit, wo Sie uf em Bestellzettel ageh.",
"Bezahlt wird bei der Abholung, mit TWINT oder bar. Versand gibt es nicht.":"Bezahlt wird bi de Abholig, mit TWINT oder bar. Versand git's nöd.",
"Route in Google Maps":"Route i Google Maps",
"Fragen zu den Körben? Am einfachsten schreiben Sie uns auf WhatsApp.":"Frage zu de Gschänksharass? Am eifachschte schriibed Sie üs uf WhatsApp.",
"Rechtliches":"Rechtlichs","Impressum":"Impressum","Datenschutz":"Datenschutz",
"Bestellzettel":"Bestellzettel","Welchen Korb möchten Sie?":"Welene Gschänksharass möchted Sie?","Wann möchten Sie ihn abholen?":"Wänn möchted Sie en abhole?","Um welche Uhrzeit?":"Um weli Ziit?","Wie viele?":"Wie vieli?",
"Nächste Woche →":"Nächsti Wuche →","← Korb ändern":"← Gschänksharass ändere","← Tag ändern":"← Tag ändere","← Zeit ändern":"← Ziit ändere","Fast geschafft.":"Fast gschafft.",
"Ihre Auswahl steht. Sagen Sie uns nur noch, wie wir Sie erreichen dürfen.":"D Uuswahl isch parat. Säge Sie üs nur no, wie mir Sie erreiche dörfed.",
"Bestellung abschliessen":"Bestellig abschliesse","Ihr Name":"De Name","Wie können wir dich erreichen?":"Wie chönd mir dich erreiche?",
"Telefon / WhatsApp":"Telefon / WhatsApp","Ihre E-Mail-Adresse":"Eui E-Mail-Adresse","Ihre Nummer":"Eui Nummer",
"Bestellung verbindlich senden":"Bestellig verbindlich absände","Die Bestellung wird direkt an Biottos Lädeli übermittelt.":"D Bestellig wird direkt a s Biottos Lädeli übermittelt.",
"ist angekommen!":"isch acho!","Bestellung angekommen.":"Bestellig acho.","Danke – wir bereiten Ihren Korb mit Sorgfalt für Sie vor.":"Danke – mir bereited de Gschänksharass sorgfältig für Sie vor.",
"Korb":"Gschänksharass","Abholung":"Abholig","Anzahl":"Aazahl","Danke für Ihre Bestellung.":"Danke für eui Bestellig.",
"Wir legen Ihren Korb für Sie bereit – bis bald im Lädeli.":"Mir leged de Gschänksharass für Sie parat – bis bald im Lädeli.",
"Bestellung in WhatsApp öffnen":"Bestellig i WhatsApp öffne","Zurück zum Lädeli":"Zrugg zum Lädeli",
"Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre Daten vertraulich und geben sie nicht an Dritte weiter, soweit dies nicht für die Abwicklung Ihrer Bestellung notwendig ist.":"De Schutz vo eune persönliche Date isch üs wichtig. Mir behandled eui Date vertraulich und gebed sie nöd a Dritti wiiter, usser wenn das für d Abwicklig vo eune Bestellig nötig isch.",
"Bestellungen per WhatsApp":"Bestellig per WhatsApp","Website":"Website",
"Beim Besuch unserer Website können technische Daten wie IP-Adresse, Browsertyp oder Zugriffszeit automatisch erfasst werden. Diese Daten dienen der sicheren und störungsfreien Bereitstellung der Website.":"Bi em Bsuech vo üsere Website chönd technischi Date wie IP-Adresse, Browsertyp oder Zuegriffsziit automatisch erfasst werde. Die Date diened de sichere und störigsfreie Bereitstellig vo de Website.",
"Wir speichern persönliche Daten nur so lange, wie dies für die Bearbeitung der Bestellung oder aufgrund gesetzlicher Pflichten erforderlich ist.":"Mir speichered persönligi Date nur so lang, wie das für d Bearbeitig vo de Bestellig oder us gesetzliche Pflicht nötig isch.",
"Bei Fragen zum Datenschutz können Sie uns über die angegebene Telefonnummer kontaktieren.":"Bi Frage zum Datenschutz chönd Sie üs über d agäh Telefonnummer kontaktiere.",
"Biottos Lädeli":"Biottos Lädeli","Hauptstrasse 90, 8357 Maischhuuse TG":"Hauptstrasse 90, 8357 Maischhuuse TG"
};
var reverse={};Object.keys(dict).forEach(function(k){reverse[dict[k]]=k});
function translateTextNode(n,on){var v=n.nodeValue;if(!v||!v.trim())return;var map=on?dict:reverse;if(map[v.trim()])n.nodeValue=v.replace(v.trim(),map[v.trim()])}
function applyLang(){var on=lang==="ch";document.documentElement.lang=on?"gsw-CH":"de";document.querySelectorAll("*").forEach(function(el){if(el.id==="langSwitch")return;el.childNodes.forEach(function(n){if(n.nodeType===3)translateTextNode(n,on)});["aria-label","placeholder","alt","title"].forEach(function(a){if(el.hasAttribute(a)){var v=el.getAttribute(a);var map=on?dict:reverse;if(map[v])el.setAttribute(a,map[v])}})});var b=document.getElementById("langSwitch");if(b){b.classList.toggle("is-ch",on);b.setAttribute("aria-pressed",String(on));b.setAttribute("aria-label",on?"Sproch wechsle – aktuell Schwiizerdütsch, Deutsch aazeige":"Sprache wechseln – aktuell Deutsch, Schwiizerdütsch anzeigen")}}
try{lang=localStorage.getItem(LANG_KEY)||"de"}catch(e){}
document.addEventListener("click",function(e){var b=e.target.closest("#langSwitch");if(!b)return;lang=lang==="de"?"ch":"de";try{localStorage.setItem(LANG_KEY,lang)}catch(e){}applyLang()});
window.applyBiottosLanguage=applyLang;
setTimeout(applyLang,0);
})();
(function(){
var heroStoryData=[
{img:"img/Zuhause.jpeg",alt:"Zuhause bei Biottos",kicker:"Wo fängt das alles an?",title:"Bei uns daheim.",text:"Biottos Lädeli beginnt nicht irgendwo – sondern zuhause, in Maischhuuse und im Garten.",note:""},
{img:"img/obstbäume.jpeg",alt:"Obstbäume bei Biottos",kicker:"Dann geht es nach draussen.",title:"Was bei uns wächst, gehört zur Geschichte.",text:"Obst, Früchte und Gemüse aus unserer Umgebung sind der Anfang vieler Sachen, die später im Lädeli landen.",note:""},
{img:"img/Tomaten.jpeg",alt:"Tomaten bei Biottos",kicker:"In der Küche wird daraus etwas.",title:"Aus Tomaten wird unsere Tomatensauce.",text:"Wir verarbeiten unsere Zutaten zu Sirup, Saucen, Essig und Dörrfrüchten – sorgfältig und in kleinen Mengen.",note:""},
{img:"img/laedeli-angebot.jpg",alt:"Angebot im Biottos Lädeli",kicker:"Dann kommt alles ins Lädeli.",title:"Hier wird ausgesucht und zusammengestellt.",text:"Zwischen all den feinen Sachen entstehen unsere drei Geschenkskörbe – nicht einfach zusammengestellt, sondern mit Gefühl für das Ganze.",note:""},
{img:"img/laden-fruechte.jpg",alt:"Früchte im Biottos Lädeli",kicker:"Und am Ende wird daraus ein Geschenk.",title:"Ein kleines Stück Thurgau zum Mitnehmen.",text:"Korb auswählen, online bestellen und bei uns in Maischhuuse abholen.",note:""}
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
var note=document.getElementById("heroStoryNote");note.textContent=d.note||"";note.hidden=!d.note;
document.querySelectorAll(".hero-story-step").forEach(function(b,n){b.classList.toggle("active",n===heroStoryIndex);b.setAttribute("aria-current",n===heroStoryIndex?"step":"false")});
var mark=root.querySelector(".hero-story-mark");if(mark)mark.textContent=("0"+(heroStoryIndex+1)).slice(-2)+" / 05";
if(window.applyBiottosLanguage)window.applyBiottosLanguage();
}
document.querySelectorAll(".hero-story-step").forEach(function(b){b.addEventListener("click",function(){renderHeroStory(Number(b.dataset.heroStory))})});
renderHeroStory(0);
})();
(function(){
var NR="41762552256",$=function(x){return document.querySelector(x)};
var K=[{id:"gross",n:"Gross & Guet",p:49.95},{id:"fein",n:"Fein & Guet",p:29.95},{id:"chili",n:"Chli & Fii",p:19.95}];
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
$("#cT").innerHTML=ZEITEN.map(function(z){return "<button type=\"button\" class=\"time-chip"+(z===st.t?" selected":"")+"\" data-time=\""+z+"\">"+z+"</button>"}).join("");
document.querySelectorAll(".order-step").forEach(function(el){el.classList.toggle("active",el.dataset.step===st.step)});
var title=$("#orderTitle"),sub=$("#orderSub");
var titles={k:"Welchen Korb möchten Sie?",d:"Wann möchten Sie ihn abholen?",t:"Um welche Uhrzeit?",n:"Wie viele möchten Sie?"};
if(title)title.textContent=titles[st.step]||"Ihre Bestellung";
if(sub)sub.textContent=st.step==="d"?"Nur die nächsten Tage werden angezeigt. Sie können zur nächsten Woche blättern.":"";
var prev=$("#weekPrev"),next=$("#weekNext"),weekLabel=$("#weekLabel");
if(prev)prev.hidden=dWeek===0;
if(next)next.hidden=dWeek>=weekBuckets.length-1;
if(weekLabel){var first=wi[0],last=wi[wi.length-1];weekLabel.textContent=first&&last?first.l.split("<br>")[0]+" – "+last.l.replace("<br>"," "):""}
upd();if(window.applyBiottosLanguage)window.applyBiottosLanguage()
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
function showPickConfirmation(label){
  var toast=document.createElement("div");
  toast.className="pick-confirm";
  toast.innerHTML="<span>✓</span> "+label+" ausgewählt";
  document.body.appendChild(toast);
  requestAnimationFrame(function(){toast.classList.add("show")});
  setTimeout(function(){toast.classList.remove("show");setTimeout(function(){toast.remove()},220)},850);
}
$("#cT").addEventListener("click",function(e){var b=e.target.closest(".time-chip");if(!b)return;e.preventDefault();st.t=b.dataset.time;st.step="n";render()});
$("#cN").addEventListener("click",function(e){var label=e.target.closest("label"),input=label&&label.querySelector("input[name='n']");if(!input)return;e.preventDefault();st.n=Number(input.value);st.step="done";render()});
$("#cK").addEventListener("click",function(e){
  var label=e.target.closest("label"),input=label&&label.querySelector("input[name='k']");
  if(!input)return;
  e.preventDefault();
  st.k=input.value;
  st.step="d";
  dWeek=0;
  var picked=K.filter(function(x){return x.id===st.k})[0];
  showPickConfirmation(picked.n);
  render();
  var active=document.querySelector('.order-step[data-step="d"]');
  if(active){active.classList.remove("step-arrive");void active.offsetWidth;active.classList.add("step-arrive");setTimeout(function(){active.classList.remove("step-arrive")},500)}
});
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
  var waWindow=null;
  try{waWindow=window.open("about:blank","_blank");}catch(_){waWindow=null}
  fetch(form.action,{
    method:"POST",
    body:new FormData(form),
    headers:{Accept:"application/json"}
  }).then(function(res){
    if(!res.ok) throw new Error("submit");
    var waUrl=openWhatsAppConfirmation(o,contact,method);
    if(waWindow && !waWindow.closed) waWindow.location.href=waUrl;
    showSuccess(o,contact,method);
  }).catch(function(){
    if(waWindow && !waWindow.closed) waWindow.close();
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
  return url;
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
  var waLink=document.getElementById("successWhatsApp");
  if(waLink) waLink.href="https://wa.me/"+NR+"?text="+encodeURIComponent("Hallo Biottos Lädeli,\n\nmeine Bestellung wurde soeben online aufgegeben:\n\n🧺 "+st.n+" x Geschenkskorb "+o.n+" ("+fmt(o.p*st.n)+")\n📅 Abholung: "+st.d+", "+st.t+" Uhr\n👤 Name: "+$("#customerName").value.trim()+"\n📞 Kontakt: "+contact+"\n\nDanke!");
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
if(e.target.closest(".korb-card-more"))return;
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
 {img:"img/gross-vorne.jpg",alt:"Fertig zusammengestellter Geschenkskorb Gross & Guet",title:"Schön zusammengestellt",text:"Wir wählen die Sachen aus und packen sie so zusammen, dass daraus ein stimmiger Geschenkskorb wird.",note:""},
 {img:"img/chili-vorne.jpg",alt:"Fertiger Geschenkskorb Chli & Fii",title:"Fertig zum Verschenken",text:"Am Ende ist der Korb bereit – zum Verschenken, Danke sagen oder einfach selber Geniessen.",note:"Ein kleines Stück Thurgau zum Mitnehmen."},
 {img:"img/familie.jpg",alt:"Familie von Biottos Lädeli",title:"Bei uns im Lädeli",text:"Bestellt wird online und abgeholt wird bei uns an der Hauptstrasse 90 in Maischhuuse.",note:""}
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
