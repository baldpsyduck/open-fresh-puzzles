import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelTitle,
} from "../components/common";
import { useNavigate } from "react-router";

const LevelZero = () => {
  const navigate = useNavigate();

  const onNextLevel = () => {
    navigate("/level/1");
  };

  return (
    <FormContainer>
      <LevelTitle text={"点击按钮以过关"} stage={0} />
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelZero;
