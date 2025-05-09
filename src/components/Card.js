import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};
