"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteChicken(chickenId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || sessionUser.user.userId) {
    throw new Error("UserId required");
  }

  const { userId } = sessionUser;

  const chicken = await Chicken.findById(chickenId);

  if (!chicken) throw new Error("Chicken not found");

  if (chicken.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  //Delete images from cloudinary

  const publicIds = chicken.images.map((imageUrl) => {
    const parts = imageUrl.split("/");
    return parts.at(-1).split(".").at(0);
  });

  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("findyourchicken/" + publicId);
    }
  }

  await chicken.deleteOne();
  revalidatePath("/", "layout");
}

export default deleteChicken;
