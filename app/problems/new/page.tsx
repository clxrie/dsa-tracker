export default function NewProblemPage() {
  return (
    <div>
      <p className="eyebrow">new entry</p>
      <h1>Add a problem</h1>

      <form className="form">
        <label className="field">
          <span>Name</span>
          <input type="text" name="name" required />
        </label>

        <label className="field">
          <span>Pattern</span>
          <input type="text" name="pattern" />
        </label>

        <label className="field">
          <span>Status</span>
          <select name="status">
            <option value="solved">Solved</option>
            <option value="revisit">Revisit</option>
          </select>
        </label>

        <label className="field">
          <span>My difficulty (1–5)</span>
          <input type="number" name="myDifficulty" min={1} max={5} />
        </label>

        <label className="field">
          <span>Date solved</span>
          <input type="date" name="dateSolved" />
        </label>

        <label className="field">
          <span>LeetCode link</span>
          <input type="url" name="link" />
        </label>

        <label className="field">
          <span>Solution link</span>
          <input type="url" name="solutionLink" />
        </label>

        <label className="field">
          <span>Video link</span>
          <input type="url" name="videoLink" />
        </label>

        <label className="field full">
          <span>Stuck on</span>
          <textarea name="stuckOn"></textarea>
        </label>

        <label className="field full">
          <span>Notes</span>
          <textarea name="notes"></textarea>
        </label>

        <button type="submit" className="btn btn-accent">Add problem</button>
      </form>
    </div>
  );
}
