import styled from "styled-components";
import { ReactComponent as IconChangeLanguage } from "assets/icons/icon_change_language.svg";
import { ReactComponent as IconDarkMode } from "assets/icons/icon_dark_mode.svg";

export const BackContainer = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  left: 0px;
  z-index: 15;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 8px;
  position: fixed;
  top: 0px;
  z-index: 20;

  height: 80px;

  left: 0;
  right: 0;
`;

export const ChangeLanguage = styled(IconChangeLanguage)`
  width: 28px;
  height: 28px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #fff;
  }
`;

export const DarkMode = styled(IconDarkMode)`
  width: 30px;
  height: 30px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #fff;
  }
`;
