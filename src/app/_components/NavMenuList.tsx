import React from "react";

import { IMenuItem } from "./Nav";

const NavMenuList = ({ menuItems }: { menuItems: IMenuItem[] }) => {
  return (
    <>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={` flex cursor-pointer items-center py-3 pl-6 ${item.active ? "text-primaryColor" : "hover:bg-lightPrimaryColor text-black"}`}
        >
          <div
            className={`${item.active ? "text-primaryColor" : "text-gray-400"}`}
          >
            {item.icon}
          </div>
          <p className={`${item.active ? "font-bold" : "font-normal"} pl-2`}>
            {item.text}
          </p>
        </div>
      ))}
    </>
  );
};

export default NavMenuList;
