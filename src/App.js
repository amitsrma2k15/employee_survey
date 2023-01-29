import React, { useState } from "react";
import './App.css';

function App() {

  const[showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const [surveyResult,setSurveyResult] = useState("");

  const questions = [
    {
      text: "From 1-5, how would you rate the work environment ethics?",
      options: [
        { id: 0, text: "Very Poor", score: 1 },
        { id: 1, text: "Poor", score: 2 },
        { id: 2, text: "Fair", score: 3 },
        { id: 3, text: "Good", score: 4 },
		    { id: 4, text: "Excellent", score: 5 },
      ],
    },
    {
      text: "Do you think you have a good work-life balance?",
      options: [
        { id: 0, text: "Yes", score: 4 },
        { id: 1, text: "No", score: 2 },
      ],
    },
    {
      text: "From 1-5, how would you rate the manager’s initiative to encourage teamwork??",
      options: [
        { id: 0, text: "Very Poor", score: 1 },
        { id: 1, text: "Poor", score: 2 },
        { id: 2, text: "Fair", score: 3 },
        { id: 3, text: "Good", score: 4 },
		    { id: 4, text: "Excellent", score: 5 },
      ],
    },
    {
      text: "From 1-5, how evenly do you think the work is distributed?",
      options: [
        { id: 0, text: "Never", score: 1 },
        { id: 1, text: "Rarely", score: 2 },
        { id: 2, text: "Sometimes", score: 3 },
        { id: 3, text: "often", score: 4 },
		    { id: 4, text: "Always", score: 5 },
      ],
    },
    {
      text: "From 1-5, how well are you paid for the work you do?",
      options: [
        { id: 0, text: "Very Poor", score: 1 },
        { id: 1, text: "Poor", score: 2 },
        { id: 2, text: "Fair", score: 3 },
        { id: 3, text: "Good", score: 4 },
		    { id: 4, text: "Excellent", score: 5 },
      ],
    },
  ];

  /* A possible answer was clicked */
  const optionClicked = (score) => {
    setResult(result + score);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if(result > 16){
        setSurveyResult("happy");
      }else{
        setSurveyResult("not happy");
      }
      setShowScore(true);
    }
  };

   /* Resets the game back to default */
   const restartSurvey = () => {
    setResult(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSurveyResult("");
  };

  return (
    <div className="App">
      <h1>Employee Survey</h1>
      {/* 3. Show results or show the question game  */}
      {showScore ? (
        <div className="final-score">
          <h1>Survey Response</h1>
          {/* <h2>{result}</h2> */}
          {/* <h2>Employee is {surveyResult} at current workplace.</h2> */}
          <h2>Thank you for participating in Employee Survey</h2>
          <button onClick={() => restartSurvey()}>Restart Survey</button>
        </div> 
      ) : (
      <div className="question-card">
        <h2> Question: {currentQuestion + 1} out of {questions.length}</h2>
        <h3 className="question">{questions[currentQuestion].text}</h3>
        <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.score)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
      </div>)}
    </div>
  );
}

export default App;
