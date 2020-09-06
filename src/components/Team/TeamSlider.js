import React from 'react';
import Slider from 'react-slick';

const TeamSlider = ({ sliderData }) => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="team-members-list team-members-slider  sh-mt-80">
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => {
          return (
            <div key={index} className="team-member-card position-relative">
              <img src={slide.img} alt="team" />
              <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                <div className="team-member-social d-flex sh-white-font trans-03">
                  {slide.facebook && (
                    <a href={slide.facebook}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {slide.twitter && (
                    <a href={slide.twitter}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {slide.inst && (
                    <a href={slide.inst}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {slide.vk && (
                    <a href={slide.vk}>
                      <i className="fab fa-vk"></i>
                    </a>
                  )}
                  {slide.linkedIn && (
                    <a href={slide.linkedIn}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                </div>
                <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                  <h5 className="sh-white-font">Sondra Pollard</h5>
                  <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TeamSlider;
