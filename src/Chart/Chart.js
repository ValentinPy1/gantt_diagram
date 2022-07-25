import React, { useRef } from "react";
import "./Chart.css";

const COLUMN_SPACING = 40;
const COLUMN_COUNT = 40;

export default function Chart({ tasks, setTasks }) {
  const columns = [];
  const dragItem = useRef();
  const dragOverItem = useRef();

  for (let i = 0; i < COLUMN_COUNT; i++) {
    columns.push(i);
  }

  const dragStart = (e, position) => {
    dragItem.current = position;
  }

  const dragOver = (e, position) => {
    dragOverItem.current = position;
    console.log(dragOverItem.current);
  }

  const drop = (e) => {
    setTasks(tasks => {
      let newTasks = [...tasks];
      tasks[dragItem.current].start = dragOverItem.current;
      return newTasks
    });
  }


  return (
    <div className="chart">
      <div>
        {columns.map((column, index) => (
          <div key={column} className="column" style={{ left: column * COLUMN_SPACING }} onDragOver={(e) => dragOver(e, index)}>
            {column}
          </div>
        ))}
      </div>
      <span id='horizontal' />
      <div>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="bar"
            style={{
              left: task.start * COLUMN_SPACING,
              width: task.duration * COLUMN_SPACING,
              background: task.background,
              color: task.color,
            }}
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnd={(e) => drop(e)}
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
}
