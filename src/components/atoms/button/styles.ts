import styled from "styled-components";
import { ReactComponent as IconArrowDown } from "assets/icons/icon_arrow_down.svg";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  border: 3px solid ${colors.dm_black};
  border-radius: 4px;
  padding: 4px 10px;
  background-color: transparent;
  color: ${colors.dm_purple};

  &:hover {
    border: 3px solid ${colors.dm_purple};
    stroke: 2px 2px ${colors.dm_white};
  }
`;

export const SetaBaixo = styled(IconArrowDown)`
  width: 20px;
  height: 20px;
  margin-left: 4px;
  color: ${colors.dm_black};
  &:hover {
    color: ${colors.dm_purple};

    stroke: 2px 2px ${colors.dm_white};
  }
`;
