import React, { useEffect, useState } from 'react'
import './TaskList.css'
import Counter from './Counter';

export default function TaskList({ tasks, setTasks }) {
    const [name, setName] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(2);

    const handleChange = (event) => setName(event.target.value);
    const addTask = (event) => {
        if (name === '') return;
        setTasks([...tasks, {
            name: name,
            start: start,
            end: end,
            id: new Date().getTime(),
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
                <Counter count={start} setCount={setStart} min={0} max={end - 1} id='startCounter' />
                <Counter count={end} setCount={setEnd} min={start + 1} max={10} id='endCounter' />
            </div>
            <ul>
                {tasks.map(task => (
                    <div key={task.id}>
                        <span className='task name'>
                            {task.name} ({task.start} -> {task.end})
                        </span>
                        <button className='task delete' onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}
