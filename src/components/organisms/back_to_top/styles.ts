import styled from "styled-components";
import { ReactComponent as BackToTop } from "../../../assets/back_to_top.svg";

export const IconBackToTop = styled(BackToTop)`
  width: 200px;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};

    stroke: 2px 2px ${(props) => props.theme.colors.white};
  }
`;

export const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
