import React from 'react';
import TopHeader from '../Navigation/Navigation';
import HeaderSlider from './HeaderSlider';
import Reservation from './Reservation';

const Header = () => {
  return (
    <header>
      <TopHeader />
      <div id="sh-home" className="header-content-box">
        <HeaderSlider />
        <Reservation />
      </div>
    </header>
  );
};

export default Header;
