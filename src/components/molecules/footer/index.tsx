import React from "react";
import { ContainerFooter } from "./styles";
import { TextMain } from "components/atoms/texts/styles";

const Footer = () => {
  return (
    <ContainerFooter>
      <TextMain>©2022</TextMain>
      <div
        style={{
          borderRadius: "50%",
          width: "4px",
          height: "4px",
          background: "#C7C7C7",
          marginBottom: "none",
        }}
      ></div>
      <TextMain>Gustavo Castanho Duarte</TextMain>
    </ContainerFooter>
  );
};

export default Footer;
