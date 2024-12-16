import { FaStar } from "react-icons/fa";

const InstructorMain = () => {
  return (
    <div>
      <div className="mb-5">
        <div className="flex items-center md:justify-between gap-2 flex-row w-full md:w-3/6">
          <div>
            <img
              src="/instructor.webp"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex items-center gap-0 md:gap-2 flex-col md:flex-row">
            <h3>James Carlson </h3>
            <div>
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <FaStar
                    key={item}
                    className="inline my-[2px] mb-[5px] text-yellow-800"
                  />
                );
              })}
              <span className="mx-[2px]">(1 review)</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold w-full md:w-4/5 text-hoverColor">
        Grow Personal Financial Security Thinking & Principles{" "}
      </h1>
    </div>
  );
};

export default InstructorMain;
