"use client";
import { useState } from "react";
import {
  UserCircleIcon,
  PhotoIcon,
  UsersIcon,
  CalendarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const activeTabClass =
  "before:w-[4px] ml-[-8px] before:h-full before:bg-primaryColor before:rounded-full before:mr-4 text-primaryColor";

const LeftBar = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    console.log(tabId);
    setSelectedTab(tabId);
  };

  return (
    <div className="flex h-screen w-[20vw] flex-col bg-white px-2 ">
      <div className="my-4 flex w-full flex-row items-center rounded-[12px] bg-gray-200 p-2">
        <UserCircleIcon width={40} height={40} color="black" />
        <div className="ml-2 flex flex-col">
          <p className="text-[16px] font-bold">Haris Alicic</p>
          <p className="text-[14px] text-gray-500">@alicicharis</p>
        </div>
      </div>
      <div
        onClick={() => handleTabClick(1)}
        className={`mb-4 flex w-full cursor-pointer flex-row items-center ${
          selectedTab === 1 ? activeTabClass : "text-black"
        }`}
      >
        <HomeIcon
          width={30}
          height={30}
          className={selectedTab === 1 ? "text-primaryColor" : "text-gray-400"}
        />
        <p className="ml-4 font-medium text-black">Feed</p>
      </div>
      <div
        onClick={() => handleTabClick(2)}
        className={`mb-4 flex w-full cursor-pointer flex-row items-center ${
          selectedTab === 2 ? activeTabClass : "text-black"
        }`}
      >
        <UsersIcon
          width={30}
          height={30}
          className={selectedTab === 2 ? "text-primaryColor" : "text-gray-400"}
        />
        <p className="ml-4 font-medium text-black">Friends</p>
      </div>
      <div
        onClick={() => handleTabClick(3)}
        className={`mb-4 flex w-full cursor-pointer flex-row items-center ${
          selectedTab === 3 ? activeTabClass : "text-black"
        }`}
      >
        <PhotoIcon
          width={30}
          height={30}
          className={selectedTab === 3 ? "text-primaryColor" : "text-gray-400"}
        />
        <p className="ml-4 font-medium">Photos</p>
      </div>
      <div
        onClick={() => handleTabClick(4)}
        className={`mb-4 flex w-full cursor-pointer flex-row items-center ${
          selectedTab === 4 ? activeTabClass : "text-black"
        }`}
      >
        <CalendarIcon
          width={30}
          height={30}
          className={selectedTab === 4 ? "text-primaryColor" : "text-gray-400"}
        />
        <p className="ml-4 font-medium">Events</p>
      </div>
    </div>
  );
};

export default LeftBar;
