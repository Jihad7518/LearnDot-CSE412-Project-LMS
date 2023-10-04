import AnswerCard from "../components/AnswerCard";
import EndQuiz from "../components/EndQuiz";
import Header from "../components/Header";
import Status from "../components/Status";
import questions from "../questions.json";
import React, { useState, useEffect } from "react";

function Quiz(props) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [statusShown, setStatusShown] = useState(false);
  const [currentQuestionCorrect, setCurrentQuestionCorrect] = useState(false);

  const questionsData = questions[props.subject];

  const handleClick = (answer) => {
    setStatusShown(true);

    const correctAnswer = questionsData[questionNumber].correctAnswer;

    answer === correctAnswer ? setStatus("correct") : setStatus("wrong");
  };

  const setStatus = (status) => {
    if (status === "correct") {
      setNumCorrect((prevNumCorrect) => prevNumCorrect + 1);
      setCurrentQuestionCorrect(true);
    } else {
      setCurrentQuestionCorrect(false);
    }

    setTimeout(switchQuestion, 750);
  };

  const switchQuestion = () => {
    setQuestionNumber((prevQuestionNumber) =>
      prevQuestionNumber < 4 ? prevQuestionNumber + 1 : false
    );
    setStatusShown(false);
  };

  useEffect(() => {
    if (questionNumber === false) {
      // Game over, show the end quiz component
      return;
    }

    // Reset the status for the new question
    setCurrentQuestionCorrect(false);

    // You may want to perform additional actions when the question changes here.
  }, [questionNumber]);

  if (questionNumber !== false) {
    const question = questionsData[questionNumber].question;
    const answers = questionsData[questionNumber].answers;

    return (
      <div className="bg-white">
        <Header>{question}</Header>
        <div className="flex justify-center mt-16">
          <AnswerCard answers={answers} onClick={handleClick} />
        </div>
        {statusShown && <Status correct={currentQuestionCorrect} />}
      </div>
    );
  }

  return <EndQuiz numCorrect={numCorrect} />;
}

export default Quiz;
