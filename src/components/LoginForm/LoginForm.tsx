import React, { FC, useState, SyntheticEvent, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creatores";
import InputField from "../../UI/InputField/InputField";

import { FaUserAlt } from "react-icons/fa";

import { emailValidation, passwordValidation } from "../Profile/ProfileAuth/validation";

import classes from "./LoginForm.module.scss";

interface LoginFormProps {
   setModalVisible: Dispatch<SetStateAction<boolean>>;
   setIsNewUser: Dispatch<SetStateAction<boolean>>;
}

export interface IFormValues {
   login: string;
   password: string;
}

const LoginForm: FC<LoginFormProps> = ({ setModalVisible, setIsNewUser }) => {
   const dispatch = useDispatch();

   const {
      register,
      handleSubmit,
      watch,
      reset,
      resetField,
      formState: { errors, isValid, isSubmitted, isSubmitting },
   } = useForm<IFormValues>({ mode: "onTouched" });

   const watchFields = watch(["login", "password"]);

   const onSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(AuthActionCreators.setAuth(true));
      setModalVisible(false);
      document.body.classList.remove("hide-scroll");
      resetField("login");
      resetField("password");
   };

   return (
      <form className={classes["form"]} onSubmit={onSubmit}>
         <h3 className={classes["form__title"]}>{"Welcome back!"}</h3>
         <p className={classes["form__error"]}>{!isSubmitted || "Login or password are invalid"}</p>
         <div className={classes["form__column"]}>
            <InputField
               type={"text"}
               placeholder={"hokage007"}
               label={"Login"}
               errors={errors.login?.message || ""}
               {...register("login", emailValidation)}
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
                  !isValid && isSubmitted
                  // watchFields.includes(undefined)
               }
            >
               Login
            </button>
            <div className={classes["form__ref"]}>
               Dont have an account?
               <span onClick={() => setIsNewUser(true)}>Sign up</span>
            </div>
         </div>
      </form>
   );
};

export default LoginForm;
