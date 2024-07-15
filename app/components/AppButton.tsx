import React from "react";

interface AppButtonProps {
  text: string;
}

const AppButton: React.FC<AppButtonProps> = ({ text }) => {
  return (
    <button className="w-44 border-black border-2 p-4 rounded-full">
        {text}
    </button>
  );
};

export default AppButton;
