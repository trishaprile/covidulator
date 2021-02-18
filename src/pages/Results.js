import React from 'react';
import './Results.css';

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
    </div>
  )
}

export default Results;