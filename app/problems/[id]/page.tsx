import { notFound } from "next/navigation";
import { problems } from "@/lib/problems";

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const problem = problems.find((p) => p.id === Number(id));

  if (!problem) {
    notFound();
  }

  return (
    <div>
      <p className="eyebrow">problem #{problem.id}</p>
      <h1>{problem.name}</h1>

      <div className="meta">
        <span className={`badge badge-${problem.status}`}>
          [{problem.status.toUpperCase()}]
        </span>
        <span className="tag">{problem.pattern}</span>
        <span className="tag">difficulty {problem.myDifficulty}/5</span>
        <span className="tag">solved {problem.dateSolved}</span>
      </div>

      <div className="card">
        <p className="label">Stuck on</p>
        <p>{problem.stuckOn}</p>
      </div>

      <div className="card">
        <p className="label">Notes</p>
        <p>{problem.notes}</p>
      </div>

      <div className="links">
        <a href={problem.link} target="_blank" className="btn">Open on LeetCode ↗</a>
        <a href={problem.solutionLink} target="_blank" className="btn">My solution ↗</a>
        <a href={problem.videoLink} target="_blank" className="btn">Watch video ↗</a>
      </div>
    </div>
  );
}
