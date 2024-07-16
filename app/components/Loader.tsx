import React from "react";

interface LoaderToSuccessProps {
  isLoading: boolean;
}

const LoaderToSuccess: React.FC<LoaderToSuccessProps> = ({ isLoading }) => {
  return (
    <div className="flex items-center justify-center">
      {isLoading ? (
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      ) : (
        <div className="text-green-500 text-4xl">✔</div>
      )}
    </div>
  );
};

export default LoaderToSuccess;
