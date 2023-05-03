import './setting.css';
import { useState } from 'react';
import { UilSunset } from '@iconscout/react-unicons';
import { UilMoonset } from '@iconscout/react-unicons';

function Setting({ theme, onTheme }) {

    const theme__logo = theme === "day" ? <UilSunset size="200" /> : <UilMoonset size="200" />;

    const theme__logo_animation = theme === "day" ? "rise" : "down";
    return (
        <div className="setting">

            <div className="portfolio__title">Theme</div>

            <div className="theme__logos">
                <div className={theme__logo_animation}>

                    {theme__logo}
                </div>

            </div>

            <div className="theme__selection__bar">
                <button className='theme__mode' onClick={() => {
                    onTheme("day");
                }} aria-label="day mode">
                    Day Mode
                </button>

                <button className='theme__mode' onClick={() => {
                    onTheme("night");
                }} aria-label="night mode">
                    Night Mode
                </button>

            </div>

        </div>

    )
}
export default Setting;