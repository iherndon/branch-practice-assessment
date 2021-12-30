import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

let num = 0;
function generateId() {
  return num++;
}

function Home({ tasks, setTasks }) {
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
            <Link
              to={`/edit/${task.id}`}
              style={{ textDecoration: "none", color: "black" }}
              key={task.id}
            >
              <div className="row data">
                <p>{task.text}</p>
                <p>{task.status}</p>
              </div>
            </Link>
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

export default Home;
