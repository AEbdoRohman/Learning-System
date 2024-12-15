import { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50  flex items-center justify-around p-4 shadow-md">
      <div className="w-full max-w-md bg-white rounded-lg  p-6">
        <h1 className="text-2xl font-bold text-gray-900 my-8">Checkout</h1>

        <form className="space-y-4">
          {/* Name */}
          <div className="duration-300 ease-out">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 border-2 rounded-lg text-gray-700 focus:outline-none focus:border-b-2 focus:border-b-blue-500"
            />
          </div>

          {/* Card Number */}
          <div className="duration-300 ease-out">
            <label
              htmlFor="card-number"
              className="block text-gray-600 font-medium"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 mt-1 border-2 rounded-lg text-gray-700 focus:outline-none focus:border-b-2 focus:border-b-blue-500"
            />
          </div>

          {/* Expiration Date and CVV */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label
                htmlFor="expiry"
                className="block text-gray-600 font-medium"
              >
                Expiration Date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="w-full px-4 py-2 mt-1 border-2 rounded-lg text-gray-700 focus:outline-none focus:border-b-2 focus:border-b-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-gray-600 font-medium">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="w-full px-4 py-2 mt-1 border-2 rounded-lg text-gray-700 focus:outline-none focus:border-b-2 focus:border-b-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Complete Payment
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-md bg-white rounded-lg  p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order </h2>
        <div className="flex items-center justify-between border-b-2 border-gray-200 pb-4">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product Image"
              className="w-20"
            />
            <h3>Lorem ipsum dolor sit.</h3>
          </div>
          <p> $99.99</p>
        </div>
        <div className="flex items-center justify-between mt-4 text-lg border-b-2 border-gray-200 pb-4">
          <h1>SubTotal :</h1>
          <span>$99.99</span>
        </div>
        <div className="flex items-center justify-between mt-4 font-bold text-2xl">
          <h1>Total :</h1>
          <span>$99.99</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
