import React from "react";
import { useState } from "react";

const TestAPI = () => {
  const [showName, setShowName] = useState(-1);

  const handleGetName = () => {
    console.log(process.env.NODE_ENV);
    fetch("/api/get_number")
      .then((response) => response.json())
      .then((response) => setShowName(response.number));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <div
          className="select-none p-1 text-lg rounded bg-slate-400 hover:bg-slate-500 hover:cursor-pointer active:bg-slate-600 text-white"
          onClick={handleGetName}
        >
          Test
        </div>
      </div>

      <div className="w-1/2">
        <div className="select-none p-1 text-lg rounded bg-white">
          {showName}
        </div>
      </div>
    </div>
  );
};

export default TestAPI;
