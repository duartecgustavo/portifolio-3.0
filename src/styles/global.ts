import styled from "styled-components";

export const Background = styled.div`
  background: rgb(16, 12, 34);
  background: radial-gradient(
    circle,
    rgba(16, 12, 34, 1) 0%,
    rgba(0, 0, 0, 1) 82%
  );
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;
