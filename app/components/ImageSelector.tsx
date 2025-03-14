import React from "react";

interface Props {
  images: string[];
}

const Selector: React.FC<Props> = (props) => {
  const [selectedImage, setSelectedImage] = React.useState(props.images[0]);

  return (
    <div className="p-2 md:p-10">
      <img
        className="w-full h-full rounded-3xl h-auto"
        src={selectedImage}
        alt=""
        style={{
          WebkitMaskImage: "linear-gradient(#000, rgba(0,0,0,0.6))",
          maskImage: "linear-gradient(#000, rgba(0,0,0,0.6))",
        }}
      />
      <div className="h-64 md:h-24 grid grid-cols-3 grid-rows-2 md:grid-cols-6 gap-2 mt-5">
        {props.images.map((image, index) => (
          <img
            key={index}
            onClick={() => setSelectedImage(image)}
            className="rounded-xl cursor-pointer overflow-auto size-24 justify-center mr-auto ml-auto"
            style={{
              WebkitMaskImage: "linear-gradient(#000, rgba(0,0,0,0.6))",
              maskImage: "linear-gradient(#000, rgba(0,0,0,0.6))",
              pointerEvents: "all",
            }}
            src={image}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Selector;