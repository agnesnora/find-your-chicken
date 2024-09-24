import React from "react";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import ChickenCard from "@/components/ChickenCard";
import styles from "../styles/Chickens.module.scss";
const HomeChickensPage = async () => {
  await connectDB();

  const recentChickens = await Chicken.find({}).sort().limit(3).lean();

  return (
    <div>
      <h2>Recent chickens</h2>
      <div className={styles.grid}>
        {" "}
        {recentChickens.map((chicken) => (
          <ChickenCard chicken={chicken} key={chicken._id} />
        ))}
      </div>
    </div>
  );
};

export default HomeChickensPage;
