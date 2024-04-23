import Image from "next/image";

const GridPlayground = () => {
  return (
    <div className="bg-green-200 grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="bg-yellow-200 h-fit">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
          }}
        >
          <Image
            src="/images/image-test.webp"
            alt="gallery image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="bg-yellow-200 h-fit">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
          }}
        >
          <Image
            src="/images/image-test.webp"
            alt="gallery image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="bg-yellow-200 h-fit">t</div>
      <div className="bg-yellow-200 h-fit">t</div>
    </div>
  );
};

export default GridPlayground;
