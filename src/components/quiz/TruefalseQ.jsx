/* eslint-disable react/prop-types */
const TrueFalseQ = ({ index, question, answer, onAnswerChange }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        {index + 1}. {question.question}
      </h2>
      <div className="space-y-2 flex items-center justify-around">
        {["True", "False"].map((option, idx) => (
          <label
            key={idx}
            className="flex items-center px-6 py-2 border rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100  focus-within:none"
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={answer === option}
              onChange={() => onAnswerChange(question.id, option)}
              className="mr-3"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TrueFalseQ;