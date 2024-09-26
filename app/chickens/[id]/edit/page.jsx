import React from "react";
import ChickenEditForm from "@/components/ChickenEditForm";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import { convertToSerializableObject } from "@/utils/convertToObject";

const ChickenEditPage = async ({ params }) => {
  await connectDB();
  const chickenDoc = await Chicken.findById(params.id).lean();
  const chicken = convertToSerializableObject(chickenDoc);

  if (!chicken) {
    return <h1>Chicken not found</h1>;
  }
  return (
    <div>
      <ChickenEditForm chicken={chicken} />
    </div>
  );
};

export default ChickenEditPage;
