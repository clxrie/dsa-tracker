import Link from "next/link";
import { Problem, problems } from "@/lib/problems";

export default function ProblemsPage(){
    return(
        <div>
            <h1>All problems</h1>
            <ul>
                {problems.map((problem) => 
                    <li key={problem.id}>
                        <Link href={`/problems/${problem.id}`}>{problem.name}</Link> -- {problem.status}
                    </li>
                )}
            </ul>
        </div>
    );
}