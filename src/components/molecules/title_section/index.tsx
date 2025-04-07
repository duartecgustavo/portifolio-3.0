import React from "react";
import { Container, Text } from "./styles";

interface ITitleSection {
  title: string;
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
  fontSize?: string;
}

export const TitleSection = ({
  title,
  marginTop,
  marginBottom,
  padding,
  fontSize,
}: ITitleSection) => {
  return (
    <>
      <Container
        className="col-12 col-lg-12"
        marginTop={marginTop}
        marginBottom={marginBottom}
        padding={padding}
      >
        <Text fontSize={fontSize}>{title}</Text>
      </Container>
    </>
  );
};
