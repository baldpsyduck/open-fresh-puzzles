import {
  FormContainer,
  LevelBody,
  LevelButton,
  LevelHint,
  LevelInput,
  LevelText,
  LevelTitle,
} from "../components/common";

const LevelFive = () => {
  return (
    <FormContainer>
      <LevelTitle text={"提交第一关的密码以过关"} stage={5} />
      <LevelBody>
        <LevelHint text={"尝试搜索错误提示信息"} />
        <LevelText text={"这关开始需要后端交互了，先写到这预览一下效果"} />
        <LevelInput placeholder={"在这里输入密码"} />
      </LevelBody>
      <LevelButton text={"下一关"} />
    </FormContainer>
  );
};

export default LevelFive;
