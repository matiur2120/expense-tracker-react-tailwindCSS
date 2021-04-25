import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Blance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((trans) => trans.amount);
  const totalAmount = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className='p-4 bg-gray-50'>
      <p className='text-xl font-semibold text-gray-900'>Your Blance</p>
      <p className='text-2xl font-bold text-green-900'>
        <strong>${totalAmount}</strong>
      </p>
    </div>
  );
};

export default Blance;
