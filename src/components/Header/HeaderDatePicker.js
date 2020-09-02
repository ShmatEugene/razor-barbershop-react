import React from 'react';
import Calendar from '../UI/Calendar/Calendar';

export default function HeaderDatePicker() {
  return (
    <div className="sh-datepicker-box sh-pall-20">
      <div className="header-reservation-title sh-grey-font sh-tw-3 text-center">
        <span>choose date</span>
      </div>
      <div className="header-reservation-data-box sh-white-font d-flex justify-content-center">
        <div className="header-reservation-day lora">
          <span id="sh-header-datepicker-day">29</span>
        </div>
        <div className="header-reservation-month-box sh-ml-10 text-center align-self-center sh-grey-font">
          <div className="header-reservation-month">
            <span id="sh-header-datepicker-month">Jul</span>
          </div>
          <div className="header-reservation-arrow">
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
        <input id="sh-header-datepicker" type="text" />
      </div>
      <Calendar />
    </div>
  );
}
