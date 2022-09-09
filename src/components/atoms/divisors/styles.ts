import styled from "styled-components";

interface IDivisoeProps {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
}

export const VerticalDivisor = styled.div<IDivisoeProps>`
  height: 35px;
  width: 2px;
  background: ${(props) => props.theme.colors.purple};
`;

export const HorizontalDivisor = styled.div<IDivisoeProps>`
  background: ${(props) =>
    props.background ? props.background : (props) => props.theme.colors.purple};
  height: 6px;
  width: 20%;
  border-radius: 4px;
`;
