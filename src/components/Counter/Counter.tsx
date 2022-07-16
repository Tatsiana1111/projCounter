import React from 'react';
import style from './Counter.module.css'

type CounterPropsType = {
    count: number
    maxValue: number
}
const Counter = (props: CounterPropsType) => {
    const counterValueStyle = props.count === props.maxValue ? style.maxValue : style.counter
    return (
        <div className={counterValueStyle}> {props.count} </div>
    );
};

export default Counter;