import React from "react";
import { Avatar, Card, Container, Subtitle, Title } from "./styles";
import logo from "../../../../../../assest/images/pic.png";

export const UserCard = ({ name, email, phone, about, isActive, ...props }) => {
  return (
    <Card {...props}>
      <Avatar>
        <img src={logo} alt="userpic" />
      </Avatar>
      <Container isActive={isActive}>
        <Title>{name}</Title>
        <Subtitle>{email}</Subtitle>
      </Container>
    </Card>
  );
};
