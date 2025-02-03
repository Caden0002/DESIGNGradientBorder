import React from "react";

const GradientBorder = () => {
  return (
    <div className="relative min-h-full p-12 flex bg-slate-950">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-lg text-white">A button with a gradient border</p>

        {/* Gradient Border Button */}
        <button className="relative bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
          <div className="flex items-center justify-center bg-black px-6 py-2 text-sm text-white">
            Button
          </div>
        </button>
      </div>
    </div>
  );
};

export default GradientBorder;
