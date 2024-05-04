import Navigation from "../navigation/Navigation";
import TopBar from "../navigation/TopBar";
import AddPost from "./AddPost";
import GridPlayground from "./GridPlayground";
import Posts from "./Posts";
import Stories from "./Stories";
import { IPost } from "./Posts";
import { IStory } from "./Stories";
import Modal from "./Modal";
import ChatList from "./ChatList";
import FriendRequests from "./FriendRequests";
import { db } from "@/db";
import { todos } from "@/db/schema";

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
      "/images/dubai-wallpaper.jpeg",
      "/images/image-test.webp",
      "/images/dubai-wallpaper.jpeg",
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

const stories: IStory[] = [
  {
    id: 0,
    username: "Haris Alicic",
    userImage: "/images/user-image.jpg",
    storyImage: "/images/dubai-wallpaper.jpeg",
  },
  {
    id: 2,
    username: "Haris Alicic",
    userImage: "/images/user-image.jpg",
    storyImage: "/images/image-test.webp",
  },
  {
    id: 3,
    username: "Haris Alicic",
    userImage: "/images/user-image.jpg",
    storyImage: "/images/dubai-wallpaper.jpeg",
  },
  {
    id: 4,
    username: "Haris Alicic",
    userImage: "/images/user-image.jpg",
    storyImage: "/images/user-image.jpg",
  },
];

const Home = async () => {
  const onePost = await db.select().from(todos);

  if (onePost[0]) {
    posts.push({
      id: Math.random(),
      username: "Test Alicic",
      timestamp: "04 May at 09:28",
      text: onePost[0].text,
      bookmarks: 10,
      comments: 15,
      likes: 150,
      shares: 12,
    });
  }

  const allPosts = posts.reverse();

  console.log("Posts: ", posts);
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-200">
      <Navigation />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 xl:pl-[205px]">
        <TopBar />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-5">
          <div className="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-2">
            <Stories stories={stories} />
            <AddPost />
            <Posts posts={allPosts} />
          </div>
          <div className="grid lg:col-span-2">
            <div className="h-screen w-full">
              <FriendRequests />
            </div>
          </div>
          <div className="grid lg:col-span-1 h-fit">
            <ChatList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
