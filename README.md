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
| Texte, **Preise**, Inhalte der Körbe, Impressum, Datenschutz | `index.html` |
| Farben, Schriften, Abstände | `css/style.css` (Farben oben als Variablen) |
| Bestellzettel: Öffnungs-/Abholzeiten pro Wochentag, Zeitraster, WhatsApp-Nummer | `js/app.js` (`OEFFNUNG`, `SCHRITT`, `NR`) |
| Fotos | `img/` (gleiche Dateinamen ersetzen, Hochformat 3:4) |

Preise und Korbnamen stehen nur noch an **einem** Ort: im `index.html` am Element `.preis` (Attribute `data-korb`, `data-name`, `data-price`). Der Bestellzettel in `js/app.js` liest sie von dort aus. Bei einer Preisänderung `data-price` **und** den angezeigten Text im selben Element anpassen – `js/app.js` muss nicht angefasst werden.

## Hinweise
- Die Seite funktioniert auch ohne JavaScript: Alle Sektionen sind dann sichtbar und die Navigation funktioniert als normale Sprunglinks. Das Ein-/Ausblenden der Ansichten wird erst aktiviert, wenn JavaScript läuft (Klasse `js` auf `<html>`).
- Die Schriften (Young Serif, Literata, Caveat) werden von Google Fonts geladen. Dafür sollte der Datenschutztext ergänzt werden, oder die Schriften werden lokal eingebunden.
- Für die Suchmaschinen nach dem Veröffentlichen zusätzlich `<link rel="canonical" href="https://IHRE-DOMAIN/">` in `index.html` einfügen und die Seite in der Google Search Console anmelden.
