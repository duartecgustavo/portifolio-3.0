import styled from "styled-components";

interface ITitle {
  align?: string;
}

export const Title = styled.h3<ITitle>`
  font-size: 5vmin;
  color: #939393;
  font-weight: 300;
  line-height: 30px;
  font-weight: 500;
  text-align: ${(props) => (props.align ? props.align : "center")};
  &.purpleText {
    color: #7d50f9;
    font-weight: 300;
    font-size: 3.5vmin;
  }
`;
