import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    onClick: () => void
    name: string
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {
    const buttonStyle = props.disabled ? style.disabled : style.button
    return (
        <button className={buttonStyle}
                onClick={props.onClick}
                disabled={props.disabled}> {props.name} </button>
    );
};

export default Button;