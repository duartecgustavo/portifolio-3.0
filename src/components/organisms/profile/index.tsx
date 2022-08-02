import Button from "../../atoms/button/index";
import { HorizontalDivisor } from "../../atoms/divisors/styles";
import { TextMain, TextPurple } from "../../atoms/texts/styles";
import {
  ContainerInfos,
  ContainerPicture,
  Email,
  Github,
  ImageMe,
  Linkedin,
  Download,
  TextImage,
} from "./styles";

const Profile = () => {
  return (
    <>
      <div className=" d-flex justify-content-between mt-5">
        <div className="row">
          <ContainerPicture className="col-10 col-lg-6">
            <ImageMe />
            <TextImage>
              DEV.
              <br />
              WEB
              <br />
              FRONTEND
            </TextImage>
          </ContainerPicture>
          <ContainerInfos className="col-12 col-lg-6">
            <div>
              <div className="d-flex gap-2 align-items-center justify-content-between">
                <HorizontalDivisor />
                <TextPurple
                  fontWeight="bold"
                  fontSize="24px !important"
                  lineHeight="30px"
                  width="80%"
                  className="d-flex justify-content-end fs-3"
                >
                  Hey, sou o Gustavo Castanho
                </TextPurple>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-end">
                <TextMain fontSize="20px" lineHeight="30px">
                  Frontend Developer
                </TextMain>
              </div>
              <div>
                <TextMain
                  fontSize="20px"
                  className="mt-3 mb-4"
                  lineHeight="30px"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Velit, delectus nihil! Ipsam nemo ipsa molestias ad ducimus
                  illum. Perspiciatis iusto beatae vitae nobis quibusdam eveniet
                  necessitatibus officiis id maxime minima!
                </TextMain>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button className="bg-transparent" style={{ border: "none" }}>
                  <Download />
                </button>
                <div className="d-flex gap-2">
                  <button className="bg-transparent" style={{ border: "none" }}>
                    <Email />
                  </button>
                  <button className="bg-transparent" style={{ border: "none" }}>
                    <Github />
                  </button>
                  <button className="bg-transparent" style={{ border: "none" }}>
                    <Linkedin />
                  </button>
                </div>
              </div>
            </div>
          </ContainerInfos>
        </div>
      </div>
    </>
  );
};
export default Profile;
