import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import React from "react";
import ChickenDetails from "@/components/ChickenDetails";
import ChickenImages from "@/components/ChickenImages";
const ChickenPage = async ({ params }) => {
  await connectDB();
  const chicken = await Chicken.findById(params.id).lean();

  if (!chicken) {
    return <h1>Chicken not found</h1>;
  }
  return (
    <div>
      <ChickenDetails chicken={chicken} />
      <ChickenImages images={chicken.images} />
    </div>
  );
};

export default ChickenPage;
