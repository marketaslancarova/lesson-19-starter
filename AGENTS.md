# Pravidla pro agenta v tomto projektu

Tento soubor čte coding agent (Codex) dřív, než začne s projektem pracovat.

## Obecně

- Komunikuj česky, stručně a srozumitelně pro začátečníka.
- Pokud dotaz začíná „Neprováděj změny.“ nebo žádá „jen plán“, pouze plánuj. **Neupravuj žádný soubor.**
- Než něco změníš, popiš plán a počkej na výslovné schválení.
- Dělej malé, jasně ohraničené změny. Po změně vypiš, které soubory se změnily.
- Řiď se souborem `DESIGN.md`. Co v něm není, nerozhoduj sám – zeptej se.

## Povolené oblasti změn v lekci 19

- `src/App.tsx`
- `src/components/`
- `src/index.css`
- `DESIGN.md`, `ai-work-log.md`

## Co nikdy nedělej

- Neupravuj `package.json` ani `package-lock.json`, neinstaluj balíčky.
- Nepřidávej síťové načítání, API, dataset, přihlášení, platbu ani další obrazovky či routy.
- Neupravuj `.gitignore`, konfiguraci buildu (`vite.config.ts`, `tsconfig*.json`, `eslint.config.js`).
- Nevkládej tajné údaje do kódu, dokumentace, commitů ani odpovědí; nečti `.env`.

## Ověření

- `npm run verify` (lint + build). Neověří vzhled ani fokus – ty se kontrolují v prohlížeči na 390 a 1 440 CSS px.
