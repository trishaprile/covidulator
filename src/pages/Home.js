import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';

function Home() {
	return (
    <div className="home">
      <h1>this is the home page</h1>
      <Button href="/quiz" className="button">click me</Button>
    </div> 
  )
}

export default Home;