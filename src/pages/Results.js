import React from 'react';
import './Results.css';
import { Button } from 'react-bootstrap';

function Results() {
	return (
    <div className="results">
      <h2 className="results-title">RESULTS</h2>
      <div className="score-info">
        <h5 className="score-header">Your Score</h5>
        <h1 className="score">F</h1>
        <h3 className="percentage">50%</h3>
        <h6 className="description">There are many ways you can improve your habits...</h6>
        <h6 className="quarters">If everyone lived like you, we would be in quarantine for ___ quarters</h6>
        <div className="graphs">
          <h4 className="subtitle">BY CATEGORY</h4>
        </div>
      </div>

      <div className="feeling">
        <h4 className="subtitle">HOW DO YOU FEEL?</h4>
      </div>

      <div className="suggestions">
        <h4 className="subtitle">SUGGESTIONS</h4>
        <h6 className="description">(how to improve each category)</h6>
      </div>

      <div className="resources">
        <h4 className="subtitle">RESOURCES</h4>
        <div className="links">
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">CDC: Suggestions to Prvent Getting Sick</a><br/>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/effective-masks.html">CDC: Improve How Your Mask Protects You</a><br/>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/index.html">CDC: Information about the Covid-19 Vaccine</a><br/>
          <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/testing-international-air-travelers.html">CDC: Testing and International Air Travel</a><br/>
        </div>
      </div>

      <Button href="/quiz" className="take-test-btn">Take the Test Again</Button>

    </div>
  )
}

export default Results;