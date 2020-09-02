import React from 'react';
import Select from './HeaderSelect/HeaderSelect';
import HeaderDatePicker from './HeaderDatePicker';

export default function Reservation() {
  return (
    <div className="header-reservation-box sh-black-bg d-flex justify-content-center">
      <div className="sh-service-pick-box sh-pall-20 h-100">
        <div className="header-reservation-title sh-grey-font sh-tw-3 text-center">
          <span>choose service</span>
        </div>
        <div className="header-reservation-data-box sh-white-font d-flex justify-content-center align-items-center h-100">
          <div className="header-reservation-service align-self-center d-flex align-items-center">
            <Select
              selectOptions={[
                'Haircut & Style',
                'Creative cut',
                'Beard sculpt',
                'Wash & Restyle',
                'Beard trim',
                'Children`s haircut',
                'Scissor Cut',
              ]}
            />
          </div>
        </div>
      </div>
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
      </div>
      <HeaderDatePicker />
      <div className="sh-timepicker-box sh-pall-20">
        <div className="header-reservation-title sh-grey-font sh-tw-3 text-center">
          <span>choose time</span>
        </div>
        <div className="header-reservation-data-box sh-white-font d-flex justify-content-center">
          <div className="header-reservation-hour lora">
            <span id="sh-header-datepicker-hours">09</span>
          </div>
          <div className="header-reservation-minutes-box sh-ml-10 text-center align-self-center sh-grey-font">
            <div className="header-reservation-month">
              <span id="sh-header-datepicker-minutes">00</span>
            </div>
            <div className="header-reservation-arrow">
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <select
            className="sh-timepicker sh-black-bg sh-white-font"
            id="sh-header-timepicker"
            type="text">
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>17:00</option>
            <option>18:00</option>
          </select>
        </div>
      </div>
      <div className="sh-header-reservation-button-box h-100 d-flex justify-content-center align-items-center">
        <a
          href="/#"
          className="sh-header-reservation-button sh-white-font trans-03 sh-tw-6 text-center">
          check
          <br />
          aviability
        </a>
      </div>
    </div>
  );
}
