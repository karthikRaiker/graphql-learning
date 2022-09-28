import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_BOOKS } from "../graphql/Queries";

function BookList() {
  const { error, loading, data } = useQuery(LOAD_BOOKS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>BookList</div>;
}

export default BookList;
