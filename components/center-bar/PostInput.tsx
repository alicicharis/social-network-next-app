import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";

const PostInput = () => {
  return (
    <div className="mb-2 w-full rounded-[12px] bg-white px-4 pb-2">
      <p className="my-2 font-bold">Post Something</p>
      <hr />
      <div className="mt-2 flex flex-row items-center justify-between">
        <div className="flex flex-1 flex-row items-center">
          <UserCircleIcon
            width={40}
            height={40}
            color="black"
            className="mr-4 cursor-pointer"
          />
          <input
            placeholder="What's on your mind?"
            className="placeholder:text-grey mr-4 w-full rounded-[12px] border border-none border-gray-300 bg-gray-200 py-1 pl-2 focus:outline-gray-300"
            type="text"
          />
        </div>
        <PhotoIcon
          width={25}
          height={25}
          className="cursor-pointer text-gray-400 transition duration-300 hover:text-primaryColor"
        />
      </div>
    </div>
  );
};

export default PostInput;
