import Link from "next/link";

export default function HomePage() {
  return (
    <div className="card">
      <h1 className="page-title">If you&apos;re gonna degen anyway…</h1>
      <p className="page-subtitle">
        …at least some good comes out of it. Play with real prediction markets
        data, but when you&apos;re wrong, donations go to charity instead of a
        black hole.
      </p>

      <div className="btn-row">
        <Link href="/markets">
          <button className="btn-primary">Browse today&apos;s markets</button>
        </Link>
        <Link href="/dashboard">
          <button className="btn-secondary">View impact dashboard</button>
        </Link>
      </div>
    </div>
  );
}
