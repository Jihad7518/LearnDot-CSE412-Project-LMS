import Queue from "./pages/Queue";
import Quiz from "./pages/Quiz";
import React, { useState } from "react";

function QuizApp() {
  const [page, setPage] = useState("home");
  const [subject, setSubject] = useState("");

  const handleClick = (selectedSubject) => {
    setSubject(selectedSubject);
    setPage("quiz");
  };

  return (
    <div className="bg-white">
      {page === "home" ? (
        <Queue onClick={handleClick} />
      ) : (
        <Quiz subject={subject} />
      )}
    </div>
  );
}

export default QuizApp;
