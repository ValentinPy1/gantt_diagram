import React, { useEffect, useState } from 'react'
import './TaskList.css'
import Counter from './Counter';

export default function TaskList({ tasks, setTasks }) {
    const [name, setName] = useState('');
    const [start, setStart] = useState(0);
    const [duration, setDuration] = useState(2);

    const handleChange = (event) => setName(event.target.value);
    const addTask = (event) => {
        if (name === '') return;
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;
        const color = ((r + g + b) / 3) > 122 ? 'black' : 'white';
        setTasks([...tasks, {
            name: name,
            start: start,
            duration: duration,
            id: new Date().getTime(),
            background: `rgb(${r}, ${g}, ${b})`,
            color: color,
            finished: false
        }]);
        setName('');
    }
    const deleteTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    document.addEventListener('keydown', (event) => { if (event.key === 'Enter') addTask(); })

    return (
        <div id='taskList'>
            <h1>Tasks</h1>
            <div className='menu'>
                <input type='text' value={name} onChange={handleChange} />
                <button onClick={addTask} id='addButton'>Add</button>
                <Counter count={start} setCount={setStart} min={0} max={31 - duration} id='startCounter' />
                <Counter count={duration} setCount={setDuration} min={1} max={31 - start} id='durationCounter' />
            </div>
            <ul>
                {tasks.map(task => (
                    <div key={task.id}>
                        <span className='task name'>
                            {task.name} ({task.start} to {task.start + task.duration})
                        </span>
                        <button className='task delete' onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
