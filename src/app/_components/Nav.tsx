import React, { ReactNode } from "react";
import {
  CubeIcon,
  Squares2X2Icon,
  ChartBarIcon,
  CalendarDaysIcon,
  InboxIcon,
  UserIcon,
  BookmarkIcon,
  CreditCardIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/16/solid";

import NavMenuList from "./NavMenuList";

const Nav = () => {
  return (
    <div className="flex h-screen min-w-[300px] flex-col border-r-2 border-slate-200">
      <div className="ml-6 mt-6 flex items-center">
        <CubeIcon width={35} height={35} className="text-primaryColor" />
        <p className="pl-2 text-xl font-bold">Social Cube</p>
      </div>
      <div className="mt-8">
        <p className="mb-2 ml-6 text-lg font-bold">Main menu</p>
        <NavMenuList menuItems={mainMenuItems} />
      </div>
      <div className="mt-8">
        <p className="mb-2 ml-6 text-lg font-bold">Accounts</p>
        <NavMenuList menuItems={accountItems} />
      </div>
      <div className="mt-8">
        <p className="mb-2 ml-6 text-lg font-bold">Other</p>
        <NavMenuList menuItems={otherItems} />
      </div>
      <div className="mt-auto flex cursor-pointer items-center py-3 pl-6 hover:bg-lightPrimaryColor">
        <ArrowRightStartOnRectangleIcon
          width={20}
          height={20}
          className="text-primaryColor"
        />
        <p className="pl-2">Logout</p>
      </div>
    </div>
  );
};

export default Nav;

export interface IMenuItem {
  id: number;
  icon: ReactNode;
  text: string;
  active?: boolean;
}

const mainMenuItems: IMenuItem[] = [
  {
    id: 0,
    icon: <Squares2X2Icon width={20} height={20} />,
    text: "Overview",
    active: true,
  },
  {
    id: 1,
    icon: <ChartBarIcon width={20} height={20} />,
    text: "Analytics",
  },
  {
    id: 2,
    icon: <CalendarDaysIcon width={20} height={20} />,
    text: "Schedules",
  },
  {
    id: 3,
    icon: <InboxIcon width={20} height={20} />,
    text: "Inbox",
  },
];

const accountItems: IMenuItem[] = [
  {
    id: 0,
    icon: <UserIcon width={20} height={20} />,
    text: "Accounts",
  },
  {
    id: 1,
    icon: <BookmarkIcon width={20} height={20} />,
    text: "Saved",
  },
  {
    id: 2,
    icon: <CreditCardIcon width={20} height={20} />,
    text: "Payments",
  },
  {
    id: 3,
    icon: <UserGroupIcon width={20} height={20} />,
    text: "Friends",
  },
];

const otherItems: IMenuItem[] = [
  {
    id: 0,
    icon: <Cog6ToothIcon width={20} height={20} />,
    text: "Accounts",
  },
  {
    id: 1,
    icon: <InformationCircleIcon width={20} height={20} />,
    text: "Saved",
  },
];
