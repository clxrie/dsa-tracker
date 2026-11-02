import Link from "next/link";
import { problems } from "@/lib/problems";

export default function ProblemsPage() {
  return (
    <div>
      <p className="eyebrow">problems</p>
      <h1>All problems</h1>

      <ul className="list">
        {problems.map((problem) => (
          <li key={problem.id} className="row">
            <Link href={`/problems/${problem.id}`} className="row-name">
              {problem.name}
            </Link>
            <span className="tag">{problem.pattern}</span>
            <span className="tag">{problem.myDifficulty}/5</span>
            <span className={`badge badge-${problem.status}`}>
              [{problem.status.toUpperCase()}]
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
