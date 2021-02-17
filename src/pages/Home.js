import React from 'react';
import './Home.scss';
import CovidParticle from '../assets/coronaangry.png';

import { Button } from 'react-bootstrap';

function Home() {

	return (
    <div className="home">
      <div className="background-container">
	      <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle"><img src={CovidParticle} alt="Covid Particle" /></div>
      </div>
      <div className="text-container">
        <h2 className="pretitle">WHAT IS YOUR</h2>
        <h1 className="title">COVID-19 Footprint?</h1>
        <h3 className="cases">There have been ___ cases worldwide</h3>
        <h3 className="subtitle">Find out if you're doing your part.</h3>
        <Button href="/quiz" className="take-test-btn">Take the Test</Button>
      </div>
    </div> 
  )
}

export default Home;