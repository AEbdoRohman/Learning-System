import { useEffect } from "react";

const QuizResult = () => {
  const totalQuestions = 20;
  const correctAnswers = 15;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const percentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-full max-w-md mb-8 mx-auto bg-white rounded-lg p-6 text-gray-800">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        Quiz Result
      </h2>
      <div className="space-y-2">
        <div className="flex justify-between pb-2 border-b-2 border-gray-200">
          <span className="text-xl font-semibold">Total Questions:</span>
          <span className="font-bold text-lg">{totalQuestions}</span>
        </div>
        <div className="flex justify-between pb-2 border-b-2 border-gray-200">
          <span className="text-xl font-semibold text-green-600">
            Correct Answers:
          </span>
          <span className="font-bold text-lg">{correctAnswers}</span>
        </div>
        <div className="flex justify-between pb-2 border-b-2 border-gray-200">
          <span className="text-xl font-semibold text-red-600">
            Incorrect Answers:
          </span>
          <span className="font-bold text-lg">{incorrectAnswers}</span>
        </div>
        <div className="flex justify-between pt-4 pb-2 border-b-2 border-gray-200">
          <span className="text-xl font-semibold">Percentage:</span>
          <span className="font-bold text-lg text-blue-600">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
