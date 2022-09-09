import React from "react";
import { TitleSection } from "components/molecules/title_section";
import {
  Container,
  InputButton,
  InputOption,
  InputSelect,
  InputText,
  InputTextArea,
} from "./style";

const Contact = () => {
  return (
    <>
      <TitleSection title="Fale comigo" />
      <Container className="col-12 col-lg-12">
        <InputText type="text" id="id_user" placeholder="Nome*"></InputText>
        <InputText type="email" id="id_email" placeholder="E-mail*"></InputText>
        <InputSelect name="id_select" id="select">
          <InputOption selected disabled>
            Selecione*
          </InputOption>
          <InputOption value="0">Tester</InputOption>
          <InputOption value="1">Tester</InputOption>
          <InputOption value="2">Tester</InputOption>
          <InputOption value="3">Tester</InputOption>
        </InputSelect>
        <InputTextArea
          name="id_textArea"
          id="textao"
          placeholder="Mensagem*"
        ></InputTextArea>
        <div className="d-flex justify-content-center">
          <InputButton type="button">Enviar</InputButton>
        </div>
      </Container>
    </>
  );
};

export default Contact;
