import React from "react";
import Image from "next/image";
import { Ellipsis, MessageSquare, Heart, Share2, Bookmark } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import CommentForm from "./CommentForm";
import Gallery from "./Gallery";

export interface IPost {
  id: number;
  username: string;
  timestamp: string;
  text?: string;
  images?: string[];
  comments: number;
  likes: number;
  shares: number;
  bookmarks: number;
}

const Posts = ({ posts }: { posts: IPost[] }) => {
  return (
    <section className="space-y-6">
      {posts.map((post: IPost) => (
        <div
          key={post.id}
          className="flex flex-col p-2 sm:p-4 rounded-lg shadow-sm bg-white space-y-4"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-row items-center space-x-2">
              <Avatar>
                <AvatarImage src="/images/user-image.jpg" alt="@haris" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p>Haris Alicic</p>
                <p className="text-sm text-gray-400">12 April 09:26 PM</p>
              </div>
            </div>
            <div>
              <Ellipsis className="h-5 w-5 text-gray-400 cursor-pointer" />
            </div>
          </div>
          <Separator />
          <div className="flex flex-col space-y-4">
            {post.text && (
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam dolorem assumenda delectus illum iste quibusdam iusto,
                voluptates sunt ipsum quis perferendis, eligendi repudiandae.
                Mollitia deleniti vitae laborum rerum explicabo placeat.
              </p>
            )}
            {post.images &&
              post?.images.length === 1 &&
              post?.images.map((image, i) => (
                <Image
                  key={i}
                  src={image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="photo"
                  className="w-full h-auto rounded-lg"
                />
              ))}
            {post.images && post?.images.length > 1 && (
              <Gallery images={post.images} />
            )}
          </div>
          <Separator />
          <div className="flex w-full justify-around sm:justify-between items-cente !mt-0">
            <div className="flex space-x-1 items-center cursor-pointer group py-4">
              <span className="text-sm hidden sm:inline-block text-gray-400 group-hover:text-black">
                {post.comments} Comments
              </span>
              <MessageSquare className="h-5 text-gray-400 group-hover:text-black" />
            </div>
            <div className="flex space-x-1 items-center cursor-pointer group py-4">
              <span className="text-sm hidden sm:inline-block text-gray-400 group-hover:text-black">
                {post.likes} Likes
              </span>
              <Heart className="h-5 text-gray-400 group-hover:text-black" />
            </div>
            <div className="flex space-x-1 items-center cursor-pointer group py-4">
              <span className="text-sm hidden sm:inline-block text-gray-400 group-hover:text-black">
                {post.shares} Shares
              </span>
              <Share2 className="h-5 text-gray-400 group-hover:text-black" />
            </div>
            <div className="flex space-x-1 items-center cursor-pointer group py-4">
              <span className="text-sm hidden sm:inline-block text-gray-400 group-hover:text-black">
                {post.bookmarks} Bookmarks
              </span>
              <Bookmark className="h-5 text-gray-400 group-hover:text-black" />
            </div>
          </div>
          <Separator className="!mt-0" />
          <CommentForm />
        </div>
      ))}
    </section>
  );
};

export default Posts;
