import React from "react";

const ChickenEditForm = ({ chicken }) => {
  return (
    <form>
      <h2>Edit Chickens</h2>

      <div>
        <label htmlFor="type">Chicken Type</label>
        <select id="type" name="type" required defaultValue={chicken.type}>
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
          defaultValue={chicken.name}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="Add an optional description of your chicken"
          defaultValue={chicken.description}
        ></textarea>
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          id="street"
          name="location.street"
          placeholder="Street"
          defaultValue={chicken.location.street}
        />
        <input
          type="text"
          id="city"
          name="location.city"
          placeholder="City"
          required
          defaultValue={chicken.location.city}
        />

        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          placeholder="Zipcode"
          defaultValue={chicken.location.zipcode}
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
            defaultValue={chicken.eggs}
          />
        </div>
      </div>

      <div>
        <label>Rates (Leave blank if not applicable)</label>
        <div>
          <div>
            <label htmlFor="rate">Weekly</label>
            <input
              type="number"
              id="rate"
              name="rate"
              defaultValue={chicken.rate}
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
          defaultValue={chicken.seller_info.name}
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
          defaultValue={chicken.seller_info.email}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="seller_phone">Seller Phone</label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          placeholder="Phone"
          defaultValue={chicken.seller_info.phone}
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
        />
      </div>

      <div>
        <button type="submit">Update Chicken</button>
      </div>
    </form>
  );
};

export default ChickenEditForm;
