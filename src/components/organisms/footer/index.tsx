import React from "react";
import { ContainerFooter, Beam } from "./styles";
import { TextMain } from "components/atoms/texts/styles";
import { Pallete } from "styles/colors/colors";
const colors = Pallete();

const Footer = () => {
  return (
    <ContainerFooter>
      <TextMain>©2022</TextMain>
      <Beam></Beam>
      <TextMain>Gustavo Castanho Duarte</TextMain>
    </ContainerFooter>
  );
};

export default Footer;
