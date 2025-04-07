import styled from "styled-components";

export const ContainerSkill = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
  color: ${(props) => props.theme.colors.default};
`;
