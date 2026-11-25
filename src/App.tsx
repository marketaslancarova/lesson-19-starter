// Výchozí stav projektu pro lekci 19.
// Sem vznikne obrazovka EventDetails podle DESIGN.md.
// Povolené oblasti změny: src/App.tsx, src/components/, src/index.css.

import TicketOption from "./components/TicketOption";

export default function App() {
  return (
    <main className="event-details">
      <h1>Jazz Night at the Riverside</h1>
      <p>Friday 12 December · 19:30 · Riverside Hall</p>
      <p>Choose your ticket</p>
      {/* Zde budou komponenty TicketOption a PrimaryButton. */}
    
    </main>
  );
}
