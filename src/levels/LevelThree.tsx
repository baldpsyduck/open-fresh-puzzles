import { FormContainer, LevelButton, LevelTitle } from "../components/common";
import { useRef } from "react";
import { useNavigate } from "react-router";
import chroma from "chroma-js";

const LevelTwo = () => {
  const navigate = useNavigate();

  const blockRef = useRef<HTMLDivElement>(null);

  const onNextLevel = () => {
    const color = chroma(blockRef.current!.style.backgroundColor);
    const [h, s, v] = color.hsv();
    console.log({ h, s, v });
    // blue predication
    if (185 <= h && h <= 260 && s >= 0.2 && v >= 0.3) {
      navigate("/level/4");
    }
  };

  return (
    <FormContainer>
      <LevelTitle text={"把方块的背景色改为蓝色以过关"} />
      <div
        ref={blockRef}
        style={{ width: "4rem", height: "3rem", backgroundColor: "#E0E0E0" }}
      />
      <LevelButton text={"下一关"} onClick={onNextLevel} />
    </FormContainer>
  );
};

export default LevelTwo;
