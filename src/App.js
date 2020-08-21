import React from 'react';

function App() {
  return (
    <body>
    {/* loading 
    <div id="loading" class="apache-bg">  
            <div id="loader"></div>
    </div>
     loading End */}
    {/* header !*/}
    <header>
       <div class="container-fluid nav-container">
            <div class="row sh-black-bg navigation-bar">
                <div id="sh-header-menu" class="container d-flex justify-content-between">
                    <div class="logo align-self-center">
                        <a class="logo-link" href="index.html">
                            <img class="logo-img" alt="logo" src="images/logo2.png" />
                        </a>
                    </div>
                    <div class="navigation-menu align-self-center d-flex">
                        <nav class="align-self-center">
                            <ul class="d-flex sh-grey-font">
                                <li><div class="nav-link-block"><a class="active sh-nav-link" href="#sh-home">Home</a></div></li>
                                <li><div class="nav-link-block"><a class="sh-nav-link" href="#sh-about-us">About us</a></div></li>
                                <li><div class="nav-link-block"><a class="sh-nav-link" href="#sh-services">Servises</a></div></li>
                                <li><div class="nav-link-block"><a class="sh-nav-link" href="#sh-reservation">Reservation</a></div></li>
                                <li><div class="nav-link-block"><a class="sh-nav-link" href="#sh-pricing">Prices</a></div></li>
                                <li><div class="nav-link-block"><a href="#">Blog</a></div></li>
                                <li><div class="nav-link-block"><a class="sh-nav-link" href="#sh-testimonials">Testimonials</a></div></li>
                            </ul>
                        </nav>
                        <div class="header-btn-block">
                            <a class="header-book-btn sh-ml-90 sh-white-font trans-03 sh-button" href="#">book now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sh-home" class="header-content-box">
            <div class="header-slider">
                <div class="header-bg sh-bg">
                    <div class="header-text text-center">
                        <h1 class="sh-white-font title-slider animation-delay-05">Barbershop<br />Razor</h1>
                        <div class="header-line sh-white-bg sh-mt-25 sh-mb-15 animation-delay-08"></div>
                        <div class="header-sub-title sh-white-font lora animation-delay-11">
                            <span>Best haicuts</span>
                        </div>
                        <div class="header-btn-block d-flex justify-content-center sh-mt-30 animation-delay-14">
                            <a href="#" class="header-btn sh-transparent-button trans-03 sh-button">Our services</a>
                        </div>
                    </div>
                </div>
                <div class="header-bg sh-bg">
                    <div class="header-text text-center">
                        <div class="sh-white-font title-slider lora animation-delay-05">Barbershop<br />Shmat</div>
                        <div class="header-line sh-white-bg sh-mt-25 sh-mb-15 animation-delay-08"></div>
                        <div class="header-sub-title sh-white-font lora animation-delay-11">
                            <span>Best haicuts</span>
                        </div>
                        <div class="header-btn-block d-flex justify-content-center sh-mt-30 animation-delay-14">
                            <a href="#" class="header-btn sh-transparent-button trans-03 sh-button">Our services</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-slider-arrow-prev trans-03">
                <span class="header-slider-arrow-prev-1"></span>
                <span class="header-slider-arrow-prev-2"></span>
                <span class="header-slider-arrow-prev-3"></span>
            </div>
            <div class="header-slider-arrow-next trans-03">
                <span class="header-slider-arrow-next-1"></span>
                <span class="header-slider-arrow-next-2"></span>
                <span class="header-slider-arrow-next-3"></span>
            </div>
            <div class="header-reservation-box sh-black-bg d-flex justify-content-center">
               <div class="sh-service-pick-box sh-pall-20 h-100">
                    <div class="header-reservation-title sh-grey-font sh-tw-3 text-center"><span>choose service</span></div>
                    <div class="header-reservation-data-box sh-white-font d-flex justify-content-center align-items-center h-100">
                        <div class="header-reservation-service align-self-center d-flex align-items-center">
                            <select class="sh-service-pick sh-black-bg sh-white-font" id="sh-header-service-pick" type="text">
                                <option>Haircut & Style</option>
                                <option>Creative cut</option>
                                <option>Beard sculpt</option>
                                <option>Wash & Restyle</option>
                                <option>Beard trim</option>
                                <option>Children's haircut</option>
                                <option>Scissor Cut</option>
                            </select>
                            <div class="header-reservation-arrow sh-grey-font aling-self-center">
                                <i class="fa fa-chevron-down"></i>
                            </div>        
                        </div>
                        
                    </div>
                </div>
                <div class="sh-datepicker-box sh-pall-20">
                    <div class="header-reservation-title sh-grey-font sh-tw-3 text-center"><span>choose date</span></div>
                    <div class="header-reservation-data-box sh-white-font d-flex justify-content-center">
                        <div class="header-reservation-day lora">
                            <span id="sh-header-datepicker-day">29</span>
                        </div>
                        <div class="header-reservation-month-box sh-ml-10 text-center align-self-center sh-grey-font">
                            <div class="header-reservation-month">
                                <span id="sh-header-datepicker-month">Jul</span>
                            </div>
                            <div class="header-reservation-arrow">
                                <i class="fa fa-chevron-down"></i>
                            </div>
                        </div>
                        <input id="sh-header-datepicker" type="text" />
                    </div>
                </div>
                <div class="sh-timepicker-box sh-pall-20">
                    
                    <div class="header-reservation-title sh-grey-font sh-tw-3 text-center"><span>choose time</span></div>
                    <div class="header-reservation-data-box sh-white-font d-flex justify-content-center">
                        <div class="header-reservation-hour lora">
                            <span id="sh-header-datepicker-hours">09</span>
                        </div>
                        <div class="header-reservation-minutes-box sh-ml-10 text-center align-self-center sh-grey-font">
                            <div class="header-reservation-month">
                                <span id="sh-header-datepicker-minutes">00</span>
                            </div>
                            <div class="header-reservation-arrow">
                                <i class="fa fa-chevron-down"></i>
                            </div>
                        </div>
                        <select class="sh-timepicker sh-black-bg sh-white-font" id="sh-header-timepicker" type="text">
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
                    </div>
                </div>
                <div class="sh-header-reservation-button-box h-100 d-flex justify-content-center align-items-center">
                    <a href="#" class="sh-header-reservation-button sh-white-font trans-03 sh-tw-6 text-center">check<br />aviability</a>
                </div>
            </div>
        </div>
    </header>
    {/* header end !*/}
    {/* About us !*/}
    <section id="sh-about-us" class="about-us-section sh-pt-100">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                        <div class="about-first-img-block">
                            <img src="images/about1.jpg" class="about-first-img w-100" />
                        </div>
                        <div class="about-second-img-block position-absolute">
                            <img src="images/about2.jpg" class="about-second-img w-100" />
                        </div>
                        <div class="about-video-button-block sh-pl-20 position-absolute">
                            <a href="https://www.youtube.com/watch?v=l-epKcOA7RQ" class="about-video-button d-block sh-button sh-black-bg sh-pall-20 trans-03">
                                <div class="about-video-button-content d-flex justify-content-center align-items-center">
                                    <div class="about-video-button-play-icon sh-pr-10">
                                        <span class="flaticon-play-button"></span>
                                    </div>
                                    <div class="about-video-button-text">
                                        Play<br />the video
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>
                <div class="col-md-5 sh-pl-40 sh-pr-0">
                    <div class="heading-title">
                        <p class="sh-grey-font">Sucsess story</p>
                        <h2>About Us</h2> 
                    </div>
                    <div class="about-us-text sh-grey-font sh-mt-20">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus urna nec purus finibus, et tempus eros rutrum. Phasellus metus neque, rhoncus non scelerisque in, porttitor ut orci. Sed condimentum est nibh, hendrerit tincidunt leo pellentesque eget. Praesent quis tortor a odio tempus blandit nec a mauris.</p>
                        <p>Sed condimentum est nibh, hendrerit tincidunt leo pellentesque eget. Praesent quis tortor a odio tempus blandit nec a mauris. Vivamus ac lobortis elit, a ultricies ante. Nunc purus mi, laoreet eu nisi id.</p>
                    </div>
                    <div class="about-us-video-block sh-mt-20">
                        <a href="#" class="sh-button sh-accent-font sh-transparent-button trans-03">About us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* About us end !*/}
    {/* Visit us !*/}
    <section class="visit-us-section sh-pt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="visit-us-bg sh-bg-fixed w-100">
                    <div class="container">
                        <div class="visit-us-content">
                            <div class="heading-title sh-font-white text-center">
                                <p>Visit us</p>
                                <h2>We have the best barbers</h2> 
                            </div>
                            <div class="sh-line sh-white-bg sh-mtb-20 position-relative"></div>
                            <div class="visit-us-text-block text-center sh-white-font position-relative">
                                <p>Ut ut tincidunt tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dignissim fringilla tellus sit amet suscipit. Proin malesuada blandit leo semper euismod. Cras posuere blandit risus a auctor. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Visit us end !*/}
    {/* Services !*/}
    <section id="sh-services" class="services-section sh-pt-100">
        <div class="container">
            <div class="heading-title">
                <p class="sh-grey-font">Lorem ipsum</p>
                <h2>Services</h2> 
            </div>
            <div class="row services-list sh-mt-60">
                <div class="col-sm-3 service-card trans-05 sh-pall-20">
                    <span class="flaticon-razor service-card-icon"></span>
                    <h3 class="service-card-title sh-ptb-20 trans-03">Beard and mustache trim</h3>
                    <div class="service-card-text">
                        <p class="sh-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur magnam qui accusamus ab unde aperiam perferendis, architecto provident.</p>
                    </div>
                </div>
                <div class="col-sm-3 service-card trans-05 sh-pall-20">
                    <span class="flaticon-soap service-card-icon"></span>
                    <h3 class="service-card-title sh-ptb-20 trans-03">Tonnig & camouflage</h3>
                    <div class="service-card-text">
                        <p class="sh-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur magnam qui accusamus ab unde aperiam perferendis, architecto provident.</p>
                    </div>
                </div>
                <div class="col-sm-3 service-card trans-05 sh-pall-20">
                    <span class="flaticon-gentleman service-card-icon"></span>
                    <h3 class="service-card-title sh-ptb-20 trans-03">Haircut styles</h3>
                    <div class="service-card-text">
                        <p class="sh-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur magnam qui accusamus ab unde aperiam perferendis, architecto provident.</p>
                    </div>
                </div>
                <div class="col-sm-3 service-card trans-05 sh-pall-20">
                    <span class="flaticon-facial-mask service-card-icon"></span>
                    <h3 class="service-card-title sh-ptb-20 trans-03">Facial masking</h3>
                    <div class="service-card-text">
                        <p class="sh-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sit aspernatur magnam qui accusamus ab unde aperiam perferendis, architecto provident.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Services end !*/}
    {/* Team !*/}
    <section class="team-section sh-mt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="team-bg w-100 sh-black-bg">
                    <div class="container">
                        <div class="team-content">
                            <div class="heading-title sh-font-white text-center">
                                <p class="sh-font-gray">Lorem ipsum</p>
                                <h2>Meet the team</h2> 
                            </div>
                            <div class="team-members-list team-members-slider  sh-mt-80">
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team1.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team2.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team3.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team4.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team5.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-member-card position-relative">
                                    <img src="images/team/team6.png" />
                                    <div class="position-absolute team-member-overlay position-relative sh-pall-40 trans-03">
                                        <div class="team-member-social d-flex sh-white-font trans-03">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-vk"></i></a>
                                            <a href="#"><i class="fa fa-linkedin"></i></a>
                                        </div>
                                        <div class="team-member-info sh-pb-60 trans-03 position-absolute">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pt-5 sh-tw-4">Barber</p>
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
    <section id="sh-reservation" class="reservation-section sh-mt-100">
        <div class="container">
            <div class="heading-title">
                <p class="sh-grey-font">Lorem ipsum</p>
                <h2>Reservation</h2> 
            </div>
            <div class="reservation-block sh-mt-80 d-flex justify-content-between">
                <div class="working-time align-self-start sh-white-bg sh-pall-30">
                    <div class="heading-title">
                        <p class="sh-grey-font">Lorem ipsum</p>
                        <h3>Working Hours</h3> 
                    </div>
                    <p class="sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div class="working-time-list d-flex justify-content-between">
                        <div class="working-time-day sh-tw-4"><span>MON – FRI</span></div>
                        <div class="working-time-hours sh-tw-6"><span>9:00 – 21:00</span></div>
                    </div>
                    <div class="working-time-list d-flex justify-content-between sh-mt-10">
                        <div class="working-time-day sh-tw-4"><span>SUN</span></div>
                        <div class="working-time-hours sh-tw-6"><span>8:00 – 16:00</span></div>
                    </div>
                </div>
                <div class="appontment-now-block align-self-end sh-black-bg sh-pall-30">
                    <div class="heading-title sh-font-white">
                        <p class="sh-font-gray">Lorem ipsum</p>
                        <h3>Appointment now</h3> 
                    </div>
                    <div class="appointment-inputs-list sh-mt-40">
                        <div class="appointment-input position-relative">
                            <input type="text" id="sh-reservation-datepicker" placeholder="Choose date" />
                            <i class="fa fa-chevron-down position-absolute"></i>
                        </div>
                        <div class="appointment-input position-relative sh-mt-20">
                            <select class="sh-timepicker sh-black-bg sh-white-font" id="sh-reservation-timepicker" type="text">
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
                            <i class="fa fa-chevron-down position-absolute"></i>
                        </div>
                        <div class="appointment-input position-relative sh-mt-20">
                            <select class="sh-timepicker sh-black-bg sh-white-font" id="sh-reservation-service-picker" type="text">
                                <option>Choose sevice</option>
                                <option>Haircut & Style</option>
                                <option>Creative cut</option>
                                <option>Beard sculpt</option>
                                <option>Wash & Restyle</option>
                                <option>Beard trim</option>
                                <option>Children's haircut</option>
                                <option>Scissor Cut</option>
                            </select>
                            <i class="fa fa-chevron-down position-absolute"></i>
                        </div>
                        <div class="appointment-input position-relative sh-mt-20">
                            <select class="sh-timepicker sh-black-bg sh-white-font" id="sh-reservation-barber-picker" type="text">
                                <option>Choose barber</option>
                                <option>Jamel Cameron</option>
                                <option>Lyman Andrews</option>
                                <option>Kristine Hays</option>
                                <option>Winifred Owens</option>
                                <option>Celeste Jimenez</option>
                                <option>Wanda Collier</option>
                                <option>Leticia Thornton</option>
                            </select>
                            <i class="fa fa-chevron-down position-absolute"></i>
                        </div>
                        <div class="appointment-button">
                            <a href="#" class="d-block trans-03 sh-button sh-black-bg text-center sh-mt-20 d-flex justify-content-center"><div class="align-self-center">book now</div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Reservation end !*/}
    {/* Our Pricing !*/}
    <section id="sh-pricing" class="pricing-section sh-mt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 pricing-bg sh-bg"></div>
                <div class="col-sm-6 sh-black-bg sh-pall-100">
                    <div class="heading-title sh-font-white">
                        <p class="sh-font-gray">Lorem ipsum</p>
                        <h2>Our Pricing</h2> 
                    </div>
                    <div id="sh-pricing-tabs" class="sh-pricing-tabs">
                        <div class="sh-pricing-tab-nav sh-plr-70 sh-pt-50">
                            <ul class="d-flex justify-content-around sh-accent-font">
                                <li><a href="#tabs-1">Haircut</a></li>
                                <li><a href="#tabs-2">Beard</a></li>
                                <li><a href="#tabs-3">Combo</a></li>
                                <li><a href="#tabs-4">Other</a></li>
                            </ul>
                        </div>
                        <div class="sh-pricing-tab-content">
                            <div class="sh-pricing-tab-content-item sh-pt-50" id="tabs-1">
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                            </div>
                            <div class="sh-pricing-tab-content-item sh-pt-50" id="tabs-2">
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                            </div>
                            <div class="sh-pricing-tab-content-item sh-pt-50" id="tabs-3">
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                            </div>
                            <div class="sh-pricing-tab-content-item sh-pt-50" id="tabs-4">
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
                                </div>
                                <div class="sh-pricing-tab-service-info sh-mt-30">
                                    <div class="sh-pricing-tab-service-main-info d-flex">
                                        <h3 class="sh-white-font">Men's haircut</h3>
                                        <div class="sh-pricing-tab-line d-flex align-self-end"></div>
                                        <div class="sh-pricing-tab-price-block d-flex align-items-end">
                                            <span class="sh-pricing-tab-price sh-accent-font sh-tw-6">$80</span>
                                            <span class="sh-pricing-tab-separator sh-accent-font sh-tw-6">/</span>
                                            <span class="sh-pricing-tab-time"> 50min</span>
                                        </div>
                                    </div>
                                    <p class="sh-pricing-tab-service-detailed-info sh-mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis totam eos excepturi, consectetur nemo nobis voluptas ut dolorum reprehenderit blanditiis.</p>
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
    <section class="blog-section sh-mt-100">
        <div class="container">
            <div class="heading-title">
                <p class="sh-grey-font">Lorem ipsum</p>
                <h2>Our Blog</h2> 
            </div>
            <div class="sh-blog-list sh-mt-60 d-flex">
                <article class="sh-blog-post w-100 post-img-top">
                    <div class="sh-blog-post-img-container position-relative">
                        <div class="sh-blog-post-img">
                            <img src="images/blog1.jpg" />
                        </div>
                    </div>
                    <div class="post-info-container position-relative">
                        <div class="post-info sh-pall-40">
                            <h3 class="text-center">Check out our new barbershop</h3>
                            <p class="sh-post-content text-center sh-mt-40 sh-mb-0">Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.</p>
                            <div class="sh-post-button d-flex justify-content-center">
                                <a href="#" class="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">read more</a>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="sh-blog-post w-100 post-img-bottom">
                    <div class="post-info-container position-relative">
                        <div class="post-info sh-pall-40">
                            <h3 class="text-center">Check out our new barbershop</h3>
                            <p class="sh-post-content text-center sh-mt-40 sh-mb-0">Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.</p>
                            <div class="sh-post-button d-flex justify-content-center">
                                <a href="#" class="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="sh-blog-post-img-container position-relative">
                        <div class="sh-blog-post-img">
                            <img src="images/blog2.jpg" />
                        </div>
                    </div>
                </article>
                <article class="sh-blog-post w-100">
                    <div class="sh-blog-post-img-container position-relative">
                        <div class="sh-blog-post-img">
                            <img src="images/blog3.jpg" />
                        </div>
                    </div>
                    <div class="post-info-container position-relative">
                        <div class="post-info sh-pall-40">
                            <h3 class="text-center">Check out our new barbershop</h3>
                            <p class="sh-post-content text-center sh-mt-40 sh-mb-0">Lorem ipsum dolor sit amet adipisicing elit. Vitae laudantium accusantium ipsum atque sequi, quidem. Lorem ipsum dolor sit amet. itae laudantium.</p>
                            <div class="sh-post-button d-flex justify-content-center">
                                <a href="#" class="sh-button sh-accent-font sh-transparent-button trans-03 sh-mt-40">read more</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    {/* Blog end !*/}
    {/* Testimonials !*/}
    <section id="sh-testimonials" class="testimonials-section sh-mt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="testimonials-bg w-100 sh-bg-fixed">
                    <div class="container">
                        <div class="testimonials-content">
                            <div class="heading-title sh-font-white">
                                <p class="sh-font-gray">Lorem ipsum</p>
                                <h2>Testimonials</h2> 
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="testimonials-slider sh-mt-60">
                                        <div class="testimonials-slider-item">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                                            <p class="sh-white-font">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                        </div>
                                        <div class="testimonials-slider-item">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                                            <p class="sh-white-font sh-mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                        </div>
                                        <div class="testimonials-slider-item">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                                            <p class="sh-white-font sh-mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
                                        </div>
                                        <div class="testimonials-slider-item">
                                            <h5 class="sh-white-font">Sondra Pollard</h5>
                                            <p class="sh-gray-font sh-mb-0 sh-pb-10 sh-tw-4">Our client</p>
                                            <p class="sh-white-font sh-mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 offset-md-1">
                                    <div class="brands-list sh-mt-60 d-flex justify-content-between flex-wrap">
                                        <div class="sh-brand trans-03 d-flex sh-mb-30">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/1.png" /></a>
                                        </div>
                                        <div class="sh-brand trans-03 d-flex sh-mb-30">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/2.png" /></a>
                                        </div>
                                        <div class="sh-brand trans-03 d-flex sh-mb-30">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/3.png" /></a>
                                        </div>
                                        <div class="sh-brand trans-03 d-flex">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/4.png" /></a>
                                        </div>
                                        <div class="sh-brand trans-03 d-flex">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/5.png" /></a>
                                        </div>
                                        <div class="sh-brand trans-03 d-flex">
                                            <a class="d-flex" href="#"><img class="align-self-center" src="images/Brands/6.png" /></a>
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
        <div class="container-fluid">
            <div class="row">
                <div class="footer-bg w-100 sh-black-bg">
                    <div class="container">
                        <div class="footer-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="footer-logo">
                                        <img src="images/logo2.png" />
                                    </div>
                                    <div class="sh-footer-text sh-pt-20">
                                        <p>Aenean ullamcorper pellentesque ex et molestie. Maecenas et malesuada sapien, quis semper felis. Integer egestas tellus nec tincidunt tempus.</p>
                                    </div>
                                    <div class="sh-footer-contacts sh-pt-20">
                                        <ul>
                                            <li>
                                                <span class="sh-footer-icon flaticon-maps-and-flags"></span>
                                                <span>344 4th St. Ridge, FL 10002</span>
                                            </li>
                                            <li class="sh-pt-5">
                                                <span class="sh-footer-icon flaticon-phone"></span>
                                                <span>(455) 123-4567</span>
                                            </li>
                                            <li class="sh-pt-5">
                                                <span class="sh-footer-icon flaticon-mail-black-envelope-symbol"></span>
                                                <span>info@shmatthemes.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="sh-white-font">Recent Posts</h5>
                                    <div class="sh-footer-posts-list sh-pt-30">
                                        <a href="#" class="sh-footer-post d-block">
                                            <div class="sh-footer-post-title">
                                                Check out our new barbershop with PlayStation 4 and other benefits
                                            </div>
                                            <div class="sh-footer-post-date sh-pt-7 sh-tw-6">
                                                24 june, 2018
                                            </div>
                                        </a>
                                        <a href="#" class="sh-footer-post d-block sh-mt-20">
                                            <div class="sh-footer-post-title">
                                                Check out our new barbershop with PlayStation 4 and other benefits
                                            </div>
                                            <div class="sh-footer-post-date sh-pt-7 sh-tw-6">
                                                24 june, 2018
                                            </div>
                                        </a>
                                        <a href="#" class="sh-footer-post d-block sh-mt-20">
                                            <div class="sh-footer-post-title">
                                                Check out our new barbershop with PlayStation 4 and other benefits
                                            </div>
                                            <div class="sh-footer-post-date sh-pt-7 sh-tw-6">
                                                24 june, 2018
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <h5 class="sh-white-font">Subscribe</h5>
                                    <form class="sh-footer-email-form appointment-inputs-list d-flex sh-mt-30">
                                        <input type="email" placeholder="E-mail adress" />
                                        <button class="sh-button trans-03" type="button">Subscribe</button>
                                    </form>
                                    <div class="sh-footer-text sh-pt-20">
                                        <p>Aenean ullamcorper pellentesque ex et molestie. Maecenas et malesuada sapien, quis semper felis. Integer egestas tellus nec tincidunt tempus.</p>
                                    </div>
                                    <div class="team-member-social d-flex sh-gray-font trans-03 sh-pt-5">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-vk"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
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
</body>


  );
}

export default App;
