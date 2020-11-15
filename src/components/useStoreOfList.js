import React, { useState } from "react";
import { useData } from "../data/dataProvider";

// [
//   {
//     "coca cola large": 2,
//     "baking potato": 5,
//     strawberry: 2,
//     "lays potato chips small": 2,
//   },
// ];

export default function useStoreOfList(listId) {
  const { myLists,stores } = useData();
  const[storeList,setStoreList] = useState([])

  const comparedList = myLists.filter((list) => {
    return list["id"].toString() === listId.toString();
  })[0];


  console.log(comparedList);
  return [];
}
