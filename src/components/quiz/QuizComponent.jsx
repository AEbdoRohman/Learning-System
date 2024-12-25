import { useState } from "react";
import Breadcrumb from "../breadCrumb/Breadcrumb";

const QuizComponent = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
    },
    {
      id: 2,
      question: "What is the largest planet in the solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
    },
    {
      id: 3,
      question: "What is the chemical element with the symbol O?",
      options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
    },
    {
      id: 4,
      question: "Who discovered the law of gravity?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Thomas Edison",
      ],
    },
    {
      id: 5,
      question: "What is the fastest land animal?",
      options: ["Tiger", "Cheetah", "Gazelle", "Lion"],
    },
  ];

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  return (
    <div className="mt-20">
      <Breadcrumb />
      <div className="container my-8">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis recusandae voluptas ut, minus mollitia quia tenetur
            facilis earum ab officia est aperiam illo asperiores sunt. Nesciunt
            fuga est deserunt recusandae?
          </p>
          <div className="mb-6 w-full h-[300px]">
            <img
              src="https://via.placeholder.com/600x300"
              alt="وصف الصورة"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        {questions.map((q) => (
          <div key={q.id} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              {q.id}. {q.question}
            </h2>
            <div className="space-y-2">
              {q.options.map((option, index) => (
                <label
                  key={index}
                  className=" flex items-center px-4 py-2 border rounded-lg cursor-pointer transition duration-200 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={() => handleAnswerChange(q.id, option)}
                    className="mr-3"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          className="w-1/2 mx-auto flex items-center justify-center py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          onClick={() => console.log("Student Answers:", answers)}
        >
          Send Answers
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;
