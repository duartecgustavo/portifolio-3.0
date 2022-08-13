import styled from "styled-components";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const ContainerSkill = styled.div`
  padding: 10px 15px;
  border: 1.2px solid ${(props) => props.color};
`;
export const TextSkill = styled.p`
  color: ${(props) => props.color};
  line-height: 12px;
  font-weight: 300;
`;
export const SubTextSkill = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${colors.dm_default};
`;
