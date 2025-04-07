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
import CvPdf from "../../../files/curriculo_gustavo_duarte_dev_full_stack .pdf";

const Profile = () => {
  return (
    <>
      <div className="row justify-content-between mt-5">
        <ContainerPicture className="col-12 col-lg-5">
          <ImageMe />
          <TextImageWhite>
            Dev.
            <br />
            Full
            <br />
            Stack
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
                Hey, sou o Gustavo Duarte
              </TextPurple>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-end">
              <TextMain fontSize="20px" lineHeight="30px">
                Full Stack Developer
              </TextMain>
            </div>
            <div>
              <TextMain fontSize="20px" className="mt-3 mb-4" lineHeight="30px">
                Desenvolvedor de Software Pleno com 4 anos de experiência, atuei
                em grandes projetos nas áreas da saúde e financeira. Colaborando
                em equipes multidisciplinares na entrega de sistemas robustos e
                alinhados às necessidades do negócio.
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
