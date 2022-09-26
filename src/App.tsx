import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Level from "./levels/Level";
import Fallback from "./Fallback";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={"/level/0"} />} />
        <Route path={"level"}>
          <Route path={":id"} element={<Level />} />
        </Route>
        <Route path={"*"} element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
