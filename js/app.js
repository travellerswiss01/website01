
(function(){
var LANG_KEY="biottos-lang";
var lang="de";
function syncDocumentLanguage(){document.documentElement.lang=lang==="ch"?"gsw-CH":"de-CH"}
var dict={"Jetzt bestellen":"Jetzt bstelle","Vorheriger Korb":"Vorige Gschänksharass","Nächster Korb":"Nächste Gschänksharass","Wischen oder Pfeile antippen":"Wische oder Pfeil antippe","Maischhauserkorb":"Maischhuserharass","Welcher darf's sein?":"Wele darfs sii?","Bestellen":"Bstelle","Der grosse":"De grosse","Der mittlere":"De mittlere","Der kleine":"De chliine",
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
"Drei Grössen, sorgfältig zusammengestellt mit Hausgemachtem und Feinem aus der Region.":"Drü Grössene, sorgfälig zämegstellt mit Huusgmachtem und Feinem vo do.",
"Drei Geschenkkörbe – von den Zehnders für dich.":"Drü Harass – vo de Zehnders für dich.",
"Wir stellen jeden Geschenkkorb mit viel Sorgfalt zusammen – mit Selbstgemachtem, feinen Sachen von uns und allem, was uns selbst Freude macht.":"Mir stelled jedi Harass mit viel Sorgfalt zäme – mit Huusgmachtem, feine Sache vo üs und allem, was üs selber Freude macht.",
"Welcher darf es sein?":"Welä dörfs sii?",
"Unsere Geschenkskörbe entdecken":"Üsi Gschenkschörb entdecke",
"ausgewählt & hausgemacht":"uusglese & hausgmacht",
"der grosse":"de grosse","der mittlere":"de mittlere","der kleine":"de chliine",
"Wenn's etwas Besonderes sein darf.":"Wenn's öppis Bsunders derf sii.",
"Für ein kleines Dankeschön.":"Für es chliises Dankeschön.",
"Für Menschen mit Geschmack.":"Für Lüüt mit Gschmack.",
"Korb anschauen":"Gschänksharass aluege","Was ist drin?":"Was isch dinne?",
"Tippen":"Antippe","Sie auf einen Korb – dann geht's direkt zum Bestellzettel.":"en Gschänksharass – denn gaht's grad zum Bestellzettel.",
"aus unserem Garten in Maischhausen":"us üsem Garte z Maischhuse",
"Die blauen Trauben wachsen bei uns im Garten in Maischhausen, wo wir wohnen. Wir haben sie selber gepflückt, als sie schön reif waren.":"Die blaue Truube wachsed bi üs im Garte z Maischhuse. Mir hend sie selber gärntet, wo sie schön reif gsi sind.",
"Otto, der Familienvater, hat daraus zusammen mit Bernadette mit einer Handpresse einen köstlichen Traubensaft gemacht.":"De Otto, üse Familievater, het zäme mit de Bernadette en feine Truubesaft presst.",
"Fein zum Zmorge, zum Znüni oder als alkoholfreie Alternative am Tisch.":"Fein zum Zmorge, zum Znüni oder als alkoholfreii Alternative am Tisch.",
"Fragen Sie uns einfach per WhatsApp, ob gerade Traubensaft im Lädeli bereitsteht.":"Fröged üs eifach per WhatsApp, öb grad Truubesaft im Lädeli parat isch.",
"Nach Traubensaft fragen":"Noch Truubesaft fröge",
"von Hand aufgelesen":"vo Hand ufglese","Apfelernte bei Biottos – Anhänger voller reifer Äpfel, von Hand aufgelesen":"Öpfelernte bi Biottos – Anhänger voll riife Öpfel, vo Hand ufglese",
"Die Äpfel haben wir von Hand aufgelesen – ganze 33 verschiedene Sorten aus unserem Obstgarten.":"D Öpfel hend mir vo Hand ufglese – 33 verschideni Sorte us üsem Obschtgarte.",
"Jede Sorte hat ihren eigenen Charakter: die einen süss und mild, die anderen etwas säuerlich und würzig. Zusammen ergeben sie diesen besonderen Süssmost mit seiner warmen, tiefen Note.":"Jedi Sorte het ihren eigete Charakter: ein isch süess und mild, die ander chli und säuerlich oder sogar würzig. Zäme ergäbed sie dä bsunderi Süessmost mit sinere warme, tüüfe Note.",
"Wir pressen ihn naturtrüb und ohne Zusätze – einfach so, wie er vom Baum kommt. Fein zum Zmorge, zum Znüni oder als kleines Stück Herbst im Glas.":"Mir pressed en naturtrüeb und ohni Zuesätz – eifach so, wie er vom Baum chunnt. Fein zum Zmorge, zum Znüni oder als chliises Stück Herbscht im Glas.",
"Schreiben Sie uns einfach per WhatsApp, ob gerade Süssmost im Lädeli bereitsteht.":"Schriebed üs eifach per WhatsApp, öb grad Süessmost im Lädeli parat isch.",
"Nach Süssmost fragen":"Nach Süessmost fröge",
"Wo alles beginnt.":"Wo alles afangt.",
"Im Herbst beginnt unsere Süssmost-Geschichte im Obstgarten – mit reifen Äpfeln, die wir von Hand auflesen.":"Im Herbscht fangt üsi Süessmost-Gschicht im Obschtgarte aa – mit riife Öpfel, wo mir vo Hand ufläse.",
"Ernte":"Ärnte",
"Wir sammeln die Äpfel sorgfältig ein und achten darauf, dass nur schöne, reife Früchte in die Ernte kommen.":"Mir läsed d Öpfel sorgfältig zäme und lueged druf, dass nume schöni, riifi Frücht i d Ärnte chömed.",
"33 Sorten":"33 Sorte",
"Jede Sorte bringt ihren Charakter mit.":"Jedi Sorte bringt ihre eigete Charakter mit.",
"Süsse, milde, säuerliche und würzige Äpfel kommen zusammen – diese Mischung macht unseren Süssmost besonders.":"Süessi, milde, säuerlichi und würzigi Öpfel chömed zäme – die Mischig macht üse Süessmost bsunders.",
"Pressen":"Presse",
"Aus Äpfeln wird Süssmost.":"Us Öpfel wird Süessmost.",
"Wir pressen die Äpfel naturtrüb und ohne Zusätze. So bleibt der Geschmack der Ernte direkt im Saft erhalten.":"Mir pressed d Öpfel naturtrüeb und ohni Zuesätz. So bliibt de Gschmack vo de Ärnte direkt im Saft erhalte.",
"Ein Stück Herbst im Glas.":"Es Stück Herbscht im Glas.",
"Frisch gepresst, naturtrüb und bereit zum Geniessen – die Ernte kommt direkt ins Glas.":"Frisch presst, naturtrüeb und parat zum Gnüsse – d Ärnte chunnt direkt is Glas.",
"Was bei uns im Garten wächst, kommt bei uns in die Küche. Daraus machen wir Goldmelissensirup, Tomatensauce, feine Essige und Balsamicos sowie verschiedene Dörrfrüchte.":"Was bi üs im Garte wachst, chunnt bi üs i d Chuchi. Usdem mached mir Goldmelissensirup, Tomatesauce, feini Essig und Balsamicos sowie verschideni Dörrfrücht.",
"Daraus entstehen unsere drei Geschenkskörbe – mit hausgemachten Sachen und einem kleinen Stück von unserem Zuhause.":"So entstönd üsi Geschenkskörb – mit huusgmachte Sache und emne chline Stuck vo üsem Dihai.",
"Abholung im Lädeli":"Abholig im Lädeli","Standort":"Standort","Bezahlung":"Zahlig",
"Ihr Geschenkskorb steht am vereinbarten Abholtermin im Biottos Lädeli für Sie bereit.":"De Gschänksharass staht am abgmachte Abholtermin im Biottos Lädeli für Sie parat.",
"Abholdatum und Uhrzeit geben Sie bei der Onlinebestellung auf dem Bestellzettel an.":"S Abholdatum und d Uhrziit chönd Sie bi de Onlinebestellig uf em Bestellzettel aageh.",
"Sie bezahlen bei der Abholung bar oder mit TWINT. Ein Versand ist nicht möglich.":"Sie bezahled bi de Abholig bar oder mit TWINT. E Versand isch nöd möglich.",
"Route in Google Maps":"Route i Google Maps",
"Fragen zu den Körben? Am einfachsten schreiben Sie uns auf WhatsApp.":"Frage zu de Gschänksharass? Am eifachschte schriibed Sie üs uf WhatsApp.",
"Rechtliches":"Rechtlichs","Impressum":"Impressum","Datenschutz":"Datenschutz",
"Bestellzettel":"Bestellzettel","Welchen Korb möchten Sie?":"Welene Gschänksharass möchted Sie?","Wann möchten Sie ihn abholen?":"Wänn möchted Sie en abhole?","Um welche Uhrzeit?":"Um weli Ziit?","Wie viele?":"Wie vieli?",
"Nächste Woche →":"Nächsti Wuche →","← Korb ändern":"← Gschänksharass ändere","← Tag ändern":"← Tag ändere","← Zeit ändern":"← Ziit ändere","Fast geschafft.":"Fast gschafft.",
"Ihre Auswahl steht. Sagen Sie uns nur noch, wie wir Sie erreichen dürfen.":"D Uuswahl isch parat. Säge Sie üs nur no, wie mir Sie erreiche dörfed.",
"Bestellung abschliessen":"Bestellig abschliesse","Ihr Name":"De Name","Wie dürfen wir Sie erreichen?":"Wie dörfed mir Sie erreiche?",
"Telefon / WhatsApp":"Telefon / WhatsApp","Ihre E-Mail-Adresse":"Eui E-Mail-Adresse","Ihre Nummer":"Eui Nummer",
"Bestellung verbindlich senden":"Bestellig verbindlich absände","Die Bestellung wird direkt an Biottos Lädeli übermittelt.":"D Bestellig wird direkt a s Biottos Lädeli übermittelt.",
"ist angekommen!":"isch acho!","Bestellung angekommen.":"Bestellig acho.","Danke – wir bereiten Ihren Korb mit Sorgfalt für Sie vor.":"Danke – mir bereited de Gschänksharass sorgfältig für Sie vor.",
"Korb":"Gschänksharass","Anzahl":"Aazahl","Danke für Ihre Bestellung.":"Danke für eui Bestellig.",
"Wir legen Ihren Korb für Sie bereit – bis bald im Lädeli.":"Mir leged de Gschänksharass für Sie parat – bis bald im Lädeli.",
"Bestellung in WhatsApp öffnen":"Bestellig i WhatsApp öffne","Zurück zum Lädeli":"Zrugg zum Lädeli",
"Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre Daten vertraulich und geben sie nicht an Dritte weiter, soweit dies nicht für die Abwicklung Ihrer Bestellung notwendig ist.":"De Schutz vo eune persönliche Date isch üs wichtig. Mir behandled eui Date vertraulich und gebed sie nöd a Dritti wiiter, usser wenn das für d Abwicklig vo eune Bestellig nötig isch.",
"Bestellungen per WhatsApp":"Bestellig per WhatsApp","Website":"Website",
"Beim Besuch unserer Website können technische Daten wie IP-Adresse, Browsertyp oder Zugriffszeit automatisch erfasst werden. Diese Daten dienen der sicheren und störungsfreien Bereitstellung der Website.":"Bi em Bsuech vo üsere Website chönd technischi Date wie IP-Adresse, Browsertyp oder Zuegriffsziit automatisch erfasst werde. Die Date diened de sichere und störigsfreie Bereitstellig vo de Website.",
"Wir speichern persönliche Daten nur so lange, wie dies für die Bearbeitung der Bestellung oder aufgrund gesetzlicher Pflichten erforderlich ist.":"Mir speichered persönligi Date nur so lang, wie das für d Bearbeitig vo de Bestellig oder us gesetzliche Pflicht nötig isch.",
"Bei Fragen zum Datenschutz können Sie uns über die angegebene Telefonnummer kontaktieren.":"Bi Frage zum Datenschutz chönd Sie üs über d agäh Telefonnummer kontaktiere.",
"Biottos Lädeli":"Biottos Lädeli","Hauptstrasse 90, 8357 Maischhuuse TG":"Hauptstrasse 90, 8357 Maischhuuse TG"
,
"Hausgemacht in Maischhausen · Thurgau":"Huusgmacht z Maischhuse · Thurgau",
"Der Geschenkkorb,":"De Gschänksharass,",
"in dem alles selbst gemacht ist.":"wo alles sälber gmacht isch.",
"Sirup, Saucen, Essig und Dörrfrüchte aus unserem Garten – von uns gemacht und von Hand zum Geschenkkorb gepackt.":"Sirup, Saucen, Essig und Dörrfrücht us üsem Garte – vo üs gmacht und vo Hand i de Gschänksharass packt.",
"Korb auswählen →":"Gschänksharass ussueche →",
"Wer dahintersteckt":"Wer dahintersteckt",
"Morgen abholbereit":"Morn abholbereit",
"Nächster Abholtermin":"Nächste Abholtermin",
"im Lädeli":"im Lädeli",
"Mo–Sa · 8–18 Uhr":"Mo–Sa · 8–18 Uhr",
"Bar oder TWINT":"Bar oder TWINT",
"bei Abholung":"bi de Abholig",
"Drei Grössen · drei Budgets":"Drü Grössene · drü Budgets",
"Ein Geschenk, das nach Thurgau schmeckt.":"Es Gschänk, wo nach Thurgau schmeckt.",
"Für deinen Anlass":"Für din Anlass",
"Geburtstag · Dankeschön · Weihnachten · Einfach so":"Geburtstag · Dankeschön · Wiehnachte · Eifach so",
"Geschenk auswählen →":"Gschänk ussueche →",
"Für besondere Geschenke":"Für bsunderi Gschänk",
"Unser Klassiker":"Üse Klassiker",
"Goldmelissensirup":"Goldmelissensirup",
"Tomatensauce":"Tomatesauce",
"Birnenweggen":"Biirewegge",
"+ 3 weitere Spezialitäten":"+ 3 wiiteri Spezialitäte",
"Birnenessig":"Biireessig",
"Kirschenbalsamico":"Chriesi-Balsamico",
"+ 2 weitere Spezialitäten":"+ 2 wiiteri Spezialitäte",
"gedörrte Zwetschgen":"dörrti Zwetschge",
"Birnen-Balsamico":"Biire-Balsamico",
"Von unserer Familie · aus unserem Garten":"Vo üsere Familie · us üsem Garte",
"Wer hinter dem Korb steckt.":"Wer hinde am Gschänksharass steckt.",
"Selber gemacht":"Sälber gmacht",
"Aus unserem Garten":"Us üsem Garte",
"Von Hand zusammengestellt":"Vo Hand zämegstellt",
"Bestellt · gepackt · abholbereit":"Bstellt · packt · abholbereit",
"Dein Korb wartet im Lädeli.":"Din Gschänksharass wartet im Lädeli.",
"Hier findest du uns":"Da findsch üs",
"Du wählst den Termin":"Du wählsch de Termin",
"Du bezahlst vor Ort":"Du bezahlsch vor Ort",
"Die wichtigsten Fragen.":"Die wichtigschte Frage.",
"Noch etwas unklar?":"No öppis unklar?",
"Wann kann ich meinen Korb abholen?":"Wänn cha ich min Gschänksharass abhole?",
"Bei der Onlinebestellung wählen Sie Abholdatum und Uhrzeit. Ihr Korb steht am vereinbarten Termin im Biottos Lädeli bereit.":"Bi de Onlinebestellig wähled Sie Abholdatum und Uhrziit. De Gschänksharass staht am abgmachte Termin im Biottos Lädeli parat.",
"Kann ich auch mehrere Körbe bestellen?":"Cha ich au mehri Gschänksharass bstelle?",
"Ja. Im Bestellzettel können Sie bis zu 10 Körbe auswählen. Bei grösseren Mengen oder Firmenbestellungen melden Sie sich am besten direkt bei uns.":"Ja. Im Bestellzettel chönd Sie bis zu 10 Gschänksharass ussueche. Bi grössere Menge oder Firmabstellige melded Sie sich am beschte direkt bi üs.",
"Wie bezahle ich?":"Wie bezahl ich?",
"Sie bezahlen bei der Abholung vor Ort – bar oder mit TWINT.":"Sie bezahled bi de Abholig vor Ort – bar oder mit TWINT.",
"Ist Versand möglich?":"Isch Versand möglich?",
"Nein. Die Geschenkskörbe werden im Biottos Lädeli zur Abholung bereitgestellt.":"Nei. D Gschänksharass werde im Biottos Lädeli zur Abholig parat gstellt.",
"Was ist in den Körben?":"Was isch i de Gschänksharass?",
"Eine Frage, die hier nicht beantwortet ist?":"E Frag, wo da nöd beantwortet isch?",
"Kontakt aufnehmen →":"Kontakt ufneh →",
"Wir helfen gern.":"Mir hälfed gern.",
"Fragen zu einem Korb, einer grösseren Bestellung oder einem passenden Geschenk? Schreiben Sie uns direkt.":"Frage zu eme Gschänksharass, ere grössere Bestellig oder eme passende Gschänk? Schriibed üs direkt.",
"Auf WhatsApp schreiben":"Uf WhatsApp schriibe",
"anrufen →":"aalüte →",
"Öffnungszeiten":"Öffnigsziite",
"Für grössere Mengen":"Für grössere Menge",
"Bis 10 Körbe online · grössere Bestellungen gern direkt anfragen":"Bis 10 Gschänksharass online · grössere Bestellige gern direkt aafrage"
};
var i18n={"nav.baskets":["Geschenkskörbe","Gschänksharass"],"nav.garden":["Aus unserem Garten","Us üsem Garte"],"nav.grape":["Traubensaft","Truubesaft"],"nav.most":["Süssmost","Süessmost"],"nav.vinegar":["Essig","Essig"],"nav.dried":["Dörrfrüchte","Dörrfrücht"],"nav.tea":["Tee","Tee"],"nav.shop":["Lädeli","Lädeli"],"nav.about":["Über uns","Über üs"],"nav.services":["Dienstleistungen","Dienstleistige"],"nav.lucia":["Lucia · Privatköchin","Lucia · Privatköchin"],"nav.otto":["Otto · Garten","Otto · Garte"],"nav.pickup":["Abholung","Abholig"],"nav.contact":["Kontakt","Kontakt"],"nav.faq":["FAQ","FAQ"],"home.kicker":["Hausgemacht in Maischhausen · Thurgau","Huusgmacht z Maischhuse · Thurgau"],"home.title":["Geschenkskörbe","Gschänksharass"],"home.title2":["aus unserem Garten.","us üsem Garte."],"home.lead":["Hausgemacht, persönlich und direkt bei uns zusammengestellt.","Huusgmacht, persönlich und diräkt bi üs zämegstellt."],"home.baskets":["Geschenkskörbe","Gschänksharass"],"home.garden":["Aus unserem Garten","Us üsem Garte"],"home.shop":["Ins Lädeli","Is Lädeli"],"home.pickup":["Abholung · Mo–Sa, 8–18 Uhr","Abholig · Mo–Sa, 8–18 Uhr"],"home.pickupDetails":["Details zur Abholung →","Detail zur Abholig →"],"basket.kicker":["Drei Körbe · drei Budgets","Drü Harass · drü Budgets"],"basket.title":["Geschenkskörbe aus dem Thurgau – hausgemacht und zum Verschenken bereit.","Gschänksharass us em Thurgau – huusgmacht und parat zum Verschenke."],"basket.lead":["Hausgemachte Spezialitäten, sorgfältig ausgewählt und direkt bei uns in Maischhausen zum Verschenken bereit.","Huusgmachti Spezialitäte, sorgfältig usgwählt und diräkt bi üs z Maischhuse zum Verschenke parat."],"basket.question":["Welcher darf's sein?","Welä dörfs sii?"],"basket.large.label":["der grosse","de grosse"],"basket.medium.label":["der mittlere","de mittlere"],"basket.small.label":["der kleine","de chliine"],"basket.order":["Jetzt bestellen","Jetzt bstelle"],"basket.contents":["Was ist drin?","Was isch dinne?"],"garden.kicker":["Aus unserem Garten","Us üsem Garte"],"garden.title":["Was bei uns wächst und entsteht.","Was bi üs wachst und entstoht."],"garden.lead":["Hausgemachte Spezialitäten aus unserem Garten – mit kurzen Wegen und viel Handarbeit.","Huusgmachti Spezialitäte us üsem Garte – mit churze Wäg und viel Handarbeit."],"shop.kicker":["Diräkt bi üs · Biottos Lädeli","Diräkt bi üs · Biottos Lädeli"],"shop.title":["Diräkt bi üs im Lädeli.","Diräkt bi üs im Lädeli."],"shop.lead":["Husgmachti Spezialitätä, Süessmoscht und wiiteri Produkt us üsem Alltag – diräkt bi üs z’Maischhusä.","Husgmachti Spezialitäte, Süessmoscht und wiiteri Produkt us üsem Alltag – diräkt bi üs z’Maischhusä."],"shop.lead2":["Alles, wo bi üs im Lädeli stoht, ghört zu üsem Alltag: sälber gmacht, sorgfältig usgwählt und parat zum Mitnäh oder Verschenke.","Alles, wo bi üs im Lädeli stoht, ghört zu üsem Alltag: sälber gmacht, sorgfältig usgwählt und parat zum Mitnäh oder Verschenke."],"pickup.kicker":["Bestellt · gepackt · abholbereit","Bstellt · packt · abholbereit"],"pickup.title":["Dein Korb wartet im Lädeli.","Din Harass wartet im Lädeli."],"pickup.lead":["Ihr Geschenkskorb steht am vereinbarten Abholtermin im Biottos Lädeli für Sie bereit.","Dein Gschänksharass stoht am vereinbarte Abholtermin im Biottos Lädeli parat."],"faq.kicker":["Noch etwas unklar?","No öppis unklar?"],"faq.title":["Die wichtigsten Fragen.","D wichtigschte Frage."],"contact.kicker":["Noch etwas offen?","No öppis offe?"],"contact.title":["Wir helfen gern.","Mir hälfed gärn."],"about.kicker":["Unsere Familie · Biottos Lädeli","Üsi Familie · Biottos Lädeli"],"about.title":["Wo Familie, Garten und Lädeli zusammenkommen.","Wo Familie, Garte und Lädeli zämeghöred."],"otto.kicker":["Otto · Garten & Obstbäume","Otto · Garte & Öpfelbäum"],"otto.title":["40 Jahre Erfahrung, die man im Garten sieht.","40 Jahr Erfahrig, wo mer im Garte gseht."],"lucia.kicker":["Lucia · Privatköchin","Lucia · Privatköchin"],"lucia.title":["Lucia kocht bei Ihnen zu Hause.","Lucia choche bi Ihne dihei."],"lucia.overview":["Auf einen Blick","Uf en Blick"],"lucia.what":["Was Lucia für Sie macht","Was Lucia für Sie macht"],"lucia.contact":["Lucia direkt erreichen","Lucia direkt erreiche"],"lucia.whatsapp":["WhatsApp an Lucia →","WhatsApp a Lucia →"],"lucia.phone":["+41 76 295 52 94 anrufen →","+41 76 295 52 94 alüte →"],"lucia.gallery":["Einblicke in Lucias Küche","Iblick i d Chuchi vo de Lucia"],"lucia.galleryTitle":["Menüs, die Lust aufs Geniessen machen.","Menüs, wo Lust uf Gniessä mache."],"garden.grape.kicker":["aus unserem Garten in Maischhausen","us üsem Garte z Maischhuse"],"garden.grape.title":["Traubensaft","Truubesaft"],"garden.grape.p1":["Die blauen Trauben wachsen bei uns im Garten in Maischhausen, wo wir wohnen. Wir haben sie selber gepflückt, als sie schön reif waren.","Die blaue Truube wachsed bi üs im Garte z Maischhuse, wo mir wohned. Mir hend sie selber gärntet, wo sie schön riif gsi sind."],"garden.grape.p2":["Otto, der Familienvater, hat daraus zusammen mit Bernadette mit einer Handpresse einen köstlichen Traubensaft gemacht.","De Otto, üse Familievater, het zäme mit de Bernadette mit ere Handpresse en feine Truubesaft gmacht."],"garden.grape.p3":["Fein zum Zmorge, zum Znüni oder als alkoholfreie Alternative am Tisch.","Fein zum Zmorge, zum Znüni oder als alkoholfreii Alternative am Tisch."],"garden.grape.p4":["Fragen Sie uns einfach per WhatsApp, ob gerade Traubensaft im Lädeli bereitsteht.","Fröged üs eifach per WhatsApp, öb grad Truubesaft im Lädeli parat isch."],"garden.grape.cta":["Nach Traubensaft fragen","Noch Truubesaft fröge"],"garden.vinegar.kicker":["Aus unserem Lädeli · Essig","Us üsem Lädeli · Essig"],"garden.vinegar.title":["Essig mit Charakter – aus unseren eigenen Früchten.","Essig mit Charakter – us üse eigete Frücht."],"garden.vinegar.lead":["Unsere Essige und Balsamicos entstehen aus Früchten und Zutaten, die zu unserer Familie und unserem Garten gehören. Sie passen zum Salat, zu Käse oder als feine kleine Zugabe zum Verschenken.","Üsi Essig und Balsamicos entstönd us Frücht und Zutate, wo zu üsere Familie und üsem Garte ghöred. Sie passed zum Salat, zu Chäs oder als feini Chliigab zum Verschenke."],"garden.dried.kicker":["Aus unserem Lädeli · Dörrfrüchte","Us üsem Lädeli · Dörrfrücht"],"garden.tea.kicker":["Aus unserem Garten · Tee","Us üsem Garte · Tee"],"about.p1":["Hinter Biottos Lädeli steht eine Familie, in der Garten, Lebensmittel und unterschiedliche Berufe zusammengehören. Otto ist gelernter Baumschulist. Zusammen mit seiner Frau Helena hat er die Familie geprägt – mit Bernadette, Josef, Lucia und Franziska.","Hinter em Biottos Lädeli stoht e Familie, wo Garte, Läbensmittel und verschideni Berüef zämeghöred. De Otto isch gelernte Baumschulist. Zäme mit sinere Frau Helena het er d Familie prägt – mit de Bernadette, em Josef, de Lucia und de Franziska."],"about.p2":["Heute bringt jedes Familienmitglied seine eigene Geschichte mit. Josef ist Milchtechnologe und hat auch diese Website mit aufgebaut – ganz praktisch, damit man unser Lädeli und unsere Körbe einfach kennenlernen kann. Lucia ist Köchin und Franziska gelernte Zierpflanzengärtnerin. Bernadette ist als Tochter von Otto und Helena Teil dieser Familiengeschichte. Sie hilft zu Hause mit, im Garten, beim Backen und überall dort, wo gerade Unterstützung gebraucht wird. Und Helena gehört als Ehefrau von Otto und Mutter der vier Kinder genauso dazu.","Hüt bringt jedes Familienmitglied sini eigeti Gschicht mit. De Josef isch Milchtechnologe und het au die Website mit ufbaut – ganz praktisch, damit mer üses Lädeli und üsi Harass eifach chönd kenneleh. D Lucia isch Chöchin und d Franziska gelernte Zierpflanzegärtnerin. D Bernadette isch als Tochter vom Otto und de Helena Teil vo dere Familiengschicht. Sie hilft dihei mit, im Garte, bim Bache und überall, wo grad Unterstützig brucht wird. Und d Helena ghört als Frau vom Otto und Muetter vo de vier Chind genauso dezue."],"about.p3":["Was bei uns aus Garten und Küche entsteht, soll nicht einfach ein Produkt sein. Es soll ein Stück von dem zeigen, was unsere Familie ausmacht: sorgfältig gemacht, persönlich zusammengestellt und mit Freude weitergegeben.","Was bi üs us Garte und Chuchi entstoht, söll nöd eifach es Produkt sii. Es söll es Stück vo dem zeige, was üsi Familie usmacht: sorgfältig gmacht, persönlich zämegstellt und mit Freud wiitergäh."],"about.point1.title":["Selber gemacht","Sälber gmacht"],"about.point1.text":["Goldmelissensirup, Tomatensauce, Essige, Balsamicos und Dörrfrüchte entstehen bei uns.","Goldmelissesaft, Tomatesauce, Essig, Balsamicos und Dörrfrücht entstönd bi üs."],"about.point2.title":["Aus unserem Garten","Us üsem Garte"],"about.point2.text":["Was bei uns wächst, kommt bei uns in die Küche – vom Garten bis zum Geschenkkorb.","Was bi üs wachst, chunnt bi üs i d Chuchi – vom Garte bis zum Gschänksharass."],"about.point3.title":["Von Hand zusammengestellt","Von Hand zämegstellt"],"about.point3.text":["Aus unseren hausgemachten Sachen wird ein Geschenk mit einem kleinen Stück von unserem Zuhause.","Us üse huusgmachte Sache wird es Gschenk mit eme chliine Stück vo üsem Dihei."],"about.cta":["Die drei Körbe ansehen →","D drü Harass aluege →"],"otto.intro":["Otto ist gelernter Baumschulist und bringt 40 Jahre Erfahrung mit. Sein Fachwissen reicht von Obstbäumen und Früchten bis zu Gemüse – mit besonderer Leidenschaft für robuste Obstsorten, Veredelungen und Tomaten.","De Otto isch gelernte Baumschulist und bringt 40 Jahr Erfahrig mit. Sis Fachwüsse reicht vo Öpfelbäum und Früchte bis zum Gmües – mit ere bsundere Leidenschaft für robusti Obstsorte, Veredlige und Tomate."],"otto.contact":["Direkt mit Otto besprechen","Direkt mit em Otto bespreche"],"lucia.p1":["Sie möchten einen besonderen Abend geniessen, ohne selbst in der Küche zu stehen? Lucia kommt zu Ihnen nach Hause und kocht für Sie und Ihre Gäste – besonders gerne mit regionalen Zutaten und auf Wunsch auch ausschliesslich mit unseren Produkten aus Biottos Lädeli.","Sie möchted en bsundere Abig gnüsse, ohni sälber i de Chuchi z stah? D Lucia chunnt zu Ihne hei und choche für Sie und Ihri Gäscht – bsunders gärn mit regionale Zutate und uf Wunsch au usschliesslich mit üse Produkt us em Biottos Lädeli."],"lucia.p2":["Ob Familienessen, Geburtstag, gemütlicher Abend mit Freunden oder ein kleines Fest: Lucia begleitet Sie auf Wunsch von der Planung über den Einkauf und das Kochen bis zum Aufräumen und Abwaschen.","Ob Familiefäscht, Geburtstag, gmüetliche Abig mit Fründe oder es chliises Fäscht: D Lucia begleitet Sie uf Wunsch vo de Planig über de Iichauf und s Choche bis zum Ufruume und Abwäsche."],"lucia.point1.title":["Regional & persönlich","Regional & persönlich"],"lucia.point1.text":["Lucia kocht besonders gerne mit regionalen Zutaten und stellt das Menü gemeinsam mit Ihnen zusammen.","D Lucia choche bsunders gärn mit regionale Zutate und stellt s Menü zäme mit Ihne zäme."],"lucia.point2.title":["Auch mit unseren Produkten","Au mit üse Produkt"],"lucia.point2.text":["Auf Wunsch kocht sie ausschliesslich mit Produkten aus Biottos Lädeli.","Uf Wunsch choche sie usschliesslich mit Produkt us em Biottos Lädeli."],"lucia.point3.title":["Von der Planung bis zum Abwasch","Vo de Planig bis zum Abwäsche"],"lucia.point3.text":["Auf Wunsch übernimmt Lucia den Einkauf, die Vorbereitung, das Kochen, das Servieren und anschliessend auch das Aufräumen und Abwaschen.","Uf Wunsch übernimmt d Lucia de Iichauf, d Vorbereitig, s Choche, s Serviere und nacher au s Ufruume und Abwäsche."],"lucia.point4.title":["Ausgezeichnete Ausbildung","Usgezeichneti Usbildig"],"lucia.point4.text":["Lucia hat 2025 ihre Lehre als Köchin EFZ als Kantonsbeste Köchin abgeschlossen – mit der hervorragenden Gesamtnote 5,4.","D Lucia het 2025 ihri Lehr als Chöchin EFZ als Kantonsbeschti Chöchin abgschlosse – mit de hervorragende Gesamtnote 5,4."],"lucia.point5.title":["Unterwegs für Sie","Für Sie unterwegs"],"lucia.point5.text":["Aktuell bietet Lucia ihren Privatkoch-Service im Kanton Thurgau, Zürich und St. Gallen an. Sie ist mit dem Auto unterwegs.","Aktuell bietet d Lucia ihre Privatchöchin-Dienstleistig im Thurgau, Züri und St. Galle aa. Sie isch mit em Auto unterwegs."],"lucia.galleryIntro":["Ein paar Beispiele aus Lucias Küche und von Menüs, die sie für besondere Anlässe zubereitet.","Es paar Iblick us de Chuchi vo de Lucia und vo Menüs, wo sie für bsunderi Ahläss zuebereitet."],"lucia.note":["Am besten gleich Wunschdatum, Anzahl Personen und Anlass dazuschreiben.","Am beschte grad Wunschdatum, Aazahl Persone und Anlass dazueschriibe."],"garden.most.kicker":["Vom Apfel zum Süssmost","Vom Öpfel zum Süessmoscht"],"garden.most.title":["Eine kleine Geschichte aus unserem Obstgarten","E chlini Gschicht us üsem Obschtgarte"],"garden.most.lead":["Es beginnt im Herbst – mit Äpfeln, die wir selber auflesen, und endet mit einem Glas Süssmost am Tisch.","Es fangt im Herbscht aa – mit Öpfel, wo mir sälber ufläse, und endet mit eme Glas Süessmoscht am Tisch."],"garden.dried.title":["Dörrfrüchte – sorgfältig getrocknet und voller Geschmack.","Dörrfrücht – sorgfältig dörrt und voll Gschmack."],"garden.dried.lead":["Unsere Dörrfrüchte sind eine feine Spezialität aus unserem Lädeli – traditionell verarbeitet und ideal zum Naschen, fürs Zvieri oder zum Verschenken.","Üsi Dörrfrücht sind e feini Spezialität us üsem Lädeli – traditionell verarbeitet und ideal zum Schnouse, fürs Zvieri oder zum Verschenke."],"garden.dried.note":["Die aktuelle Auswahl kann je nach Saison und Vorrat wechseln. Fragen Sie uns gerne direkt, was gerade im Lädeli bereitsteht.","D aktuell Uswahl cha je nach Saison und Vorrat wechsle. Fröged üs gärn direkt, was grad im Lädeli paratstoht."],"garden.tea.title":["Tee aus unserem Garten – selbst gemacht und von uns.","Tee us üsem Garte – sälber gmacht und vo üs."],"garden.tea.lead":["Unsere Tees entstehen aus Pflanzen, die bei uns im Garten gewachsen sind. Wir trocknen und verarbeiten sie sorgfältig, damit ein Stück von unserem Garten auch als feiner Tee im Lädeli erhältlich ist.","Üsi Tees entstönd us Pflanze, wo bi üs im Garte gwachse sind. Mir trockned und verarbeitets sorgfältig, damit es Stück vo üsem Garte au als feine Tee im Lädeli erhältlich isch."],"garden.tea.note":["Alles stammt von uns und ist bei uns im Garten gewachsen. Die aktuelle Auswahl kann je nach Saison und Vorrat wechseln.","Alles chunnt vo üs und isch bi üs im Garte gwachse. D aktuell Uswahl cha je nach Saison und Vorrat wechsle."],"contact.lead":["Fragen zu einem Korb, einer grösseren Bestellung oder einem passenden Geschenk? Schreiben Sie uns direkt.","Frage zu eme Harass, ere grössere Bestellig oder eme passende Gschenk? Schriibed üs direkt."],"contact.businessKicker":["Für Firmen & grössere Mengen","Für Firma & grössere Menge"],"contact.businessTitle":["Firmengeschenke aus dem Thurgau – mehr als 10 Körbe?","Firmengschänk us em Thurgau – meh als 10 Harass?"],"contact.businessText":["Für grössere Bestellungen klären wir Menge, Abholtermin und die passende Zusammenstellung direkt mit Ihnen.","Bi grössere Bestellige kläred mir Menge, Abholtermin und d passende Zämesetzig direkt mit Ihne."],"faq.more":["Eine Frage, die hier nicht beantwortet ist?","No e Frag, wo da nöd beantwortet isch?"],"faq.contact":["Kontakt aufnehmen →","Kontakt ufneh →"],"order.close":["Schliessen","Schliessä"],"order.progress":["Bestellfortschritt","Bestellfortschritt"],"order.nextWeek":["Nächste Woche →","Nächsti Wuche →"],"order.changeBasket":["← Korb ändern","← Harass ändere"],"order.time":["Um welche Uhrzeit?","Um weli Ziit?"],"order.quantity":["Wie viele?","Wie vieli?"],"order.changeDay":["← Tag ändern","← Tag ändere"],"order.changeTime":["← Zeit ändern","← Ziit ändere"],"order.changeQuantity":["← Anzahl ändern","← Aazahl ändere"],"order.checkoutIntro":["Ihre Auswahl steht. Sagen Sie uns nur noch, wie wir Sie erreichen dürfen.","D Uuswahl stoht. Säge Sie üs nur no, wie mir Sie erreiche dörfed."],"order.contactQuestion":["Wie dürfen wir Sie erreichen?","Wie dörfed mir Sie erreiche?"],"order.nameLabel":["Ihr Name","Ihr Name"],"order.namePlaceholder":["Vor- und Nachname","Vor- und Nachname"],"order.emailLabel":["Ihre E-Mail-Adresse","Ihri E-Mail-Adrässe"],"order.phoneLabel":["Ihre Nummer","Ihri Nummer"],"order.formNote":["Die Bestellung wird direkt an Biottos Lädeli übermittelt.","D Bestellig wird diräkt ans Biottos Lädeli übermittelt."],"order.doneTitle":["Fast geschafft.","Fast gschafft."],"order.summaryBasket":["Korb","Harass"],"order.summaryPickup":["Abholung","Abholig"],"order.summaryQuantity":["Anzahl","Aazahl"],"order.summaryTotal":["Total","Total"],"order.summaryPayment":["Bezahlung","Zahlig"],"order.payment":["Bar oder TWINT bei Abholung","Bar oder TWINT bi de Abholig"],"order.nextPickup":["Nächster Abholtermin","Nächste Abholtermin"],"order.prevWeek":["Vorherige Woche","Vorherigi Wuche"]};
var auditDict={
"Zum Inhalt springen":"Zum Inhalt springe",
"Für Geburtstage, ein herzliches Dankeschön oder wenn es einfach etwas Besonderes sein darf.":"Für Geburtstäg, es herzlichs Dankeschön oder wenns eifach öppis Bsunders derf sii.",
"6 Spezialitäten im Korb":"6 Spezialitäte im Harass",
"5 Spezialitäten im Korb":"5 Spezialitäte im Harass",
"3 Spezialitäten im Korb":"3 Spezialitäte im Harass",
"Unser Klassiker für ein persönliches Dankeschön – vielseitig, hausgemacht und schön zum Verschenken.":"Üse Klassiker für es persönliches Dankeschön – vielseitig, huusgmacht und schön zum Verschenke.",
"Klein, fein und persönlich – ideal als kleine Aufmerksamkeit oder Mitbringsel.":"Chli, fein und persönlich – ideal als chliini Ufmerksamkeit oder Mitbringsel.",
"Vom Apfel zum Süssmost":"Vom Öpfel zum Süessmoscht",
"Eine kleine Geschichte aus unserem Obstgarten":"E chlini Gschicht us üsem Obstgarte",
"Es beginnt im Herbst – mit Äpfeln, die wir selber auflesen, und endet mit einem Glas Süssmost am Tisch.":"Es fangt im Herbscht aa – mit Öpfel, wo mir selber ufläse, und endet mit eme Glas Süessmoscht am Tisch.",
"Aus unserem Lädeli · Essig":"Us üsem Lädeli · Essig",
"Essig mit Charakter – aus unseren eigenen Früchten.":"Essig mit Charakter – us üse eigene Früchte.",
"Unsere Essige und Balsamicos entstehen aus Früchten und Zutaten, die zu unserer Familie und unserem Garten gehören. Sie passen zum Salat, zu Käse oder als feine kleine Zugabe zum Verschenken.":"Üsi Essig und Balsamicos entstönd us Früchte und Zutate, wo zu üser Familie und üsem Garte ghöred. Sie passed zum Salat, zu Chäs oder als feini Zugab zum Verschenke.",
"Fruchtig und aromatisch – fein zu Blattsalat, Käse oder zum Verfeinern von Saucen.":"Fruchtig und aromatisch – fein zu Blattsalat, Chäs oder zum Verfeinere vo Saucen.",
"Fruchtig-mild und vielseitig – eine feine Ergänzung für Salate und die kalte Küche.":"Fruchtig-mild und vielseitig – e feini Ergänzig für Salat und d chalt Chuchi.",
"Kräftig und fruchtig – passt besonders schön zu Käse und als besondere Note in der Küche.":"Chäftig und fruchtig – passt bsunders schön zu Chäs und als spezielli Note i de Chuchi.",
"Fruchtig und voll – zum Abschmecken, Verfeinern oder einfach als kleine Spezialität.":"Fruchtig und voll – zum Abschmecke, Verfeinere oder eifach als chlini Spezialität.",
"Essig-Auswahl anfragen":"Essig-Uswahl aafrage",
"Aus unserem Lädeli · Dörrfrüchte":"Us üsem Lädeli · Dörrfrücht",
"Dörrfrüchte – sorgfältig getrocknet und voller Geschmack.":"Dörrfrücht – sorgfältig trocknet und voll Gschmack.",
"Unsere Dörrfrüchte sind eine feine Spezialität aus unserem Lädeli – traditionell verarbeitet und ideal zum Naschen, fürs Zvieri oder zum Verschenken.":"Üsi Dörrfrücht sind e feini Spezialität us üsem Lädeli – traditionell verarbeitet und ideal zum Schnouse, fürs Zvieri oder zum Verschenke.",
"Dörrbirnen ganz":"Dörrbirne ganz",
"Sorte Affelträngler – eine traditionelle Birnensorte, die sich besonders gut zum Dörren eignet.":"Sorte Affelträngler – e traditionelli Birnesorte, wo sich bsunders guet zum Dörren eignet.",
"Zwetschgen halbiert":"Zwetschge halbiert",
"Ohne Stein – praktisch zum Geniessen und vielseitig als fruchtige Spezialität.":"Ohni Stei – praktisch zum Gniessä und vielseitig als fruchtigi Spezialität.",
"Die aktuelle Auswahl kann je nach Saison und Vorrat wechseln. Fragen Sie uns gerne direkt, was gerade im Lädeli bereitsteht.":"D aktuell Uswahl cha je nach Saison und Vorrat wechsle. Fragged üs gern direkt, was grad im Lädeli parat staht.",
"Fein und frisch – aus unserem eigenen Garten.":"Fein und frisch – us üsem eigene Garte.",
"Aus Lindenblüten, die bei uns im Garten gewachsen sind.":"Us Lindenblüete, wo bi üs im Garte gwachse sind.",
"Frisch-aromatisch und ebenfalls aus unserem Garten.":"Frisch-aromatisch und au us üsem Garte.",
"Bäume fachgerecht schneiden":"Bäum fachgerecht schniide",
"Otto unterstützt beim richtigen Schnitt von Obstbäumen und zeigt, worauf es für einen gesunden und ertragreichen Baum ankommt.":"Otto unterstützt bim richtige Schnitt vo Obstbäum und zeigt, worauf es für en gsunde und ertragriiche Baum aachunnt.",
"Den richtigen Obstbaum finden":"De richtige Obstbaum finde",
"Sie suchen einen robusten Apfelbaum? Otto berät Sie, welche Sorte zu Ihrem Standort, Ihren Wünschen und den Bedingungen im Garten passt.":"Sueched Sie en robuste Öpfelbaum? Otto berät Sie, weli Sorte zu Ihrem Standort, Ihre Wünsch und de Bedingige im Garte passt.",
"Obstbäume veredeln":"Obstbäum veredle",
"Otto veredelt Obstbäume und kann verschiedene Apfelsorten miteinander verbinden – bei passenden Bäumen sind bis zu 12 verschiedene Apfelsorten auf einem Baum möglich.":"Otto veredlet Obstbäum und cha verschideni Öpfelsorte mitenand verbinde – bi passende Bäum sind bis zu 12 verschideni Öpfelsorte uf eme Baum möglich.",
"Ottos Tomatenwelt":"Ottos Tomatewelt",
"Ob Beratung, Schnitt oder Veredelung: Otto verbindet praktisches Können mit jahrzehntelanger Erfahrung.":"Ob Beratig, Schnitt oder Veredlig: Otto verbindet praktisches Chönne mit jahrzehntelanger Erfahrig.",
"079 935 00 64 anrufen →":"079 935 00 64 aalüte →",
"Hausgemacht":"Huusgmacht",
"Sirup, Saucen, Essige, Balsamicos und Dörrfrüchte entstehen bei uns.":"Sirup, Saucen, Essig, Balsamicos und Dörrfrücht entstönd bi üs.",
"Direkt aus Maischhausen":"Diräkt us Maischhuse",
"Du findest unsere Produkte direkt bei uns im Lädeli an der Hauptstrasse 90.":"Du findsch üsi Produkt diräkt bi üs im Lädeli a de Hauptstrass 90.",
"Zum Mitnehmen":"Zum Mitnäh",
"Vorbeikommen, auswählen und mitnehmen – persönlich und unkompliziert.":"Vorbeicho, uswähle und mitnäh – persönlich und unkompliziert.",
"Saisonales Gemüse":"Saisonals Gmües",
"Tomaten, Salat und Gurken – je nach Saison und Ernte.":"Tomate, Salat und Gurke – je nach Saison und Ärnte.",
"Frische Eier":"Frischi Eier",
"Immer erhältlich – direkt bei uns im Lädeli.":"Immer erhältlich – diräkt bi üs im Lädeli.",
"So findest du uns →":"So findsch üs →",
"Bar oder mit TWINT. Ein Versand ist nicht möglich.":"Bar oder mit TWINT. En Versand isch nöd möglich.",
"Bestellen Sie online und wählen Sie Ihren Abholtermin.":"Bstelled Sie online und wähled Sie Ihre Abholtermin.",
"Route in Google Maps →":"Route i Google Maps →",
"Bereit für dein Geschenk?":"Parat für dis Gschenk?",
"Die genaue Zusammenstellung sehen Sie direkt bei jedem Korb. Unsere Auswahl umfasst hausgemachte Spezialitäten wie Sirup, Saucen, Essige, Balsamicos und Dörrfrüchte.":"D genau Zämeschtellig gsehnd Sie direkt bi jedem Harass. Üsi Uswahl umfasst huusgmachti Spezialitäte wie Sirup, Saucen, Essig, Balsamicos und Dörrfrücht.",
"Für Firmen & grössere Mengen":"Für Firma & grössere Menge",
"Firmengeschenke aus dem Thurgau – mehr als 10 Körbe?":"Firmengschenk us em Thurgau – meh als 10 Harass?",
"Für grössere Bestellungen klären wir Menge, Abholtermin und die passende Zusammenstellung direkt mit Ihnen.":"Bi grössere Bestellige kläred mir Menge, Abholtermin und d passende Zämeschtellig direkt mit Ihne.",
"Anfrage auf WhatsApp":"Aafrag uf WhatsApp",
"Montag–Samstag · 8–18 Uhr":"Mändig–Samschtig · 8–18 Uhr",
"Online bestellbar":"Online bstellbar",
"Bis 10 Körbe direkt über den Bestellzettel":"Bis 10 Harass direkt über de Bestellzettel",
"Bitte Termin auswählen":"Bitte Termin uswähle",
"Total":"Total",
"Wählen Sie Ihre bevorzugte Bestellart.":"Wähled Sie Ihri bevorzugti Bestellart.",
"Verantwortlich für den Inhalt":"Verantwortlich für de Inhalt",
"Tippen zum Vergrössern":"Tippe zum Vergrössere",
"Was Lucia für Sie macht":"Was d Lucia für Sie macht",
"Einblicke in Lucias Küche":"Iblick i d Chuchi vo de Lucia",
"Menüs, die Lust aufs Geniessen machen.":"Menüs, wo Lust uf Gniessä mache.",
"Ein paar Beispiele aus Lucias Küche und von Menüs, die sie für besondere Anlässe zubereitet.":"Es paar Biispiel us de Chuchi vo de Lucia und vo Menüs, wo sie für bsunderi Ahläss zuebereitet.",
"Am besten gleich Wunschdatum, Anzahl Personen und Anlass dazuschreiben.":"Am beschte grad Wunschdatum, Aazahl Persone und Anlass dazueschriibe.",
"Du findest unsere Produkte direkt bei uns im Lädeli an der Hauptstrasse 90.":"Du findsch üsi Produkt diräkt bi üs im Lädeli a de Hauptstrass 90.",
"Frische Eier":"Frischi Eier",
"Hier findest du uns":"Da findsch üs",
"Biottos Lädeli":"Biottos Lädeli",
"Du wählst den Termin":"Du wählsch de Termin",
"Abholdatum und Uhrzeit geben Sie bei der Onlinebestellung auf dem Bestellzettel an.":"Abholdatum und Uhrziit gisch bi de Onlinebestellig im Bestellzettel aa.",
"Du bezahlst vor Ort":"Du bezahlsch vor Ort",
"Bar oder mit TWINT. Ein Versand ist nicht möglich.":"Bar oder mit TWINT. En Versand isch nöd möglich.",
"Morgen abholbereit":"Morn abholbereit",
"Bestellen Sie online und wählen Sie Ihren Abholtermin.":"Bstelled Sie online und wähled Sie Ihre Abholtermin.",
"Bereit für dein Geschenk?":"Parat für dis Gschenk?",
"Die wichtigsten Fragen.":"D wichtigschte Frage.",
"Eine Frage, die hier nicht beantwortet ist?":"E Frag, wo da nöd beantwortet isch?",
"Bei der Onlinebestellung wählen Sie Abholdatum und Uhrzeit. Ihr Korb steht am vereinbarten Termin im Biottos Lädeli bereit.":"Bi de Onlinebestellig wähled Sie Abholdatum und Uhrziit. De Gschänksharass staht am abgmachte Termin im Biottos Lädeli parat.",
"Kann ich auch mehrere Körbe bestellen?":"Cha ich au mehri Gschänksharass bstelle?",
"Ja. Im Bestellzettel können Sie bis zu 10 Körbe auswählen. Bei grösseren Mengen oder Firmenbestellungen melden Sie sich am besten direkt bei uns.":"Ja. Im Bestellzettel chönd Sie bis zu 10 Gschänksharass ussueche. Bi grössere Menge oder Firmabstellige melded Sie sich am beschte direkt bi üs.",
"Wie bezahle ich?":"Wie bezahl ich?",
"Sie bezahlen bei der Abholung vor Ort – bar oder mit TWINT.":"Sie bezahled bi de Abholig vor Ort – bar oder mit TWINT.",
"Ist Versand möglich?":"Isch Versand möglich?",
"Nein. Die Geschenkskörbe werden im Biottos Lädeli zur Abholung bereitgestellt.":"Nei. D Gschänksharass werde im Biottos Lädeli zur Abholig parat gstellt.",
"Was ist in den Körben?":"Was isch i de Gschänksharass?",
"Die genaue Zusammenstellung sehen Sie direkt bei jedem Korb. Unsere Auswahl umfasst hausgemachte Spezialitäten wie Sirup, Saucen, Essige, Balsamicos und Dörrfrüchte.":"D genau Zämeschtellig gsehnd Sie direkt bi jedem Harass. Üsi Uswahl umfasst huusgmachti Spezialitäte wie Sirup, Saucen, Essig, Balsamicos und Dörrfrücht.",
"Fragen zu einem Korb, einer grösseren Bestellung oder einem passenden Geschenk? Schreiben Sie uns direkt.":"Frage zu eme Gschänksharass, ere grössere Bestellig oder eme passende Gschenk? Schriibed üs direkt.",
"Auf WhatsApp schreiben":"Uf WhatsApp schriibe",
"Öffnungszeiten":"Öffnigsziite",
"Online bestellbar":"Online bstellbar",
"Bis 10 Körbe direkt über den Bestellzettel":"Bis 10 Harass direkt über de Bestellzettel",
"Bestellung angekommen.":"Bestellig isch acho.",
"Danke – wir bereiten Ihren Korb mit Sorgfalt für Sie vor.":"Danke – mir bereited Ihre Gschänksharass sorgfältig für Sie vor.",
"Bestellzettel":"Bestellzettel",
"Bestellung in WhatsApp öffnen":"Bestellig i WhatsApp öffne",
"Zurück zum Lädeli":"Zurück is Lädeli",
"Bezahlen":"Zahle",
"Rechtliches":"Rächtlichs",
"Impressum":"Impressum",
"Datenschutz":"Datenschutz",
"Kontakt":"Kontakt",
"Verantwortlich für den Inhalt":"Verantwortlich für de Inhalt"
};
Object.assign(auditDict,{
"Geschenkskorb Gross & Guet":"Gschänksharass Gross & Guet",
"Zweite Ansicht des Geschenkskorbs Gross & Guet":"Zweiti Ansicht vom Gschänksharass Gross & Guet",
"Geschenkskorb Fein & Guet":"Gschänksharass Fein & Guet",
"Zweite Ansicht des Geschenkskorbs Fein & Guet":"Zweiti Ansicht vom Gschänksharass Fein & Guet",
"Geschenkskorb Chli & Fii":"Gschänksharass Chli & Fii",
"Zweite Ansicht des Geschenkskorbs Chli & Fii":"Zweiti Ansicht vom Gschänksharass Chli & Fii",
"Reife blaue Trauben im Garten in Maischhausen":"Riifi blaui Truube im Garte z Maischhuse",
"Apfelernte bei Biottos":"Öpfelärnte bi Biottos",
"Auswahl an hausgemachten Produkten im Biottos Lädeli":"Uswahl a huusgmachte Produkt im Biottos Lädeli",
"Dörrfrüchte aus dem Biottos Lädeli":"Dörrfrücht us em Biottos Lädeli",
"Tee aus dem eigenen Garten im Biottos Lädeli":"Tee us em eigene Garte im Biottos Lädeli",
"Die Familie hinter Biottos Lädeli":"D Familie hinder em Biottos Lädeli",
"Otto arbeitet im Garten und pflegt Obstbäume":"Otto arbeitet im Garte und pflegt Öpfelbäum",
"Lucia kocht als Privatköchin":"Lucia choche als Privatköchin",
"Beispiel 1 aus Lucias Küche":"Biispiel 1 us de Chuchi vo de Lucia",
"Beispiel 2 aus Lucias Küche":"Biispiel 2 us de Chuchi vo de Lucia",
"Beispiel 3 aus Lucias Küche":"Biispiel 3 us de Chuchi vo de Lucia",
"Beispiel 4 aus Lucias Küche":"Biispiel 4 us de Chuchi vo de Lucia",
"Beispiel 5 aus Lucias Küche":"Biispiel 5 us de Chuchi vo de Lucia",
"Beispiel 6 aus Lucias Küche":"Biispiel 6 us de Chuchi vo de Lucia",
"Beispiel 7 aus Lucias Küche":"Biispiel 7 us de Chuchi vo de Lucia",
"Salate aus Lucias Küche":"Salat us de Chuchi vo de Lucia",
"Kühlschrank mit Produkten im Biottos Lädeli":"Chüelschrank mit Produkt im Biottos Lädeli",
"Produkte aus unserem Garten":"Produkt us üsem Garte",
"Die fünf Schritte vom Apfel zum Süssmost":"Die füf Schritt vom Öpfel zum Süessmoscht",
"Beispiele von Lucias Menüs":"Biispiel us de Menüs vo de Lucia",
"Korb-Fotos zum Wischen":"Harass-Fotos zum Wische",
"Bestellfortschritt":"Bestellfortschritt",
"Abholzeit":"Abholziit",
"Zusammenfassung Ihrer Bestellung":"Zämefassig vo Ihrer Bestellig",
"Bevorzugte Kontaktart":"Bevorzugti Kontaktart"
});
Object.keys(auditDict).forEach(function(k){dict[k]=auditDict[k]});
var reverse={};
Object.keys(dict).forEach(function(k){reverse[dict[k]]=k});
function translateTextNode(n,on){var v=n.nodeValue;if(!v||!v.trim())return;var map=on?dict:reverse;if(map[v.trim()])n.nodeValue=v.replace(v.trim(),map[v.trim()])}
function applyStableI18n(on){document.querySelectorAll("[data-i18n]").forEach(function(el){var pair=i18n[el.getAttribute("data-i18n")];if(pair)el.textContent=pair[on?1:0]});document.querySelectorAll("[data-i18n-aria]").forEach(function(el){var pair=i18n[el.getAttribute("data-i18n-aria")];if(pair)el.setAttribute("aria-label",pair[on?1:0])});document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){var pair=i18n[el.getAttribute("data-i18n-placeholder")];if(pair)el.setAttribute("placeholder",pair[on?1:0])})}
function applyLang(){
 syncDocumentLanguage();var on=lang==="ch";applyStableI18n(on);document.querySelectorAll("*").forEach(function(el){if(el.id==="langSwitch"||el.hasAttribute("data-i18n"))return;el.childNodes.forEach(function(n){if(n.nodeType===3)translateTextNode(n,on)});["aria-label","placeholder","alt","title"].forEach(function(a){if(el.hasAttribute(a)){var v=el.getAttribute(a);var map=on?dict:reverse;if(map[v])el.setAttribute(a,map[v])}})});var b=document.getElementById("langSwitch");if(b){b.classList.toggle("is-ch",on);b.setAttribute("aria-pressed",String(on));b.setAttribute("aria-label",on?"Sproch wechsle – aktuell Schwiizerdütsch, Deutsch aazeige":"Sprache wechseln – aktuell Deutsch, Schwiizerdütsch anzeigen")}if(window.applyHeroStoryLanguage)window.applyHeroStoryLanguage()}
try{lang=localStorage.getItem(LANG_KEY)||"de"}catch(e){}
document.addEventListener("click",function(e){var b=e.target.closest("#langSwitch");if(!b)return;lang=lang==="de"?"ch":"de";try{localStorage.setItem(LANG_KEY,lang)}catch(e){}applyLang()});
window.applyBiottosLanguage=applyLang;
setTimeout(applyLang,0);
})();
(function(){
var heroStoryData=[
{img:"img/obstbäume.jpeg",alt:["Obstbäume im Garten bei Biottos","Öpfelbäum im Garte bi Biottos"],step:["Apfelbaum","Öpfelbaum"],stepText:["wo alles beginnt","wo alles aafangt"],title:["Wo alles beginnt.","Wo alles aafangt."],text:["Im Herbst beginnt unsere Süssmost-Geschichte im Obstgarten – mit reifen Äpfeln, die wir von Hand auflesen.","Im Herbscht fangt üsi Süessmoscht-Gschicht im Obstgarte aa – mit riife Öpfel, wo mir vo Hand ufläse."]},
{img:"img/aepfel-ernte.jpg",alt:["Geerntete Äpfel bei Biottos","Gärnteti Öpfel bi Biottos"],step:["Ernte","Ärnte"],stepText:["von Hand aufgelesen","vo Hand ufglese"],title:["Von Hand aufgelesen.","Vo Hand ufglese."],text:["Wir sammeln die Äpfel sorgfältig ein und achten darauf, dass nur schöne, reife Früchte in die Ernte kommen.","Mir läsed d Öpfel sorgfältig uf und lueged, dass nume schöni, riifi Früchte i d Ärnte chömed."]},
{img:"img/laden-fruechte.jpg",alt:["Früchte aus dem Obstgarten bei Biottos","Frücht us em Obstgarte bi Biottos"],step:["Sorten","Sorte"],stepText:["33 verschiedene Äpfel","33 verschideni Öpfel"],title:["Jede Sorte bringt ihren Charakter mit.","Jedi Sorte bringt ihre Charakter mit."],text:["Süsse, milde, säuerliche und würzige Äpfel kommen zusammen – diese Mischung macht unseren Süssmost besonders.","Süessi, milde, säuerlichi und würzigi Öpfel chömed zäme – die Mischig macht üse Süessmoscht bsunders."]},
{img:"img/laedeli-angebot.jpg",alt:["Auswahl aus dem Lädeli bei Biottos","Uswahl us em Lädeli bi Biottos"],step:["Pressen","Presse"],stepText:["naturtrüb & ohne Zusätze","naturtrüeb & ohni Zuesätz"],title:["Aus Äpfeln wird Süssmost.","Us Öpfel wird Süessmoscht."],text:["Wir pressen die Äpfel naturtrüb und ohne Zusätze. So bleibt der Geschmack der Ernte direkt im Saft erhalten.","Mir presse d Öpfel naturtrüeb und ohni Zuesätz. So bliibt de Gschmack vo de Ärnte direkt im Saft."]},
{img:"img/Mostaufstuhl.jpeg",alt:["Süssmost in Glasflaschen bei Biottos","Süessmoscht i Glasfläsche bi Biottos"],step:["Süssmost","Süessmoscht"],stepText:["vom Apfel ins Glas","vom Öpfel is Glas"],title:["Ein Stück Herbst im Glas.","Es Stück Herbscht im Glas."],text:["Frisch gepresst, naturtrüb und bereit zum Geniessen – die Ernte kommt direkt ins Glas.","Frisch presst, naturtrüeb und parat zum Gniessä – d Ärnte chunnt direkt is Glas."]}
];
var heroStoryIndex=0;
function renderHeroStory(i){
var root=document.getElementById("heroStory");if(!root)return;
heroStoryIndex=Math.max(0,Math.min(heroStoryData.length-1,i));
var d=heroStoryData[heroStoryIndex],img=root.querySelector(".hero-photo-target");
var on=lang==="ch";
if(img){img.src=d.img;img.alt=d.alt[on?1:0]}
root.querySelector("#heroStoryKicker").textContent=d.step[on?1:0];
root.querySelector("#heroStoryTitle").textContent=d.title[on?1:0];
root.querySelector("#heroStoryText").textContent=d.text[on?1:0];
root.querySelectorAll(".hero-story-step").forEach(function(b,n){var item=heroStoryData[n];b.classList.toggle("active",n===heroStoryIndex);if(n===heroStoryIndex)b.setAttribute("aria-current","step");else b.removeAttribute("aria-current");var label=b.querySelector("b"),small=b.querySelector("small");if(label)label.textContent=item.step[on?1:0];if(small)small.textContent=item.stepText[on?1:0]});
var mark=root.querySelector(".hero-story-mark");if(mark)mark.textContent=("0"+(heroStoryIndex+1)).slice(-2)+" / 05";var pos=root.querySelector("#heroStoryPosition");if(pos)pos.textContent=("0"+(heroStoryIndex+1)).slice(-2)+" / 05";var prev=root.querySelector("#heroStoryPrev"),next=root.querySelector("#heroStoryNext");if(prev)prev.disabled=heroStoryIndex===0;if(next)next.disabled=heroStoryIndex===heroStoryData.length-1;
}
document.querySelectorAll(".hero-story-step").forEach(function(b){b.addEventListener("click",function(){renderHeroStory(Number(b.dataset.heroStory))})});var storyRoot=document.getElementById("heroStory");if(storyRoot){var prev=storyRoot.querySelector("#heroStoryPrev"),next=storyRoot.querySelector("#heroStoryNext");if(prev)prev.addEventListener("click",function(){renderHeroStory(heroStoryIndex-1)});if(next)next.addEventListener("click",function(){renderHeroStory(heroStoryIndex+1)})}
window.applyHeroStoryLanguage=function(){renderHeroStory(heroStoryIndex)};
renderHeroStory(0);
})();
(function(){
var NR="41762552256",$=function(x){return document.querySelector(x)};var orderI18nPage={"about.kicker":["Unsere Familie · Biottos Lädeli","Üsi Familie · Biottos Lädeli"],"about.title":["Wo Familie, Garten und Lädeli zusammenkommen.","Wo Familie, Garte und Lädeli zämeghöred."],"otto.kicker":["Otto · Garten & Obstbäume","Otto · Garte & Öpfelbäum"],"otto.title":["40 Jahre Erfahrung, die man im Garten sieht.","40 Jahr Erfahrig, wo mer im Garte gseht."],"lucia.kicker":["Lucia · Privatköchin","Lucia · Privatköchin"],"lucia.title":["Lucia kocht bei Ihnen zu Hause.","Lucia choche bi Ihne dihei."],"lucia.overview":["Auf einen Blick","Uf en Blick"],"lucia.what":["Was Lucia für Sie macht","Was Lucia für Sie macht"],"lucia.contact":["Lucia direkt erreichen","Lucia direkt erreiche"],"lucia.whatsapp":["WhatsApp an Lucia →","WhatsApp a Lucia →"],"lucia.phone":["+41 76 295 52 94 anrufen →","+41 76 295 52 94 alüte →"],"lucia.gallery":["Einblicke in Lucias Küche","Iblick i d Chuchi vo de Lucia"],"lucia.galleryTitle":["Menüs, die Lust aufs Geniessen machen.","Menüs, wo Lust uf Gniessä mache."]};
var K=[{id:"gross",n:"Gross & Guet",p:49.95},{id:"fein",n:"Fein & Guet",p:29.95},{id:"chili",n:"Chli & Fii",p:19.95}];
var orderI18n={
"order.open":["Bestellung öffnen","Bestellig öffne"],
"order.submit":["Bestellung verbindlich senden","Bestellig verbindlich absände"],
"order.sending":["Wird übermittelt …","Wird übermittelt …"],
"order.failed":["Die Bestellung konnte gerade nicht übermittelt werden.","D Bestellig het grad nöd chönne übermittelt werde."],
"order.retry":["Bitte versuchen Sie es nochmals. Ihre Angaben bleiben hier erhalten.","Bitte versueched Sie es nomal. Ihri Angabe bliibed do erhalte."],
"order.successTitle":["Bestellung angekommen.","Bestellig acho."],
"order.successThanks":["Danke – wir bereiten Ihren Korb mit Sorgfalt für Sie vor.","Danke – mir bereited de Gschänksharass sorgfältig für Sie vor."]
};

var ZEITEN=[];(function(){for(var m=8*60;m<=18*60;m+=30){ZEITEN.push(("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2))}})();
function nextT(){var n=new Date(),m=Math.ceil((n.getHours()*60+n.getMinutes()+1)/30)*30;if(m<8*60||m>18*60)m=8*60;return ("0"+Math.floor(m/60)).slice(-2)+":"+("0"+m%60).slice(-2)}
var st={k:K[0].id,n:1,d:"",t:nextT(),step:"k",week:0};
var lastOrderTrigger=null;
var views=["start","koerbe","gartenprodukte","traubensaft","suessmost","essig","doerrfruechte","tee","ueber-uns","laedeli","lucia-kocht","otto-garten","abholung","faq","kontakt"];
var siteNav=$("#siteNav"),menuToggle=$("#menuToggle"),lastMenuTrigger=null,lastNavGroupTrigger=null;
function setMenuOpen(open){
  if(!siteNav||!menuToggle)return;
  siteNav.classList.toggle("is-open",open);
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.setAttribute("aria-label",open?"Menü schliessen":"Menü öffnen");
  if(!open&&lastMenuTrigger&&document.contains(lastMenuTrigger)){lastMenuTrigger.focus();lastMenuTrigger=null}
}
function setNavGroupOpen(group,open){
  if(!group)return;
  group.classList.toggle("is-open",open);
  var trigger=group.querySelector(".nav-products");
  if(trigger)trigger.setAttribute("aria-expanded",String(open));
  if(!open&&lastNavGroupTrigger===trigger)lastNavGroupTrigger=null;
}
function closeNavGroups(restoreFocus){
  if(!siteNav)return;
  siteNav.querySelectorAll(".nav-group.is-open").forEach(function(group){setNavGroupOpen(group,false)});
  if(restoreFocus&&lastNavGroupTrigger&&document.contains(lastNavGroupTrigger)){lastNavGroupTrigger.focus();lastNavGroupTrigger=null}
}
if(menuToggle)menuToggle.addEventListener("click",function(){
  var open=menuToggle.getAttribute("aria-expanded")!=="true";
  if(open)lastMenuTrigger=menuToggle;
  setMenuOpen(open);
});
if(siteNav)siteNav.addEventListener("click",function(e){
  var trigger=e.target.closest(".nav-products");
  if(trigger){
    e.preventDefault();
    var group=trigger.closest(".nav-group");
    var open=!group.classList.contains("is-open");
    closeNavGroups();
    if(open)lastNavGroupTrigger=trigger;
    setNavGroupOpen(group,open);
    return;
  }
  if(e.target.closest("a")){closeNavGroups();lastMenuTrigger=null;setMenuOpen(false)}
});
document.addEventListener("click",function(e){
  if(!siteNav||!menuToggle)return;
  if(menuToggle.getAttribute("aria-expanded")!=="true")return;
  if(e.target.closest("#siteNav,#menuToggle"))return;
  closeNavGroups();
  setMenuOpen(false);
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
    if(menuToggle&&menuToggle.getAttribute("aria-expanded")==="true"){
      e.preventDefault();
      closeNavGroups();
      setMenuOpen(false);
    }else{
      closeNavGroups(true);
    }
  }
});
function show(){var h=(location.hash||"#start").slice(1);if(views.indexOf(h)<0)h="start";views.forEach(function(v){$("#"+v).classList.toggle("on",v===h)});document.querySelectorAll("#siteNav a").forEach(function(a){var active=a.getAttribute("href")==="#"+h;a.classList.toggle("on",active);if(active)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});document.querySelectorAll("#siteNav .nav-group").forEach(function(group){var trigger=group.querySelector(".nav-products");if(trigger)trigger.classList.toggle("on",!!group.querySelector('.nav-submenu a[href="#'+h+'"]'))});document.querySelector(".brand-tab").classList.toggle("on",h==="start");document.body.dataset.currentView=h;closeNavGroups();setMenuOpen(false);window.scrollTo(0,0);var main=document.getElementById("main-content");if(main&&location.hash==="#start")main.focus({preventScroll:true})}
window.addEventListener("hashchange",show);show();
(function(){
var track=document.querySelector("#koerbe .korb-picker-grid"),cards=track?Array.prototype.slice.call(track.querySelectorAll(".korb-card")):[],prev=$("#korbPrev"),next=$("#korbNext"),position=$("#korbPosition");
if(!track||!cards.length||!prev||!next||!position)return;
var current=0;
function update(){
 var tr=track.getBoundingClientRect(),pad=parseFloat(getComputedStyle(track).paddingLeft)||0,target=tr.left+pad,best=Infinity;
 cards.forEach(function(card,i){var distance=Math.abs(card.getBoundingClientRect().left-target);if(distance<best){best=distance;current=i}});
 position.textContent=(current+1)+" / "+cards.length;
 prev.disabled=current===0;next.disabled=current===cards.length-1;
}
function move(delta){var i=Math.max(0,Math.min(cards.length-1,current+delta));track.scrollTo({left:cards[i].offsetLeft-cards[0].offsetLeft,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});current=i;update()}
prev.addEventListener("click",function(){move(-1)});next.addEventListener("click",function(){move(1)});
track.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);update();
})();
function fmt(x){return "CHF "+x.toFixed(2)}
function chips(el,name,items,cur){el.innerHTML=items.map(function(i){return '<label><input type="radio" name="'+name+'" value="'+i.v+'"'+(String(i.v)===String(cur)?" checked":"")+'><span>'+i.l+"</span></label>"}).join("")}
var days=[];
(function(){var b=new Date(),end=new Date(b.getFullYear(),b.getMonth()+3,b.getDate());for(var i=1;;i++){var x=new Date(b.getFullYear(),b.getMonth(),b.getDate()+i);if(x>end)break;if(x.getDay()!==0){var dd=("0"+x.getDate()).slice(-2)+"."+("0"+(x.getMonth()+1)).slice(-2)+".";days.push({date:x,v:["So","Mo","Di","Mi","Do","Fr","Sa"][x.getDay()]+", "+dd+x.getFullYear(),l:(i===1?"Morgen<br>":["So","Mo","Di","Mi","Do","Fr","Sa"][x.getDay()]+"<br>")+dd})}}})();
var dWeek=0,weekBuckets=[];
(function(){var map={};days.forEach(function(x){var dt=x.date,mon=new Date(dt.getFullYear(),dt.getMonth(),dt.getDate()-(dt.getDay()||7)+1),key=mon.getFullYear()+"-"+mon.getMonth()+"-"+mon.getDate();if(!map[key]){map[key]=[];weekBuckets.push(map[key])}map[key].push(x)})})();
function weekItems(){return weekBuckets[dWeek]||[]}
function updatePickupBadge(){
  var label=document.getElementById("nextPickupLabel"),date=document.getElementById("nextPickupDate");
  if(label)label.textContent="Nächster Abholtermin";
  if(date)date.textContent=days[0]?days[0].v:"Bitte Termin auswählen";
}
function updateCheckoutSummary(){
  var o=K.filter(function(x){return x.id===st.k})[0];
  var total=o.p*st.n;
  var basket=document.getElementById("checkoutBasket"),pickup=document.getElementById("checkoutPickup"),qty=document.getElementById("checkoutQty"),sum=document.getElementById("checkoutTotal");
  if(basket)basket.textContent=o.n;
  if(pickup)pickup.textContent=st.d?(st.d+", "+st.t+" Uhr"):"Termin noch nicht gewählt";
  if(qty)qty.textContent=st.n+" ×";
  if(sum)sum.textContent=fmt(total);
}
function setStep(s){st.step=s;render()}
function render(){
chips($("#cK"),"k",K.map(function(o){return{v:o.id,l:"<b style='font-weight:600'>"+o.n.replace("&","&amp;")+"</b><b style='font-weight:600;color:inherit'>"+fmt(o.p)+"</b>"}}),st.k);
chips($("#cN"),"n",Array.from({length:10},function(_,i){var n=i+1;return{v:n,l:n}}),st.n);
var wi=weekItems();
chips($("#cD"),"d",wi,st.d);
$("#cT").innerHTML=ZEITEN.map(function(z){return "<button type=\"button\" class=\"time-chip"+(z===st.t?" selected":"")+"\" data-time=\""+z+"\">"+z+"</button>"}).join("");
document.querySelectorAll(".order-step").forEach(function(el){el.classList.toggle("active",el.dataset.step===st.step)});
var title=$("#orderTitle"),sub=$("#orderSub");
var titles={k:["Welchen Korb möchten Sie?","Welene Gschänksharass möchted Sie?"],d:["Wann möchten Sie ihn abholen?","Wänn möchted Sie en abhole?"],t:["Um welche Uhrzeit?","Um weli Ziit?"],n:["Wie viele möchten Sie?","Wie vieli möchted Sie?"],done:["Fast geschafft.","Fast gschafft."]};
var progress={k:1,d:2,t:3,n:4,done:4};
var progressLabels=[["Korb","Gschänksharass"],["Termin","Termin"],["Zeit","Ziit"],["Anzahl","Aazahl"]];
var tr=function(pair){return pair?(pair[lang==="ch"?1:0]):""};
if(title)title.textContent=tr(titles[st.step])||tr(["Ihre Bestellung","Ihri Bestellig"]);
var activeQ=document.querySelector(".order-step.active .q");if(activeQ&&activeQ!==title){activeQ.textContent=tr(titles[st.step])||activeQ.textContent}
var prog=document.querySelector(".order-progress");if(prog){var pl=progressLabels.map(function(pair){return tr(pair)});prog.querySelectorAll("span").forEach(function(el,i){el.textContent=(i+1)+" "+pl[i];el.classList.toggle("active",i<=(progress[st.step]||1)-1);el.setAttribute("aria-current",i===(progress[st.step]||1)-1?"step":"false")})}
var sel=document.getElementById("orderSelection");if(sel){var so=K.filter(function(x){return x.id===st.k})[0];var parts=[];if(so)parts.push(so.n);if(st.d)parts.push(st.d);if(st.t)parts.push(st.t+" "+tr(["Uhr","Uhr"]));if(st.n)parts.push(tr(["Anzahl: ","Aazahl: "])+st.n);sel.textContent=parts.join(" · ");}
updatePickupBadge();
updateCheckoutSummary();
if(sub)sub.textContent=st.step==="d"?(days[0]?tr(["Nächster Termin: ","Nächste Termin: "])+days[0].v+" · "+tr(["weitere Termine Mo–Sa, 08:00–18:00 Uhr.","wiiteri Termin Mo–Sa, 08:00–18:00 Uhr."]):tr(["Abholung Mo–Sa, 08:00–18:00 Uhr.","Abholig Mo–Sa, 08:00–18:00 Uhr."])):"";
var contactForm=$("#directForm");
if(contactForm){contactForm.hidden=st.step!=="done"}
var prev=$("#weekPrev"),next=$("#weekNext"),weekLabel=$("#weekLabel");
if(prev)prev.hidden=dWeek===0;
if(next)next.hidden=dWeek>=weekBuckets.length-1;
if(weekLabel){var first=wi[0],last=wi[wi.length-1];weekLabel.textContent=first&&last?first.l.split("<br>")[0]+" – "+last.l.replace("<br>"," "):""}
var weekNav=document.querySelector(".week-nav");if(weekNav){weekNav.setAttribute("aria-label","Abholwoche "+(weekLabel?weekLabel.textContent:""))}
upd();if(window.applyBiottosLanguage)window.applyBiottosLanguage()
}
function upd(){
var o=K.filter(function(x){return x.id===st.k})[0],tot=o.p*st.n;
$("#tot").textContent=fmt(tot);
var im=document.querySelector(".k"+(K.indexOf(o)+1)+" .foto img");if(im){$("#sp").src=im.src;$("#sp").alt=im.alt}
$("#sn").textContent=st.n+" × "+o.n;
var ok=st.d&&st.t;
var text="Hallo Biottos Lädeli, ich möchte gerne bestellen:\n\n"+st.n+" x Geschenkskorb "+o.n+" ("+fmt(tot)+")\nAbholung: "+st.d+", "+st.t+" Uhr\n\nBesten Dank!";
$("#msg").textContent=ok?tr(["Ihre Auswahl ist bereit.","D Uuswahl isch parat."]):tr(["Bitte Auswahl abschliessen.","Bitte Uuswahl abschliesse."]);
}
function showPickConfirmation(label){
  var toast=document.createElement("div");
  toast.className="pick-confirm";
  toast.innerHTML="<span>✓</span> "+label+" "+(lang==="ch"?"usgwählt":"ausgewählt");
  document.body.appendChild(toast);
  requestAnimationFrame(function(){toast.classList.add("show")});
  setTimeout(function(){toast.classList.remove("show");setTimeout(function(){toast.remove()},220)},850);
}
$("#cT").addEventListener("click",function(e){var b=e.target.closest(".time-chip");if(!b)return;e.preventDefault();st.t=b.dataset.time;st.step="n";render();requestAnimationFrame(function(){var q=document.querySelector("#cN input[name='n']:checked");if(q){q.focus()}})});
$("#cN").addEventListener("click",function(e){var label=e.target.closest("label"),input=label&&label.querySelector("input[name='n']");if(!input)return;e.preventDefault();st.n=Number(input.value);st.step="done";render();var nameField=$("#customerName");if(nameField){nameField.focus()}});
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
  requestAnimationFrame(function(){var firstDay=document.querySelector("#cD input[name='d']");if(firstDay){firstDay.focus()}});
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
if(n==="d"){requestAnimationFrame(function(){var times=document.querySelector(".time-chip");if(times){times.focus()}})}
else if(n==="t"){requestAnimationFrame(function(){var qty=document.querySelector("#cN input[name='n']:checked");if(qty){qty.focus()}})};
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
  button.textContent=orderI18n["order.sending"][lang==="ch"?1:0];
  fetch(form.action,{
    method:"POST",
    body:new FormData(form),
    headers:{Accept:"application/json"}
  }).then(function(res){
    if(!res.ok) throw new Error("submit");
    showSuccess(o,contact,method);
  }).catch(function(){
    button.disabled=false;
    button.textContent=orderI18n["order.submit"][lang==="ch"?1:0];
    $("#directConfirm").hidden=false;
    $("#directConfirm").innerHTML="<strong>"+orderI18n["order.failed"][lang==="ch"?1:0]+"</strong><p>"+orderI18n["order.retry"][lang==="ch"?1:0]+"</p>";
    $("#directConfirm").focus();
  });
});
function showSuccess(o,contact,method){
  $("#directForm").hidden=true;
  $("#directConfirm").hidden=true;
  document.querySelector("[data-step-back='n']").hidden=true;
  $("#tot").parentElement.hidden=true;
  $("#msg").hidden=true;
  $("#successBasket").textContent=o.n+" · "+fmt(o.p*st.n);
  $("#successPickup").textContent=st.d+", "+st.t+" Uhr";
  $("#successQty").textContent=st.n+" ×";
  $("#successTotal").textContent=fmt(o.p*st.n);
  $("#successContact").textContent=contact;
  var waLink=document.getElementById("successWhatsApp");
  var successTitle=document.querySelector("#successScene .success-title");
  if(successTitle)successTitle.textContent=orderI18n["order.successTitle"][lang==="ch"?1:0];
  var successThanks=document.querySelector("#successScene p");
  if(successThanks)successThanks.textContent=orderI18n["order.successThanks"][lang==="ch"?1:0];
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
});

document.addEventListener("click",function(e){
if(e.target.closest(".korb-card-more"))return;
var a=e.target.closest("[data-open]");if(a){e.preventDefault();lastOrderTrigger=a;open(a.dataset.open);return}
var b=e.target.closest("[data-step-back]");if(b){e.preventDefault();st.step=b.dataset.stepBack;render();requestAnimationFrame(function(){var target=st.step==="k"?"#cK input[name='k']":st.step==="d"?"#cD input[name='d']":st.step==="t"?".time-chip":"#cN input[name='n']:checked";var el=document.querySelector(target);if(el){el.focus()}});return}
if(e.target.id==="weekNext"){dWeek++;render();requestAnimationFrame(function(){var el=document.querySelector("#cD input[name='d']");if(el){el.focus()}})}
if(e.target.id==="weekPrev"){dWeek--;render();requestAnimationFrame(function(){var el=document.querySelector("#cD input[name='d']");if(el){el.focus()}})}
});
function resetOrderState(){
  st.d="";st.t="";st.n=1;st.step="k";dWeek=0;
  $("#successScene").hidden=true;
  $("#directConfirm").hidden=true;
  $("#tot").parentElement.hidden=false;
  $("#msg").hidden=false;
  var form=$("#directForm");
  if(form){form.reset();syncContactMethod();form.hidden=true;var button=form.querySelector("button[type=submit]");if(button){button.disabled=false;button.textContent=orderI18n["order.submit"][lang==="ch"?1:0]}}
  var back=document.querySelector("[data-step-back='n']");if(back)back.hidden=false;
}
function open(k){st.k=k||st.k;resetOrderState();var photoMap={gross:["img/gross-vorne.jpg","img/gross-oben.jpg"],fein:["img/fein-vorne.jpg","img/fein-oben.jpg"],chili:["img/chili-vorne.jpg","img/chili-oben.jpg"]};var pm=photoMap[st.k]||photoMap.gross;var sp=document.getElementById("sp"),sp2=document.getElementById("sp2");if(sp){sp.src=pm[0];sp.alt=K.find(function(o){return o.id===st.k}).n}if(sp2){sp2.src=pm[1];sp2.alt=K.find(function(o){return o.id===st.k}).n+" – zweite Ansicht";sp2.hidden=false}st.step="d";dWeek=0;render();$("#ov").classList.add("on");$("#ov").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";requestAnimationFrame(function(){$("#x").focus()})}
function close(){
  $("#ov").classList.remove("on");$("#ov").setAttribute("aria-hidden","true");document.body.style.overflow="";
  resetOrderState();render();
  if(lastOrderTrigger&&document.contains(lastOrderTrigger)){lastOrderTrigger.focus()}
}
$("#x").addEventListener("click",close);
$("#ov").addEventListener("click",function(e){if(e.target.id==="ov")close()});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){close();return}
  if(e.key!=="Tab"||!$("#ov").classList.contains("on"))return;
  var dialog=$("#ov .sheet");if(!dialog)return;
  var focusable=dialog.querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])');
  if(!focusable.length)return;
  var first=focusable[0],last=focusable[focusable.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
})();

(function(){var lb=document.getElementById("lb"),li=document.getElementById("li"),lx=document.getElementById("lx"),lastTrigger=null;
function close(){lb.classList.remove("on","z");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";if(lastTrigger&&document.contains(lastTrigger)){lastTrigger.focus()}lastTrigger=null}
document.addEventListener("click",function(e){var i=e.target.closest(".foto img, #sp, #sp2");if(i){lastTrigger=i;li.src=i.src;li.alt=i.alt;lb.scrollTop=0;lb.scrollLeft=0;lb.classList.add("on");lb.classList.remove("z");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";requestAnimationFrame(function(){lx.focus()})}});
li.addEventListener("click",function(e){e.stopPropagation();var z=lb.classList.toggle("z");if(z){var r=li.getBoundingClientRect();lb.scrollLeft=(lb.scrollWidth-lb.clientWidth)/2;lb.scrollTop=Math.max(0,(e.clientY-r.top)/Math.max(r.height,1)*lb.scrollHeight-lb.clientHeight/2)}else{lb.scrollTop=0;lb.scrollLeft=0}});
lb.addEventListener("click",function(e){if(e.target===lb)close()});
document.getElementById("lx").addEventListener("click",close);
document.addEventListener("keydown",function(e){if(!lb.classList.contains("on"))return;if(e.key==="Escape"){e.preventDefault();close();return}if(e.key!=="Tab")return;var focusable=lb.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])'),first=focusable[0],last=focusable[focusable.length-1];if(!first)return;if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
})();
(function(){var lg=document.getElementById("lg"),lgx=document.getElementById("lgx"),lastTrigger=null;
function close(){lg.classList.remove("on");lg.setAttribute("aria-hidden","true");document.body.style.overflow="";if(lastTrigger&&document.contains(lastTrigger)){lastTrigger.focus()}lastTrigger=null}
document.addEventListener("click",function(e){var a=e.target.closest("[data-legal]");if(a){e.preventDefault();lastTrigger=a;["impressum","datenschutz"].forEach(function(k){document.getElementById("l-"+k).hidden=(k!==a.dataset.legal)});lg.classList.add("on");lg.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";requestAnimationFrame(function(){lgx.focus()})}});
lgx.addEventListener("click",close);
lg.addEventListener("click",function(e){if(e.target===lg)close()});
document.addEventListener("keydown",function(e){if(!lg.classList.contains("on"))return;if(e.key==="Escape"){e.preventDefault();close();return}if(e.key!=="Tab")return;var focusable=lg.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])'),first=focusable[0],last=focusable[focusable.length-1];if(!first)return;if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
})();
