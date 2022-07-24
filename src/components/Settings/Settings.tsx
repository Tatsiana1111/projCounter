import React from 'react';
import Button from "../Button/Button";
import s from './Settings.module.css'

function Settings() {
    return (
        <div className='border'>
            <div className={s.block}>
                <div className={s.div}>
                    <div>max value</div>
                    <input className={s.input}/>
                </div>
                <div className={s.div}>
                    <div>start value</div>
                    <input className={s.input}/>
                </div>
            </div>
            <div className='buttons'>
                <Button onClick={() => {
                }}
                        name='set'
                        disabled={true}/>
            </div>
        </div>
    );
}

export default Settings;