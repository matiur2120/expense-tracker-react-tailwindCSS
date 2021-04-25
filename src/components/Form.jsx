import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    });
    setText("");
    setAmount("");
    // console.log(transactionItem);
  };
  return (
    <div className='shadow p-4'>
      <h2 className='text-2xl font-bold text-gray-900 p-4 text-center border-b border-gray-300 mb-4'>
        Add new transaction
      </h2>
      <form action='' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='text' className='font-bold text-gray-600'>
            Text
          </label>
          <input
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            className='border-none w-full text-teal-700 p-2  focus:ring-0 bg-gray-200 shadow rounded focus:bg-gray-400'
            placeholder='Enter text'
          />
        </div>
        <div>
          <label htmlFor='amount'>
            <p className='font-bold text-gray-600'>Amount</p>
            <p className='text-sm text-gray-500 mb-1'>
              (Negative expense, Positive Income)
            </p>
          </label>

          <input
            id='amount'
            type='text'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='border-none w-full text-teal-700 p-2  focus:ring-0 bg-gray-200 shadow rounded focus:bg-gray-400'
            placeholder='Enter amount'
          />
        </div>
        <div className='w-full text-center mt-6'>
          <button
            type='submit'
            className='rounded bg-blue-500 px-4 py-2 focus:ring-2 focus:outline-none hover:bg-blue-700 font-semibold text-gray-700 hover:text-gray-900'
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
