"use client";

import { useRef } from "react";
import Image from "next/image";
import Modal from "./Modal";

const Gallery = ({ images }: { images: string[] }) => {
  const myRef: any = useRef();

  return (
    <div className="grid grid-cols-2 gap-1">
      {images.map((image, i) => {
        if (i > 3) return;

        return (
          <div
            key={i}
            className="w-full h-[200px] relative cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              onClick={() => myRef.current.childMethod(i)}
              src={image}
              alt="gallery image"
              fill
              className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform-gpu scale-100 hover:scale-110"
            />
            {images.length > 4 && i === 3 && (
              <div
                onClick={() => myRef.current.childMethod(i)}
                className="absolute inset-0 bg-black rounded-lg bg-opacity-50 transition-opacity duration-500 ease-in-out flex items-center justify-center"
              >
                <p className="text-white text-xl font-medium">
                  + {images.length - 4}
                </p>
              </div>
            )}
          </div>
        );
      })}
      <Modal ref={myRef} />
    </div>
  );
};

export default Gallery;
