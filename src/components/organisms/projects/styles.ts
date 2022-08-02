import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;

export const ContainerEachProject = styled.div``;
export const TextBox = styled.h3`
  font-weight: 300;
  transition: font-weight 0.5s;
`;
export const SubText = styled.h4`
  font-weight: 300;
`;

export const GlassEffect = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.1);

  transition: background-color 0.3s, backdrop-filter 0.3s;
`;

interface IBoxProject {
  height: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const BoxProject = styled.div<IBoxProject>`
  height: ${(props: any) => props.height};
  cursor: pointer;

  display: flex;
  overflow: hidden;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  padding-left: ${(props: any) => props.paddingLeft};
  padding-right: ${(props: any) => props.paddingRight};

  background-color: transparent;
`;
