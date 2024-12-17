import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { deleteItem } from "../redux/cart/courseSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const { t } = useTranslation();
    const myItems = useSelector((state)=>state.course) ;
    const dispatch = useDispatch();
    const totalCost = myItems.reduce((acc, item) => acc + item.price, 0);
    
  return (
    <section className='min-h-[100vh] pt-[20%] md:pt-[6%] bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
      <div className="container ">
        <div className="relative">
          <h1 className="py-[1%] text-[2.1rem] md:text-[3rem] shadow-lg bg-[#f3f4f6] rounded-lg text-mainColor font-semibold text-center my-[2%]">
          {t("cart.cart")}
          </h1>
          <Link to={"/"} className="absolute top-[-5px] right-[10px] text-[1.5rem] font-bold">x</Link>
        </div>
       {myItems.length > 0 ?
           <div className="flex flex-col-reverse md:flex-row">

           <div className="h-[350px] px-[4%] py-[3%] bg-white border border-gray-200 rounded-lg shadow-md mx-[2%] w-[95%] my-[5%] md:my-[3%] md:w-[30%]">
               <div>
                   <h1 className="text-center text-[2.2rem] mb-[3%] font-bold text-mainColor "> {t("cart.ordersummary")}  </h1>
                   <div className="bg-blue-gray-100 w-[90%] h-[1px] mx-auto my-[4%]"></div>
                   <div className="flex justify-between text-[1.2rem] font-semibold">
                       <div>{t("cart.numberOfItems")}</div>
                       <div className="text-mainColor">{myItems.length }</div>
                   </div>
                   <div className="flex justify-between text-[1.2rem] font-semibold my-[3%]">
                       <div> {t("cart.cost")} </div> 
                       <div  className="text-mainColor">{totalCost}</div>
                   </div>
               </div>
               <div className="bg-blue-gray-100 w-[90%] h-[2px] mx-auto my-[6%]"></div>
               {myItems.length > 0 && <div className="flex">
               <Link to="/payment" className="bg-mainColor text-center text-white text-[1.2rem] font-bold rounded-md py-[.8%] w-[75%] mx-auto"> {t("cart.pay")}</Link>
               </div>}
           </div>
   
             <div className=" w-[100%] md:w-[80%] ">
               <div className="flex justify-between py-[.8%] border-b-[2px] border-mainColor my-[1.5%]">
                   <h1 className=" text-[1rem] md:text-[1.3rem] font-semibold text-mainColor">  {t("cart.contain")}    </h1>
                   <h2 className=" text-[1rem] md:text-[1.3rem] font-semibold text-mainColor">{myItems.length} {t("cart.items")}</h2>
               </div>
               <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mb-[5%]">
                 <thead>
                   <tr className="bg-mainColor text-white text-center">
                     <th className="py-2 px-4"> {t("cart.delete")}</th>
                     <th className="py-2 px-4"> {t("cart.price")}</th>
                     <th className="py-2 px-4"> {t("cart.details")}</th>
                     <th className="py-2 px-4"></th>
                   </tr>
                 </thead>
   
                 <tbody className="text-center">
                 {myItems.map((item,index)=>{
                   return( 
                       <tr key={index} className="hover:bg-gray-100 transition">
                       <td className="py-2 px-4 border text-red-500 cursor-pointer ">
                         <MdDelete onClick={()=>{dispatch(deleteItem(item)
                         )}} className="flex items-center mx-auto text-[2rem]"/>
                       </td>
                         <td className="py-2 px-4 border font-bold">{item.price} {t("cart.currency")}</td>
                       <td className="py-2 px-4  flex items-center justify-center">
                         {" "}
                         <span className=" text-center mx-[2rem] text-[.6rem] md:text-[1.1rem]">{item.name}</span>
                         <img
                           src={`/src/assets/images/${item.img}`}
                           alt="Item Image"
                           className="rounded-lg w-[30%] md:w-[10%]"
                         />
                       </td>
                       <td className="py-2 px-4 border">{index+1}</td>
                     </tr>
                   )
                 })}
                 </tbody>
               </table>
             </div>
   
            
           </div>
        :
        
        <div className="flex flex-col">
          <h1 className="text-[2.1rem] md:text-[4rem] my-[30%]  md:my-[1.2%] px-[15%] text-center font-bold ">  {t("cart.empty")}</h1>
          <Link to={"/"} className="px-[10%] my-[4%] bg-mainColor text-center text-white text-[1.2rem] font-bold rounded-md py-[.8%]  mx-auto"> {t("cart.shopping")}  </Link>
        </div>
      
       }
      </div>
    </section>
  );
};

export default Cart;
