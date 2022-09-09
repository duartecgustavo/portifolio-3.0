import React from "react";
import { IconBackToTop, Container } from "./styles";

export const BackToTop = () => {
  return (
    <>
      <Container>
        <a href="#link-top">
          <IconBackToTop />
        </a>
      </Container>
    </>
  );
};

export default BackToTop;
