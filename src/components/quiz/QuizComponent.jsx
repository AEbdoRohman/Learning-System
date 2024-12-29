import { useEffect, useState } from "react";
import Breadcrumb from "../breadCrumb/Breadcrumb";
// import Questions from "./Questions";
import QuizResult from "./QuizResult";
import TrueFalseQ from "./TruefalseQ";

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // const questions = [
  //   {
  //     id: 1,
  //     question: "What is the capital of France?",
  //     options: ["Berlin", "Madrid", "Paris", "Rome"],
  //   },
  //   {
  //     id: 2,
  //     question: "What is the largest planet in the solar system?",
  //     options: ["Earth", "Mars", "Jupiter", "Saturn"],
  //   },
  //   {
  //     id: 3,
  //     question: "What is the chemical element with the symbol O?",
  //     options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
  //   },
  //   {
  //     id: 4,
  //     question: "Who discovered the law of gravity?",
  //     options: [
  //       "Albert Einstein",
  //       "Isaac Newton",
  //       "Galileo Galilei",
  //       "Thomas Edison",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     question: "What is the fastest land animal?",
  //     options: ["Tiger", "Cheetah", "Gazelle", "Lion"],
  //   },
  // ];

  const questions = [
    { id: 1, question: "The Earth is flat." },
    { id: 2, question: "Water boils at 100°C." },
    { id: 3, question: "The Sun rises in the West." },
    { id: 4, question: "Humans need oxygen to survive." },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAnswerChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSendAnswers = () => {
    console.log("Answers:", answers);
    setIsQuizFinished(true);
  };

  return (
    <div className="mt-20">
      <Breadcrumb />
      {!isQuizFinished ? (
        <div className="container my-8">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis recusandae voluptas ut, minus mollitia quia tenetur
              facilis earum ab officia est aperiam illo asperiores sunt.
              Nesciunt fuga est deserunt recusandae?
            </p>
            <div className="mb-6 w-full h-[300px]">
              <img
                src="https://via.placeholder.com/600x300"
                alt="وصف الصورة"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* <Questions
            index={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            answer={answers[questions[currentQuestionIndex].id]}
            onAnswerChange={handleAnswerChange}
          /> */}

          <TrueFalseQ
            index={currentQuestionIndex}
            question={questions[currentQuestionIndex]}
            answer={answers[questions[currentQuestionIndex].id]}
            onAnswerChange={handleAnswerChange}
          />

          <div className="flex justify-center mt-8">
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                className="w-1/2 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                onClick={handleNextQuestion}
                disabled={!answers[questions[currentQuestionIndex].id]}
              >
                Next
              </button>
            ) : (
              <button
                className="w-1/2 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                disabled={!answers[questions[currentQuestionIndex].id]}
                onClick={handleSendAnswers}
              >
                Send Answers
              </button>
            )}
          </div>
        </div>
      ) : (
        <QuizResult />
      )}
    </div>
  );
};

export default QuizComponent;
