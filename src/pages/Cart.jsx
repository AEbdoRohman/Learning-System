import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { deleteItem } from "../redux/cart/courseSlice";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";

const Cart = () => {
  const { t } = useTranslation();
  const myItems = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const totalCost = myItems.reduce((acc, item) => acc + item.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='min-h-screen mt-16  bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
      <Breadcrumb />
      <div className="container ">
        {myItems.length > 0 ? (
          <div className="flex flex-col-reverse md:flex-row">
            {/* Order Summary */}
            <div className="h-fit w-[95%] md:w-[30%] px-8 py-8 bg-white rounded-lg mx-4  my-4 ">
              <div>
                <h1 className="text-center text-3xl font-bold text-mainColor mb-6 ">
                  {t("cart.ordersummary")}
                </h1>
                <div className="flex justify-between text-xl font-semibold">
                  <div>{t("cart.numberOfItems")}</div>
                  <div className="text-mainColor">{myItems.length}</div>
                </div>
                <div className="flex justify-between text-xl font-semibold my-4">
                  <div> {t("cart.cost")} </div>
                  <div className="text-mainColor">{totalCost}</div>
                </div>
              </div>
              <div className="bg-blue-gray-100 w-[90%] h-[2px] mx-auto my-[6%]"></div>
              {myItems.length > 0 && (
                <div className="flex">
                  <Link
                    to="/cart/payment"
                    className="bg-mainColor text-center text-white text-xl font-bold rounded-md py-2 w-[75%] mx-auto"
                  >
                    {t("pay.pay")}
                  </Link>
                </div>
              )}
            </div>

            {/* Products List */}
            <div className="w-[100%] md:w-[70%] ">
              <ul className="space-y-4 my-4 bg-white rounded-lg">
                {myItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center gap-4 px-2 md:px-4 py-4 border"
                  >
                    <img
                      src={`/src/assets/images/${item.img}`}
                      alt="Item Image"
                      className="rounded-lg w-[20%] md:w-[10%]"
                    />
                    <h2 className="text-sm md:text-lg font-semibold text-gray-800 w-8/12">
                      {item.name}
                    </h2>

                    <p className="text-gray-600">{item.price}</p>

                    <button
                      onClick={() => {
                        dispatch(deleteItem(item));
                      }}
                      className=" text-red-600"
                    >
                      <MdDelete
                        onClick={() => {
                          dispatch(deleteItem(item));
                        }}
                        className="flex items-center mx-auto text-3xl"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <h1 className="text-[1.6rem] md:text-[2rem] my-[10%]  md:my-[4%] px-[15%] text-center font-bold ">
              {t("cart.empty")}
            </h1>
            <Link
              to={"/"}
              className="px-[10%] my-[4%] bg-mainColor text-center text-white text-[1.2rem] font-bold rounded-md py-[.8%]  mx-auto"
            >
              {t("cart.shopping")}{" "}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
