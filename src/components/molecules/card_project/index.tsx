import React from "react";
import { BoxProject } from "./styles";

interface ICarProject {
  bpg: any;
  height: string;
}

const CardProject = ({ bpg, height }: ICarProject) => {
  return (
    <>
      <BoxProject height={height} id="container">
        <div className="item-zoom">
          <div className="item-efeito" />
          <img src={bpg} />
        </div>
      </BoxProject>
    </>
  );
};

export default CardProject;
