import React from 'react';
import './Quiz.css';
import MaskMan from '../assets/maskman.png';
import MaskWoman from '../assets/maskwoman.png';

import { questions } from '../data.js';
import { ArrowRightCircleFill, ArrowLeftCircleFill } from 'react-bootstrap-icons';
import RangeSlider from 'react-bootstrap-range-slider';
import Results from './Results.js';

function Quiz() {
  const [score, setScore] = React.useState(new Array(questions.length).fill(2));
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [value, setValue] = React.useState(2);

  React.useEffect(() => {
    let copyScore = score;
    copyScore[questionIndex] = value;
    setScore(copyScore);
  }, [value])

  React.useEffect(() => {
    if(questionIndex !== questions.length) setValue(score[questionIndex]);
  }, [questionIndex])

  const handleAnswerValueChange = (e) => {
    setValue(e.target.value);
  }

  const handleNextQuestion = (e) => {
    if (questionIndex < questions.length) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  const handlePrevQuestion = (e) => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  if (questionIndex < questions.length) {
    return (
      <div className="quiz-container">
        <div style={{ height: 10, zIndex: 1, backgroundColor: "#FF9E74", width: `${((questionIndex + 1) / questions.length) * 100}vw`, position: "fixed" }}></div>
        <div style={{ height: 10, zIndex: 0, backgroundColor: "#E8F7F0", width: "100vw", position: "fixed" }}></div>
        <div className="quiz">
          <span className={questionIndex === 0 ? 'disabled-arrow' : 'arrow'} onClick={questionIndex === 0 ? null : handlePrevQuestion}><ArrowLeftCircleFill className="back" size={50} /></span>
          <div className="question-container">
            <div className="question">
              <small>{questions[questionIndex].category}</small>
              <h1>{questions[questionIndex].question}</h1>
              <div style={{ width: '100%', display: 'flex' }}>
                <span style={{ width: '25%' }}>{questions[questionIndex].answers[0].answer}</span>
                <span style={{ width: '50%' }}>
                  <RangeSlider
                    value={value} 
                    onChange={handleAnswerValueChange} step={1} min={0} 
                    max={questions[questionIndex].answers.length - 1} />
                </span>
                <span style={{ width: '25%' }}>{questions[questionIndex].answers[questions[questionIndex].answers.length - 1].answer}</span>
              </div>
              <span className="answer">{questions[questionIndex].answers[value].answer}</span><br/>
              <span className="description">{questions[questionIndex].answers[value].description}</span>
            </div>
          </div>
          <span className='arrow' onClick={handleNextQuestion}><ArrowRightCircleFill className="next" size={50} /></span>
        </div>
        <div className='bottom-images'>
          <div className='mask-woman'><img className="img" src={MaskWoman} alt="Masked Woman" /></div>
          <div className='mask-man'><img className="img" src={MaskMan} alt="Masked Man" /></div>
        </div>
      </div>
    )
  } else if (questionIndex === questions.length) {
    return (
      <Results score={score} />
    )
  }

}

export default Quiz;