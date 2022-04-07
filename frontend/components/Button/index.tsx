import React, { ReactNode } from "react";

interface buttonTypes {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: buttonTypes) => {
  return (
    <div className="button" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
