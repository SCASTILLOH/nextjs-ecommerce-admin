import React from "react";

const AuthLayaout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full ">{children}</div>
  );
};

export default AuthLayaout;
