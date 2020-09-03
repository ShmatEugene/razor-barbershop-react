import React from 'react';

export default function Select({ selectOptions }) {
  const [isPopUpOpen, setPopUpState] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(selectOptions[0]);
  const selectLabelRef = React.useRef(null);
  const selectArrowRef = React.useRef(null);
  const selectPopUpRef = React.useRef(null);

  const bodyClickHandler = (e) => {
    if (
      !e.path.includes(selectLabelRef.current) &&
      !e.path.includes(selectArrowRef.current) &&
      !e.path.includes(selectPopUpRef.current)
    ) {
      setPopUpState(false);
    }
  };

  const togglePopUp = () => {
    setPopUpState(!isPopUpOpen);
  };

  const onSelectItem = (option) => {
    setActiveItem(option);
    setPopUpState(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', bodyClickHandler);
  }, []);

  return (
    <>
      <div ref={selectLabelRef} className="ui-select-label" onClick={togglePopUp}>
        <span>{activeItem}</span>
      </div>
      <div ref={selectArrowRef} className="ui-select-arrow sh-grey-font aling-self-center sh-pl-10">
        <i className="fa fa-chevron-down"></i>
      </div>
      {isPopUpOpen && (
        <div ref={selectPopUpRef} className="ui-select-popup">
          <ul>
            {selectOptions.map((option, index) => {
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
      )}
    </>
  );
}
