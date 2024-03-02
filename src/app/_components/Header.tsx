import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";

import { MoonIcon, BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex h-fit w-full items-center justify-between border-b-2 border-slate-200 px-10 py-6">
      <div className="relative h-10 w-[400px]">
        <input
          type="text"
          className="block w-full rounded-lg bg-gray-100 py-3 pl-8 pr-2 outline-none ring-primaryColor focus:ring-2"
          placeholder="Search here"
        />
        <MagnifyingGlassIcon
          width={20}
          height={20}
          className="absolute left-2 top-0 z-10 mt-3.5 inline-block cursor-pointer text-gray-400"
        />
      </div>
      <div className="flex w-[250px] items-center justify-between ">
        <div className="flex">
          <MoonIcon
            width={25}
            height={25}
            className="mr-1 cursor-pointer rounded-full text-gray-500 hover:text-primaryColor"
          />
          <BellIcon
            width={25}
            height={25}
            className="ml-2 cursor-pointer text-gray-500 hover:text-primaryColor"
          />
        </div>
        <div className="flex items-center">
          <UserCircleIcon
            width={40}
            height={40}
            className="cursor-pointer text-primaryColor"
          />
          <p className="mx-1">Haris Alicic</p>
          <ChevronDownIcon
            width={30}
            height={30}
            className="cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
