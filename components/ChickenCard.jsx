import React from "react";
import Image from "next/image";
import styles from "../styles/Chickencard.module.scss";
import Link from "next/link";

const ChickenCard = ({ chicken }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {" "}
        <Image
          className={styles.image}
          layout="fill"
          objectFit="cover"
          src={chicken.images[0]}
        />
      </div>

      <h1>{chicken.name}</h1>
      <h4>{chicken.type}</h4>
      <p>{chicken.location.city}</p>
      <div className={styles.footer}>
        {" "}
        <h3>{chicken.rate} HUF</h3>
        <h3>Eggs/week: 2</h3>
      </div>
      <Link href={`/chickens/${chicken._id}`}>Details</Link>
    </div>
  );
};

export default ChickenCard;
