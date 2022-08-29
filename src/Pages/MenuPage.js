import React from 'react';
import { Link } from 'react-router-dom';

import './../Styles/menu.css';
function MenuPage() {
    return (
        <div className='wrapper_contents'>
            <Link to="/home">
                <div className='news_View'>
                    <p className='heading'>NEWS</p>
                </div>
            </Link>

            <Link to="/weather">
                <div className="weather_View">
                    <p className='heading'>WEATHER</p>
                </div>
            </Link>
        </div>
    );
}
export default MenuPage;