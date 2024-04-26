import Image from "next/image";
import { Button } from "../ui/button";

interface IFriendRequest {
  id: number;
  name: string;
  userImage: string;
}
const friendRequests: IFriendRequest[] = [
  {
    id: 0,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
  },
  {
    id: 1,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    userImage: "/images/user-image.jpg",
  },
];
const FriendRequests = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg py-4">
      <div className="flex justify-between items-center px-4">
        <p className="text-lg text-slate-500">Friend Requests</p>
        <p className="text-sm text-blue-500 hover:underline cursor-pointer">
          See more
        </p>
      </div>
      <div>
        {friendRequests.map((friendRequest) => (
          <div
            key={friendRequest.id}
            className="flex flex-col px-4 py-2 space-y-2"
          >
            <div className="flex space-x-2 items-center">
              <div className="w-7 h-7 relative rounded-full">
                <Image
                  src={friendRequest.userImage}
                  fill
                  alt="user photo"
                  className="rounded-full object-contain border-2 border-blue-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm">{friendRequest.name}</p>
                <p className="text-sm font-light text-slate-400">
                  10 mutual friends
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-700">
                Accept
              </Button>
              <Button
                className="w-full hover:bg-red-500 hover:text-white"
                variant="secondary"
              >
                Decline
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendRequests;
