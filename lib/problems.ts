export type Problem = {
  id: number;
  name: string;
  status: "solved" | "revisit";
  pattern: string;
  myDifficulty: number;
  link: string;
  dateSolved: string;
  stuckOn: string;
  solutionLink: string;
  notes : string;
  videoLink : string;
};

export const problems: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    status: "solved",
    pattern: "Arrays & Hashing",
    myDifficulty: 5,
    link: "example.com",
    dateSolved: "2026-10-28",
    stuckOn: "question 25",
    solutionLink: "example.com",
    notes : "It was easier on 2nd take",
    videoLink : "https://www.youtube.com/results?search_query=2+sum+leetcode"
  },

  {
    id: 2,
    name: "3 Sum",
    status: "solved",
    pattern: "Arrays & Hashing",
    myDifficulty: 4,
    link: "https://leetcode.com/submissions/detail/2167337041/",
    dateSolved: "2026-10-08",
    stuckOn: "how to solve the back and forth problem",
    solutionLink: "example.com",
    notes : "confused on the first take",
    videoLink : "https://www.youtube.com/results?search_query=3sum+leetcode"
  },
];