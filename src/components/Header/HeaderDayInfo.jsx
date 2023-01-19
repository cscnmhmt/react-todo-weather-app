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
    <div>
      <div>{day}</div>
      <div>
        {new Date().getHours()}:{new Date().getMinutes()}
      </div>
    </div>
  );
};

export default HeaderDayInfo;
