import React, { FC } from "react";

import classes from "./MyButton.module.scss";

interface MyButtonProps {
  value: string;
}

const MyButton: FC<MyButtonProps> = ({ value }) => {
  return <div className={classes["btn"]}>{value}</div>;
};

export default MyButton;
