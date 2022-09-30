import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelTitle,
} from "../components/common";
import { useNavigate } from "react-router";
import { getCookie, setCookie } from "../utils/cookie";

const LevelZero = () => {
  const navigate = useNavigate();

  const onNextLevel = () => {
    navigate("/level/1");
    setCookie("level",Math.max(1,(getCookie("level") as any)*1)||0)
  };

  return (
    <FormContainer>
      <LevelTitle text={"点击按钮以过关"} stage={0} />
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelZero;
