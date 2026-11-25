import { useState } from "react";

import PrimaryButton from "./components/PrimaryButton";
import TicketOption from "./components/TicketOption";

type Ticket = "standard" | "student";

export default function App() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket>("standard");
  const [confirmation, setConfirmation] = useState(false);

  return (
    <main className="event-details">
      <section className="event-information">
        <h1>Jazz Night at the Riverside</h1>
        <p>Friday 12 December · 19:30 · Riverside Hall</p>
      </section>

      <section className="ticket-panel" aria-labelledby="ticket-panel-title">
        <h2 id="ticket-panel-title">Choose your ticket</h2>

        <div className="ticket-options">
          <TicketOption
            label="Standard"
            selected={selectedTicket === "standard"}
            onSelect={() => setSelectedTicket("standard")}
          />
          <TicketOption
            label="Student"
            selected={selectedTicket === "student"}
            onSelect={() => setSelectedTicket("student")}
          />
        </div>

        <PrimaryButton
          label="Continue"
          onClick={() => setConfirmation(true)}
        />

        {confirmation && <p className="confirmation">Booking confirmed</p>}
      </section>
    </main>
  );
}
