import React, { FC, forwardRef } from "react";
import { IFormValues } from "../../components/LoginForm/LoginForm";
import classes from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  placeholder: string;
  label: string;
  errors: any;
}

export type Ref = HTMLInputElement;

const InputField = forwardRef<Ref, InputFieldProps>(
  ({ label, errors, ...props }, ref) => {
    return (
      <div>
        <label className={classes.label}>
          {label}
          <input {...props} ref={ref} className={classes.input} />
        </label>
        <div className={classes.error}>
          <span>{errors}</span>
        </div>
      </div>
    );
  }
);

export default InputField;
