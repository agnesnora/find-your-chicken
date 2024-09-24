import React from "react";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import ChickenCard from "@/components/ChickenCard";
import styles from "../../styles/Chickens.module.scss";

const ChickensPage = async () => {
  await connectDB();

  let chickens = [];
  try {
    chickens = await Chicken.find();
  } catch (error) {
    console.error("Error fetching chickens:", error);
  }

  return (
    <div>
      {chickens.length === 0 ? (
        <p>No chickens found</p>
      ) : (
        <div className={styles.grid}>
          {chickens.map((chicken) => (
            <ChickenCard chicken={chicken} key={chicken._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChickensPage;
