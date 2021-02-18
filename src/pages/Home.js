import React from 'react';
import './Home.scss';
import CovidParticle from '../assets/coronaangry.png';

import { Button } from 'react-bootstrap';

function Home() {
  const [scase, setCase] = React.useState(0);
  const [country, setCountry] = React.useState('X country');

  async function getUSCases(){
    const usapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=US';
    const response = await fetch(usapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('the US')
    console.log(data);
  }

  async function getFranceCases(){
    const frapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=France';
    const response = await fetch(frapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('France')
    console.log(data);
  }

  async function getJapanCases(){
    const jpapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Japan';
    const response = await fetch(jpapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('Japan')
    console.log(data);
  }

  async function getGermanyCases(){
    const grapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Germany';
    const response = await fetch(grapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('Germany')
    console.log(data);
  }

  async function getAustraliaCases(){
    const auapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Australia';
    const response = await fetch(auapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('Australia')
    console.log(data);
  }

  async function getUKCases(){
    const ukapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=United+Kingdom';
    const response = await fetch(ukapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('the United Kingdom')
    console.log(data);
  }

  async function getCACases(){
    const caapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Canada';
    const response = await fetch(caapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('Canada')
    console.log(data);
  }

  async function getChinaCases(){
    const chapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=China';
    const response = await fetch(chapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('China')
    console.log(data);
  }

  async function getMexicoCases(){
    const mxapi_url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Mexico';
    const response = await fetch(mxapi_url);
    const data = await response.json();
    setCase(data.All.confirmed);
    setCountry('Mexico')
    console.log(data);
  }
  
  /*const sleep = milliseconds => { 
    return new Promise(resolve => setTimeout(resolve, milliseconds)); 
  }; 

  sleep(1000).then(() => { 
    setCase(scase + 1);
  }); */

	return (
    <div className="home">
      <div className="background-container">
	      <div class="particle" onClick={getUSCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getFranceCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getJapanCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getGermanyCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getAustraliaCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getUKCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getCACases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getChinaCases}><img src={CovidParticle} alt="Covid Particle" /></div>
        <div class="particle" onClick={getMexicoCases}><img src={CovidParticle} alt="Covid Particle" /></div>
      </div>
      <div className="text-container">
        <h2 className="pretitle">WHAT IS YOUR</h2>
        <h1 className="title">COVID-19 Footprint?</h1>
        <h3 className="cases">There have been {scase} cases in {country}</h3>
        <p className="subtitle">Find out if you're doing your part.</p>
        <Button href="/quiz" className="take-test-btn">Take the Test</Button>
      </div>
    </div> 
  )
}

export default Home;