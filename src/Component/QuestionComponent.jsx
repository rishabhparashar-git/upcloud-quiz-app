import { useState } from "react";
import QuestionsArray from "./questions.json";
import { Link } from "react-router-dom";
import "./question.css";

export default function QuestionComponent(props) {
  let score = props.score;
  let setScore = props.setScore;
  const [questionCounter, setQuestionCounter] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [clicked, setclicked] = useState("");

  let questionToDisplay = QuestionsArray[questionCounter];
  function nextHandler(e) {
    e.preventDefault();
    setDisabled(false);
    if (questionCounter < 4) {
      setQuestionCounter(questionCounter + 1);
    }
  }
  if (props.resetScore) {
    setScore(0);
    props.setResetScore(false);
  }
  return (
    <div className="container">
      <div className="question-card">
        <div className="profile">
          <span>{props.name}</span>
          <span>Score : {score}</span>
        </div>
        <p>{questionToDisplay.question}</p>
        <ul>
          {questionToDisplay.answer.map((option, index) => (
            <button
              onClick={() => {
                setDisabled(true);
                setclicked(option);
                if (option === questionToDisplay.correctAnswer) {
                  setScore(score + 20);
                }
              }}
              className="btn"
              key={index}
              id={
                clicked === option
                  ? option === questionToDisplay.correctAnswer
                    ? "true"
                    : "false"
                  : ""
              }
              disabled={isDisabled}
            >
              {option}
            </button>
          ))}
        </ul>
        {questionCounter === 4 ? (
          isDisabled ? (
            <Link className="btn  next" to="/Popup">
              Submit
            </Link>
          ) : (
            <button
              onClick={nextHandler}
              className="btn next"
              disabled={!isDisabled}
            >
              Submit
            </button>
          )
        ) : (
          <button
            onClick={nextHandler}
            className="btn next"
            disabled={!isDisabled}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
