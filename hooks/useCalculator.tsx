import { useState } from "react";

export const useCalculator = () => {

  const [value, setValue] = useState("0");

  return{
    value,
    setValue,
    }

}
