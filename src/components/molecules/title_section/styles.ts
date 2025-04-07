import styled from "styled-components";

interface IContainer {
  marginTop?: string;
  marginBottom?: string;
  padding?: string;
}

export const Container = styled.div<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.gray};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "150px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "10px !important"};
  padding: ${(props) => (props.padding ? props.padding : "20px 0px")};
`;

interface IText {
  fontSize?: string;
}

export const Text = styled.p<IText>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.5rem")};
  font-weight: 300;
`;
