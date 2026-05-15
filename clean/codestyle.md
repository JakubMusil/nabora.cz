# Codestyle — Clean šablona Nabora.cz

Tento dokument popisuje **kódové konvence** šablony Clean (adresář `clean/`).
Vychází výhradně z reálného kódu v `clean/*.html`, `clean/assets/clean.scss` a
`clean/assets/clean.css`. Slouží pro autory nových sekcí, oborových podstránek
a údržbu existujících šablon.

Cíl: psát **bloková, znovupoužitelná HTML** a **strukturované SCSS** bez utility
tříd, s jasným pojmenováním podle role v UI a s minimální duplikací.

---

## 1. Struktura adresáře

```
clean/
├── index.html                  # Úvodní stránka — vzorová sestava všech sekcí
├── finance-ucetnictvi.html     # Oborová podstránka
├── it-vyvoj.html               # Oborová podstránka
├── logistika-doprava.html
├── management-c-level.html
├── obchod-sales.html
├── stavebnictvi.html
├── vyroba-sklad.html
├── zdravotnictvi.html
└── assets/
    ├── clean.css               # Servírovaný stylopis (vygenerovaný z .scss)
    └── clean.scss              # Paralelní zdroj — must stay in sync
```

- Šablona je **statická**, bez build kroku. `clean.css` je servírovaný soubor;
  `clean.scss` je paralelní zdroj. **Oba soubory se udržují v synchronu.**
- Lokální assety (logo, fotky operátorky) leží v rootovém `assets/`, šablona je
  načítá relativně přes `../assets/`.
- Fonty Inter se načítají z Google Fonts CDN; Lucide ikony z `unpkg.com`.

---

## 2. Společná pravidla

### 2.1 Jazyk a doménový slovník

- `lang="cs"` na `<html>`.
- Veškerá viditelná i pomocná kopie je v češtině (`aria-label`, `alt`, `title`,
  komentáře v HTML i SCSS).
- Komentáře v kódu se píší česky, věcně, v 1. osobě množ. č. („Spustí přechod
  v dalším framu“), bez emoji.

### 2.2 Formátování (Prettier)

- Odsazení **2 mezery**, žádné taby.
- Uvozovky v HTML atributech **dvojité** (`"…"`), v JS **dvojité** podle vzoru
  inline skriptu.
- Konec souboru: jeden trailing newline.
- Velikost řádku: kód se ručně láme po smysluplných hranicích; Prettier řeší
  zbytek (žádné nastavené overrides).
- Formátování ověřuj příkazem:
  `npx --yes prettier --check clean/<soubor>` (popř. celou cestu k novým souborům).

---

## 3. HTML konvence

### 3.1 Šablona dokumentu

Každý soubor v `clean/` zachovává stejnou kostru:

```html
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>… — Nabora (Clean šablona)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:…"
      rel="stylesheet"
    />
    <meta name="description" content="…" />
    <meta name="keywords" content="…" />
    <link rel="stylesheet" href="assets/clean.css" />
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  </head>
  <body>
    <div class="site-shell">…</div>
    <script>
      (function () { … })();
    </script>
  </body>
</html>
```

- `<!doctype html>` malými písmeny (vzor `index.html:1`).
- `<title>` má tvar „Stránka — Nabora (Clean šablona)“.
- Oborové stránky přidávají `<link rel="preload" as="image" href="../assets/operator.jpg" />`
  pro rychlejší vykreslení callout sekce.

### 3.2 Bloková pravidla pro sekce

1. Každá obsahová sekce je `<section class="…">` s **jednou** funkční třídou
   (`.home-hero`, `.home-steps`, …).
2. Před sekcí stojí HTML komentář s lidským popisem (`<!-- Tři kroky -->`).
3. Uvnitř sekce se používají sémantické tagy (`<article>`, `<details>`, `<form>`)
   a malé jmenované podbloky (např. `.banner`, `.banner-inner`, `.text`, `.stats`).
4. **Nepoužívají se utility třídy** (Tailwind apod.). Styling jde výhradně přes
   třídu sekce + tagové selektory uvnitř (`.home-steps .step h3`).
5. Sdílené primitivy se vkládají s jejich vlastní třídou:
   `.button-primary`, `.button-outline`, `.button-outline-navy`, `.button-ghost-gold`,
   `.icon-tile`, `.kicker`, `.tag-pill`, `.pulse-dot`, `.section-intro`.

### 3.3 Pojmenování tříd

- Třídy v `kebab-case`.
- Sekce začínají rolí stránky: `home-*` (úvodní), `it-*` (oborové sekce — třída
  se historicky jmenuje `it-roles`/`it-pipeline`, ale **používá se na všech
  oborových stránkách**, nepřejmenovávat).
- Stavové modifikátory mají prefix `is-`: `is-open`, `is-featured`, `is-wide`,
  `is-left`, `is-light`, `is-large`, `is-old`, `is-new`, `is-top`, `is-bottom`,
  `is-offcanvas-open`.
- Bloky uvnitř sekce mají krátké funkční názvy: `.grid`, `.card`, `.banner`,
  `.layout`, `.text`, `.stats`, `.stat-value`, `.callout`, `.actions`,
  `.metric`, `.review`, `.plan`, `.plan-sub`, `.plan-cta`, `.plan-badge`,
  `.cover`, `.body`, `.read-more`.

### 3.4 Přístupnost

- Dekorativní ikony a SVG dostávají `aria-hidden="true"`.
- Interaktivní prvky bez viditelného textu mají `aria-label`
  (`<a class="brand" aria-label="Nabora domů">`, `.menu-toggle aria-label="Otevřít menu"`).
- Submenu používá pár `aria-haspopup`, `aria-expanded`, `aria-controls`.
- Off-canvas má `aria-hidden`, JS překlápí podle stavu.
- Off-canvas panel je výchozí stav `hidden`; třídu `is-open` přidává JS až po
  zobrazení (vstupní animace).
- Nativní `<details>`/`<summary>` se používá pro FAQ; nikdy se nenahrazuje JS
  klonem.
- `<form>` má `<label>` pro každý input. Tlačítka mají `type="…"` (`button` /
  `submit`).

### 3.5 Ikony

- HTML zápis Lucide ikony:
  `<i data-lucide="ikona-name" style="width: 20px; height: 20px" aria-hidden="true"></i>`.
- Velikost se zapisuje **inline** přes `style`, ne přes třídu — odpovídá vzoru
  šablony a stylem `i[data-lucide] { display: inline-flex }` se chová konzistentně.
- Po načtení skriptů se ikony aktivují přes `lucide.createIcons()`. Když JS
  překresluje ikonu (např. hamburger → křížek), starý element nahradí novým
  `<i data-lucide="…">` a znovu zavolá `createIcons()`.
- Pro mapování ikon oborů viz designbook (sekce 8).

### 3.6 Odkazy a navigace

- Telefonní odkazy v jednotném formátu `tel:+420722722712`.
- Vnitřní kotvy: `#sluzby`, `#oborove`, `#cenik`, `#vysledky`, `#faq`, `#kontakt`,
  `#jak`, `#role`.
- Mezi-stránkové odkazy v rámci `clean/`: relativní (`it-vyvoj.html`,
  `index.html`). Submenu na `index.html` cestuje přes `../` na případné root
  podstránky pouze tam, kde tak činí vzorové soubory; v rámci čistě clean
  větve preferuj soubory uvnitř `clean/`.

### 3.7 Inline skript

- Jediný `<script>` na konci `<body>` v podobě IIFE: `(function () { … })();`.
- Funkce uvnitř: výchozí `var`, krátké názvy (`open`, `close`, `setToggleIcon`).
- Skript je **stejný napříč všemi soubory v `clean/`** — pokud upravuješ chování
  navigace nebo off-canvasu, upravuj **všechny** stránky najednou.
- Žádné externí JS knihovny mimo Lucide.

---

## 4. SCSS / CSS konvence

### 4.1 Organizace `clean.scss`

Soubor je dělen do **7 očíslovaných sekcí** s velkými hlavičkovými komentáři:

1. Designové tokeny (proměnné: barvy, šířky, rádia, stíny, transitions).
2. Základ stránky (reset, typografie, `.site-shell`, `.container*`).
3. Sdílené primitivy (`.kicker`, ikony, `.section-intro`, tlačítka, `.icon-tile`,
   `.tag-pill`, `.pulse-dot`, `@keyframes pulse-dot`).
4. Top bar a hlavička s navigací (`.topbar`, `.site-header`, `.offcanvas`).
5. Obsahové sekce (`.home-hero` … `.home-callout`, `.it-roles`, `.it-pipeline`).
6. Patička a plovoucí mobilní lišta (`.site-footer`, `.mobile-call-bar`).
7. Responzivní breakpointy (`@media`).

**Nové sekce vkládej do bodu 5** v pořadí, ve kterém se objevují na stránce, a
komentuj očíslováním `5.NN`. Nové responsivity přidávej do bodu 7 do existujících
breakpointů, ne do vlastních.

### 4.2 Proměnné a tokeny

- Veškeré barvy/rádia/stíny/přechody musí být **SCSS proměnné** (`$color-*`,
  `$radius-*`, `$shadow-*`, `$transition-*`).
- Nikdy nezapisuj hex barvu přímo do selektoru. Když chybí token, přidej ho do
  sekce 1 a používej.
- Výjimky pro pevné hodnoty: jen tam, kde už šablona má jednorázové hodnoty
  (např. `color: #475569` v patičce, `background: #f8fafc` v hover off-canvasu) —
  zachovej je, nepřepisuj. Pro **nové** styly preferuj token.

### 4.3 Nesting

- Nesting je povolený a používá se hojně (např. `.site-header { .container { … } }`,
  `&:hover { … }`).
- **Maximální hloubka** ~3–4 úrovně, vždy s jasnou rolí. Když roste, rozpadni do
  samostatných selektorů.
- `&:hover`, `&::before`, `&::after`, stavové modifikátory `&.is-open` patří do
  bloku rodiče.

### 4.4 Pořadí vlastností

Šablona nemá strikt order, ale držíme se přirozeného toku:

1. Pozicování (`position`, `top/right/bottom/left`, `inset`, `z-index`).
2. Display & flow (`display`, `grid-template-*`, `flex-*`, `gap`).
3. Rozměry (`width`, `height`, `min-*`, `max-*`, `aspect-ratio`).
4. Padding / margin.
5. Pozadí / border / radius / box-shadow.
6. Typografie (`font-*`, `color`, `text-*`, `letter-spacing`).
7. Transformace a přechody (`transform`, `transition`, `animation`).

### 4.5 Tlačítka přes `@extend`

Nová tlačítková varianta: `@extend .button-base` + vlastní barva/border/hover.
**Neopakuj** padding, výšku, font-weight a transition v každém modifikátoru.

### 4.6 Media query

- Mobile-first: bazální styly bez `@media`, breakpointy přidávají větší rozložení.
- Aktivní breakpointy:
  - `@media (min-width: 720px)` — víceslupcové gridy.
  - `@media (min-width: 900px)` — desktop navigace, čtyřsloupcové gridy.
  - `@media (max-width: 820px)` — skrytí topbaru, zobrazení mobilní lišty.
- **Nedefinuj** vlastní hodnoty. Nové pravidlo dej do existujícího bloku.

### 4.7 Vztah `.scss` ↔ `.css`

- `clean.css` je generovaná podoba `clean.scss`. Změny dělej v `.scss` a do `.css`
  promítni odpovídající výstup (SCSS proměnné rozvinuté na hex/rgba hodnoty,
  vnořené selektory rozbité do plochých).
- Komentáře `/* …  */` a sekce 1–7 zachovej v obou souborech tak, jak jsou.

---

## 5. Konvence pro nové oborové stránky

Vzorem je `it-vyvoj.html`. Při tvorbě nové oborové stránky:

1. Zkopíruj soubor a uprav `<title>`, `<meta description>`, `<meta keywords>`.
2. Zachovej pořadí sekcí:
   - `home-hero` → `home-steps` → `it-roles` → `it-pipeline` → `home-results`
     → `home-faq` → `home-contact` → `home-callout`.
3. Měň pouze **obsah** (texty, ikony, čísla) — ne třídy a strukturu.
4. Ikony v hero/role volej z Lucide podle mapování v designbooku.
5. Topbar i submenu zachovej beze změny — všechny stránky v `clean/` mají
   identickou hlavičku.
6. `<script>` na konci `<body>` musí být **identický** napříč všemi stránkami.

---

## 6. Validace před odevzdáním

Před commitem ověř:

```bash
# 1. Syntax inline skriptů (lze izolovaně přes node --check na vzorovém scripts.js v rootu)
node --check assets/scripts.js

# 2. Formátování nově upravených souborů
npx --yes prettier --check clean/<změněné-soubory>

# 3. Pro celkový smoke test stránek otevři v prohlížeči a klikni na:
#    - hamburger menu (open/close + Escape),
#    - desktop submenu Oborové řešení (hover + klik mimo),
#    - FAQ akordeon,
#    - libovolnou interní kotvu (smooth scroll).
```

Žádný build, žádné testy. Validuje se primárně `prettier --check` a vizuální
kontrola.

---

## 7. Co nedělat

- ❌ Nezavádět utility-class systémy (Tailwind, Bootstrap apod.) do `clean/`.
- ❌ Nepřejmenovávat třídy `.it-roles` / `.it-pipeline` — používají je všechny
  oborové stránky, nejen IT.
- ❌ Nepřidávat nový build krok ani závislosti. Šablona zůstává statická.
- ❌ Nepřidávat hex barvy do selektorů bez SCSS tokenu.
- ❌ Neduplikovat sdílené primitivy (`.button-*`, `.icon-tile`, `.kicker`,
  `.section-intro`, `.tag-pill`, `.pulse-dot`).
- ❌ Neměnit `clean.css` bez odpovídající změny v `clean.scss` (a naopak).
- ❌ Nepoužívat jiné ikon sety než Lucide.
- ❌ Nevyplňovat breakpointy mimo `720px` / `820px` / `900px` bez konzultace.
- ❌ Nezbavovat se `aria-*` a `aria-hidden` na dekorativních ikonách.
