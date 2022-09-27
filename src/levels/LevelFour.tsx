import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelHint,
  LevelText,
  LevelTitle,
} from "../components/common";
import { useNavigate } from "react-router";

const LevelFour = () => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <LevelTitle text={"想办法过关"} stage={4} />
      <LevelBody>
        <LevelHint text={"当前在第4关，下一关是第几关？"} />
        <LevelText
          text={"不能跳关可能是vercel的特性，这里直接给一个跳关链接"}
        />
      </LevelBody>
      <LevelButton text={"前往第五关"} onClick={() => navigate("/level/5")} />
    </FormContainer>
  );
};

export default LevelFour;
