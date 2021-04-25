import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((trans) => trans.amount);
  const incomeArr = amounts.filter((amount) => amount > 0);
  const expenseArr = amounts.filter((amount) => amount < 0);
  const totalIncome = incomeArr
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpens =
    expenseArr.reduce((acc, item) => (acc += item), 0).toFixed(2) * -1;

  return (
    <div className='flex items-center justify-between py-2 divide-x-2'>
      <div className='flex-1 text-center'>
        <h4 className='font-bold text-2xl text-green-600'>Income</h4>
        <p className='font-semibold text-xl'>${totalIncome}</p>
      </div>
      <div className='flex-1 text-center'>
        <h4 className='font-bold text-2xl text-red-600'>Expense</h4>
        <p className='font-semibold text-xl'>${totalExpens}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
