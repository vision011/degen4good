export default function Dashboard() {
  return (
    <div className="card">
      <h1 className="page-title">Your Impact</h1>
      <p className="page-subtitle">
        All donations triggered from your predictions.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "0.9rem" }}>
        <p>Total Donations: <strong>3</strong></p>
        <p>Total Amount Donated: <strong>0.30 SOL</strong></p>
        <p>Last Donation Tx: <code>MockTx_xk49s2df</code></p>
      </div>
    </div>
  );
}
