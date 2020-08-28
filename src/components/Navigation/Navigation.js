import React from 'react';
import logo from '../../assets/img/logo2.png';
import Button from '../UI/Button';

function renderLinks(links) {
  return links.map((link, index) => (
    <li key={link + index}>
      <div className="nav-link-block">
        <a className="sh-nav-link" href="#sh-home">
          {link}
        </a>
      </div>
    </li>
  ));
}

const TopHeader = () => {
  const links = ['Home', 'About us', 'Services', 'Reservation', 'Prices', 'Blog', 'Testimonials'];

  return (
    <div className="container-fluid nav-container">
      <div className="row sh-black-bg navigation-bar">
        <div id="sh-header-menu" className="container d-flex justify-content-between">
          <div className="logo align-self-center">
            <a className="logo-link" href="index.html">
              <img className="logo-img" alt="logo" src={logo} />
            </a>
          </div>
          <div className="navigation-menu align-self-center d-flex">
            <nav className="align-self-center">
              <ul className="d-flex sh-grey-font">{renderLinks(links)}</ul>
            </nav>
            <div className="header-btn-block">
              <Button classes="header-book-btn sh-ml-90 sh-white-font trans-03" to="/#">
                book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
