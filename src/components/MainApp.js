import React, { useState } from 'react';
import '../App.css'

const api = {
  key: "b44c382eee66fc24d39ca91de23760a0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function MainApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = e => {
      if (e.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
  const dates = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    return `${day}, ${month}/${date}/${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 29) ? 'MainApp hot' : 'MainApp') : 'MainApp'}>
      <main>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-container">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dates(new Date())}</div>
          </div>
          <div className="weather-container">
            <div className="temperature">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}

        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Type city location and enter..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </main>
    </div>
  );
}


export default MainApp;
