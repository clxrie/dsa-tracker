# DSA Tracker

A web app to track my LeetCode problems, solutions, and notes in one place.

## Tech
Next.js, TypeScript, Supabase (later)

## Pages
- `/` → dashboard: stats (total solved, streak), recent problems, problems to revisit
- `/problems` → list of all problems with name, pattern, difficulty, and status
- `/problems/[id]` → one problem's full details: notes, where I got stuck, solution and video links
- `/problems/new` → a form to add a new problem

## One problem has
| Field | What it is |
|---|---|
| `id` | unique number for the URL |
| `name` | problem name, e.g. "Two Sum" |
| `pattern` | e.g. "Arrays & Hashing", "Two Pointers" |
| `myDifficulty` | 1–5, how hard it was for me |
| `status` | `solved` or `revisit` |
| `link` | LeetCode problem link |
| `dateSolved` | the date I solved it |
| `stuckOn` | where I got stuck |
| `solutionLink` | link to my solution in my DSA-practice repo |
| `notes` | key idea / anything to remember |
| `videoLink` | YouTube solution video |

## Plan
- [x] Phase 0: plan the app
- [ ] Phase 1: pages with fake data
- [ ] Phase 2: save problems in a database
- [ ] Phase 3: login, stats, heatmap