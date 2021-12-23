import { useState } from "react";
import "./App.css";

let num = 0;
function generateId() {
  return num++;
}

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Complete Udemy course",
      id: generateId(),
      status: "Completed",
    },
    {
      text: "Complete Egghead tutorials",
      id: generateId(),
      status: "In Progress",
    },
    {
      text: "Do own research on JS Promises",
      id: generateId(),
      status: "Not Started",
    },
    {
      text: "Complete Practice Skills Assessment",
      id: generateId(),
      status: "Not Started",
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: generateId(),
        text: newTask,
        status: "Not Started",
      },
    ]);

    setNewTask("");
  };

  const handleChange = (evt) => setNewTask(evt.target.value);

  return (
    <div className="App">
      <main>
        <h1>Tasks</h1>
        {/* represents table */}
        <section>
          <div className="row">
            <h4>TASK</h4>
            <h4>STATUS</h4>
          </div>
          {tasks.map((task) => (
            <div className="row data">
              <p>{task.text}</p>
              <p>{task.status}</p>
            </div>
          ))}
        </section>
        <div className="row input-row">
          <input type="text" value={newTask} onChange={handleChange} />
          <button onClick={addTask} disabled={!newTask}>
            Add
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
