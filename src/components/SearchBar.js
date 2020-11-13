import React, { useState } from "react";
import { useData } from "../data/dataProvider";

export default function SearchBar({ onSearch = (f) => f }) {
  const { items } = useData();
  const [input, setInput] = useState("");

  const [filterDisplay, setFilterDisplay] = useState([]);

  const onClickItem = (e, key) => {
    setInput(e.target.innerText);
    onSearch(key);
    setFilterDisplay([]);
  };

  const onClearInput = (e) => {
    e.preventDefault();
    setInput("");
    setFilterDisplay([]);
    onSearch();
  };

  const onChangeInput = (e) => {
    if (e !== "") {
      let newList = [];
      setInput(e);
      newList = items.filter((item) =>
        item.keyWords.includes(input.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay([]);
    }
  };
  return (
    <div>
      <strong>Search </strong>
      <form onSubmit={onClearInput}>
        <input value={input} onChange={(e) => onChangeInput(e.target.value)} />
        <button type="submit">Clear</button>
      </form>
      {filterDisplay.map((key, i) => {
        return (
          <div key={i}>
            <strong onClick={(e) => onClickItem(e, key)}>{key.name}</strong>
          </div>
        );
      })}
    </div>
  );
}
