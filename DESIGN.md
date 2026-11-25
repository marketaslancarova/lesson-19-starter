# EventDetails – první vertikální řez

## Cíl scénáře
Uživatel zvolí vstupenku **Standard** nebo **Student**, zvolená možnost je viditelně odlišená a aktivace **Continue** zobrazí lokální potvrzení **Booking confirmed**. Potvrzení není rezervace – nic se neukládá ani neodesílá.

## Zdroj návrhu
Figma soubor **event-booking-design**, stránka **Flow**, rámy **EventDetails / Mobile** (390 CSS px) a **EventDetails / Desktop** (1 440 CSS px).

## Rozsah komponent
- `TicketOption` – props `label: string`, `selected: boolean`, `onSelect: () => void`; vykresluje `<button type="button">` s `aria-pressed`.
- `PrimaryButton` – props `label: string`, `onClick: () => void`.
- `EventDetails` (v `App.tsx`) drží stav a skládá obrazovku.

## Tokeny a povinné texty
| Token | Hodnota | Použití |
|---|---|---|
| `--color-surface` | `#ffffff` | povrch karet a panelu |
| `--color-text` | `#1a1a2e` | text |
| `--color-accent` | `#1e4fa3` | vybraný stav, hlavní tlačítko, fokus |
| `--space-1` | `0.25rem` | nejmenší odstup |
| `--space-2` | `0.5rem` | mezera mezi kartami |
| `--space-4` | `1rem` | vnitřní odsazení karet a panelu |

Povinné texty: `Standard`, `Student`, `Continue`, `Booking confirmed`.

## Responzivní pravidla
- Pod 768 CSS px: jeden sloupec, informace o akci nad panelem s volbou.
- Od 768 CSS px: dva sloupce – vlevo informace o akci, vpravo panel s volbou (šířka 320–400 CSS px).
- Stavy: `selectedTicket` = `"standard"` | `"student"` (výchozí `"standard"`); `confirmation` = `false`, po Continue `true`.

## Akceptační kritéria
- [ ] Obsah je čitelný bez vodorovného posunu při 390 a 1 440 CSS px.
- [ ] Po zvolení Standard nebo Student je aktivní možnost viditelně odlišená (okraj i povrch, ne jen barva textu).
- [ ] Vždy je vybraná právě jedna možnost.
- [ ] Aktivace Continue zobrazí Booking confirmed.
- [ ] Po pohybu klávesou Tab je fokus viditelný na všech tlačítkách.
- [ ] Tlačítka zůstávají nativní `<button>` s výchozím chováním (Enter, mezerník).
- [ ] `npm run verify` projde bez chyb.

## Mimo rozsah
Dataset a API, síťové načítání, přihlášení, platba, další obrazovky a routy, instalace balíčků, změny `package.json` a `package-lock.json`.
