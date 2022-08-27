import { useState } from "react";
import "./GetUser.css";
import { Link } from "react-router-dom";

export default function GetUser(props) {
  return (
    <div className="question-card ">
      <p>Enter your Details</p>
      <div className="form">
        <input
          required
          className="btn in"
          type="text"
          onChange={(e) => {
            props.setName(e.target.value);
          }}
          placeholder="Enter Your Name"
        />
      </div>
      {props.name.trim().length ? (
        <Link to="/QuestionComponent" className="next link btn">
          Play
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
}
