import styled from "styled-components";
import { ReactComponent as IconClose } from "assets/icons/icon_close.svg";

interface IDrawer {
  right?: string;
}

export const DrawerContainer = styled.div<IDrawer>`
  position: fixed;
  top: 0px;
  right: ${(props) => (props.right ? props.right : "-100%")};
  z-index: 25;

  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: right 0.5s;

  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.color_bg2};
    width: "0px" !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.color_bg1};
  }
`;

export const HeaderDrawer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 30px 0px;

  & button {
    display: flex;
    align-items: center;
    gap: 0.3em;
    color: ${(props) => props.theme.colors.gray};
    background-color: transparent;
    border: none;
    font-size: 28px;
    font-weight: 300;
    &:hover {
      color: ${(props) => props.theme.colors.purple};
      stroke: 2px 2px ${(props) => props.theme.colors.purple};
    }
    &:hover > #lala {
      color: ${(props) => props.theme.colors.purple};
      stroke: 2px 2px ${(props) => props.theme.colors.purple};
    }
  }
`;
export const Close = styled(IconClose)`
  width: 28px;
  height: 28px;
  color: ${(props) => props.theme.colors.black};
  /* &:hover {
    color: ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.purple};
  } */
`;
