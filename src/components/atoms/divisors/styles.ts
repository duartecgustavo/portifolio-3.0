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
  background: #7d50f9;
`;

export const HorizontalDivisor = styled.div<IDivisoeProps>`
  background: ${(props) => (props.background ? props.background : "#7D50F9")};
  height: 8px;
  width: 20%;
  border-radius: 4px;
`;
