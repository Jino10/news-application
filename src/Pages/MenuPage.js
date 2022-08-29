import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './../Styles/menu.css';

function MenuPage() {
    let data=useSelector(state=>state.user.userDetails);
    return (
        <div className='wrapper_box'>
            <p className='hello'>Hello {data.name}...</p>
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
        </div>
    );
}
export default MenuPage;