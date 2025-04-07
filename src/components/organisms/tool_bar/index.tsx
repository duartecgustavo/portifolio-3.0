import React from "react";
import { Container, BackContainer } from "./styles";
import { ChangeLanguage, DarkMode } from "./styles";
import Button from "../../atoms/button/index";
import CvPdf from "../../../files/curriculo_gustavo_duarte_dev_full_stack .pdf";
import { useDrawer } from "../../../hooks/store/useDrawer";

interface IChangeTheme {
  changeTheme(): void;
  theme: any;
}

const ToolBar = ({ changeTheme, theme }: IChangeTheme) => {
  window.addEventListener("scroll", () => {
    const header: any = document.querySelector(".header-top");
    header.classList.toggle("scroll-active", window.scrollY > 90);
  });
  const { open, setOpen } = useDrawer();

  return (
    <>
      <BackContainer className="header-top" id="link-top" />
      <div style={{ height: "80px" }}></div>
      <Container className="container d-flex justify-content-center">
        <div className="col-10 d-flex justify-content-between">
          <div className="d-flex gap-2">
            <a
              href={CvPdf}
              download="CV_Gustavo_Castanho_Duarte"
              style={{ textDecoration: "none" }}
            >
              <Button text="CURRICULO" />
            </a>
            <Button text="SOBRE" onClick={() => setOpen(!open)} />
          </div>

          <div className="d-flex gap-2">
            <button
              className="bg-transparent"
              onClick={changeTheme}
              style={{ border: "none" }}
            >
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
