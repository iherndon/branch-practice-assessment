import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

function Edit({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedTask = tasks.find((t) => t.id == id);
  const [taskText, setTaskText] = useState(selectedTask.text);
  const [taskStatus, setTaskStatus] = useState(selectedTask.status);

  const handleSave = () => {
    const currentIndex = tasks.indexOf(selectedTask);
    setTasks([
      ...tasks.slice(0, currentIndex),
      { id, text: taskText, status: taskStatus },
      ...tasks.slice(currentIndex + 1),
    ]);
    navigate("/");
  };
  return (
    <div className="App">
      <main>
        <div className="row">
          <h1>Edit Task {id}</h1>
          <button onClick={handleSave}>Save</button>
        </div>
        <div className="row">
          <div style={{ width: "50%" }}>
            <h3>Task Text</h3>
            <input
              type="text"
              style={{ width: "400px" }}
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
          </div>
          <div style={{ width: "50%" }}>
            <h3>Status</h3>
            <div>
              <div
                style={{
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  style={{ width: "auto" }}
                  checked={taskStatus === "Completed"}
                  value="Completed"
                  onChange={(e) => setTaskStatus(e.target.value)}
                />{" "}
                <span>Completed</span>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  style={{ width: "auto" }}
                  checked={taskStatus === "In Progress"}
                  value="In Progress"
                  onChange={(e) => setTaskStatus(e.target.value)}
                />{" "}
                <span>In Progress</span>
              </div>
              <div
                style={{
                  justifyContent: "flex-start",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="radio"
                  style={{ width: "auto" }}
                  checked={taskStatus === "Not Started"}
                  value="Not Started"
                  onChange={(e) => setTaskStatus(e.target.value)}
                />{" "}
                <span>Not Started</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Edit;
