import { useState, useEffect, FC } from "react";
import classes from "./InputRange.module.scss";
import "./RangeInputAntd.scss";
import { Slider } from "antd";
import { getCurrentYear } from "../../utils/utils";

interface InputRangeProps {
   options: {
      title: string;
      defaultValues: number[];
      minValue: number;
      maxValue: number;
   };
}

const InputRange: FC<InputRangeProps> = ({ options }) => {
   const [valueFirst, setValueFirst] = useState(options.defaultValues[0]);
   const [valueSecond, setValueSecond] = useState(options.defaultValues[1]);

   const handleChange = (newValues: number[]): void => {
      setValueFirst(newValues[0]);
      setValueSecond(newValues[1]);
   };

   return (
      <div className={classes["input"]}>
         {/* <Slider defaultValue={30} /> */}
         <h3>{options.title}</h3>
         <Slider
            range={{ draggableTrack: true }}
            // defaultValue={options.defaultValues}
            value={[valueFirst, valueSecond]}
            min={options.minValue}
            max={options.maxValue}
            onChange={handleChange}
            className={classes["input__slider"]}
         />
      </div>
   );
};

export default InputRange;
