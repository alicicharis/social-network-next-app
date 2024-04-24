import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface IStory {
  id: number;
  username: string;
  userImage: string;
  storyImage: string;
}

const Stories = ({ stories }: { stories: IStory[] }) => {
  return (
    <section className="w-full h-fit">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {stories.map((story) => (
            <CarouselItem
              key={story.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative w-full h-[180px] group overflow-hidden cursor-pointer">
                <Image
                  src={story.storyImage}
                  alt="story image"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black rounded-lg bg-opacity-30 flex justify-center items-end">
                  <p className="text-white text-base pb-1">{story.username}</p>
                </div>
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 relative rounded-full border-2 border-blue-300">
                    <Image
                      src={story.userImage}
                      fill
                      alt="user photo"
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default Stories;
