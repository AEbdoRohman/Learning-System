/* eslint-disable react/prop-types */
const JoinSessionButton = ({ onJoinClick }) => {
  return (
    <div id="join-flow">
      <button
        onClick={onJoinClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Join Session
      </button>
    </div>
  );
};

export default JoinSessionButton;
