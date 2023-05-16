"use clinet";
import React from "react";
interface Props {
  label: string;
  onClick: () => void;
}
const NavItem: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div
      className="w-full px-3 py-4 hover:bg-slate-50 cursor-pointer font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default NavItem;
