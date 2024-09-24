import React from "react";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import ChickenCard from "@/components/ChickenCard";
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
        <div>
          {/*       {chickens.map((chicken) => (
            <p key={chicken._id}>
              {chicken.name} - {chicken.type}
            </p>
          ))} */}
          {chickens.map((chicken) => (
            <ChickenCard chicken={chicken} key={chicken._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChickensPage;
