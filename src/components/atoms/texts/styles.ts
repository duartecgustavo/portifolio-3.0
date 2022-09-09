import styled from "styled-components";

interface ITextProps {
  width?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  justify?: string;
}

export const TextPurple = styled.p<ITextProps>`
  width: ${(props) => (props.width ? props.width : "default")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};

  color: ${(props) =>
    props.color ? props.color : (props) => props.theme.colors.purple};
  background: none;
  border: none;

  position: relative;
  &.hover:hover {
    color: ${(props) => props.theme.colors.purple2};
  }
`;

export const TextMain = styled.p<ITextProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "300")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "normal")};
  text-align: justify;

  display: flex;
  color: ${(props) =>
    props.color ? props.color : (props) => props.theme.colors.gray};
  background: none;
`;
