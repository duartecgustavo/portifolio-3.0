import React from "react";
import { Container, Text } from "./styles";

interface ITitleSection {
  title: string;
}

export const TitleSection = ({ title }: ITitleSection) => {
  return (
    <>
      <Container className="col-12 col-lg-12">
        <Text>{title}</Text>
      </Container>
    </>
  );
};
