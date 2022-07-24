import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {
    const minValue = 0
    const maxValue = 5
    const [count, setCount] = useState(minValue)

    const countIncrement = () => {
        count < maxValue ? setCount(count + 1) : setCount(maxValue)
    }
    const countReset = () => {
        setCount(minValue)
    }
    return (
        <div className="App">
            <Settings/>
            <div className='border'>
                <Counter count={count} maxValue={maxValue}/>
                <div className='buttons'>
                    <Button onClick={countIncrement}
                            name='inc'
                            disabled={count === maxValue}/>
                    <Button onClick={countReset}
                            name='reset'
                            disabled={count === minValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;
