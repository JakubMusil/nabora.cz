# Designbook — Clean šablona Nabora.cz

Tento designbook popisuje vizuální systém **čisté blokové varianty** webu, která žije
v adresáři `clean/`. Vychází výhradně z HTML šablon (`clean/*.html`) a stylů
`clean/assets/clean.scss` / `clean/assets/clean.css`. Slouží jako vodítko při tvorbě
nových sekcí, podstránek a oborových řešení v rámci této šablony.

Cíl šablony **Clean**: vizuálně shodný klon webu, ale s **blokovým, znovupoužitelným HTML**
bez utility tříd. Každá sekce má jednu nadřazenou třídu odpovídající její funkční roli
(`.home-hero`, `.home-pricing`, …), uvnitř se stylují přímo elementy nebo malé jmenované
podbloky.

---

## 1. Značka a tón

- Značka působí jako výkonnostní marketingová agentura specializovaná na nábor.
- Komunikace je přímá, věcná a orientovaná na měřitelné výsledky.
- Texty zdůrazňují rychlost, výkon, transparentní měření a získávání relevantních
  kandidátů.
- Preferovaný jazyk CTA: „Prohlédnout balíčky →“, „Nezávazná konzultace“, „Volat hned“,
  „Pojďme to probrat“.
- Doplňující doprovodný text používá tykání ve formě 2. osoby plurálu (vykání) —
  „Doručíme vaši nabídku…“.

---

## 2. Designové tokeny

Tokeny jsou definovány jako SCSS proměnné v `clean/assets/clean.scss` (sekce „1.
Designové tokeny“) a po kompilaci se přepisují na hex hodnoty v `clean.css`. Jakákoli
nová barva, rádius nebo stín se přidává nejprve sem.

### 2.1 Barvy

#### Navy (primární tmavá)

| Token                | Hodnota   | Použití                                        |
| -------------------- | --------- | ---------------------------------------------- |
| `$color-navy`        | `#0b1d3a` | Hlavní nadpisy, patička, ikony v tmavém menu   |
| `$color-navy-soft`   | `#0f3460` | Konec gradientu, sekundární tmavá plocha       |
| `$color-navy-deep`   | `#073256` | Start gradientů (pricing, CTA banner, callout) |
| `$color-navy-bright` | `#185c95` | Konec gradientu navy → bright                  |

#### Gold / Orange (akcent)

| Token                      | Hodnota                 | Použití                              |
| -------------------------- | ----------------------- | ------------------------------------ |
| `$color-gold`              | `#f48225`               | Primární CTA, kicker, ikony, akcenty |
| `$color-gold-hover`        | `#de7419`               | Hover stav primárních tlačítek       |
| `$color-gold-bright`       | `#f48225`               | Akcent v tmavých sekcích             |
| `$color-gold-bright-hover` | `#de7419`               | Hover akcentu v tmavých sekcích      |
| `$color-gold-soft`         | `#f9a05c`               | Kickery a odkazy na tmavém podkladu  |
| `$color-gold-tint`         | `rgba(244,130,37,0.12)` | Jemné pozadí callout/badge           |

#### Text a linky

| Token                | Hodnota   | Použití                                   |
| -------------------- | --------- | ----------------------------------------- |
| `$color-text`        | `#334155` | Tělo textu                                |
| `$color-text-strong` | `#1f2937` | Hodnoty inputů, výraznější text           |
| `$color-muted`       | `#64748b` | Vedlejší/podpora text, leady              |
| `$color-muted-soft`  | `#94a3b8` | Drobné popisky, meta, štítky              |
| `$color-line`        | `#f1f5f9` | Jemné oddělovače (border karet, hlavička) |
| `$color-border`      | `#e5e7eb` | Border karet a inputů                     |

#### Pozadí

| Token                | Hodnota   | Použití                         |
| -------------------- | --------- | ------------------------------- |
| `$color-bg`          | `#f7f9fa` | Střídání světlých sekcí         |
| `$color-bg-warm`     | `#f5f0e8` | Start „starý přístup“ gradientu |
| `$color-bg-warm-mid` | `#ede7db` | Střed warm gradientu            |
| `$color-bg-warm-end` | `#e8e0d2` | Konec warm gradientu            |
| `$color-white`       | `#ffffff` | Karty, hlavní podklad           |

#### Stavové

| Token                | Hodnota                 | Použití                           |
| -------------------- | ----------------------- | --------------------------------- |
| `$color-success`     | `#22c55e`               | Pulse-dot „Jsme na telefonu“      |
| `$color-danger-soft` | `rgba(248,113,113,0.7)` | Ikona ✕ v compare (starý přístup) |
| `$color-star`        | `#fbbc05`               | Hvězdy u recenzí                  |

> **Pravidlo:** Nové barvy nikdy nezapisovat přímo do selektorů. Vždy přidat token
> do sekce 1 v `clean.scss` a používat proměnnou.

### 2.2 Šířky kontejneru

| Token               | Hodnota | Třída               | Použití                 |
| ------------------- | ------- | ------------------- | ----------------------- |
| `$container-width`  | `80rem` | `.container`        | Většina sekcí           |
| `$container-mid`    | `72rem` | `.container-mid`    | Partner pruh, blok loga |
| `$container-narrow` | `64rem` | `.container-narrow` | Hero text, úzké úvody   |

Všechny kontejnery používají `width: min(100% - 2rem, $token)` a `margin-inline: auto`.

### 2.3 Rádia

| Token          | Hodnota   | Typické použití                             |
| -------------- | --------- | ------------------------------------------- |
| `$radius-sm`   | `0.5rem`  | Drobné prvky (inputy, malé tlačítkové boxy) |
| `$radius-md`   | `0.75rem` | Menu, drobné karty                          |
| `$radius-lg`   | `1rem`    | Středně velké karty                         |
| `$radius-xl`   | `1.25rem` | FAQ položky, video karta, callout           |
| `$radius-2xl`  | `1.5rem`  | Hlavní karty (step, plan, post, channel, …) |
| `$radius-pill` | `999px`   | Štítky (`.tag-pill`, `.plan-badge`)         |

### 2.4 Stíny

| Token                | Hodnota                           | Použití                       |
| -------------------- | --------------------------------- | ----------------------------- |
| `$shadow-card`       | `0 2px 10px rgba(15,23,42,0.04)`  | Karty v klidovém stavu        |
| `$shadow-card-hover` | `0 16px 32px rgba(15,23,42,0.08)` | Hover karet (step/plan/post…) |
| `$shadow-emphasis`   | `0 16px 32px rgba(11,29,58,0.2)`  | Tmavé CTA panely, role-cta    |

### 2.5 Přechody

| Token               | Hodnota      | Použití                             |
| ------------------- | ------------ | ----------------------------------- |
| `$transition-base`  | `0.25s ease` | Inputy a jemné stavové změny        |
| `$transition-hover` | `0.3s ease`  | Hover karet, tlačítek, transformací |

Drobné stavy menu/dropdownu používají krátké `0.15s–0.2s ease`. Animace mají
být **krátké a jemné**, nikdy déle než ~300 ms u jedné fáze.

---

## 3. Typografie

- **Primární font:** Inter (přes Google Fonts variabilní řez `100..900`).
- **Fallbacky:** `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Hladkost písma:** `-webkit-font-smoothing: antialiased` na `body`.
- **Řádkování:** `body { line-height: 1.6 }`; tělo a perexy `1.55`–`1.6`.

### 3.1 Stupnice

Velikosti jsou definovány přímo u sekcí. Většinou platí:

| Element                      | Velikost                        | Barva                      |
| ---------------------------- | ------------------------------- | -------------------------- |
| `h1` (hero)                  | `clamp(1.9rem, 5vw, 3.6rem)`    | `$color-navy`              |
| `h2` (sekce)                 | `clamp(1.6rem, 3.2vw, 2.25rem)` | `$color-navy`              |
| `h2` (CTA banner / pipeline) | `clamp(1.5rem, 3vw, 2.1rem)`    | `$color-white` / navy      |
| `h3` (karty)                 | `1rem`–`1.125rem`               | `$color-navy`              |
| Lead / perex                 | `1.0625rem`                     | `$color-muted`             |
| Tělo karet                   | `0.875rem`–`0.9rem`             | `$color-muted` / `#4b5563` |
| Štítky/meta                  | `0.7rem`–`0.8125rem`            | dle role                   |

### 3.2 Kicker (malý nadpisek nad sekcí)

Pravidlo třídy `.kicker`: **nikdy nemá horizontální margin**, který by ho odsunul ze
středu rodiče. Sekce nastavují pouze `margin-bottom`. Standardní podoba:

- `font-size: 0.8125rem` (resp. `0.7rem`–`0.875rem` dle kontextu).
- `font-weight: 700`.
- `letter-spacing: 0.18em`.
- `text-transform: uppercase`.
- Barva podle podkladu: `$color-gold` na světle, `$color-gold-soft` na tmavě.

### 3.3 Akcent v nadpisech

`h1 .accent` v hero je zlatě zvýrazněná druhá věta nadpisu (`color: $color-gold`).
Doporučuje se rozdělit nadpis na dvě věty a druhou obalit `<span class="accent">`.

---

## 4. Layout a struktura stránky

### 4.1 Šablona stránky

Každý dokument v `clean/` má jednotnou kostru:

```
<!doctype html>
<html lang="cs">
  <head>… preconnect Inter, Lucide CDN, clean.css …</head>
  <body>
    <div class="site-shell">
      <div class="topbar">…</div>          <!-- Top bar -->
      <header class="site-header">…</header>
      <main>…</main>                       <!-- pozn.: index používá <main> implicitně přes sekce -->
      <footer class="site-footer">…</footer>
      <div class="mobile-call-bar">…</div>
    </div>
    <script>(function () { … })();</script>
  </body>
</html>
```

- `.site-shell` je flex kontejner přes celou výšku okna; patička se přilepuje dolů
  pomocí `margin-top: auto` v `.site-footer`.
- Obsahové sekce jsou samostatné `<section class="…">` se sémantickým komentářem
  v HTML (`<!-- Tři kroky -->`).
- `.container`, `.container-mid`, `.container-narrow` se používají uvnitř každé sekce
  pro řízení šířky.

### 4.2 Vertikální rytmus

Standardní padding sekcí:

- Hlavní obsahové sekce: `5rem 0`.
- Hero (`.home-hero`): `6rem 0 5rem` (od `min-width: 900px` `8rem 0 8rem`).
- Tmavé bannery: `4rem 0` (callout) / `5rem 0` (CTA banner).
- Pruh partnerů a log: `3rem 0` / `3.5rem 0`.

Sekce střídají pozadí v rytmu **bílá → `$color-bg` (světle šedá) → bílá**, výjimkou
jsou tmavé CTA bannery a hero.

### 4.3 Breakpointy

Pouze tři aktivní breakpointy v `clean.scss` (sekce 7):

| Šířka              | Co se mění                                                 |
| ------------------ | ---------------------------------------------------------- |
| `max-width: 820px` | Topbar se skrývá, ukazuje se `.mobile-call-bar`            |
| `min-width: 720px` | Sekce přepínají do víceslupcových mřížek (2–3 sloupce)     |
| `min-width: 900px` | Desktop navigace, čtyřsloupcové gridy, hero `8rem` padding |

Nové sekce s gridem **musí přidat své pravidlo do těchto media query bloků**, ne do
vlastních fragmentů uvnitř sekce.

---

## 5. Komponenty (primitiva)

### 5.1 Tlačítka

Definovaná v sekci „3. Sdílené primitivy“ v `clean.scss`. Základ `.button-base`
nese rozměry, padding, font, přechody. Modifikátory přes `@extend`:

- `.button-primary` — zlaté plné CTA s bílým textem; hover přidává jemný stín.
- `.button-outline` — bílé pozadí, šedý rámeček, navy text; hover oranžový rámeček.
- `.button-outline-navy` — průhledné, silnější navy rámeček (`2px`).
- `.button-ghost-gold` — textový odkaz se zlatou barvou; podtržení při hoveru.

Velikost: `min-height: 2.75rem`, `padding: 0 1.4rem`, `border-radius: 0.625rem`,
`font-weight: 600`. Tlačítka mohou obsahovat Lucide ikonu (gap `0.5rem`).

### 5.2 Ikonové prvky

- `.icon-tile` — čtvercový rámeček `2.5rem × 2.5rem` s ikonkou. Modifikátory
  `.is-light` (jemný gold tint) a `.is-large` (`3rem`). Používán u kroků, kanálů,
  oborů, partnerů.
- `i[data-lucide]` / `svg.lucide` — Lucide ikona; styl `inline-flex`, zarovnání
  baseline. Velikost se nastavuje inline `style="width: NPX; height: NPX"`.
- V hlavičce karty `.it-pipeline .callout .icon-tile` má vyplněné zlaté pozadí.

### 5.3 Štítek `.tag-pill`

Pill (`$radius-pill`) s tintem `$color-gold-tint` a textem `$color-gold`. Používá se
pro „NEJOBLÍBENĚJŠÍ“ a podobné štítky.

### 5.4 Pulse dot

`.pulse-dot` — animovaný zelený kruh (klíčový snímek `pulse-dot`) v topbaru a
mobilní liště „Jsme na telefonu“.

### 5.5 Section intro

`.section-intro` je sdílený blok pro úvod sekce: kicker + `h2` + nepovinný odstavec.

- Výchozí varianta je centrovaná, `max-width: 42rem`, `margin: 0 auto 3rem`.
- Modifikátor `.is-left` zarovnává doleva a ruší automatický margin (`margin-inline: 0`).

---

## 6. Layoutové sekce

### 6.1 Topbar `.topbar`

- Tmavě navy pruh s informací „Jsme právě na telefonu“ a telefonem.
- Centrovaný flex layout, `gap: 0.5rem`, `flex-wrap: wrap`.
- Odkaz `a` je `$color-gold-soft`, hover bílá s podtržením.
- Skrývá se na zařízeních `max-width: 820px`.

### 6.2 Hlavička `.site-header`

- Sticky bílá hlavička `min-height: 4rem` s jemným spodním borderem `$color-line`.
- `backdrop-filter: blur(8px)` + `background: rgba(255,255,255,0.96)`.
- Brand logo: `<img src="…logo.svg" alt="Nabora">`, výška `3rem`.
- `nav.primary` — desktopová navigace; viditelná od `min-width: 900px`.
- `.has-sub` — desktopové podmenu „Oborové řešení“:
  - rozbalovací panel `.submenu`, `width: min(40rem, 90vw)`, mřížka 2 sloupce;
  - `::before` „neviditelný most“ vyplňuje mezeru mezi triggerem a panelem;
  - `aria-expanded` se přepíná JS, chevron rotuje o 180°.
- `.menu-toggle` — mobilní hamburger; animace tří proužků do křížku.

### 6.3 Off-canvas menu `.offcanvas`

- Mobilní rozbalovací panel zprava, `width: min(22rem, 88vw)`.
- Backdrop `rgba(11,29,58,0.45)`, panel s plnou bílou.
- `.offcanvas-sub-trigger` rozbaluje vnořené sekce (Oborové řešení) se stejnými
  tile ikonami jako v desktop podmenu.
- Tělo se uzamyká přidáním třídy `is-offcanvas-open` na `<body>`.

### 6.4 Patička `.site-footer`

- Dva-sloupcové uspořádání (brand + linky) od `min-width: 900px`.
- `.links` se rozpadá do tří sloupců.
- Spodní meta řádek (`.meta`) obsahuje copyright a navigaci právních stránek.

### 6.5 Mobilní call bar `.mobile-call-bar`

- Fixní lišta zespodu, viditelná pouze pod `820px`.
- Levá strana: `.pulse-dot` + popisek; pravá strana: zlaté tlačítko `tel:`.

---

## 7. Obsahové sekce

Sekce mají třídu odpovídající jejich roli na úvodní stránce; oborové stránky některé
sekce přebírají (např. `.home-hero`, `.home-steps`, `.home-results`, `.home-faq`,
`.home-contact`, `.home-callout`) a doplňují vlastní (`.it-roles`, `.it-pipeline`).

| Sekce          | Třída              | Role                                                    |
| -------------- | ------------------ | ------------------------------------------------------- |
| 5.1 Hero       | `.home-hero`       | H1 + lead + dvě CTA, dekorativní linie a tečky          |
| 5.2 Partneři   | `.home-partners`   | Pruh certifikovaných platforem (Meta, Google, LinkedIn) |
| 5.3 Tři kroky  | `.home-steps`      | 3 kartičky procesu (Krok 01–03)                         |
| 5.4 Compare    | `.home-compare`    | „Starý vs. nový přístup“, dvě karty (warm + tmavá)      |
| 5.5 Kanály     | `.home-channels`   | Síť reklamních kanálů, 2 sloupce                        |
| 5.6 Výsledky   | `.home-results`    | Velké metriky + 3 recenze s hvězdami                    |
| 5.7 Loga       | `.home-logos`      | Pruh log firem (greyscale → barva při hoveru)           |
| 5.8 CTA banner | `.home-cta-banner` | Tmavý gradient s CTA                                    |
| 5.9 Pricing    | `.home-pricing`    | 3 balíčky, prostřední `.is-featured` (tmavý gradient)   |
| 5.10 Metriky   | `.home-metrics`    | 4 menší metrické karty                                  |
| 5.11 Obory     | `.home-industries` | Mřížka oborových odkazů s ikonami                       |
| 5.11a Role     | `.it-roles`        | Oborový seznam pozic + tmavý CTA panel `.role-cta`      |
| 5.11b Pipeline | `.it-pipeline`     | Karta text + statistiky pro průběžný sběr kandidátů     |
| 5.12 FAQ       | `.home-faq`        | Akordeon `<details>` + video karta                      |
| 5.13 Blog      | `.home-blog`       | 3 články s `.cover` SVG a `.read-more`                  |
| 5.14 Kontakt   | `.home-contact`    | Intro + výhody (`.perks`) + formulář                    |
| 5.15 Callout   | `.home-callout`    | Tmavý banner s telefonem a fotkou account manažerky     |

### 7.1 Karta — sdílená logika

Karty (`.step`, `.channel`, `.review`, `.plan`, `.metric`, `.industry`, `.role`,
`.post`) sdílí:

- Pozadí `$color-white`, border `1px solid $color-line`, rádius `$radius-2xl`.
- Stín `$shadow-card` (nebo `none` u některých variant).
- Hover: `translateY(-3px)` nebo `-4px` + `$shadow-card-hover`, transition
  `$transition-hover` na `transform` a `box-shadow`.
- Případná `h3` mění při hoveru barvu na `$color-gold`.

### 7.2 Tmavé bloky

Tmavé sekce/panely (`.home-compare .card.is-new`, `.home-cta-banner .banner`,
`.home-pricing .plan.is-featured`, `.it-roles .role-cta`, `.home-faq .video-card`,
`.home-callout .banner`) sdílí gradient
`linear-gradient(135deg, $color-navy-deep|$color-navy 0%, $color-navy-bright|$color-navy-soft 100%)`
a stín `$shadow-emphasis`. Texty používají bílou + `rgba(255,255,255,0.78)` pro
sekundární.

### 7.3 Formulář (`.home-contact`)

- Inputy: `height: 2.75rem`, `border: 1px solid $color-border`, `border-radius: 0.5rem`.
- Focus: zlatý rámeček + glow `0 0 0 3px rgba(244,130,37,0.2)`.
- Submit tlačítko: zlaté plné, plná šířka, `height: 3rem`.
- Vedle formuláře `.perks` — odrážky s ✓ ikonou v zlatém kruhovém badgi.

### 7.4 FAQ akordeon

- Používá nativní `<details>` / `<summary>`.
- Skrývá výchozí marker (`::-webkit-details-marker { display: none }`).
- Vlastní indikátor `+` / `−` v `summary::after`.

---

## 8. Ikonografie

- Set: **Lucide Icons** (`https://unpkg.com/lucide@latest/dist/umd/lucide.js`).
- Styl: lineární SVG, `stroke-width: 2`, kulaté zakončení/spoje.
- HTML zápis: `<i data-lucide="ikona" style="width: 20px; height: 20px"></i>`,
  inicializace v IIFE skriptu (`lucide.createIcons()`).
- Velikosti:
  - Navigace / submenu / mobilní lišta: `12–20 px`.
  - Karty, kroky, kanály: `20 px`.
  - Industry tiles a partner tiles: `20–24 px`.
- Doporučené mapování oborů (sjednoceno mezi headerem, offcanvasem a `home-industries`):
  - IT & Vývoj: `code-2`
  - Finance & Účetnictví: `chart-no-axes-column`
  - Logistika & Doprava: `truck`
  - Výroba & Sklad: `warehouse`
  - Management & C-level: `building-2`
  - Zdravotnictví: `heart`
  - Stavebnictví: `hard-hat`
  - Obchod & Sales: `handshake`

---

## 9. Interakce a chování

- Submenu „Oborové řešení“ se otevírá hoverem a klikem; zavírá ho klik mimo i klávesa `Escape`.
- `requestAnimationFrame` u off-canvas zajišťuje plynulý vstupní přechod.
- Off-canvas blokuje scroll těla třídou `is-offcanvas-open` na `<body>`.
- Smooth scroll je zapnutý globálně (`html { scroll-behavior: smooth }`).
- Anchor odkazy v navigaci míří na `id` sekcí (`#sluzby`, `#oborove`, `#cenik`,
  `#vysledky`, `#faq`, `#kontakt`).
- Hover přechody: `0.15s` u submenu/menu, `0.25s` u inputů, `0.3s` u karet a tlačítek.

---

## 10. Pravidla pro nové sekce a podstránky v Clean

1. **Žádné utility třídy.** Sekce má jednu vlastní třídu (`.nazev-sekce`) a styluje
   přímo elementy nebo malé jmenované podbloky uvnitř.
2. Začni komentářem v HTML (`<!-- Nadpis sekce -->`) a obal sekci do `<section class="…">`.
3. Pro úvod sekce použij `.section-intro` (případně s `.is-left`).
4. Sdílené primitivy (`.button-primary`, `.icon-tile`, `.kicker`, `.tag-pill`,
   `.pulse-dot`, `.section-intro`) **neduplikuj**, použij existující.
5. Karty musí dědit společný hover vzor (`translateY` + `$shadow-card-hover`).
6. Tmavé bloky používají sdílený gradient navy → navy-bright a stín
   `$shadow-emphasis`.
7. Tokeny (barvy, rádia, stíny, přechody) **vždy přes SCSS proměnné**, nikdy
   napevno. Nový token přidat do sekce 1 v `clean.scss`.
8. Responsivita: pravidla pro grid přidávat do existujících media-query bloků
   `min-width: 720px` a `min-width: 900px` (sekce 7 v `clean.scss`).
9. Nové ikony musí být z **Lucide**. Žádné jiné sety, žádné rastry.
10. Oborové podstránky používají strukturu Hero → `home-steps` → `it-roles`
    → `it-pipeline` → `home-results` → `home-faq` → `home-contact` → `home-callout`.
    Mění pouze obsah a ikony, ne třídy.
11. Po zásahu do `clean.scss` udržuj `clean.css` v sync — `clean.css` je servírovaný
    soubor, `clean.scss` paralelní zdroj.
12. Všechny interní odkazy musí vést na existující kotvu nebo soubor v `clean/`.
