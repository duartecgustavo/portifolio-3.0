import styled from "styled-components";

interface IBoxProject {
  height: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const BoxProject = styled.div<IBoxProject>`
  height: ${(props) => props.height};
  cursor: pointer;

  display: flex;
  overflow: hidden;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 20px 0px;
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};

  background-color: transparent;
`;
