import { useState } from "react";

export const useCalculator = () => {

   const [display, setDisplay] = useState("0");
   
  return{
    display,
    setDisplay,
    }

}
