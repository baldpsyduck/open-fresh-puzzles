import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

export const LevelContainer = styled.div`
  margin: 2rem auto;
  width: 30rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const LevelTitle = ({ text }: { text?: string }) => {
  return <LevelTitleContainer>{text}</LevelTitleContainer>;
};

export const LevelText = ({ text }: { text?: string }) => {
  return <LevelTextContainer>{text}</LevelTextContainer>;
};

export const LevelHint = ({ text }: { text?: string }) => {
  return <LevelTextContainer>提示：{text}</LevelTextContainer>;
};

export const LevelButton = (
  props: {
    text?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <button {...props}>{props.text}</button>;
};

const LevelTitleContainer = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2em;
`;

const LevelTextContainer = styled.span`
  font-size: 1.2em;
`;
