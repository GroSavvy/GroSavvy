import React, { useState } from "react";

export default function Sort({ onSelected = (f) => f }) {
  const options = [
    { name: "Lowest Price", key: "price" },
    { name: "Distance To Mac", key: "distanceToMac" },
  ];
  const [select, setSelect] = useState();
  return (
    <form>
      <label>
        Sort
        <br />
        <select>
          {options.map((opt, i) => (
            <option key={i} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
