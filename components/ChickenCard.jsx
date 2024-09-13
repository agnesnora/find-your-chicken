import React from "react";
import Image from "next/image";
import styles from "../styles/Chickencard.module.scss";

const ChickenCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {" "}
        <Image
          className={styles.image}
          layout="fill"
          objectFit="cover"
          src="/assets/images/chicken5.jpg"
        />
      </div>

      <h1>Magyar kendermagos tyúk</h1>
      <h4>Laying</h4>
      <p>Tiszabő</p>
      <div className={styles.footer}>
        {" "}
        <h3>3000HUF</h3>
        <h3>Eggs/week: 2</h3>
      </div>
    </div>
  );
};

export default ChickenCard;
