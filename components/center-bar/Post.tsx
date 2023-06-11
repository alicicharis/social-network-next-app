"use client";
import Image from "next/image";
import { useState } from "react";
import {
  UserCircleIcon,
  EllipsisHorizontalCircleIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  HeartIcon,
  ShareIcon,
  PhotoIcon,
  FaceSmileIcon,
  PaperClipIcon,
} from "@heroicons/react/24/solid";

const inputFocusClass = `absolute left-0 flex cursor-pointer items-center pl-2 bg-gray-200 w-full rounded-b-[12px] pb-2`;

const Post = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [commentFocus, setCommentFocus] = useState<boolean>(false);

  const showMoreTextHandler = (): void => {
    setShowMore(true);
  };

  const setCommentFocusHandler = (): void => {
    console.log("in focus handler");
    setCommentFocus((prevState) => !prevState);
  };

  return (
    <div className="flex w-full flex-col rounded-[12px] bg-white p-4">
      <div className="mb-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <UserCircleIcon width={40} height={40} color="black" />
          <div className="ml-2 flex flex-col">
            <p className="font-bold">Name</p>
            <p className="text-[12px] text-gray-400">12 April at 09:28 PM</p>
          </div>
        </div>
        <EllipsisHorizontalCircleIcon
          width={25}
          height={25}
          className="cursor-pointer text-gray-400 duration-300 hover:text-primaryColor"
        />
      </div>
      <hr />
      <p className={`mr-2 mt-4 ${showMore ? "" : "line-clamp-2"}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </p>
      {!showMore && (
        <span
          className="ml-auto mr-2 block cursor-pointer text-gray-300 transition duration-300 hover:text-black"
          onClick={showMoreTextHandler}
        >
          {" "}
          Show more
        </span>
      )}
      <div className="my-2 rounded-[12px]">
        <Image
          src="/images/dogphoto.jpg"
          alt="photo"
          width={840}
          height={100}
          className="rounded-[12px]"
        />
      </div>
      <hr />
      <div className="my-4 flex w-full flex-row items-center justify-between px-2 text-[12px]">
        <div className="flex cursor-pointer flex-row items-center">
          <ChatBubbleLeftIcon
            width={20}
            height={20}
            className=" text-gray-400 duration-300 hover:text-primaryColor "
          />
          <p className="ml-2 hidden lg:block">25 Comments</p>
        </div>
        <div className="flex cursor-pointer flex-row items-center">
          <HeartIcon
            width={20}
            height={20}
            className="text-gray-400 duration-300 hover:text-primaryColor"
          />
          <p className="ml-2 hidden lg:block">120k Likes</p>
        </div>
        <div className="flex cursor-pointer flex-row items-center">
          <ShareIcon
            width={20}
            height={20}
            className="text-gray-400 duration-300 hover:text-primaryColor"
          />
          <p className="ml-2 hidden lg:block">25 Share</p>
        </div>
        <div className="flex cursor-pointer flex-row items-center">
          <BookmarkIcon
            width={20}
            height={20}
            className="text-gray-400 duration-300 hover:text-primaryColor"
          />
          <p className="ml-2 hidden lg:block">12 Saved</p>
        </div>
      </div>
      <hr />
      <div
        className={`${
          commentFocus ? "mb-6" : ""
        } mt-4 flex flex-row items-center`}
      >
        <UserCircleIcon
          width={40}
          height={40}
          color="black"
          className="cursor-pointer"
        />
        <div className="relative ml-2 w-full">
          <input
            className={`placeholder:text-grey w-full ${
              !commentFocus
                ? "rounded-[12px]"
                : "rounded-t-[12px] rounded-bl-none"
            } border border-none border-gray-300 bg-gray-200 py-2 pl-2 pr-4 outline-none`}
            type="text"
            placeholder="Write your comment..."
            onFocus={setCommentFocusHandler}
            onBlur={setCommentFocusHandler}
          />
          <div
            className={`${
              !commentFocus
                ? "absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4"
                : inputFocusClass
            } `}
          >
            <PaperClipIcon
              width={24}
              height={24}
              className="mr-4 text-gray-400 transition duration-300 hover:text-primaryColor"
            />
            <FaceSmileIcon
              width={24}
              height={24}
              className="mr-4 text-gray-400 transition duration-300 hover:text-primaryColor"
            />
            <PhotoIcon
              width={24}
              height={24}
              className="text-gray-400 transition duration-300 hover:text-primaryColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
