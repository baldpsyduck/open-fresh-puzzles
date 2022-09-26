import {
  FormContainer,
  LevelHint,
  LevelTitle,
} from "../components/common";

const LevelFour = () => {
  return (
    <FormContainer>
      <LevelTitle text={"想办法过关"} />
      <LevelHint text={"当前在第4关，下一关是第几关？"} />
    </FormContainer>
  );
};

export default LevelFour;
