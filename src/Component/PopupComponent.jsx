import "./popup.css";
import { Link } from "react-router-dom";
export default function PopupComponent(props) {
  const score = props.score;
  function Message() {
    if (score === 100) {
      return (
        <>
          <h3>Well Done !!!</h3>
          <h3> You have Scored {score}/100</h3>
        </>
      );
    } else if (score >= 60 && score < 100) {
      return (
        <>
          <h3>Very Good !!!</h3>
          <h3> You have Scored {score}/100</h3>
        </>
      );
    } else {
      return (
        <>
          <h5>
            Sorry you are not eligible to get best offer, Please try Again
          </h5>
          <h4 className="lh"> You have Scored {score}/100</h4>
          <Link
            id={"play"}
            className="play link btn next"
            to="/QuestionComponent"
          >
            Play Again
          </Link>
        </>
      );
    }
  }
  return (
    <div className="popup-window">
      {props.setResetScore(true)}
      <div className="popup">
        <Message className="lh" />
        <Link to="/GetUser" className="close-btn">
          <div className="one line"></div>
          <div className="two line"></div>
        </Link>
      </div>
    </div>
  );
}
