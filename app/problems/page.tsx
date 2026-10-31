import { Problem, problems } from "@/lib/problems";

export default function ProblemsPage(){
    return(
        <div>
            <h1>All problems</h1>
            <ul>
                {problems.map((problem) => 
                    <li>
                        {problem.name} -- {problem.status}
                    </li>
                )}
            </ul>
        </div>
    );
}