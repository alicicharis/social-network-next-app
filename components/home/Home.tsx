import Navigation from "../navigation/Navigation";
import TopBar from "../navigation/TopBar";
import AddPost from "./AddPost";
import GridPlayground from "./GridPlayground";
import Posts from "./Posts";

import { IPost } from "./Posts";

const posts: IPost[] = [
  {
    id: 0,
    username: "Haris Alicic",
    timestamp: "12 April at 09:28",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolorem assumenda delectus illum iste quibusdam iusto, voluptates sunt ipsum quis perferendis, eligendi repudiandae. Mollitia deleniti vitae laborum rerum explicabo placeat.",
    bookmarks: 10,
    comments: 15,
    likes: 150,
    shares: 12,
    images: [
      "/images/image-test.webp",
      "/images/image-test.webp",
      "/images/image-test.webp",
      "/images/image-test.webp",
      "/images/image-test.webp",
    ],
  },
  {
    id: 1,
    username: "Haris Alicic",
    timestamp: "12 April at 09:28",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolorem assumenda delectus illum iste quibusdam iusto, voluptates sunt ipsum quis perferendis, eligendi repudiandae. Mollitia deleniti vitae laborum rerum explicabo placeat.",
    bookmarks: 10,
    comments: 15,
    likes: 150,
    shares: 12,
  },
  {
    id: 2,
    username: "Haris Alicic",
    timestamp: "12 April at 09:28",
    bookmarks: 10,
    comments: 15,
    likes: 150,
    shares: 12,
    images: ["/images/image-test.webp"],
  },
];

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-200">
      <Navigation />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 xl:pl-40">
        <TopBar />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-2">
            <AddPost />
            <Posts posts={posts} />
          </div>
          {/* <div className="grid lg:col-span-3">
            <GridPlayground />
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Home;
