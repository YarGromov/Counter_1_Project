import React from 'react';
import s from './ScreenWithSettings.module.css'


export const ScreenWithSettings = () => {
    return (
        <div className={s.ScreenWithSettings}>
            <div className={s.firstContainer}>
                <div>max value: <input type="text"/></div>
                <div>start value: <input type="text"/></div>
            </div>
            <div className={s.secondContainer}>
                <button>set</button>
            </div>
        </div>
    );
};
