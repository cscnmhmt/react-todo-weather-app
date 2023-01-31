import React, { useEffect, useState } from 'react';

const HeaderDayInfo = () => {
  const [day, setDay] = useState('');

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  useEffect(() => {
    const newDay = new Date().getDay();
    let currentDay;
    days.forEach((day, index) => {
      if (index + 1 === newDay) {
        currentDay = day;
      }
    });
    setDay(currentDay);
  }, []);

  return (
    <div className="max-md:hidden rounded-lg bg-gray-800 px-6 py-3 text-2xl font-bold text-white">
      <h3>{day}</h3>
      <h4>
        {new Date().getHours()}:{new Date().getMinutes()}
      </h4>
    </div>
  );
};

export default HeaderDayInfo;
