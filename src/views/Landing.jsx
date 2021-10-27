import React, { PureComponent } from 'react';
import Title from '../components/Landing/Title';
import Sponsors from '../components/Landing/Sponsors';
import Team from '../components/Landing/Team';
import Feature from '../components/Landing/Feature';


class Landing extends PureComponent {
  render() {
    return (
      <div className="landing">
        <Title />
        <Feature />
        <Team />
        <Sponsors />
      </div>


    )

  }
}


export default Landing;
