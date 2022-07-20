import React, { useState } from "react";
import "./App.css";
import TaskList from "./TaskList/TaskList";
import Chart from "./Chart/Chart";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Chart tasks={tasks} />
    </div>
  );
}

export default App;
