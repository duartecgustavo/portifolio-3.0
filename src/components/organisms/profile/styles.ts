import styled from "styled-components";
import { ReactComponent as IconDownload } from "assets/icons/icon_download.svg";
import { ReactComponent as IconEmail } from "assets/icons/icon_email.svg";
import { ReactComponent as IconGithub } from "assets/icons/icon_github.svg";
import { ReactComponent as IconLinkedin } from "assets/icons/icon_linkedin.svg";
import me from "../../../assets/Me.png";

export const ContainerPicture = styled.div`
  position: relative;
`;
export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const TextImageDark = styled.h1`
  position: absolute;
  bottom: -20px;
  right: -20px;

  font-size: 50px;
  font-weight: bold;
  text-align: end;
  color: ${(props) => props.theme.colors.gray};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.purple};
`;
export const TextImageWhite = styled.h1`
  position: absolute;
  bottom: -20px;
  right: -20px;

  font-size: 50px;
  font-weight: bold;
  text-align: end;
  color: ${(props) => props.theme.colors.purple};
  text-shadow: 2px 2px 2px ${(props) => props.theme.colors.black};
`;

export const ImageMe = styled.img.attrs({
  src: `${me}`,
})`
  width: 100%;
  border-radius: 20px;
`;

export const Github = styled(IconGithub)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.white};
  }
`;

export const Linkedin = styled(IconLinkedin)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.white};
  }
`;
export const Email = styled(IconEmail)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.purple};
  }
`;
export const Download = styled(IconDownload)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.black};
  &:hover {
    color: ${(props) => props.theme.colors.purple};
    stroke: 2px 2px ${(props) => props.theme.colors.purple};
  }
`;
