// Loader.jsx
import React from "react";

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce1"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce2"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce3"></div>
    </div>
  </div>
);

export default Loader;
