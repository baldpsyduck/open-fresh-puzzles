import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useRef } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import { getCookie, setCookie } from "../utils/cookie";

const password = "123456";

const LevelTwo = () => {
  const navigate = useNavigate();

  const textRef = useRef<HTMLSpanElement>(null);

  const onNextLevel = () => {
    if (textRef.current!.innerText === password) {
      navigate("/level/3");
      setCookie("level", Math.max(1, (getCookie("level") as any) * 1));
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"输入上一关的密码以过关"} stage={2} />
      <LevelBody>
        <LevelText text={`密码是：${password}`} />
        <FakeInputContainer ref={textRef}>请在此输入密码</FakeInputContainer>
      </LevelBody>
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

const FakeInputContainer = styled.span`
  color: #404040;
  font-size: 1.1em;
  border: 1px solid #e0e0e0;
  padding: 0.6rem;

  :hover {
    border: 1px solid #c0c0c0;
  }

  :focus {
    outline: none;
    border: 1px solid #a0a0a0;
  }

  transition: border 0.1s;
`;

export default LevelTwo;
