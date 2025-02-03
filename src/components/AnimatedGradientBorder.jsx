import React from "react";

const AnimatedGradientBorder = () => {
  return (
    <div className="relative min-h-full p-12 flex bg-black">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center space-y-6">
        <p className="text-lg text-white">
          A button with a gradient border animation
        </p>

        {/* Button with Animated Border */}
        <div className="relative p-[2px]">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 "
            style={{
              backgroundSize: "200% 200%",
              animation: "gradientRotate 3s linear infinite",
            }}
          ></div>

          {/* Button Content */}
          <button className="relative px-6 py-2 text-sm text-white font-medium bg-black">
            Button
          </button>
        </div>

        {/* Inline Style for Keyframes */}
        <style>
          {`
            @keyframes gradientRotate {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AnimatedGradientBorder;
