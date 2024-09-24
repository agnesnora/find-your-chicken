"use client";

import React, { useState, useEffect } from "react";
import addChicken from "@/app/actions/AddChicken";

const ChickenAddForm = () => {
  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState({
    type: "",
    name: "",
    description: "",
    location: {
      street: "",
      city: "",
      zipcode: "",
    },
    eggs: "",

    rate: "",
    seller_info: {
      name: "",
      email: "",
      phone: "",
    },
    images: [],
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //Check if nested property
    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");
      console.log(outerKey, innerKey);
      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value,
        },
      }));
    } else {
      //not nested
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    const updatedImages = [...fields.images];

    //Add new files to the Array

    for (const file of files) {
      updatedImages.push(file);
    }

    //Update state with images

    setFields((prevFields) => ({
      ...prevFields,
      images: updatedImages,
    }));
  };
  return (
    mounted && (
      <form action={addChicken}>
        <h2 className="text-3xl text-center font-semibold mb-6">
          Add Chickens
        </h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Chicken Type
          </label>
          <select
            id="type"
            name="type"
            required
            value={fields.type}
            onChange={handleChange}
          >
            <option value="Egg-Laying Breeds">Egg-Laying Breeds</option>
            <option value="Dual-Purpose Breeds">Dual-Purpose breeds</option>
            <option value="Ornamental Breeds">Ornamental Breeds</option>
            <option value="Traditional Breeds">Traditional Breeds</option>
          </select>
        </div>
        <div>
          <label>Listing Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="eg. Nice chickens"
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Add an optional description of your chicken"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            id="street"
            name="location.street"
            placeholder="Street"
            value={fields.location.field}
            onChange={handleChange}
          />
          <input
            type="text"
            id="city"
            name="location.city"
            placeholder="City"
            required
            value={fields.location.city}
            onChange={handleChange}
          />

          <input
            type="text"
            id="zipcode"
            name="location.zipcode"
            placeholder="Zipcode"
            value={fields.location.zipcode}
            onChange={handleChange}
          />
        </div>

        <div>
          <div>
            <label htmlFor="eggs">Eggs</label>
            <input
              type="number"
              id="eggs"
              name="eggs"
              required
              value={fields.eggs}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4 bg-blue-50 p-4">
          <label className="block text-gray-700 font-bold mb-2">
            Rates (Leave blank if not applicable)
          </label>
          <div>
            <div>
              <label htmlFor="rate">Weekly</label>
              <input
                type="number"
                id="rate"
                name="rate"
                value={fields.rate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="seller_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_info.name"
            placeholder="Name"
            value={fields.seller_info.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="seller_email">Seller Email</label>
          <input
            type="email"
            id="seller_email"
            name="seller_info.email"
            placeholder="Email address"
            required
            value={fields.seller_info.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seller_phone">Seller Phone</label>
          <input
            type="tel"
            id="seller_phone"
            name="seller_info.phone"
            placeholder="Phone"
            value={fields.seller_info.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="images">Images (Select up to 4 images)</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        <div>
          <button type="submit">Add Chicken</button>
        </div>
      </form>
    )
  );
};

export default ChickenAddForm;
