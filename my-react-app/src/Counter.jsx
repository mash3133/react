import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);   

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    }

    return (<div>
                <p>Counter : {count}</p>
                <button onClick={increment}>increase</button>
                <button onClick={reset}>Rese</button>
                <button onClick={decrement}>decrease</button>
            </div>
    )
}

export default Counter; 