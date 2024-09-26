import React from "react";
import Image from "next/image";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import { getSessionUser } from "@/utils/getSessionUser";
import ProfileChickens from "@/components/ProfileChickens";
import { convertToSerializableObject } from "@/utils/convertToObject";

const ProfilePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("userId is required");
  }

  const chickensDocs = await Chicken.find({ owner: userId }).lean();
  const chickens = chickensDocs.map(convertToSerializableObject);

  return (
    <div>
      <div>
        <Image
          src={sessionUser.user.image}
          alt={`${sessionUser.user.name}'s profile picture`}
          width={200}
          height={200}
        />
        <h1>Name: {sessionUser.user.name}</h1>
        <h1>Email: {sessionUser.user.email}</h1>
      </div>
      <ProfileChickens chickens={chickens} />
    </div>
  );
};

export default ProfilePage;
