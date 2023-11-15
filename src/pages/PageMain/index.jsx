import React, { useEffect, useMemo, useState } from "react";
import { Wrapper } from "./styles";
import { Sidebar } from "./ui/Sidebar";
import { Content } from "./ui/Content";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

export const PagaMain = () => {
  const [searchValue, setSearchValue] = useState(undefined);
  const [userId, setUserId] = useState("");

  function getSearchParams(inputStr) {
    if (inputStr?.length === 0) return;

    let elements = inputStr?.split(",");
    let outputStr = "";

    elements?.forEach((element) => {
      if (!isNaN(element)) {
        outputStr += `&id=${element}`;
      } else {
        outputStr += `&username=${element}`;
      }
    });

    return outputStr;
  }

  const searchParams = useMemo(
    () => getSearchParams(searchValue),
    [searchValue]
  );

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["users", searchParams],
      ({ pageParam = 1 }) =>
        axios.get(
          `https://jsonplaceholder.typicode.com/users?_page=${pageParam}&_limit=5${searchParams}`
        ),
      {
        getNextPageParam: (lastPage, pages) => pages.length + 1,
        enabled: searchValue !== undefined,
      }
    );

  return (
    <Wrapper>
      <Sidebar
        data={data}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        userId={userId}
        setUserId={setUserId}
      />
      <Content userId={userId} />
    </Wrapper>
  );
};
