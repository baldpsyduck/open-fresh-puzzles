import { NavigateFunction } from "react-router";
import { getCookie, setCookie } from "./cookie";

export default (fn:NavigateFunction,key:number)=>{
    fn("/level/"+key);
    setCookie("level", Math.max(key, +getCookie("level")));
}