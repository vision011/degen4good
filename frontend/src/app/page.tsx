export default function HomePage() {
  return (
    <div className="card">
      <h1 className="page-title">Welcome to degen4good</h1>

      <p className="page-subtitle" style={{ marginBottom: "1rem" }}>
        Make predictions with play points.
        Losses trigger real donations to real causes.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <a href="/markets">
          <button className="btn-primary">Explore Markets</button>
        </a>

        <a href="/dashboard">
          <button className="btn-secondary">View Impact</button>
        </a>
      </div>
    </div>
  );
}
