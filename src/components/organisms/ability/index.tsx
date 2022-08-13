import { TitleSection } from "components/molecules/title_section";
import BoxSkill from "../../atoms/boxSkill/index";
import {
  Container,
  ContainerBoxs,
  ContainerSkills,
  IconExclamation,
  LineAbility,
  LinkContainer,
  TitleAbility,
} from "./styles";

const Ability = () => {
  return (
    <>
      <TitleSection title="Habilidades" />
      <Container className="col-12 col-lg-12">
        <ContainerSkills className="col-12 col-lg-12">
          <TitleAbility>Front-end</TitleAbility>
          <LinkContainer>
            <IconExclamation />
          </LinkContainer>
        </ContainerSkills>
        <LineAbility />
        {/*
          Colors
          c1 - #A02724
          c2 - #00FA75
          c3 - #B29D00
          c4 - #3E13EB
          c5 - #407BFF
          c6 - #00618A
          c7 - #BA68C8
          c8 - #0C4BF2
          */}
        <ContainerBoxs>
          <BoxSkill text="HTML" color="c1" />
          <BoxSkill text="CSS3" color="c2" />
          <BoxSkill text="Javascript" color="c3" />
          <BoxSkill text="Responsive design" color="c4" />
          <BoxSkill text="React" color="c5" />
          <BoxSkill text="Typescript" color="c6" />
          <BoxSkill text="Material UI" color="c7" />
          <BoxSkill text="Bootstrap" color="c5" />
          <BoxSkill text="React Native" color="c6" />
          <BoxSkill text="API RESTFULL" color="c3" />
        </ContainerBoxs>

        <ContainerSkills className="col-12 col-lg-12 mt-5">
          <TitleAbility>Outras habilidades</TitleAbility>
          <LinkContainer>
            <IconExclamation />
          </LinkContainer>
        </ContainerSkills>
        <LineAbility />
        {/*
          Colors
          c1 - #A02724
          c2 - #00FA75
          c3 - #B29D00
          c4 - #3E13EB
          c5 - #407BFF
          c6 - #00618A
          c7 - #BA68C8
          c8 - #0C4BF2
          */}
        <ContainerBoxs>
          <BoxSkill text="Figma" color="c1" subtext="prototipagem" />
          <BoxSkill text="GIT" color="c3" subtext="versionamento" />
          <BoxSkill text="SCRUM" color="c5" subtext="metodologia" />
          <BoxSkill text="AWS" color="c8" subtext="DevOps" />
          <BoxSkill text="AZURE" color="c5" subtext="DevOps" />
          <BoxSkill text="MIRO" color="c3" subtext="prototipagem" />
        </ContainerBoxs>
      </Container>
    </>
  );
};

export default Ability;
