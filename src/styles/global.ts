import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Background = styled.div`
  background: ${(props) => props.theme.colors.color_bg1};
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.color_bg1} 0%,
    ${(props) => props.theme.colors.color_bg2} 82%
  );
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

interface IProps {
  width?: string;
}

export default createGlobalStyle<IProps>`
  *{
    margin: 0;
    padding: 0;
    boxSizing: border-box;
  }

    body::-webkit-scrollbar {
    background-color: #000000;
    width: ${(props) => (props.width ? props.width : "8px")};
  }

  body::-webkit-scrollbar-thumb {
    background-color: #818181;
    border-radius: 5px;
  }

  body::-webkit-scrollbar-track {
    border-radius: 5px;
  }
`;
