import React from "react";
import { IconBackToTop, Container } from "./styles";

interface IBackToTop {
  linkPage?: string;
}

export const BackToTop = ({ linkPage = "#link-top" }: IBackToTop) => {
  return (
    <>
      <Container>
        <a href={linkPage}>
          <IconBackToTop />
        </a>
      </Container>
    </>
  );
};

export default BackToTop;
