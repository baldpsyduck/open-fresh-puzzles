import { BrowserRouter } from "react-router-dom";
import {getCookie} from './utils/cookie'
import { useEffect } from "react";
import Router from './router';

const App = () => {
  
  useEffect(()=>{
    const admitLevel=getCookie("level")||0 ;
    console.log(admitLevel);
  },[])

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
