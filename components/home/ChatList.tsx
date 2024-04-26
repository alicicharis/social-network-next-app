import React from "react";
import Image from "next/image";

interface IFriend {
  id: number;
  name: string;
  userImage: string;
  active: boolean;
}

const friends: IFriend[] = [
  {
    id: 0,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 1,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 2,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 3,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: false,
  },
  {
    id: 4,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 5,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 6,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: false,
  },
  {
    id: 7,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
  {
    id: 8,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
    active: true,
  },
];

const ChatList = () => {
  return (
    <section className="flex flex-col space-y-1 bg-white py-4 rounded-lg shadow-sm">
      <p className="text-lg text-slate-500 px-4">Chats</p>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-slate-100"
        >
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 relative rounded-full">
              <Image
                src={friend.userImage}
                fill
                alt="user photo"
                className="rounded-full object-contain border-2 border-blue-500"
              />
            </div>
            <p className="text-sm">{friend.name}</p>
          </div>
          <div
            className={`w-2 h-2 rounded-full ${
              friend.active ? "bg-green-400" : "bg-slate-200"
            }`}
          ></div>
        </div>
      ))}
    </section>
  );
};

export default ChatList;
