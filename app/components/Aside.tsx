import React from "react";

interface AppAsideItem {
  text: string;
}

interface AppAsideProps {
  options: AppAsideItem[];
}

const AppAside: React.FC<AppAsideProps> = ({ options }) => {
  return (
    <aside className="bg-gray-200 w-full md:w-1/4 lg:w-1/5 p-4">
      <nav>
        <ul>
          {options.map((item) => (
            <li className="mb-2">
              <a href="#" className="text-blue-700">
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
