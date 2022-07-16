import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

function App() {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState(minValue)

    const increment = () => {
        count < maxValue ? setCount(count + 1) : setCount(maxValue)
    }
    const reset = () => {
        setCount(minValue)
    }
    return (
        <div className="App">
            <div className='border'>
                <Counter count={count} maxValue={maxValue}/>
                <div className='buttons'>
                    <Button onClick={increment}
                            name='inc'
                            disabled={count === maxValue}/>
                    <Button onClick={reset}
                            name='reset'
                            disabled={count === minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
