type TicketOptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export default function TicketOption({
  label,
  selected,
  onSelect,
}: TicketOptionProps) {
  return (
    <button
      type="button"
      className={`ticket-option${selected ? " ticket-option--selected" : ""}`}
      aria-pressed={selected}
      onClick={onSelect}
    >
      {label}
    </button>
  );
}
