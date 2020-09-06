import React from 'react';
import Select from './HeaderSelect';
import HeaderDatePicker from './HeaderDatePicker';
import HeaderTimePicker from './HeaderTimePicker';

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
      <HeaderDatePicker />
      <HeaderTimePicker />
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
