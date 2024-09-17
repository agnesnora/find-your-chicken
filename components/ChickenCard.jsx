import React from "react";
import Image from "next/image";
import styles from "../styles/Chickencard.module.scss";

const ChickenCard = ({ chicken }) => {
  console.log(chicken);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {" "}
        <Image
          className={styles.image}
          layout="fill"
          objectFit="cover"
          src={`/images/chicken1.jpg`}
        />
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
