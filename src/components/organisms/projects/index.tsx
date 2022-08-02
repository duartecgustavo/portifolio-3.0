import React from "react";
import { ContainerProjects, ContainerEachProject } from "./styles";
import CardProject from "components/molecules/card_project/index";
import bgp1 from "../../../assets/bgProjects/bgp1.gif";
import bgp2 from "../../../assets/bgProjects/bgp2.gif";
import bgp3 from "../../../assets/bgProjects/bgp3.gif";
import bgp4 from "../../../assets/bgProjects/bgp4.gif";
import bgp5 from "../../../assets/bgProjects/bgp5.gif";
import bgp6 from "../../../assets/bgProjects/bgp6.gif";

const Projects = () => {
  return (
    <>
      <ContainerProjects className="col-12 col-lg-12">
        <div className="row">
          <ContainerEachProject className="col-12 col-lg-6">
            <CardProject height="350px" bpg={bgp1} />
            <CardProject height="300px" bpg={bgp2} />
            <CardProject height="350px" bpg={bgp3} />
          </ContainerEachProject>
          <ContainerEachProject className="col-12 col-lg-6">
            <CardProject height="300px" bpg={bgp4} />
            <CardProject height="400px" bpg={bgp5} />
            <CardProject height="300px" bpg={bgp6} />
          </ContainerEachProject>
        </div>
      </ContainerProjects>
    </>
  );
};

export default Projects;
