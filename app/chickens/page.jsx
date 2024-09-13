import React from "react";
import chickens from "@/chickens.json";
const ChickensPage = () => {
  console.log(chickens);
  return (
    <div>
      {chickens.length === 0 ? (
        <p>Chicken not found</p>
      ) : (
        <div>
          {chickens.map((chicken) => (
            <p>{chicken.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChickensPage;
