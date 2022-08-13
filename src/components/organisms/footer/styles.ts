import styled from "styled-components";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;

  gap: 4px;
  background: ${colors.dm_footer};
`;
