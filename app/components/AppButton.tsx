import React from "react";

interface AppButtonProps {
  text: string;
  onClick: () => void;
  styles:string;
}

const AppButton: React.FC<AppButtonProps> = ({ text, onClick,styles }) => {
  return (
    <button onClick={onClick} className={styles}>
      {text}
    </button>
  );
};

export default AppButton;
