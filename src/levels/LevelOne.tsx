import {
  FormContainer,
  LevelButton,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useState } from "react";
import { useNavigate } from "react-router";

const password = "123456";

const LevelOne = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const onNextLevel = () => {
    if (value === password) {
      navigate("/level/2");
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"输入密码以过关"} />
      <LevelText text={`密码是：${password}`} />
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelOne;
