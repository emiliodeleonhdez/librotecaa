import React from "react";

interface AppButtonProps {
  text: string;
}

const AppButton: React.FC<AppButtonProps> = ({ text }) => {
  return (
    <button className="w-48 h-12bg-stone-800 ">
        {text}
    </button>
  );
};

export default AppButton;
