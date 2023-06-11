import Image from "next/image";

import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navigation = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between border-b-[1px] bg-white p-4">
      <div className="flex flex-row items-center">
        <Image
          src="/images/logoimage.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={60}
          height={60}
          priority
        />
        <p className="ml-2 text-[20px] font-medium text-black">
          Social Network
        </p>
      </div>
      <div className="relative w-[400px]">
        <input
          className="placeholder:text-grey w-full rounded-[12px] border border-none border-gray-300 bg-gray-200 py-2 pl-2 pr-4 focus:outline-gray-300"
          type="text"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3">
          <MagnifyingGlassIcon width={24} height={24} color="black" />
        </div>
      </div>
      <div>
        <Bars3Icon
          width={24}
          height={24}
          color="black"
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navigation;
