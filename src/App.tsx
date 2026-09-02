import "./App.css";

function App() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>System Name</th>
            <th>Description</th>
            <th>Free Style/<br />PipeLine</th>
            <th>Expected Outcome</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>React To-Do List</td>
            <td>Manage tasks with<br />CRUD</td>
            <td>Free Style</td>
            <td>Updated to-do app after<br />commit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
