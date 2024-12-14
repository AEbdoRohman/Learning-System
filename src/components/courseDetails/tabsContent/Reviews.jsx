import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const ratings = [
    { rating: 5, progress: 75, reat: 1 },
    { rating: 4, progress: 0, reat: 0 },
    { rating: 3, progress: 5, reat: 0 },
    { rating: 2, progress: 0, reat: 0 },
    { rating: 1, progress: 0, reat: 0 },
  ];
  return (
    <div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col items-center justify-center gap-1  w-1/3 bg-gray-100 rounded-lg">
          <h1 className="text-7xl font-bold">5.0</h1>
          <div>
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <FaStar
                  key={item}
                  className="inline my-[2px] mb-[5px] text-yellow-800"
                />
              );
            })}
          </div>
          <span className="mx-[2px]">(1 rating)</span>
        </div>
        <div className="w-2/3 flex flex-col gap-2">
          {ratings.map((item) => {
            return (
              <div key={item} className="flex items-center">
                <span className="text-gray-700 text-slg font-medium">
                  {item.rating}
                </span>
                <FaStar className="mx-2 text-yellow-800" />
                <div className="flex-grow h-4 bg-gray-300 rounded relative mx-2">
                  <div
                    className="h-full bg-yellow-800 rounded"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <span className="text-gray-700 text-lg font-medium mx-4">
                  {item.reat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-3xl mb-8">Reviews</h1>
        <div className="flex  gap-4">
          <div>
            <img
              src="src/assets/images/instructor.webp"
              alt=""
              className="w-52 rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-2xl">Janet Fleming</h1>
              <div>
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <FaStar
                      key={item}
                      className="inline my-[2px] mb-[5px] text-yellow-800"
                    />
                  );
                })}
              </div>
            </div>
            <span className="text-gray-700 text-sm">
              “ Outstanding Course ”
            </span>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              mollitia illo est laboriosam, cupiditate autem praesentium ut,
              modi vitae ipsum, vero provident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
