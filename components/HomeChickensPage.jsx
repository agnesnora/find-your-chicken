import React from "react";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import ChickenCard from "@/components/ChickenCard";
const HomeChickensPage = async () => {
  await connectDB();

  const recentChickens = await Chicken.find({}).sort().limit(3).lean();

  return (
    <div>
      <h2>Recent chickens</h2>
      {recentChickens.map((chicken) => (
        <ChickenCard chicken={chicken} key={chicken._id} />
      ))}
    </div>
  );
};

export default HomeChickensPage;
