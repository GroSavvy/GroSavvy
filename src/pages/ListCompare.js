import React from "react";
import { useParams } from "react-router-dom";
import useStoreOfList from "../components/useStoreOfList";


export default function ListCompare() {
  let { id } = useParams();
  const stores = useStoreOfList(id);

  return (
    <div>
      {stores.map((store) => {
        return <p>{JSON.stringify(store)}</p>;
      })}
    </div>
  );
}
