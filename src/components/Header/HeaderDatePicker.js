import React from 'react';
import Calendar from '../UI/Calendar/Calendar.jsx';

export default function HeaderDatePicker(props) {
  const [date, setDate] = React.useState(new Date());

  const {
    shortMonthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  } = props;

  const handleDateChange = (date) => setDate(date);
  return (
    <div className="sh-datepicker-box sh-pall-20">
      <div className="header-reservation-title sh-grey-font sh-tw-3 text-center">
        <span>choose date</span>
      </div>
      <div className="header-reservation-data-box sh-white-font d-flex justify-content-center">
        <div className="header-reservation-day lora">
          <span id="sh-header-datepicker-day">{date.getDate()}</span>
        </div>
        <div className="header-reservation-month-box sh-ml-10 text-center align-self-center sh-grey-font">
          <div className="header-reservation-month">
            <span id="sh-header-datepicker-month">{shortMonthNames[date.getMonth()]}</span>
          </div>
          <div className="header-reservation-arrow">
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
        <input id="sh-header-datepicker" type="text" />
      </div>
      <Calendar onChange={handleDateChange} selectedDate={date} />
    </div>
  );
}
