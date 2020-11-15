import React from "react";
import { useParams } from "react-router-dom";
import useStoreOfList from "../components/useStoreOfList";

export default function ListCompare() {
  let { id } = useParams();
  const stores = useStoreOfList(id);

  return <p>{id}</p>;
}
