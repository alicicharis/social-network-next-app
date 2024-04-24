import React from "react";
import Image from "next/image";

const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
      {images.map((image, i) => {
        if (i > 3) return;

        return (
          <div key={i} className="h-fit cursor-pointer">
            <div className="w-full h-[200px] relative">
              <Image
                src={image}
                alt="gallery image"
                fill
                className="object-cover rounded-lg"
              />
              {images.length > 4 && i === 3 && (
                <div className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                  <p className="text-white text-xl font-medium">
                    + {images.length - 4}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
