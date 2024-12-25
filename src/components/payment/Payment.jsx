import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Breadcrumb from "../breadCrumb/Breadcrumb";

const Payment = () => {
  const { t } = useTranslation();

  const myItems = useSelector((state) => state.course);
  // const dispatch = useDispatch();
  const totalCost = myItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-20">
      <Breadcrumb />
      <div className="mb-10 container flex flex-col md:flex-row justify-between gap-4  p-4">
        {/* Order Summary */}
        <div className="w-fullmd:w-[50%] bg-gray-50 rounded-lg px-4 md:px-8 py-6 order-1 md:order-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {t("pay.order")}
          </h2>
          {myItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-b-2 border-gray-200 pb-4"
            >
              <div className="w-20">
                <img
                  src={`/src/assets/images/${item.img}`}
                  alt="Item Image"
                  className="rounded-lg w-full object-cover"
                />
              </div>

              <h2 className="text-sm font-semibold text-gray-800 w-6/12 md:w-8/12">
                {item.name}
              </h2>

              <p className="font-semibold text-gray-800 text-right">
                ${item.price.toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex items-center justify-between mt-4 text-lg border-b-2 border-gray-200 pb-4">
            <h1>{t("pay.subtotal")} :</h1>
            <span>{totalCost} $</span>
          </div>
          <div className="flex items-center justify-between mt-4 font-bold text-2xl">
            <h1>{t("pay.total")} :</h1>
            <span>{totalCost} $</span>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="w-full md:w-[50%] bg-gray-50 rounded-lg p-6 order-2 md:order-1">
          <h1 className="text-2xl font-bold text-gray-900 my-8">
            {t("pay.checkout")}
          </h1>
          <form className="space-y-4">
            {/* Name */}
            <div className="duration-300 ease-out">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                {t("pay.name")}
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
                {t("pay.card")}
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
                  {t("pay.expiryDate")}
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 mt-1 border-2 rounded-lg text-gray-700 focus:outline-none focus:border-b-2 focus:border-b-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="cvv"
                  className="block text-gray-600 font-medium"
                >
                  {t("pay.cvv")}
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
              {t("pay.pay")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Payment;
