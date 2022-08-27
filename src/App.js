import "./App.css";
import QuestionComponent from "./Component/QuestionComponent";
import GetUser from "./Component/GetUser";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import PopupComponent from "./Component/PopupComponent";

function App() {
  const [toDisplay, setToDisplay] = useState("getUser");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [resetScore, setResetScore] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact={true}
          element={
            <GetUser
              toDisplay={toDisplay}
              setToDisplay={setToDisplay}
              name={name}
              setName={setName}
              setUserName={setUserName}
              userName={userName}
            />
          }
        />
        <Route
          path="/"
          exact={true}
          element={
            <GetUser
              name={name}
              setName={setName}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route
          path="/GetUser"
          exact={true}
          element={
            <GetUser
              name={name}
              setName={setName}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route
          path="/QuestionComponent"
          element={
            <QuestionComponent
              score={score}
              resetScore={resetScore}
              setResetScore={setResetScore}
              setScore={setScore}
              name={name}
              userName={userName}
            />
          }
        />
        <Route
          path="/Popup"
          element={
            <PopupComponent
              setResetScore={setResetScore}
              setScore={setScore}
              score={score}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
