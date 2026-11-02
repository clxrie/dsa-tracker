import Link from "next/link";
import { problems } from "@/lib/problems";

export default function Home() {
  const solved = problems.filter((p) => p.status === "solved").length;
  const revisit = problems.filter((p) => p.status === "revisit").length;

  return (
    <div>
      <p className="eyebrow">overview</p>
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="stat">
          <p className="label">Total</p>
          <p className="stat-value">{problems.length}</p>
        </div>
        <div className="stat stat-accent">
          <p className="label">Solved</p>
          <p className="stat-value">{solved}</p>
        </div>
        <div className="stat">
          <p className="label">Revisit</p>
          <p className="stat-value">{revisit}</p>
        </div>
      </div>

      <div className="links">
        <Link href="/problems" className="btn">View all problems</Link>
        <Link href="/problems/new" className="btn btn-accent">+ Add problem</Link>
      </div>
    </div>
  );
}
