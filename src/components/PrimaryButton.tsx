type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
};

export default function PrimaryButton({
  label,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button type="button" className="primary-button" onClick={onClick}>
      {label}
    </button>
  );
}
