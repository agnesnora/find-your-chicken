import React from "react";
import Image from "next/image";
import styles from "../styles/Chickencard.module.scss";

const ChickenCard = ({ chicken }) => {
  console.log(chicken);
  const images = Array.isArray(chicken.images) ? chicken.images : [];
  const firstImageSrc = images.length > 0 ? images[0].src : null;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {firstImageSrc ? (
          <Image
            className={styles.image}
            src={`/assets/images/${firstImageSrc}`} // Path based on `src` value
            alt={chicken.name || "Chicken image"} // Alt text for accessibility
            width={400} // Adjust width as needed
            height={300} // Adjust height as needed
            style={{ objectFit: "cover" }} // Control image fit
          />
        ) : (
          <p>No image available</p> // Fallback message if no images
        )}
      </div>

      <h1>{chicken.name}</h1>
      <h4>{chicken.type}</h4>
      <p>{chicken.location.city}</p>
      <div className={styles.footer}>
        {" "}
        <h3>{chicken.rates} HUF</h3>
        <h3>Eggs/week: 2</h3>
      </div>
    </div>
  );
};

export default ChickenCard;
