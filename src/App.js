import "./App.css";
import TaskList from "./TaskList/TaskList";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "Example",
      start: 0,
      end: 2,
      id: 0,
      finished: false,
    },
  ]);
  return (
    <div className="App">
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
