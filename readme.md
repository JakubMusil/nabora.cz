# Nabora.cz

Statická HTML šablona prezentačního webu Nabora.cz pro službu výkonnostního náborového marketingu. Web vysvětluje nabídku kampaní pro získávání zaměstnanců, ukazuje oborová řešení, reference, ceník, FAQ a kontaktní formulář.

## Co repozitář obsahuje

- `index.html` – hlavní landing page šablona.
- `assets/styles.css` – kompilované styly vycházející z Tailwind utility tříd a doplňkových vlastních stylů.
- `assets/styles.scss` – zdrojový přehled proměnných a zrcadlo kompilovaných stylů pro další úpravy tématu.
- `assets/scripts.js` – vanilla JavaScript pro ikony, dropdown navigaci, mobilní menu, FAQ akordeon, formulář a mobilní sticky lištu.
- `assets/logo.svg`, `assets/operator.jpg` – lokální vizuální assety.
- `fonts/` – lokální subsety fontu Inter ve formátu WOFF2.
- `designbook.md` – designový manuál pro navazující podstránky.

## Použité technologie

- HTML5 pro statickou strukturu stránky.
- CSS / SCSS s utility-first přístupem inspirovaným Tailwind CSS.
- Vanilla JavaScript bez frameworku.
- Lucide Icons přes CDN pro jednotný SVG ikon set.
- Font Inter s lokálními WOFF2 soubory.

## Lokální spuštění

Repozitář nevyžaduje build krok. Stačí otevřít `index.html` v prohlížeči, případně spustit jednoduchý lokální server:

```bash
python3 -m http.server 8000
```

Poté otevřete `http://localhost:8000`.
