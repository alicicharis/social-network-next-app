import Image from "next/image";
import { IImage } from "./AddPost";

const PreviewGallery = ({ images }: { images: IImage[] }) => {
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
              src={image.preview}
              alt="gallery image"
              fill
              className="object-cover rounded-lg transition-transform duration-500 ease-in-out transform-gpu scale-100 hover:scale-110"
            />
          </div>
        );
      })}
    </div>
  );
};

export default PreviewGallery;
