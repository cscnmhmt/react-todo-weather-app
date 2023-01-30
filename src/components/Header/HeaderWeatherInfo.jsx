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
    <div className="rounded-lg bg-gray-700 px-6 py-3">
      {!weatherData && <div>Weather info loading...</div>}

      {weatherData && (
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <h3 className="text-3xl font-bold">{weatherData.name}</h3>
              <p className="text-base font-light tracking-wide opacity-50">
                ({weatherData.weather[0].main})
              </p>
            </div>
            <ul>
              <li>
                <span className="font-light tracking-wide opacity-50">
                  Humidity:
                </span>{' '}
                {weatherData.main.humidity}%
              </li>
              <li>
                <span className="font-light tracking-wide opacity-50">
                  Wind:
                </span>{' '}
                {Math.floor(weatherData.wind.speed * 1.61)} km/h{' '}
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={weatherIcon} alt="Weather icon" />
            <div className="flex items-baseline gap-2">
              <p className="text-5xl font-bold">
                {Math.floor(weatherData.main.temp - 272.15)}°C
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWeatherInfo;
