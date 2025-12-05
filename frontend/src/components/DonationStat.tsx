interface Props {
  label: string;
  value: string;
  hint?: string;
}

export default function DonationStat({ label, value, hint }: Props) {
  return (
    <div className="card">
      <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{value}</div>
      {hint && (
        <div style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: 6 }}>
          {hint}
        </div>
      )}
    </div>
  );
}
