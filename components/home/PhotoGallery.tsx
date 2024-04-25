import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoGallery = ({ startIndex }: { startIndex: any }) => {
  return (
    <Carousel
      className="w-full h-auto"
      opts={{
        startIndex,
        loop: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="!pl-0">
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/dubai-wallpaper.jpeg"
                className="object-cover"
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                alt="photo"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PhotoGallery;
