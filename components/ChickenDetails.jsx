import React from "react";
import Image from "next/image";
const ChickenDetails = ({ chicken }) => {
  return (
    <div>
      <div>
        <Image
          src={chicken.images[0]}
          alt={chicken.name}
          width={400}
          height={400}
        />
        <div>
          <button>Add to whislist</button>
          <h1>{chicken.name}</h1>
          <p>{chicken.description}</p>
          <h3>HUF {chicken.rate}</h3>
        </div>
      </div>
    </div>
  );
};

export default ChickenDetails;
