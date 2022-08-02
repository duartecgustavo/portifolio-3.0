import styled from "styled-components";
import me from "../../../assets/Me.png";
import { ReactComponent as IconGithub } from "assets/icons/icon_github.svg";
import { ReactComponent as IconLinkedin } from "assets/icons/icon_linkedin.svg";
import { ReactComponent as IconEmail } from "assets/icons/icon_email.svg";
import { ReactComponent as IconDownload } from "assets/icons/icon_download.svg";

export const ContainerPicture = styled.div`
  position: relative;
`;
export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
`;

export const TextImage = styled.h1`
  position: absolute;
  bottom: -30px;
  right: -30px;

  font-size: 60px;
  font-weight: bold;
  text-align: end;
  color: #c7c7c7;
  text-shadow: 2px 2px 2px #7d50f9;
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
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #fff;
  }
`;

export const Linkedin = styled(IconLinkedin)`
  width: 30px;
  height: 30px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #fff;
  }
`;
export const Email = styled(IconEmail)`
  width: 30px;
  height: 30px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #7d50f9;
  }
`;
export const Download = styled(IconDownload)`
  width: 30px;
  height: 30px;
  color: #303033;
  &:hover {
    color: #7d50f9;
    stroke: 2px 2px #7d50f9;
  }
`;
