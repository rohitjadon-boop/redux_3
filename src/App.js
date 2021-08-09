import React from "react";

import { useSelector,useDispatch } from "react-redux";
import {nameChange} from "./actions/index";

function App(){
  let mystate=useSelector((state)=>state.changingName);
  let dispatch=useDispatch();
  return(
    <div>
      <h1>{mystate} <button onClick={()=>dispatch(nameChange())}>Change name</button></h1>
    </div>
  )
}
export default App;