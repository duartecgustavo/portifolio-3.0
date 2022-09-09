import styled from "styled-components";
import { ReactComponent as IconArrowDown } from "assets/icons/icon_arrow_down.svg";

export const BoxButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  border: 3px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  padding: 4px 10px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.purple};
  text-decoration: none;

  &:hover {
    border: 3px solid ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.white};
  }
`;

export const SetaBaixo = styled(IconArrowDown)`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.purple};

    stroke: 2px 2px ${(props) => props.theme.colors.white};
  }
`;
