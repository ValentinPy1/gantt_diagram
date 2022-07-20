import React from "react";
import "./Chart.css";

export default function Chart({ tasks }) {
  const columns = [];
  for (let i = 0; i < 31; i++) {
    columns.push(i);
  }
  return (
    <div className="chart">
      <div>
        {columns.map((column) => (
          <div key={column} className="column" style={{left: column * 40 - 576}}>{column}</div>
        ))}
      </div>
      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bar"
            style={{
              left: task.start * 40 - 537,
              width: task.duration * 40,
              background: task.background,
              color: task.color,
            }}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
}
