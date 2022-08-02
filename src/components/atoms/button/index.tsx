import React from "react";
import { ContainerButton, SetaBaixo } from "./styles";

interface IButton {
  text?: string;
}

const Button = ({ text }: IButton) => {
  return (
    <>
      {text == "CURRICULO" ? (
        <ContainerButton>
          {text}
          <SetaBaixo />
        </ContainerButton>
      ) : (
        <ContainerButton>{text}</ContainerButton>
      )}
    </>
  );
};

export default Button;
