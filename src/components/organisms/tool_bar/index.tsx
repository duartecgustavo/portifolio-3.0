import React from "react";
import { Container, BackContainer } from "./styles";
import { ChangeLanguage, DarkMode } from "./styles";
import Button from "../../atoms/button/index";
import CvPdf from "../../../files/CV_Gustavo_Castanho_Duarte.pdf";

const ToolBar = () => {
  window.addEventListener("scroll", () => {
    const header: any = document.querySelector(".header-top");
    header.classList.toggle("scroll-active", window.scrollY > 90);
  });
  return (
    <>
      <BackContainer className="header-top" />
      <div style={{ height: "80px" }}></div>
      <Container className="container d-flex justify-content-center">
        <div className="col-10 d-flex justify-content-between">
          <div className="d-flex gap-2">
            <a href={CvPdf} download="CV_Gustavo_Castanho_Duarte">
              <Button text="CURRICULO" />
            </a>
            <Button text="SOBRE" />
          </div>

          <div className="d-flex gap-2">
            <button className="bg-transparent" style={{ border: "none" }}>
              <DarkMode />
            </button>
            <button className="bg-transparent" style={{ border: "none" }}>
              <ChangeLanguage />
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ToolBar;
