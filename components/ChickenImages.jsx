"use client";

import React from "react";
import Image from "next/image";
const ChickenImages = ({ images }) => {
  return (
    <div>
      {images?.length === 1 ? (
        <Image
          key={index}
          src={images[0]}
          alt=""
          width={400}
          height={400}
          priority={true}
        />
      ) : (
        <div>
          {images.map((image, index) => (
            <Image src={image} alt="" width={400} height={400} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChickenImages;
