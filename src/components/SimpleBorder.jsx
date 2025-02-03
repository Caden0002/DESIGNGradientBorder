import React from "react";

const SimpleBorder = () => {
  return (
    <div className="relative min-h-full p-12 flex bg-black">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-lg text-white">
          A button with a single color border
        </p>
        <button className="px-6 py-2 text-sm border-2 border-blue-400 text-white ">
          Button
        </button>
      </div>
    </div>
  );
};

export default SimpleBorder;
