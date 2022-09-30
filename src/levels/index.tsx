import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { LevelContainer } from "../components/common";
import { getCookie } from "../utils/cookie";

export default function Level() {
  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = loc.pathname.split(/[/]/);
    if (+path[path.length - 1] > +getCookie("level")) navigate(getCookie("level"));
  },[]);

  return (
    <LevelContainer>
      <Outlet />
    </LevelContainer>
  );
}
