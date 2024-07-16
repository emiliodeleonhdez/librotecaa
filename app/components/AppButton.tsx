import React from "react";

interface AppButtonProps {
  text: string;
  onClick: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="w-44 border-black border-2 p-4 rounded-full">
      {text}
    </button>
  );
};

export default AppButton;
