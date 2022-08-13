import styled from "styled-components";
import { Pallete } from "components/utils/colors/colors";
const colors = Pallete();

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.dm_gray};
  margin-top: 150px;
  padding: 20px 0px;
`;

export const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
`;
