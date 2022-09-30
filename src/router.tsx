import { RouteObject, useRoutes, Navigate } from "react-router";
import Level from "./levels";
import LevelZero from "./levels/LevelZero";
import LevelOne from "./levels/LevelOne";
import LevelTwo from "./levels/LevelTwo";
import LevelThree from "./levels/LevelThree";
import LevelFour from "./levels/LevelFour";
import LevelFive from "./levels/LevelFive";

const routes: RouteObject[] = [
  {
    path: "level",
    element: <Level />,
    children: [
      { path: "0", element: <LevelZero /> },
      { path: "1", element: <LevelOne /> },
      { path: "2", element: <LevelTwo /> },
      { path: "3", element: <LevelThree /> },
      { path: "4", element: <LevelFour /> },
      { path: "5", element: <LevelFive /> },
      { path: "", element: <Navigate to="0" /> },
    ],
  },

  { path: "*", element: <Navigate to="/level" /> },
];

export default function Router() {
  const element = useRoutes(routes);
  return element;
}
