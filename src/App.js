import "./App.css";
import Display from "./components/Display";
import Buttonscontainer from "./components/Buttonscontainer";
import { useState } from "react";
import { evaluate } from "mathjs";
import { CiCalculator2 } from "react-icons/ci";

function App() {
  let [displayvalue, setdisplayvalue] = useState("0");

  const outputfun = (item) => {
    if (item === "=") {
      let result = evaluate(displayvalue);
      setdisplayvalue(result.toString());
    } else if (item === "C") {
      displayvalue = "0";
      setdisplayvalue(displayvalue);
    } else {
      displayvalue = displayvalue + item;
      setdisplayvalue(displayvalue);
    }
  };

  let cssClasses = [
    "text-[30px] text-white m-2 text-emerald-400",
    "bg-slate-900 w-[100vw] h-[100vh] fixed text-center ",
  ];

  return (
    <div className={cssClasses[1]}>
      <CiCalculator2 className={cssClasses[0]} />

      <Display displayvalue={displayvalue} />
      <Buttonscontainer outputbtn={outputfun} />
    </div>
  );
}

export default App;
