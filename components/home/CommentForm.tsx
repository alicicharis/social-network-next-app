import { Smile, Image } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";

const CommentForm = () => {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <Avatar>
          <AvatarImage src="/images/user-image.jpg" alt="@haris" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full relative">
        <Input
          type="text"
          placeholder="Write your comment..."
          className="bg-gray-50 w-full"
        />
        <Smile className="absolute right-2 top-2 text-gray-400 cursor-pointer hover:text-black transition-all ease-in" />
        <Image className="absolute right-10 top-2 text-gray-400 cursor-pointer hover:text-black transition-all ease-in" />
      </div>
    </div>
  );
};

export default CommentForm;
