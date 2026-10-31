import { problems } from "@/lib/problems";
export default function Home() {
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Solved :{problems.filter((p) => p.status === "solved").length}</p>
        <p>Revisit : {problems.filter((p) => p.status === "revisit").length}</p>
        <p>Total: {problems.length}</p>
   </div>
  );
}
