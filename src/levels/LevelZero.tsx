import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelTitle,
} from "../components/common";
import { useNavigate } from "react-router";
import { getCookie, setCookie } from "../utils/cookie";
import setLevel from "../utils/setLevel";

const LevelZero = () => {
  const navigate = useNavigate();

  const onNextLevel = () => {
   setLevel(navigate,1)
  };

  return (
    <FormContainer>
      <LevelTitle text={"点击按钮以过关"} stage={0} />
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelZero;
