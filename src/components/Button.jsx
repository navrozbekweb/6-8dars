import React from "react";

function Button({ text, onClick, variant }) {
  const variants = {
    primary: " btn-primary ",
    secondary: " btn-secondary ",
  };
  return (
    <button
      onClick={onClick}
      className={`${variants[variant] || ""} btn w-full`}
    >
      {text}
    </button>
  );
}

export default Button;
