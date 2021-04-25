import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {
  const { transactions, deleteTrans } = useContext(GlobalContext);

  return (
    <div className=' shadow py-4 bg-gray-50'>
      <h2 className='text-3xl font-bold text-yellow-900 pl-4 mb-2'>
        History:{" "}
      </h2>
      <ul>
        {transactions.map((trans) => (
          <li
            key={trans.id}
            className={`flex history-iteam hover:bg-yellow-200 items-center 
          ${trans.amount < 0 ? "border-red-500" : "border-green-500"}
          hover:block justify-between px-4 py-2 mb-2 relative border-right border-r-4 bg-gray-300  rounded shadow`}
          >
            {trans.text}{" "}
            <span>
              {trans.amount > 0 ? "+" : "-"}${Math.abs(trans.amount)}
            </span>
            <button
              onClick={() => deleteTrans(trans.id)}
              className='absolute history-dle-button hidden focus:outline-none -ml-12 text-red-400 hover:text-red-900 p-2 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-trash-2'
              >
                <polyline points='3 6 5 6 21 6'></polyline>
                <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                <line x1='10' y1='11' x2='10' y2='17'></line>
                <line x1='14' y1='11' x2='14' y2='17'></line>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
