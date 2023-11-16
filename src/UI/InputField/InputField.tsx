import React, { FC, forwardRef } from "react";
import { IFormValues } from "../../components/LoginForm/LoginForm";
import classes from "./InputField.module.scss";

interface InputFieldProps {
  type: string;
  placeholder: string;
  defaultValue?: string;
  label: string;
  errors: any;
}

export type Ref = HTMLInputElement;

const InputField = forwardRef<Ref, InputFieldProps>(
  ({ label, errors, defaultValue, ...props }, ref) => {
    return (
      <div>
        <label className={classes.label}>
          {label}
          <input {...props} defaultValue={defaultValue || ""} ref={ref} className={classes.input} />
        </label>
        <div className={classes.error}>
          <span>{errors}</span>
        </div>
      </div>
    );
  }
);

export default InputField;
