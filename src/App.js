import React from 'react';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      {/* header end !*/}
      {/* About us !*/}
      <section id="sh-about-us" className="about-us-section sh-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="about-first-img-block">
                <img src="images/about1.jpg" className="about-first-img w-100" alt="about-img" />
              </div>
              <div className="about-second-img-block position-absolute">
                <img src="images/about2.jpg" className="about-second-img w-100" alt="about-img" />
              </div>
              <div className="about-video-button-block sh-pl-20 position-absolute">
                <a
                  href="https://www.youtube.com/watch?v=l-epKcOA7RQ"
                  className="about-video-button d-block sh-button sh-black-bg sh-pall-20 trans-03">
                  <div className="about-video-button-content d-flex justify-content-center align-items-center">
                    <div className="about-video-button-play-icon sh-pr-10">
                      <span className="flaticon-play-button"></span>
                    </div>
                    <div className="about-video-button-text">
                      Play
                      <br />
                      the video
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-5 sh-pl-40 sh-pr-0">
              <div className="heading-title">
                <p className="sh-grey-font">Sucsess story</p>
                <h2>About Us</h2>
              </div>
              <div className="about-us-text sh-grey-font sh-mt-20">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna nec
                  purus finibus, et tempus eros rutrum. Phasellus metus neque, rhoncus non
                  scelerisque in, porttitor ut orci. Sed condimentum est nibh, hendrerit tincidunt
                  leo pellentesque eget. Praesent quis tortor a odio tempus blandit nec a mauris.
                </p>
                <p>
                  Sed condimentum est nibh, hendrerit tincidunt leo pellentesque eget. Praesent quis
                  tortor a odio tempus blandit nec a mauris. Vivamus ac lobortis elit, a ultricies
                  ante. Nunc purus mi, laoreet eu nisi id.
                </p>
              </div>
              <div className="about-us-video-block sh-mt-20">
                <a href="/#" className="sh-button sh-accent-font sh-transparent-button trans-03">
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us end !*/}
      {/* Visit us !*/}
      <section className="visit-us-section sh-pt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="visit-us-bg sh-bg-fixed w-100">
              <div className="container">
                <div className="visit-us-content">
                  <div className="heading-title sh-font-white text-center">
                    <p>Visit us</p>
                    <h2>We have the best barbers</h2>
                  </div>
                  <div className="sh-line sh-white-bg sh-mtb-20 position-relative"></div>
                  <div className="visit-us-text-block text-center sh-white-font position-relative">
                    <p>
                      Ut ut tincidunt tellus. Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Sed dignissim fringilla tellus sit amet suscipit. Proin malesuada
                      blandit leo semper euismod. Cras posuere blandit risus a auctor.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Visit us end !*/}
      {/* Services !*/}
      <section id="sh-services" className="services-section sh-pt-100">
        <div className="container">
          <div className="heading-title">
            <p className="sh-grey-font">Lorem ipsum</p>
            <h2>Services</h2>
          </div>
          <div className="row services-list sh-mt-60">
            <div className="col-sm-3 service-card trans-05 sh-pall-20">
              <span className="flaticon-razor service-card-icon"></span>
              <h3 className="service-card-title sh-ptb-20 trans-03">Beard and mustache trim</h3>
              <div className="service-card-text">
                <p className="sh-mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur
                  magnam qui accusamus ab unde aperiam perferendis, architecto provident.
                </p>
              </div>
            </div>
            <div className="col-sm-3 service-card trans-05 sh-pall-20">
              <span className="flaticon-soap service-card-icon"></span>
              <h3 className="service-card-title sh-ptb-20 trans-03">Tonnig & camouflage</h3>
              <div className="service-card-text">
                <p className="sh-mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur
                  magnam qui accusamus ab unde aperiam perferendis, architecto provident.
                </p>
              </div>
            </div>
            <div className="col-sm-3 service-card trans-05 sh-pall-20">
              <span className="flaticon-gentleman service-card-icon"></span>
              <h3 className="service-card-title sh-ptb-20 trans-03">Haircut styles</h3>
              <div className="service-card-text">
                <p className="sh-mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur
                  magnam qui accusamus ab unde aperiam perferendis, architecto provident.
                </p>
              </div>
            </div>
            <div className="col-sm-3 service-card trans-05 sh-pall-20">
              <span className="flaticon-facial-mask service-card-icon"></span>
              <h3 className="service-card-title sh-ptb-20 trans-03">Facial masking</h3>
              <div className="service-card-text">
                <p className="sh-mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur
                  magnam qui accusamus ab unde aperiam perferendis, architecto provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services end !*/}
      {/* Team !*/}
      <section className="team-section sh-mt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="team-bg w-100 sh-black-bg">
              <div className="container">
                <div className="team-content">
                  <div className="heading-title sh-font-white text-center">
                    <p className="sh-font-gray">Lorem ipsum</p>
                    <h2>Meet the team</h2>
                  </div>
                  <div className="team-members-list team-members-slider  sh-mt-80">
                    <div className="team-member-card position-relative">
                      <img src="images/team/team1.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-card position-relative">
                      <img src="images/team/team2.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-card position-relative">
                      <img src="images/team/team3.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-card position-relative">
                      <img src="images/team/team4.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-card position-relative">
                      <img src="images/team/team5.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-member-card position-relative">
                      <img src="images/team/team6.png" alt="team" />
                      <div className="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                        <div className="team-member-social d-flex sh-white-font trans-03">
                          <a href="/#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-instagram"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-vk"></i>
                          </a>
                          <a href="/#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div>
                        <div className="team-member-info sh-pb-60 trans-03 position-absolute">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team end !*/}
      {/* Reservation !*/}
      <section id="sh-reservation" className="reservation-section sh-mt-100">
        <div className="container">
          <div className="heading-title">
            <p className="sh-grey-font">Lorem ipsum</p>
            <h2>Reservation</h2>
          </div>
          <div className="reservation-block sh-mt-80 d-flex justify-content-between">
            <div className="working-time align-self-start sh-white-bg sh-pall-30">
              <div className="heading-title">
                <p className="sh-grey-font">Lorem ipsum</p>
                <h3>Working Hours</h3>
              </div>
              <p className="sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="working-time-list d-flex justify-content-between">
                <div className="working-time-day sh-tw-4">
                  <span>MON – FRI</span>
                </div>
                <div className="working-time-hours sh-tw-6">
                  <span>9:00 – 21:00</span>
                </div>
              </div>
              <div className="working-time-list d-flex justify-content-between sh-mt-10">
                <div className="working-time-day sh-tw-4">
                  <span>SUN</span>
                </div>
                <div className="working-time-hours sh-tw-6">
                  <span>8:00 – 16:00</span>
                </div>
              </div>
            </div>
            <div className="appontment-now-block align-self-end sh-black-bg sh-pall-30">
              <div className="heading-title sh-font-white">
                <p className="sh-font-gray">Lorem ipsum</p>
                <h3>Appointment now</h3>
              </div>
              <div className="appointment-inputs-list sh-mt-40">
                <div className="appointment-input position-relative">
                  <input type="text" id="sh-reservation-datepicker" placeholder="Choose date" />
                  <i className="fa fa-chevron-down position-absolute"></i>
                </div>
                <div className="appointment-input position-relative sh-mt-20">
                  <select
                    className="sh-timepicker sh-black-bg sh-white-font"
                    id="sh-reservation-timepicker"
                    type="text">
                    <option>Choose time</option>
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
                  <i className="fa fa-chevron-down position-absolute"></i>
                </div>
                <div className="appointment-input position-relative sh-mt-20">
                  <select
                    className="sh-timepicker sh-black-bg sh-white-font"
                    id="sh-reservation-service-picker"
                    type="text">
                    <option>Choose sevice</option>
                    <option>Haircut & Style</option>
                    <option>Creative cut</option>
                    <option>Beard sculpt</option>
                    <option>Wash & Restyle</option>
                    <option>Beard trim</option>
                    <option>Children's haircut</option>
                    <option>Scissor Cut</option>
                  </select>
                  <i className="fa fa-chevron-down position-absolute"></i>
                </div>
                <div className="appointment-input position-relative sh-mt-20">
                  <select
                    className="sh-timepicker sh-black-bg sh-white-font"
                    id="sh-reservation-barber-picker"
                    type="text">
                    <option>Choose barber</option>
                    <option>Jamel Cameron</option>
                    <option>Lyman Andrews</option>
                    <option>Kristine Hays</option>
                    <option>Winifred Owens</option>
                    <option>Celeste Jimenez</option>
                    <option>Wanda Collier</option>
                    <option>Leticia Thornton</option>
                  </select>
                  <i className="fa fa-chevron-down position-absolute"></i>
                </div>
                <div className="appointment-button">
                  <a
                    href="/#"
                    className="d-block trans-03 sh-button sh-black-bg text-center sh-mt-20 d-flex justify-content-center">
                    <div className="align-self-center">book now</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reservation end !*/}
      {/* Our Pricing !*/}
      <section id="sh-pricing" className="pricing-section sh-mt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 pricing-bg sh-bg"></div>
            <div className="col-sm-6 sh-black-bg sh-pall-100">
              <div className="heading-title sh-font-white">
                <p className="sh-font-gray">Lorem ipsum</p>
                <h2>Our Pricing</h2>
              </div>
              <div id="sh-pricing-tabs" className="sh-pricing-tabs">
                <div className="sh-pricing-tab-nav sh-plr-70 sh-pt-50">
                  <ul className="d-flex justify-content-around sh-accent-font">
                    <li>
                      <a href="#tabs-1">Haircut</a>
                    </li>
                    <li>
                      <a href="#tabs-2">Beard</a>
                    </li>
                    <li>
                      <a href="#tabs-3">Combo</a>
                    </li>
                    <li>
                      <a href="#tabs-4">Other</a>
                    </li>
                  </ul>
                </div>
                <div className="sh-pricing-tab-content">
                  <div className="sh-pricing-tab-content-item sh-pt-50" id="tabs-1">
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                  </div>
                  <div className="sh-pricing-tab-content-item sh-pt-50" id="tabs-2">
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                  </div>
                  <div className="sh-pricing-tab-content-item sh-pt-50" id="tabs-3">
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                  </div>
                  <div className="sh-pricing-tab-content-item sh-pt-50" id="tabs-4">
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                    <div className="sh-pricing-tab-service-info sh-mt-30">
                      <div className="sh-pricing-tab-service-main-info d-flex">
                        <h3 className="sh-white-font">Men's haircut</h3>
                        <div className="sh-pricing-tab-line d-flex align-self-end"></div>
                        <div className="sh-pricing-tab-price-block d-flex align-items-end">
                          <span className="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                          <span className="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                          <span className="sh-pricing-tab-time"> 50min</span>
                        </div>
                      </div>
                      <p className="sh-pricing-tab-service-detailed-info sh-mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam
                        eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit
                        blanditiis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Pricing end !*/}
      {/* Blog !*/}
      <section className="blog-section sh-mt-100">
        <div className="container">
          <div className="heading-title">
            <p className="sh-grey-font">Lorem ipsum</p>
            <h2>Our Blog</h2>
          </div>
          <div className="sh-blog-list sh-mt-60 d-flex">
            <article className="sh-blog-post w-100 post-img-top">
              <div className="sh-blog-post-img-container position-relative">
                <div className="sh-blog-post-img">
                  <img src="images/blog1.jpg" alt="blog" />
                </div>
              </div>
              <div className="post-info-container position-relative">
                <div className="post-info sh-pall-40">
                  <h3 className="text-center">Check out our new barbershop</h3>
                  <p className="sh-post-content text-center sh-mt-40 sh-mb-0">
                    Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum
                    atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.
                  </p>
                  <div className="sh-post-button d-flex justify-content-center">
                    <a
                      href="/#"
                      className="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <article className="sh-blog-post w-100 post-img-bottom">
              <div className="post-info-container position-relative">
                <div className="post-info sh-pall-40">
                  <h3 className="text-center">Check out our new barbershop</h3>
                  <p className="sh-post-content text-center sh-mt-40 sh-mb-0">
                    Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum
                    atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.
                  </p>
                  <div className="sh-post-button d-flex justify-content-center">
                    <a
                      href="/#"
                      className="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">
                      read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="sh-blog-post-img-container position-relative">
                <div className="sh-blog-post-img">
                  <img src="images/blog2.jpg" alt="blog" />
                </div>
              </div>
            </article>
            <article className="sh-blog-post w-100">
              <div className="sh-blog-post-img-container position-relative">
                <div className="sh-blog-post-img">
                  <img src="images/blog3.jpg" alt="blog" />
                </div>
              </div>
              <div className="post-info-container position-relative">
                <div className="post-info sh-pall-40">
                  <h3 className="text-center">Check out our new barbershop</h3>
                  <p className="sh-post-content text-center sh-mt-40 sh-mb-0">
                    Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum
                    atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.
                  </p>
                  <div className="sh-post-button d-flex justify-content-center">
                    <a
                      href="/#"
                      className="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Blog end !*/}
      {/* Testimonials !*/}
      <section id="sh-testimonials" className="testimonials-section sh-mt-100">
        <div className="container-fluid">
          <div className="row">
            <div className="testimonials-bg w-100 sh-bg-fixed">
              <div className="container">
                <div className="testimonials-content">
                  <div className="heading-title sh-font-white">
                    <p className="sh-font-gray">Lorem ipsum</p>
                    <h2>Testimonials</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="testimonials-slider sh-mt-60">
                        <div className="testimonials-slider-item">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                          <p className="sh-white-font">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their
                            infancy.
                          </p>
                        </div>
                        <div className="testimonials-slider-item">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                          <p className="sh-white-font sh-mb-10">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English.
                          </p>
                        </div>
                        <div className="testimonials-slider-item">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                          <p className="sh-white-font sh-mb-10">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their
                            infancy.{' '}
                          </p>
                        </div>
                        <div className="testimonials-slider-item">
                          <h5 className="sh-white-font">Sondra Pollard</h5>
                          <p className="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                          <p className="sh-white-font sh-mb-10">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and web
                            page editors now use Lorem Ipsum as their default model text, and a
                            search for 'lorem ipsum' will uncover many web sites still in their
                            infancy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 offset-md-1">
                      <div className="brands-list sh-mt-60 d-flex justify-content-between flex-wrap">
                        <div className="sh-brand trans-03 d-flex sh-mb-30">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/1.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                        <div className="sh-brand trans-03 d-flex sh-mb-30">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/2.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                        <div className="sh-brand trans-03 d-flex sh-mb-30">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/3.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                        <div className="sh-brand trans-03 d-flex">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/4.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                        <div className="sh-brand trans-03 d-flex">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/5.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                        <div className="sh-brand trans-03 d-flex">
                          <a className="d-flex" href="/#">
                            <img
                              className="align-self-center"
                              src="images/Brands/6.png"
                              alt="brand"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials end !*/}
      {/* Footer !*/}
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="footer-bg w-100 sh-black-bg">
              <div className="container">
                <div className="footer-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="footer-logo">
                        <img src="images/logo2.png" alt="logo" />
                      </div>
                      <div className="sh-footer-text sh-pt-20">
                        <p>
                          Aenean ullamcorper pellentesque ex et molestie. Maecenas et malesuada
                          sapien, quis semper felis. Integer egestas tellus nec tincidunt tempus.
                        </p>
                      </div>
                      <div className="sh-footer-contacts sh-pt-20">
                        <ul>
                          <li>
                            <span className="sh-footer-icon flaticon-maps-and-flags"></span>
                            <span>344 4th St. Ridge, FL 10002</span>
                          </li>
                          <li className="sh-pt-5">
                            <span className="sh-footer-icon flaticon-phone"></span>
                            <span>(455) 123-4567</span>
                          </li>
                          <li className="sh-pt-5">
                            <span className="sh-footer-icon flaticon-mail-black-envelope-symbol"></span>
                            <span>info@shmatthemes.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <h5 className="sh-white-font">Recent Posts</h5>
                      <div className="sh-footer-posts-list sh-pt-30">
                        <a href="/#" className="sh-footer-post d-block">
                          <div className="sh-footer-post-title">
                            Check out our new barbershop with PlayStation 4 and other benefits
                          </div>
                          <div className="sh-footer-post-date sh-pt-7 sh-tw-6">24 june, 2018</div>
                        </a>
                        <a href="/#" className="sh-footer-post d-block sh-mt-20">
                          <div className="sh-footer-post-title">
                            Check out our new barbershop with PlayStation 4 and other benefits
                          </div>
                          <div className="sh-footer-post-date sh-pt-7 sh-tw-6">24 june, 2018</div>
                        </a>
                        <a href="/#" className="sh-footer-post d-block sh-mt-20">
                          <div className="sh-footer-post-title">
                            Check out our new barbershop with PlayStation 4 and other benefits
                          </div>
                          <div className="sh-footer-post-date sh-pt-7 sh-tw-6">24 june, 2018</div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <h5 className="sh-white-font">Subscribe</h5>
                      <form className="sh-footer-email-form appointment-inputs-list d-flex sh-mt-30">
                        <input type="email" placeholder="E-mail adress" />
                        <button className="sh-button trans-03" type="button">
                          Subscribe
                        </button>
                      </form>
                      <div className="sh-footer-text sh-pt-20">
                        <p>
                          Aenean ullamcorper pellentesque ex et molestie. Maecenas et malesuada
                          sapien, quis semper felis. Integer egestas tellus nec tincidunt tempus.
                        </p>
                      </div>
                      <div className="team-member-social d-flex sh-gray-font trans-03 sh-pt-5">
                        <a href="/#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="/#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="/#">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="/#">
                          <i className="fa fa-vk"></i>
                        </a>
                        <a href="/#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end !*/}

      {/* Optional JavaScript */}
      {/* jQuery first, then Bootstrap JS */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      {/* Plugins */}
      {/* Slick Slider */}
      <script src="js/plugins/slick.min.js"></script>
      {/* jQuery UI */}
      <script src="js/plugins/jquery-ui.min.js"></script>
      {/* Magnific Popup */}
      <script src="js/plugins/jquery.magnific-popup.min.js"></script>

      {/* Custom */}
      <script src="js/custom.js"></script>
    </>
  );
}

export default App;
