"use server";
import connectDB from "@/config/database";
import Chicken from "@/models/Chickens";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";

async function addChicken(formData) {
  await connectDB();
  const sessionUser = await getSessionUser();
  console.log("sessionUser", sessionUser);

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User id is required");
  }

  const { userId } = sessionUser;
  //Access all values from images

  const images = formData.getAll("images").filter((image) => image.name !== "");

  const chickenData = {
    owner: userId,
    type: formData.get("type"),
    name: formData.get("name"),
    description: formData.get("description"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),

      zipcode: formData.get("location.zipcode"),
    },
    rates: formData.get("rates"),
    eggs: formData.get("eggs"),
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
  };

  const imageUrls = [];
  for (const imageFile of images) {
    const imageBuffer = await imageFile.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    //convert to base64

    const imageBase64 = imageData.toString("base64");

    // make request to cloudinary

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "findyourchicken",
      }
    );
    imageUrls.push(result.secure_url);
  }
  chickenData.images = imageUrls;

  const newChicken = new Chicken(chickenData);
  await newChicken.save();

  revalidatePath("/", "layout");
  redirect(`/chickens/${newChicken._id}`);
}

export default addChicken;
