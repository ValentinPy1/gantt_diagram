import React from "react";
import "./Chart.css";

export default function Chart({ tasks }) {
  return (
    <div className="chart">
      <h1>Chart</h1>
      {tasks.map(task => (
        <div key={task.id} className="bar" style={{left: task.start * 40 - 500, width: task.duration * 40, background: task.background, color: task.color}} >{task.name}</div>
      ))}
    </div>
  );
}