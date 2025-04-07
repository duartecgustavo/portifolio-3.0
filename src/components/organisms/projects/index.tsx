import React from "react";
import { ContainerProjects, ContainerEachProject } from "./styles";
import CardProject from "components/molecules/card_project/index";
import eduimpulso from "../../../assets/bgProjects/eduimpulso.svg";
import guiaobstetrico from "../../../assets/bgProjects/guiaobstetrico.svg";
import rapunzelsolidaria from "../../../assets/bgProjects/rapunzelsolidaria.svg";
import natureai from "../../../assets/bgProjects/natureai.svg";
import hq from "../../../assets/bgProjects/hq.png";
import bgp2 from "../../../assets/bgProjects/bgp2.gif";
import bgp3 from "../../../assets/bgProjects/bgp3.gif";
import bgp4 from "../../../assets/bgProjects/bgp4.gif";
import bgp5 from "../../../assets/bgProjects/bgp5.gif";
import bgp6 from "../../../assets/bgProjects/bgp6.gif";
import { TitleSection } from "components/molecules/title_section";

const Projects = () => {
  return (
    <>
      <TitleSection title="Projetos" />
      <ContainerProjects className="col-12 col-lg-12">
        <div className="row">
          <ContainerEachProject className="col-12 col-lg-6">
            <CardProject
              height="350px"
              isDefault={false}
              icon={guiaobstetrico}
              name="GUIA OBSTETRICO"
              background="#1774DE"
            />
            <CardProject
              height="300px"
              isDefault={false}
              icon={eduimpulso}
              name="EDUIMPULSO"
              background="#8B1CDA"
            />
            <CardProject
              height="350px"
              isDefault={false}
              icon={hq}
              name="WEBFORUS"
              background="#FCE404"
            />
          </ContainerEachProject>
          <ContainerEachProject className="col-12 col-lg-6">
            <CardProject
              height="300px"
              isDefault={false}
              icon={rapunzelsolidaria}
              name="RAPUNZEL SOLIDÁRIA"
              background="#A73AA7"
            />
            <CardProject
              height="400px"
              isDefault={false}
              icon={natureai}
              name="NATURE AI"
              background="#ADFFB0"
            />
            <CardProject height="300px" bpg={bgp6} />
          </ContainerEachProject>
        </div>
      </ContainerProjects>
    </>
  );
};

export default Projects;
