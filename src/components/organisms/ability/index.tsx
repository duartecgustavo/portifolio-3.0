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
          <TitleAbility>Front end</TitleAbility>
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
        <ContainerBoxs>s
          <BoxSkill text="Typescript" color="c6" />
          <BoxSkill text="Javascript" color="c3" />
          <BoxSkill text="React" color="c5" />
          <BoxSkill text="React Native" color="c2" />
          <BoxSkill text="SingleSPA" color="c1" subtext="microfrontend" />
          <BoxSkill text="Cypress" color="c4" subtext="testes e2e" />
          <BoxSkill text="Playwright" color="c6" subtext="testes e2e" />
          <BoxSkill text="Jest" color="c2" subtext="testes unitarios" />
          <BoxSkill text="Axios" color="c5" />
          <BoxSkill text="Styled Components" color="c3" />
          <BoxSkill text="Material UI" color="c7" />
          <BoxSkill text="Figma" color="c6" subtext="prototipagem"/>
          <BoxSkill text="HTML" color="c1" />
          <BoxSkill text="CSS3" color="c2" />
          <BoxSkill text="Bootstrap" color="c5" />
          <BoxSkill text="Responsive design" color="c4" />
        </ContainerBoxs>

        <ContainerSkills className="col-12 col-lg-12 mt-5">
          <TitleAbility>Back end</TitleAbility>
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
          <BoxSkill text="NodeJS" color="c1" subtext="NodeJS" />
          <BoxSkill text="NestJS" color="c3" subtext="framework" />
          <BoxSkill text="TypeORM" color="c5" subtext="orm" />
          <BoxSkill text="sequelize" color="c7" subtext="orm" />
          <BoxSkill text="PRISMA" color="c5" subtext="orm" />
          <BoxSkill text="Express" color="c2" />
          <BoxSkill text="Jest" color="c1" subtext="testes unitarios" />
          <BoxSkill text="Express" color="c4" />
          <BoxSkill text="MySQL" color="c6"  />
          <BoxSkill text="Postgree" color="c7" />
          <BoxSkill text="MVC" color="c8" subtext="arquitetura" />
          <BoxSkill text="SOLID" color="c2" subtext="boa pratica" />
          <BoxSkill text="KAFKA" color="c1" subtext="mensageria" />
          <BoxSkill text="RabbitMQ" color="c3" subtext="mensageria" />
          <BoxSkill text="Clean Code" color="c5" subtext="boa pratica" />
          <BoxSkill text="Docker" color="c4" subtext="container" />
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
          <BoxSkill text="GIT Flow" color="c5" subtext="boa pratica" />
          <BoxSkill text="SCRUM" color="c6" subtext="metodologia" />
          <BoxSkill text="CI/CD" color="c7" subtext="devops" />
          <BoxSkill text="AWS S3" color="c8" subtext="DevOps" />
          <BoxSkill text="AWS Kubernetes" color="c8" subtext="DevOps" />
          <BoxSkill text="AWS ECS" color="c2" subtext="DevOps" />
          <BoxSkill text="AZURE" color="c1" subtext="DevOps" />
          <BoxSkill text="MIRO" color="c3" subtext="prototipagem" />
        </ContainerBoxs>
      </Container>
    </>
  );
};

export default Ability;
