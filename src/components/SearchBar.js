import React, { useState } from "react";
// import { useData } from "../data/dataProvider";

export default function SearchBar({ items, onSearch = (f) => f }) {
  // const { items } = useData();
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
    if (e !== undefined) {
      let newList = [];
      setInput(e.target.value);
      newList = items.filter((item) =>
        item.keyWords.includes(input.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay([]);
    }
  };

  return (
    <div className="input-box">
      <form onSubmit={onClearInput} className="form-inline">
        <input
          type="search"
          value={input}
          onChange={onChangeInput}
          className="form-control mr-sm-2"
        />

        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Clear
        </button>
      </form>
      {filterDisplay.map((key, i) => {
        return (
          <div className="search-output">
            <ul key={i} className="list-group">
              <li
                className="list-group-item list-group-item-action"
                onClick={(e) => onClickItem(e, key)}
              >
                {key.name}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
