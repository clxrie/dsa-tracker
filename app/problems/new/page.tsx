export default function NewProblemPage() {
  return (
    <div>
      <h1>Add a problem</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Status
          <select name="status">
            <option value="solved">Solved</option>
            <option value="revisit">Revisit</option>
          </select>
        </label>
        <label>
          Pattern
          <input type="text" name="name" required />
        </label>
        <label>
          Difficulty
          <input type="number" min={1} max={5} />
        </label>
        <label>
          LeetCode link
          <input type="url" name="videoLink"/>
        </label>
        <label>
          Solution
          <input type="url" name="solutionLink"/>
        </label>
        <label>
          video Link   
          <input type="url" name="videoLink"/>
        </label>
        <label>
          Solved date 
          <input type="date" name="dateSolved"/>
        </label>
        <label>
        <textarea name="stuckOn"></textarea>
        </label>
        <label>
        <textarea name="notes"></textarea>
        </label>

        <button type="submit">Add problem</button>
      </form>
    </div>
  );
}