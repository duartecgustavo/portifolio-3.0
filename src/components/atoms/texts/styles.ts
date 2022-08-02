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
  width: ${(props: any) => (props.width ? props.width : "default")};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : "300")};
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "16px")};
  line-height: ${(props: any) =>
    props.lineHeight ? props.lineHeight : "normal"};

  color: ${(props: any) => (props.color ? props.color : "#7D50F9")};
  background: none;
  border: none;

  position: relative;
  &.hover:hover {
    color: #9772fe;
  }
`;

export const TextMain = styled.p<ITextProps>`
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : "300")};
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : "16px")};
  line-height: ${(props: any) =>
    props.lineHeight ? props.lineHeight : "normal"};
  text-align: justify;

  display: flex;
  color: ${(props: any) => (props.color ? props.color : "#C7C7C7")};
  background: none;
`;
