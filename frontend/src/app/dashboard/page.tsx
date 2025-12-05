import DonationStat from "../../components/DonationStat";

export default function DashboardPage() {
  return (
    <>
      <div className="card">
        <h1 className="page-title">Impact dashboard</h1>
        <p className="page-subtitle">
          This is what happens when degen energy is redirected. Every wrong
          prediction routes a bit of the shared pool to real causes.
        </p>
      </div>

      <div className="grid grid-2">
        <DonationStat
          label="Total donated"
          value="$1,234.56"
          hint="Mock value for now. In the real version, this reads on-chain from the pool."
        />
        <DonationStat
          label="Wrong calls turned into impact"
          value="87"
          hint="Number of losing predictions that triggered a donation."
        />
      </div>
    </>
  );
}
