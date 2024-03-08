import React from 'react'
import { useCounter } from '../Context/CounterContext'

function Counterdis() {
    const { count } = useCounter();
    return (
        <div>

            <h1>
                display count:{count}
            </h1>
        </div>
    )
}

export default Counterdis;