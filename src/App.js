import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";

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

  return (
    <Routes>
      <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
      <Route
        path="/edit/:id"
        element={<Edit tasks={tasks} setTasks={setTasks} />}
      />
    </Routes>
  );
}

export default App;
