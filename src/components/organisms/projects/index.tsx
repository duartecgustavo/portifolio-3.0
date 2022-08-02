import React from "react";
import { ContainerProjects, ContainerEachProject, BoxProject } from "./styles";
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
            <BoxProject height="350px" id="container">
              <div className="item-zoom">
                <div className="item-bluur" />
                <img src={bgp1} />
              </div>
            </BoxProject>
            <BoxProject height="300px">
              <div className="item-zoom">
                <div className="item-bluur" />

                <img src={bgp2} />
              </div>
            </BoxProject>
            <BoxProject height="350px">
              <div className="item-zoom">
                <div className="item-bluur" />

                <img src={bgp3} />
              </div>
            </BoxProject>
          </ContainerEachProject>
          <ContainerEachProject className="col-12 col-lg-6">
            <BoxProject height="300px">
              <div className="item-zoom">
                <div className="item-bluur" />

                <img src={bgp4} />
              </div>
            </BoxProject>
            <BoxProject height="400px">
              <div className="item-zoom">
                <div className="item-bluur" />

                <img src={bgp5} />
              </div>
            </BoxProject>
            <BoxProject height="300px">
              <div className="item-zoom">
                <div className="item-bluur" />

                <img src={bgp6} />
              </div>
            </BoxProject>
          </ContainerEachProject>
        </div>
      </ContainerProjects>
    </>
  );
};

export default Projects;
