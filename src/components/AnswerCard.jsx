function Answer(props) {
  return (
    <div
      className="bg-white mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
      onClick={() => props.onClick(props.answer)}
    >
      <input
        type="radio"
        name="answer"
        value={props.answer}
        className="ml-5 dark:bg-gray-800"
      />
      <label className="text-white-700 dark:text-white-400 text-lg ml-4">
        {props.answer}
      </label>
    </div>
  );
}

function AnswerCard(props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-80 w-148">
      <div className="pt-6 pb-2">
        {props.answers.map((answer) => (
          <Answer key={answer} answer={answer} onClick={props.onClick} />
        ))}
      </div>
    </div>
  );
}

export default AnswerCard;
