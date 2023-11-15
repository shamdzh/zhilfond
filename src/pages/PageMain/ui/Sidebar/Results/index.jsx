import React, { useEffect } from "react";
import { Container, Placeholder, Title, UsersContainer } from "./styles";
import { UserCard } from "./UserCard";

export const Results = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  userId,
  setUserId,
}) => {
  return (
    <Container>
      <Title>Результаты</Title>

      {!!data?.pages.length ? (
        data?.pages.map((page, index) => (
          <UsersContainer key={index}>
            {page.data.map((user) => (
              <UserCard
                key={user.id}
                name={user.username}
                email={user.email}
                phone={user.phone}
                onClick={() => {
                  setUserId(user.id);
                }}
                isActive={userId === user.id}
              />
            ))}
          </UsersContainer>
        ))
      ) : (
        <Placeholder>Ничего не найдено</Placeholder>
      )}
      {hasNextPage && (
        <div
          onClick={fetchNextPage}
          disabled={isFetchingNextPage}
          style={{ cursor: "pointer" }}
        >
          <u>{isFetchingNextPage ? "Загрузка..." : "Загрузить еще"}</u>
        </div>
      )}
    </Container>
  );
};
