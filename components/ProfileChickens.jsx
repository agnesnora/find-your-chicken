"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import deleteChicken from "@/app/actions/DeleteChicken";
import Link from "next/link";

const ProfileChickens = ({ chickens: initialChickens }) => {
  const [chickens, setChickens] = useState(initialChickens);
  const handleChickenDelete = async (chickenId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this chicken?"
    );

    if (!confirmed) return;
    await deleteChicken(chickenId);

    const updatedChickens = chickens.filter((chicken) => {
      chicken._id !== chickenId;
    });
    setChickens(updatedChickens);
    toast.success("Chicken deleted successfully");
  };

  return (
    <div>
      {chickens.map((chicken) => (
        <div key={chicken._id}>
          <Image
            objectFit="cover"
            src={chicken.images[0]}
            alt={chicken.name}
            width={500}
            height={300}
          />
          <h1>{chicken.name}</h1>
          <h4>{chicken.type}</h4>
          <p>{chicken.location.city}</p>
          <button onClick={() => handleChickenDelete(chicken._id)}>
            Delete
          </button>
          <Link href={`/chickens/${chicken._id}/edit`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileChickens;
