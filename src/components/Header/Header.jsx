import React from 'react';
import HeaderDayInfo from './HeaderDayInfo';
import HeaderWeatherInfo from './HeaderWeatherInfo';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <HeaderDayInfo />
      <HeaderWeatherInfo />
    </div>
  );
};

export default Header;
