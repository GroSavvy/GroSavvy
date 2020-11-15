import React, { useState } from "react";

export default function Sort({ onSelected = (f) => f }) {
  const options = {
    "Please Select": null,
    "Lowest Price": "price",
    "Distance To Mac": "distanceToMac",
  };
  const [select, setSelect] = useState("Please Select");
  const handleChange = (e) => {
    setSelect(e.target.value);
    onSelected(options[e.target.value]);
  };
  return (
    <form>
      <label>
        Sort
        <br />
        <select value={select} onChange={handleChange}>
          {Object.entries(options).map((opt, i) => (
            <option key={i} value={opt[0]}>
              {opt[0]}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
