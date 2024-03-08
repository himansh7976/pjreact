import React from 'react'
import { useCounter } from '../Context/CounterContext';

function Countercont() {
    const { increment, decrement, reset } = useCounter();

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}> reset</button>

        </div>

    )
}

export default Countercont;