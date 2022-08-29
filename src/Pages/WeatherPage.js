
import './../Styles/weather.css';
import React, { useEffect, useState } from 'react';

const WeatherPage = () => {

    const [search, setSearch] = useState('Nagercoil');
    const [data, setData] = useState({
        temp: '',
        temp_min: '',
        temp_max: '',
        response: null
    });
    const [input, setInput] = useState('');

    useEffect(() => {
        const getResultData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9ccc1b38d9e7a9e5a2482d1593a37a90`)
                .then(response => response.json())
            console.log(response)
            if (response) {
                var temp = (response.main.temp - 273.15).toFixed(2);
                var temp_min = (response.main.temp_min - 273.15).toFixed(2);
                var temp_max = (response.main.temp_max - 273.15).toFixed(2);
                setData({
                    ...data,
                    temp: temp,
                    temp_min: temp_min,
                    temp_max: temp_max,
                    response: response
                })
            }
        }
        getResultData();
    }, [search]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    // var emoji = null;
    // if (typeof data['response'] != "undefined") {

    //     if (data['response']['weather'][0].main == "Clouds") {
    //         emoji = "fa-cloud"
    //     }
    //     else if (data['response']['weather'][0].main == "Thunderstorm") {
    //         emoji = "fa-bolt"
    //     }
    //     else if (data['response']['weather'][0].main == "Drizzle") {
    //         emoji = "fa-cloud-rain"
    //     }
    //     else if (data['response']['weather'][0].main == "Rain") {
    //         emoji = "fa-cloud-shower-heavy"
    //     }
    //     else if (data['response']['weather'][0].main == "Snow") {
    //         emoji = "fa-snow-flake"
    //     }
    //     else {
    //         emoji = "fa-smog"
    //     }
    // }

    let current = new Date();
    let date = current.getDate();
    let month = current.toLocaleString("default", { month: 'long' });
    let year = current.getFullYear();
    let day = current.toLocaleString("default", { weekday: 'long' });

    let hour = current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();

    return (
        <div className='weather'>
            {data["response"] &&
                <div className="container wrapper mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="card text-white text-center border-0">
                                <img src={`https://source.unsplash.com/600x900/?${data['response']['weather'][0].main}`} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-5 w-75 mx-auto">
                                            <input type="search" className="form-control" placeholder="Search City" aria-label="Search City" aria-describedby="basic-addon2" name="search" value={input} onChange={(e) => setInput(e.target.value)} required />
                                            <button type="submit" className="input-group-text searchBtn" id="basic-addon2"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                    <div className="bg-dark bg-opacity-50 py-3">
                                        <h2 className="card-title">{data["response"].name}</h2>
                                        <p className="card-text lead  mb-2">
                                            {day},{month} {date},{year}
                                            <br />
                                            {minute}:{hour}:{second}
                                        </p>
                                        <hr />
                                        <i className="fas fa-cloud fa-4x"></i>
                                        <h1 className="fw-bolder mb-3">{data["temp"]} &deg;C</h1>
                                        <p className="lead fw-bolder mb-0">{data['response']['weather'][0].main}</p>
                                        <p className="lead mb-2">{data["temp_min"]} &deg;C | {data["temp_max"]} &deg;C</p>
                                        <p className='fw-bolder mb-0'>Wind</p>
                                        <p className='lead'>{data["response"].wind.deg} deg | {data["response"].wind.speed} speed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='thunder'></div>
            <div className='rain'></div>
            <div className='fog'></div>
            <div className='smog'></div>
            <div className='cloud'></div>
            <div className='clear'></div>
        </div>
    );
}
export default WeatherPage;