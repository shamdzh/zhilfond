import React from "react";
import { Container, SidebarTitle, StyledInput } from "./styles";
import { Results } from "./Results";

export const Sidebar = ({
  data,
  searchValue,
  setSearchValue,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  userId,
  setUserId,
}) => {
  return (
    <Container>
      <SidebarTitle>Поиск сотрудников</SidebarTitle>
      <StyledInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите id или имя сотрудника"
      />

      {!!data?.pages.length && (
        <Results
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          data={data}
          userId={userId}
          setUserId={setUserId}
        />
      )}
    </Container>
  );
};
