import { useState } from "react";
import QuestionsArray from "./questions.json";
import PopupComponent from "./PopupComponent";

export default function QuestionComponent(props) {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [clicked, setclicked] = useState("");

  let questionToDisplay = QuestionsArray[questionCounter];
  function nextHandler(e) {
    e.preventDefault();
    setDisabled(false);
    if (questionCounter < 4) {
      setQuestionCounter(questionCounter + 1);
    } else {
      setDisplayPopup(true);
    }
  }

  return (
    <div className="container">
      {displayPopup ? (
        <PopupComponent score={score}></PopupComponent>
      ) : (
        <div className="question-card">
          <p>{questionToDisplay.question}</p>
          <ul>
            {questionToDisplay.answer.map((option, index) => (
              <button
                onClick={() => {
                  setDisabled(true);
                  console.log(option);
                  setclicked(option)
                  if (option === questionToDisplay.correctAnswer) {
                    setScore(score + 20);
                  } 
                }}
                className="btn"
                key={index}
                id={
                  clicked==option
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
          <button
            onClick={nextHandler}
            className="btn next"
            disabled={!isDisabled}
          >
            {questionCounter == 4 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
