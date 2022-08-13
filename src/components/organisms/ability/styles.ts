import styled from "styled-components";
import { ReactComponent as exclamation } from "../../../assets/icons/icon_exclamation.svg";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBoxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;

export const TitleAbility = styled.h3`
  display: flex;
  color: ${colors.dm_purple};
  font-weight: 300;
  justify-content: flex-start;
`;

export const LineAbility = styled.div`
  height: 5px;
  width: 100%;
  background: ${colors.dm_purple};
  display: block;
  margin-top: 5px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;
export const IconExclamation = styled(exclamation)`
  width: 24px;
  height: 24px;
`;
