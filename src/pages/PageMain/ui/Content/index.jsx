import React, { useEffect, useState } from "react";
import { Card, Container, Subtitle, Title, UserPic } from "./styles";
import logo from "../../../../assest/images/pic.png";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../../../components/Loader";
import Placeholder from "../../../../components/Placeholder";

export const Content = ({ userId }) => {
  const [userData, setUserData] = useState();

  const getUserById = async (id) => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((r) => r.data[0]);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    enabled: userId !== undefined,
  });

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return isLoading ? (
    <Loader />
  ) : userData ? (
    <Card>
      {!isError ? (
        <>
          <UserPic>
            <img src={logo} alt="userpic" />
          </UserPic>
          <Container>
            <Title>{userData.username}</Title>
            <Subtitle>
              <b>email: </b>
              {userData.email}
            </Subtitle>
            <Subtitle>
              <b>phone: </b> {userData.phone}
            </Subtitle>
            <Subtitle>
              <b>О себе: </b>{" "}
              <div style={{ paddingTop: "12px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Subtitle>
          </Container>
        </>
      ) : (
        <div>Возникла следующая ошибка {error}</div>
      )}
    </Card>
  ) : (
    <Placeholder />
  );
};
