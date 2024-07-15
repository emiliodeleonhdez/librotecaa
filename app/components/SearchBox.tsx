import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent: React.FC = () => {
  return (
    <div className="flex items-center w-1/2">
      <input
        type="text"
        placeholder="Buscar libro..."
        className="border-b-2 border-transparent focus:border-blue-500 outline-none bg-transparent w-full"
      />
      <FaSearch className="text-gray-500 mr-2" />
    </div>
  );
};

export default SearchComponent;
