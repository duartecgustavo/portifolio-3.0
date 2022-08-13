import BoxLink from "components/molecules/box_link/index";
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
  TextImageDark,
  TextImageWhite,
} from "./styles";
import CvPdf from "../../../files/CV_Gustavo_Castanho_Duarte.pdf";

const Profile = () => {
  return (
    <>
      <div className="row justify-content-between mt-5">
        <ContainerPicture className="col-12 col-lg-5">
          <ImageMe />
          <TextImageWhite>
            DEV.
            <br />
            WEB
            <br />
            FRONTEND
          </TextImageWhite>
        </ContainerPicture>
        <ContainerInfos className="col-12 col-lg-6">
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <HorizontalDivisor />
              <TextPurple
                fontWeight="bold"
                fontSize="22px !important"
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
              <TextMain fontSize="20px" className="mt-3 mb-4" lineHeight="30px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                delectus nihil! Ipsam nemo ipsa molestias ad ducimus illum.
                Perspiciatis iusto beatae vitae nobis quibusdam eveniet
                necessitatibus officiis id maxime minima!
              </TextMain>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <a
                href={CvPdf}
                download="CV_Gustavo_Castanho_Duarte"
                className="bg-transparent"
                style={{ border: "none", cursor: "pointer" }}
              >
                <Download />
              </a>
              <div className="d-flex gap-2">
                <BoxLink
                  icon={<Email />}
                  path="mailto:duartecgustavo@outlook.com"
                />
                <BoxLink
                  icon={<Github />}
                  path="https://github.com/duartecgustavo"
                />
                <BoxLink
                  icon={<Linkedin />}
                  path="https://www.linkedin.com/in/gustavo-castanho-duarte-578127160/"
                />
              </div>
            </div>
          </div>
        </ContainerInfos>
      </div>
    </>
  );
};
export default Profile;
