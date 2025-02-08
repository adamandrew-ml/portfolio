import React, { useState } from "react";

const Home = (props) => {
  const [showName, setShowName] = useState(-1);

  const handleGetName = () => {
    fetch("/api/get_number", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => setShowName(response.number));
  };

  return (
    <div className={props.pageClassName} id="homeId">
      <div className="flex justify-center items-center">
        <div className="w-1/4">
          <div
            className="select-none p-1 text-lg rounded border-1 border-solid border-slate bg-slate-400 mx-10 hover:bg-slate-500 active:bg-slate-600 text-white"
            onClick={handleGetName}
          >
            Generate
          </div>
        </div>

        <div className="w-1/4">
          <div className="select-none p-1 text-lg rounded border-1 border-solid border-slate-300 bg-white mx-10">
            {showName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
