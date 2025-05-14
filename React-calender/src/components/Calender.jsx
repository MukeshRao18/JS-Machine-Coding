import { useState } from 'react';
import './Calender.css';

const Calender = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const previous = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const next = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div>
      <div className='navigation'>
        <h3>
          <span onClick={previous} style={{ cursor: 'pointer' }}>&lt;</span>&nbsp;
          {months[month]}, {year}
          &nbsp;<span onClick={next} style={{ cursor: 'pointer' }}>&gt;</span>
        </h3>
      </div>
      <div className='grid-container'>
        {days.map((day, i) => (
          <div className='box day' key={i}>{day}</div>
        ))}
        {[...Array(firstDay).keys()].map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}
        {[...Array(lastDay).keys()].map((_, i) => (
          <div className={`box date ${i + 1}`} key={i}>{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
