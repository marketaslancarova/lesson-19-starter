# lesson-19-starter

Startovní projekt pro lekci 19 **Design-to-code s Codexem: React/TypeScript, DevTools a iterace UI**.

React 19 + TypeScript + Vite + Tailwind CSS 4. Obrazovka **EventDetails** zatím obsahuje jen nadpis a informace o akci – volbu vstupenky a potvrzení doplníte během lekce.

## První spuštění

```bash
npm install
git init
git add .
git commit -m "Lesson 19 starter"
git checkout -b feature/event-details-slice
npm run verify
npm run dev
```

Aplikace poběží na adrese, kterou vypíše `npm run dev` (obvykle http://localhost:5173).

## Příkazy

| Příkaz | Co dělá |
|---|---|
| `npm run dev` | spustí vývojový server |
| `npm run lint` | kontrola kvality kódu (ESLint) |
| `npm run build` | typová kontrola (TypeScript) a sestavení |
| `npm run verify` | lint + build – musí projít bez chyb před každým commitem |

## Zdroj návrhu

Figma: soubor **event-booking-design**, stránka **Flow**, rámy **EventDetails / Mobile** (390 CSS px) a **EventDetails / Desktop** (1 440 CSS px).

## Povolené oblasti změn

`src/App.tsx`, `src/components/`, `src/index.css`, `DESIGN.md`, `ai-work-log.md`.
Neměňte `package.json` ani `package-lock.json`.

## Před commitem

```bash
npm run verify
git diff --check
git diff -- package.json package-lock.json   # musí být prázdné
```
