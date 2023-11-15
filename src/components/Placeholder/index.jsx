import React from "react";
import { Text } from "./styles";

const Placeholder = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Выберите сотрудника, чтобы посмотреть его профиль</Text>
    </div>
  );
};

export default Placeholder;
