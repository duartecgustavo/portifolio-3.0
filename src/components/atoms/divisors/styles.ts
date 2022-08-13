import styled from "styled-components";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

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
  background: ${colors.dm_purple};
`;

export const HorizontalDivisor = styled.div<IDivisoeProps>`
  background: ${(props) =>
    props.background ? props.background : colors.dm_purple};
  height: 6px;
  width: 20%;
  border-radius: 4px;
`;
