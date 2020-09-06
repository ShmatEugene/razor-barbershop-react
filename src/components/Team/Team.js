import React from 'react';

import team1 from '../../assets/img/team/team1.png';
import team2 from '../../assets/img/team/team2.png';
import team3 from '../../assets/img/team/team3.png';
import team4 from '../../assets/img/team/team4.png';
import team5 from '../../assets/img/team/team5.png';
import team6 from '../../assets/img/team/team6.png';
import TeamSlider from './TeamSlider';

const Team = () => {
  return (
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
                <TeamSlider
                  sliderData={[
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team1,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team2,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team3,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team4,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team5,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                    {
                      name: 'Sandra Pollard',
                      position: 'Barber',
                      img: team6,
                      facebook: '/#',
                      twitter: '/#',
                      inst: '/#',
                      vk: '/#',
                      linkedIn: '/#',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
