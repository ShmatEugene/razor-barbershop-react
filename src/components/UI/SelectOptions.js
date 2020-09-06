import React from 'react';

const SelectOptions = ({ options, onSelectItem, activeItem }) => {
  return (
    <div className="ui-select-popup">
      <ul>
        {options.map((option, index) => {
          return (
            <li
              className={activeItem === option ? 'active' : ''}
              key={option + index}
              onClick={() => onSelectItem(option)}>
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectOptions;
