import React from "react";
import { BoxButton, SetaBaixo } from "./styles";

interface IButton {
  text?: string;
  onClick?: any;
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <>
      {text == "CURRICULO" ? (
        <BoxButton onClick={onClick}>
          {text}
          <SetaBaixo />
        </BoxButton>
      ) : (
        <BoxButton onClick={onClick}>{text}</BoxButton>
      )}
    </>
  );
};

export default Button;
