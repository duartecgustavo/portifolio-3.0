import styled from "styled-components";
import { ReactComponent as GoFeedbacks } from "../../../assets/GoFeedbacks.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// IMPUTS GIVE FEEDBACK START
export const InputText = styled.input`
  background: none;
  padding-left: 16px;

  color: #7e7e7e;
  border-style: none;
  border-bottom: 1px solid #7e7e7e;

  height: 45px;
  &:hover {
    border-bottom: 1px solid #7d50f9;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #7d50f9;
  }
`;
export const InputSelect = styled.select`
  background: none;
  padding-left: 16px;
  color: #7e7e7e;
  border-style: none;
  border-bottom: 1px solid #7e7e7e;

  height: 45px;
  &:hover {
    border-bottom: 1px solid #7d50f9;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #7d50f9;
  }
`;
export const InputOption = styled.option`
  background: #1e1e24;
  border: none;
  padding: 20px;
  color: #7d50f9;
  line-height: 30px;

  height: 45px;
`;
export const InputTextArea = styled.textarea`
  background: none;
  border: 0px 0px 1px 0px;
  color: #7e7e7e;
  border-style: none;
  border-bottom: 1px solid #7e7e7e;
  padding: 16px;
  resize: none;

  &:hover {
    border-bottom: 1px solid #7d50f9;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #7d50f9;
  }
`;
export const InputButton = styled.button`
  color: #7d50f9;
  border-radius: 4px;
  border: 3px solid #303033;
  margin-top: 30px;
  padding: 8px 48px;
  width: 20%;
  background: none;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: #7d50f9;
    border: 3px solid #7d50f9;
    color: #fff;
  }
`;
