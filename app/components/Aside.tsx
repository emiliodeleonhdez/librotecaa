import React from "react";
import { AppAsideItem } from "../interfaces/interfaces";

interface AppAsideProps {
  options: AppAsideItem[];
}

const AppAside: React.FC<AppAsideProps> = ({ options }) => {
  return (
    <aside className="bg-gray-200 w-full md:w-1/4 lg:w-1/5 p-4 hidden md:block">
      <nav>
        <ul>
          {options.map((item, index) => (
            <li key={index + item.href} className="mb-2">
              <a href={item.href} className="text-blue-700">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppAside;
