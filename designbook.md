# Designbook Nabora.cz

Designbook popisuje vizuální pravidla šablony Nabora.cz a slouží jako vodítko pro tvorbu dalších podstránek.

## Značka a tón komunikace

- Značka působí jako výkonnostní marketingová agentura specializovaná na nábor.
- Komunikace je přímá, praktická a orientovaná na měřitelné výsledky.
- Texty mají zdůrazňovat rychlost, výkon, transparentní měření a získávání relevantních kandidátů.
- Preferovaný jazyk CTA: „Pojďme to probrat“, „Nezávazná konzultace“, „Volat hned“.

## Barevná paleta

### Primární barvy

| Název         | Hodnota   | Použití                                       |
| ------------- | --------- | --------------------------------------------- |
| Navy          | `#0B1D3A` | Nadpisy, patička, tmavé sekce, důležité texty |
| Navy light    | `#112B54` | Hover/sekundární tmavé plochy                 |
| Gold / Orange | `#f48225` | Primární CTA, aktivní stavy, ikony, akcenty   |
| Gold hover    | `#d6701f` | Hover pro CTA                                 |
| Gold light    | `#f9a05c` | Jemné akcenty, hover v tmavém prostředí       |

### Neutrální barvy

- Bílá `#FFFFFF` pro karty a čisté pozadí.
- Světle šedá `#F7F9FA` / Tailwind gray-50 pro střídání sekcí.
- Gray-400 až gray-700 pro sekundární texty.
- Border `#E5E7EB` pro jemné oddělení karet a sekcí.

## Typografie

- Primární font: Inter.
- Fallback: Inter Fallback, systémové sans-serif fonty.
- Hlavní nadpisy: tučné, tmavě modré, výrazný kontrast.
- Sekční nadpisy: `text-3xl` až `text-4xl`, `font-bold`, barva Navy.
- Perexy: `text-lg`, šedý text, volnější řádkování.
- Popisky a metadata: `text-xs` až `text-sm`, uppercase a tracking pro štítky.

## Layout

- Maximální šířka hlavního obsahu: `max-w-7xl`.
- Standardní horizontální odsazení: `px-4 sm:px-6 lg:px-8`.
- Sekce mají větší vertikální rytmus, typicky `py-20` nebo podobné hodnoty.
- Karty používají zaoblení `rounded-2xl`, jemný border a hover posun nebo stín.
- Důležité konverzní bloky mají kontrastní pozadí nebo výrazné CTA.

## Komponenty

### Navigace

- Desktop navigace je sticky, bílá, s jemným spodním borderem.
- Dropdowny používají bílé karty, `rounded-xl`, jemný stín a ikony v šedém boxu.
- Mobilní navigace je rozbalovací a používá stejné sekce jako desktop.
- Linky musí odkazovat na existující kotvy nebo hotové podstránky.

### CTA tlačítka

- Primární CTA: zlaté/oranžové pozadí, bílý text, `font-semibold`, zaoblení `rounded-lg`.
- Hover stav: `bg-gold-hover`.
- Tlačítka mohou obsahovat Lucide ikonu vlevo nebo vpravo.
- V tmavých sekcích držet vysoký kontrast.

### Karty

- Karty používají bílé pozadí, jemný border a konzistentní padding.
- Ikona je často v malém akcentovém boxu s oranžovým tónem.
- Hover efekt: jemný stín, posun nahoru nebo změna barvy ikony.

### Formulář

- Pole jsou jednoduchá, zaoblená a dobře kontrastní.
- Povinná pole: jméno, e-mail, telefon a zpráva/pozice.
- Odeslání je v aktuální šabloně pouze demonstrační JavaScript stav.

### FAQ

- FAQ používá akordeon s jednou otevřenou odpovědí v rámci skupiny.
- Chevron ikona rotuje o 180° při otevření.
- Odpovědi mají šedý text a volnější řádkování.

### Mobilní sticky lišta

- Objevuje se po scrollu.
- Obsahuje informaci o dostupnosti a telefonní CTA.
- Musí existovat pouze jedna instance s ID `mobile-sticky-bar`.

## Ikonografie

- Používaný set: Lucide Icons.
- Styl ikon: lineární SVG, `stroke-width: 2`, kulaté zakončení a spoje.
- Doporučené velikosti:
  - Navigace/dropdown: 16–20 px.
  - Karty a metriky: 18–24 px.
  - Dekorativní ikony v kruhu/boxu: 20–28 px.
- Doporučené mapování oborů:
  - IT & Vývoj: `code-2`
  - Finance & Účetnictví: `chart-no-axes-column`
  - Logistika & Doprava: `truck`
  - Výroba & Sklad: `warehouse`
  - Management & C-level: `building-2`
  - Zdravotnictví: `heart`
  - Stavebnictví: `hard-hat`
  - Obchod & Sales: `handshake`

## Interakce

- Dropdown hover má krátké zpoždění pro pohodlnější ovládání.
- Mobilní sekce se otevírají kliknutím a mění rotaci chevron ikony.
- Anchor odkazy používají smooth scroll.
- Hover animace mají být krátké a jemné, typicky 150–300 ms.

## Pravidla pro nové podstránky

1. Zachovat stejnou navigaci, patičku, CTA a mobilní sticky lištu.
2. Používat stejné barevné tokeny a komponentové vzory.
3. Každá stránka má mít jedno jasné H1 a navazující H2 sekce.
4. Oborové stránky mají začít problémem cílové skupiny, pokračovat řešením, důkazy a CTA.
5. Nepoužívat nové ikon sety bez sjednocení s Lucide.
6. Lokální assety ukládat do `assets/`, fonty do `fonts/`.
7. Všechny interní odkazy musí vést na existující kotvy nebo reálné soubory.
