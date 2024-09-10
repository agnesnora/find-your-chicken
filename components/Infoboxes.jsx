import React from "react";
import styles from "../styles/Infoboxes.module.scss";
import Link from "next/link";
const Infoboxes = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.buy}`}>
        <h1>I want to buy chickens</h1>
        <p>Find your perfect chicken</p>
        <Link className={styles.button} href={"/chickens"}>
          Browse chickens
        </Link>
      </div>
      <div className={`${styles.box}  ${styles.sell}`}>
        <h1>I have chickens to sell</h1>
        <p>Sell your chickens and find the best owner for your flock</p>
        <Link className={styles.button} href={"/chickens/add"}>
          Add chickens
        </Link>
      </div>
    </div>
  );
};

export default Infoboxes;
