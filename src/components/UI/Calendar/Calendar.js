import React from 'react';

export default function Calendar(props) {
  const DAYS_IN_WEEK = 7;
  const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];
  const {
    date = new Date(),
    years = [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    weekDayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    onChange = Function.prototype,
  } = props;
  const currentDate = new Date();

  const monthData = [
    [undefined, new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
  ];

  const [selectedDate, setSelectedDate] = React.useState(date);

  const handlePrevMonthClick = () => {};
  const handleNextMonthClick = () => {};

  const handleDayClick = (date) => {
    setSelectedDate(date);
    onChange(date);
    console.log(date);
  };

  return (
    <div className="ui-calendar">
      <div className="ui-calendar-header d-flex">
        <span className="ui-calendar-control">prev</span>
        <div className="ui-calendar-title">
          <span className="ui-calendar-month">September </span>
          <span className="ui-calendar-year">2020</span>
        </div>
        <span className="ui-calendar-control">next</span>
      </div>
      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => {
              return <th key={name}>{name}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index}>
              {week.map((date, index) =>
                date ? (
                  <td key={index} onClick={() => handleDayClick(date)}>
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
