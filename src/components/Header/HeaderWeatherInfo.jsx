import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HeaderWeatherInfo = function () {
  const API_KEY = '00f37be54bf6a8e2f971ae1337958614';

  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({
        lat: latitude,
        lng: longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (!location) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${API_KEY}`
      )
      .then((res) => {
        setWeatherData(res.data);
        setWeatherIcon(
          `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        );
      })
      .catch(() => setWeatherData('could not access the weather info'));
  }, [location]);

  return (
    <div className="border-2 border-white">
      {!weatherData && <div>Weather info loading...</div>}

      {weatherData && (
        <div>
          <div>{weatherData.name}</div>
          <div>{Math.floor(weatherData.main.temp - 272.15)}°C</div>
          <div>{weatherData.weather[0].main}</div>
          <img src={weatherIcon} alt="Weather icon" />
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind: {Math.floor(weatherData.wind.speed * 1.61)} km/h </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWeatherInfo;
