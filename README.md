# Biottos Lädeli – Website

Statische Website (nur HTML, CSS, JavaScript), kein Build-Schritt, keine Abhängigkeiten.

## Auf GitHub Pages veröffentlichen
1. Neues Repository auf GitHub erstellen und alle Dateien dieses Ordners hochladen (`index.html` liegt im Hauptverzeichnis).
2. Im Repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch `main`, Ordner `/ (root)`.
3. Nach ca. 1 Minute ist die Seite unter `https://<benutzername>.github.io/<repository>/` erreichbar. HTTPS ist automatisch aktiv.
4. Eigene Domain: unter **Settings → Pages → Custom domain** eintragen und beim Domain-Anbieter einen CNAME auf `<benutzername>.github.io` setzen.

## Wo ändere ich was?
| Was | Wo |
|---|---|
| Texte, Preise, Inhalte der Körbe, Impressum, Datenschutz | `index.html` |
| Farben, Schriften, Abstände | `css/style.css` (Farben oben als Variablen) |
| Bestellzettel: Körbe/Preise, Abholzeiten, WhatsApp-Nummer | `js/app.js` (`K`, `ZEITEN`, `NR`) |
| Fotos | `img/` (gleiche Dateinamen ersetzen, Hochformat 3:4) |

Preise stehen an zwei Orten: in `index.html` (Anzeige) und in `js/app.js` (Bestellzettel). Bei einer Preisänderung beide anpassen.

## Hinweise
- Die Schriften (Young Serif, Literata, Caveat) werden von Google Fonts geladen. Dafür sollte der Datenschutztext ergänzt werden, oder die Schriften werden lokal eingebunden.
- Für die Suchmaschinen nach dem Veröffentlichen zusätzlich `<link rel="canonical" href="https://IHRE-DOMAIN/">` in `index.html` einfügen und die Seite in der Google Search Console anmelden.
