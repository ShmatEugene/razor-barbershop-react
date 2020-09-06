import React from 'react';
import SelectOptions from '../UI/SelectOptions';

const HeaderTimePicker = () => {
  const [time, setTime] = React.useState('9:00');
  const [isPopUpOpen, setPopUpState] = React.useState(false);

  const options = React.useRef(null);

  React.useEffect(() => {
    document.body.addEventListener('click', bodyClickHandler);
  }, []);

  const bodyClickHandler = (e) => {
    if (!e.path.includes(options.current)) {
      setPopUpState(false);
    }
  };

  const handleTimeChange = (time) => {
    setTime(time);
    setPopUpState(!isPopUpOpen);
  };

  const togglePopUp = () => {
    setPopUpState(!isPopUpOpen);
  };

  return (
    <div ref={options} className="sh-timepicker-box sh-pall-20">
      <div className="header-reservation-title sh-grey-font sh-tw-3 text-center">
        <span>choose time</span>
      </div>
      <div
        onClick={togglePopUp}
        className="header-reservation-data-box sh-white-font d-flex justify-content-center">
        <div className="header-reservation-hour lora">
          <span id="sh-header-datepicker-hours">{time.split(':')[0]}</span>
        </div>
        <div className="header-reservation-minutes-box sh-ml-10 text-center align-self-center sh-grey-font">
          <div className="header-reservation-month">
            <span id="sh-header-datepicker-minutes">{time.split(':')[1]}</span>
          </div>
          <div className="header-reservation-arrow">
            <i className="fa fa-chevron-down"></i>
          </div>
        </div>
        {isPopUpOpen && (
          <SelectOptions
            options={[
              '9:00',
              '10:00',
              '11:00',
              '12:00',
              '13:00',
              '14:00',
              '15:00',
              '16:00',
              '17:00',
              '1700',
            ]}
            onSelectItem={handleTimeChange}
            activeItem={time}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderTimePicker;
