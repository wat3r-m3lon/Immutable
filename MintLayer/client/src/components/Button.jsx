import React from "react";

function Button({title, onClick}) {
  return (
    <button 
      onClick={onClick}
      className="hover:bg-gradient-to-r from-[#1E3AA9] via-purple-500 to-pink-500 text-white py-2 px-4 rounded"
    >
      {title}
    </button>
  );
}

export default Button;