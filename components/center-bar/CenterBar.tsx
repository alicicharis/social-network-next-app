import PostInput from "./PostInput";
import Post from "./Post";

const CenterBar = () => {
  return (
    <div className="ml-6 mt-6 flex h-screen w-[50vw] flex-col gap-4 bg-gray-200">
      <PostInput />
      <Post />
      <div className="w-full rounded-[12px] bg-green-500">t</div>
    </div>
  );
};

export default CenterBar;
