import React, { createContext, useState, useContext } from "react";
import itemsRawData from "./items.json";
import storesRawData from "./stores.json";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const clearLocalStorage = (key) => key && localStorage.removeItem(key);

export function DataProvider({ children }) {
  const [myLists, setMyLists] = useState(loadJSON("myLists") || []);
  const [items] = useState(itemsRawData);
  const [stores] = useState(storesRawData);

  const [listId, setListId] = useState(loadJSON("listId") || 0);
  const bumpListId = () => {
    setListId(listId + 1);
    saveJSON("listId", listId + 1);
  };
  const zeroListId = () => {
    setListId(0);
    saveJSON("listId", 0);
  };

  const getItemsByKeyWord = (word) =>
    items.filter((item) => item.keyWords.includes(word));

  const getStoresByName = (name) =>
    stores.filter((store) => store.brand.includes(name));

  const addNewList = (list) => {
    const date = new Date();
    setMyLists([...myLists, { list, id: listId, time: date.toGMTString() }]);
    saveJSON("myLists", [
      ...myLists,
      { list, id: listId, time: date.toGMTString() },
    ]);
    bumpListId();
  };

  const clearMyLists = () => {
    setMyLists([]);
    clearLocalStorage("myLists");
    zeroListId();
  };

  return (
    <DataContext.Provider
      value={{
        items,
        getItemsByKeyWord,
        stores,
        getStoresByName,
        myLists,
        addNewList,
        clearMyLists,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
