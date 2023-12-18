import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

    return (
        <>
       <div className="max-w-sm mx-auto my-10">
      <div className={`bg-white shadow-lg rounded-lg p-6 space-y-4 ${count > 0 ? 'text-blue-500' : count < 0 ? 'text-red-500' : ''}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-light sm:text-4xl sm:leading-tight">{count}</h2>
        </div>
        <button
          className="text-white text-xl w-20 bg-red-500 hover:bg-red-600 p-4 m-4 focus:ring-4 focus:outline-none font-medium rounded-lg py-2"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="text-white text-xl w-20 bg-blue-500 hover:bg-blue-600 p-4 m-4 focus:ring-4 focus:outline-none font-medium rounded-lg py-2"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
    </>
    )
}

export default Count