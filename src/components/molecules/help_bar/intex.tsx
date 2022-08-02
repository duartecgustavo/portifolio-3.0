import React from "react";
import { Container } from "./styles";
import { ChangeLanguage, DarkMode } from "./styles";
import Button from "../../atoms/button/index";

const HelpBar = () => {
  return (
    <>
      <div
        style={{
          height: "70px",
          width: "100%",
          left: "0px",
        }}
      ></div>
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
