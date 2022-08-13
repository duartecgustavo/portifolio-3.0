import React from "react";
import { ContainerFooter } from "./styles";
import { TextMain } from "components/atoms/texts/styles";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

const Footer = () => {
  return (
    <ContainerFooter>
      <TextMain>©2022</TextMain>
      <div
        style={{
          borderRadius: "50%",
          width: "4px",
          height: "4px",
          background: colors.dm_gray,
          marginBottom: "none",
        }}
      ></div>
      <TextMain>Gustavo Castanho Duarte</TextMain>
    </ContainerFooter>
  );
};

export default Footer;
