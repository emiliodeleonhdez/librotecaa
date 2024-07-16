"use client";
import React from "react";
import { AppAsideItem } from "../interfaces/interfaces";

interface AppAsideBurguerProps {
  options: AppAsideItem[];
  show: boolean;
  onClose: () => void;
}

const AppAsideBurguer: React.FC<AppAsideBurguerProps> = ({ options, show, onClose }) => {
  return (
    <aside
      className={`bg-gray-200 flex flex-col lg:w-1/5 p-4 absolute h-screen top-0 left-0 w-1/2 transition-transform duration-300 z-50 ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <p
        className="font-bold text-xl text-black hover:text-sky-800 cursor-pointer self-end"
        onClick={onClose}
      >
        x
      </p>
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

export default AppAsideBurguer;
