import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow({ onClick }) {
  //const { onClick } = props;
  return (
    <div onClick={onClick} className="header-slider-arrow-next trans-03">
      <span className="header-slider-arrow-next-1"></span>
      <span className="header-slider-arrow-next-2"></span>
      <span className="header-slider-arrow-next-3"></span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={'header-slider-arrow-prev trans-03'}>
      <span className="header-slider-arrow-prev-1"></span>
      <span className="header-slider-arrow-prev-2"></span>
      <span className="header-slider-arrow-prev-3"></span>
    </div>
  );
}

export default function HeaderSlider() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="header-slider">
        <Slider {...sliderSettings}>
          <div className="header-bg sh-bg">
            <div className="header-text text-center">
              <h1 className="sh-white-font title-slider animation-delay-05">
                Barbershop
                <br />
                Razor
              </h1>
              <div className="header-line sh-white-bg sh-mt-25 sh-mb-15 animation-delay-08"></div>
              <div className="header-sub-title sh-white-font lora animation-delay-11">
                <span>Best haicuts</span>
              </div>
              <div className="header-btn-block d-flex justify-content-center sh-mt-30 animation-delay-14">
                <a href="/#" className="header-btn sh-transparent-button trans-03 sh-button">
                  Our services
                </a>
              </div>
            </div>
          </div>
          <div className="header-bg sh-bg">
            <div className="header-text text-center">
              <div className="sh-white-font title-slider lora animation-delay-05">
                Barbershop
                <br />
                Shmat
              </div>
              <div className="header-line sh-white-bg sh-mt-25 sh-mb-15 animation-delay-08"></div>
              <div className="header-sub-title sh-white-font lora animation-delay-11">
                <span>Best haicuts</span>
              </div>
              <div className="header-btn-block d-flex justify-content-center sh-mt-30 animation-delay-14">
                <a href="/#" className="header-btn sh-transparent-button trans-03 sh-button">
                  Our services
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
