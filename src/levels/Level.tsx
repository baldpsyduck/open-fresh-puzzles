import { useParams } from "react-router";
import LevelOne from "./LevelOne";
import { LevelContainer } from "../components/common";
import LevelZero from "./LevelZero";
import LevelTwo from "./LevelTwo";
import LevelThree from "./LevelThree";
import LevelFour from "./LevelFour";
import LevelFive from "./LevelFive";
import Fallback from "../Fallback";

const Level = () => {
  const { id } = useParams();

  return (
    <LevelContainer>
      {+id! === 0 ? (
        <LevelZero />
      ) : +id! === 1 ? (
        <LevelOne />
      ) : +id! === 2 ? (
        <LevelTwo />
      ) : +id! === 3 ? (
        <LevelThree />
      ) : +id! === 4 ? (
        <LevelFour />
      ) : +id! === 5 ? (
        <LevelFive />
      ) : (
        <Fallback />
      )}
    </LevelContainer>
  );
};

export default Level;
