import {
  FormContainer,
  LevelButton,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const password = "123456";

const LevelTwo = () => {
  const navigate = useNavigate();

  const textRef = useRef<HTMLSpanElement>(null);

  const onNextLevel = () => {
    if (textRef.current!.innerText === password) {
      navigate("/level/3");
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"输入上一关的密码以过关"} />
      <LevelText text={`密码是：${password}`} />
      <span ref={textRef}>这是一个很像输入的文字框</span>
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelTwo;
