import styled from "styled-components";
import { ReactComponent as IconArrowDown } from "assets/icons/icon_arrow_down.svg";

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  border: 3px solid #303033;
  border-radius: 4px;
  padding: 4px 10px;
  background-color: transparent;
  color: #7d50f9;

  &:hover {
    border: 3px solid #7d50f9;
    stroke: 2px 2px #fff;
  }
`;

export const SetaBaixo = styled(IconArrowDown)`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #fff;
  }
`;
