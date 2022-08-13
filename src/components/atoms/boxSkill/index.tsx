import React from "react";
import { Pallete } from "components/utils/colors/colors";
import { ContainerSkill, TextSkill, SubTextSkill } from "./styles";
const colors = Pallete();

interface IPropsBoxSkill {
  text: string;
  subtext?: string;
  color: "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7" | "c8";
}

const BoxSkill = ({ text, subtext, color }: IPropsBoxSkill) => {
  let colored;
  switch (color) {
    case "c1":
      colored = colors.h_red;
      break;
    case "c2":
      colored = colors.h_green;
      break;
    case "c3":
      colored = colors.h_yellow;
      break;
    case "c4":
      colored = colors.h_blue1;
      break;
    case "c5":
      colored = colors.h_blue2;
      break;
    case "c6":
      colored = colors.h_blue4;
      break;
    case "c7":
      colored = colors.h_pink;
      break;
    case "c8":
      colored = colors.h_blue3;
      break;
    default:
      colored = "green;";
  }

  return (
    <>
      <ContainerSkill color={colored}>
        <TextSkill color={colored}>{text}</TextSkill>
        {subtext == undefined ? "" : <SubTextSkill>{subtext}</SubTextSkill>}
      </ContainerSkill>
    </>
  );
};

export default BoxSkill;
