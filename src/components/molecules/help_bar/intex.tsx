import React from "react";
import { Container, BackContainer } from "./styles";
import { ChangeLanguage, DarkMode } from "./styles";
import Button from "../../atoms/button/index";

const HelpBar = () => {
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
          {/* <BotaoSobre color="#7D50F9" fontSize="22px" className="mb-0 hover">
            SOBRE
          </BotaoSobre> */}
          <div className="d-flex gap-2">
            <Button text="CURRICULO" />
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

export default HelpBar;
