import styled from "styled-components";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const Background = styled.div`
  background: ${colors.color_bg1};
  background: radial-gradient(
    circle,
    ${colors.color_bg1} 0%,
    ${colors.color_bg2} 82%
  );
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;
