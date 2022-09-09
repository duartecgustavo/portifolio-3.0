import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  gap: 4px;
  background: ${(props) => props.theme.colors.footer};
`;

export const Beam = styled.div`
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: ${(props) => props.theme.colors.gray};
  margin-bottom: "none";
`;
