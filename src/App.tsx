import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>My To-Do List</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((item) => (
            <li key={item.id}>
              <span
                className={item.completed ? "completed" : ""}
                onClick={() => toggleTask(item.id)}
              >
                {item.text}
              </span>

              <button onClick={() => deleteTask(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;