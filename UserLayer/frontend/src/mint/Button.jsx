import React from "react";

function Button({title, onClick, disabled = false}) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className="hover:bg-gradient-to-r from-[#1E3AA9] via-purple-500 to-pink-500 text-green-500 py-2 px-4 rounded"
    >
      {title}
    </button>
  );
}

export default Button;