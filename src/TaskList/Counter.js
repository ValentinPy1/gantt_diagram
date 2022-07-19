import React from 'react'

export default function Counter({ count, setCount, min, max, id }) {
    const handleIncrement = () => {
        if (count >= max) return;
        setCount(count => count + 1);
    }
    const handleDecrement = () => {
        if (count <= min) return;
        setCount(count => count - 1);
    }
    return (
        <div id={id} className='counter'>
            <button onClick={handleIncrement}>+</button>
            <div>{count}</div>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
