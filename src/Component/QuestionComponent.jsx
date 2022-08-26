import { useState } from "react";
import QuestionsArray from "./questions.json";
import PopupComponent from "./PopupComponent";

export default function QuestionComponent(props) {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [id, setId] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  let questionToDisplay = QuestionsArray[questionCounter];
  function nextHandler(e) {
    e.preventDefault();
    setDisabled(false)
    setId("")
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
                  setDisabled(true)
                  if (option === questionToDisplay.correctAnswer) {
                    setScore(score + 20);
                    setId("true");
                  } else {
                    setId("false");
                  }
                }}
                className="btn"
                key={index}
                id={id}
                disabled={isDisabled}
              >
                {option}
              </button>
            ))}
          </ul>
          <button onClick={nextHandler} className="btn next" disabled={!isDisabled}>
            {questionCounter == 4 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
