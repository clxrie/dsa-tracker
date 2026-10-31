import { notFound } from "next/navigation";
import { problems } from "@/lib/problems";
import Link from "next/link";

export default async function ProblemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}){
    const { id } = await params;
    const problem = problems.find((p) => p.id === Number(id));
    
    if(!problem){
        notFound();
    }
    return(
        <div>
            <Link href={`/problem/${problem.id}`}>{problem.name}</Link>
            <p>Pattern: {problem.pattern}</p>
            <p>Difficulty:{problem.myDifficulty}/5</p>
            <p>Status : {problem.status}</p>
            <a href={problem.link} target="_blank">Open in leetcode</a>
            <p>date solved : {problem.dateSolved}</p>
            <p>stuck On : {problem.stuckOn}</p>
            <a href={problem.solutionLink} target="_blank"> My solution</a>
            <p>imp notes : {problem.notes}</p>
            <a href={problem.videoLink} target="_blank">Watch video</a>
        </div>
    );
}