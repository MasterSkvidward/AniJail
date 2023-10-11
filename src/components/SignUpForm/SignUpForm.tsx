import React, {
  FC,
  useState,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creatores";
import InputField from "../../UI/InputField/InputField";

import {
  nickNameValidation,
  emailValidation,
  passwordValidation,
} from "../Profile/ProfileAuth/validation";

import classes from "./SignUpForm.module.scss";

interface SignUpFormProps {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setIsNewUser: Dispatch<SetStateAction<boolean>>;
}

interface ISignUpFormValues {
  nickname: string;
  email: string;
  password: string;
}

const SignUpForm: FC<SignUpFormProps> = ({ setModalVisible, setIsNewUser }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm<ISignUpFormValues>({ mode: "onTouched" });

  const watchFields = watch(["nickname", "email", "password"]);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(AuthActionCreators.setAuth(true));
    setModalVisible(false);
    document.body.classList.remove("hide-scroll");
    resetField("nickname");
    resetField("email");
    resetField("password");
  };

  return (
    <form className={classes["form"]} onSubmit={onSubmit}>
      <h3 className={classes["form__title"]}>{"Sign up"}</h3>
      <p className={classes["form__error"]}>
        {!isSubmitted || "Login or password are invalid"}
      </p>
      <div className={classes["form__column"]}>
        <InputField
          type={"text"}
          placeholder={"hokage007"}
          label={"Username"}
          errors={errors.nickname?.message || ""}
          {...register("nickname", nickNameValidation)}
        />

        <InputField
          type={"text"}
          placeholder={"luffy@gmail.com"}
          label={"Email"}
          errors={errors.email?.message || ""}
          {...register("email", emailValidation)}
        />

        <InputField
          type={"text"}
          placeholder={"********"}
          label={"Password"}
          errors={errors.password?.message || ""}
          {...register("password", passwordValidation)}
        />
        <button
          className={classes["form__btn"]}
          type="submit"
          disabled={
            !isValid || watchFields.includes("")
            // watchFields.includes(undefined)
          }
        >
          Sign up
        </button>
        <div className={classes["form__ref"]}>
          Already have an account?
          <span onClick={() => setIsNewUser(false)}>Login</span>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
