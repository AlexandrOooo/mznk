import React from "react";

const index: React.FC<{ characteristics: any }> = ({ characteristics }) => {
  return (
    <>
      <ul className="justify-between w-[920px]">
        {characteristics.map((item: any) => (
          <li
            className="flex justify-between mb-2 border-2 p-1"
            key={item.name}
          >
            <span className="basis-2/6 uppercase text-cyan-700">
              {item.name}
            </span>
            <span className="basis-4/6 border-l-2 border-l-amber-300 pl-2 text-right">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
export default index;
