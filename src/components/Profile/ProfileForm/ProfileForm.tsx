import userEvent from "@testing-library/user-event";
import React, { FC, useState, SyntheticEvent, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AuthActionCreators } from "../../../store/reducers/auth/action-creatores";
import InputField from "../../../UI/InputField/InputField";
import InputSwitch from "../../../UI/InputSwitch/InputSwitch";

import { nickNameValidation, emailValidation, passwordValidation } from "../ProfileAuth/validation";
import ProfileSwitches from "../ProfileSwitches/ProfileSwitches";

import classes from "./ProfileForm.module.scss";

interface ISignUpFormValues {
   nickname: string;
   email: string;
   password: string;
}

const ProfileForm: FC = () => {
   const dispatch = useDispatch();

   const { user } = useTypedSelector((state) => state.auth);

   const {
      register,
      handleSubmit,
      watch,
      reset,
      resetField,
      formState: { errors, isValid, isSubmitted, isSubmitting },
   } = useForm<ISignUpFormValues>({ mode: "onSubmit" });

   const watchFields = watch(["nickname", "email", "password"]);

   const onSubmit = (e: SyntheticEvent) => {
      e.preventDefault();
      dispatch(AuthActionCreators.setAuth(true));
    //   resetField("nickname");
    //   resetField("email");
      resetField("password");
   };

   return (
      <form className={classes["form"]} onSubmit={onSubmit}>
         {/* <h3 className={classes["form__title"]}>{"Change settings"}</h3> */}
         <p className={classes["form__error"]}>{!isSubmitted || "Login or password are invalid"}</p>
         <div className={classes["form__column"]}>
            <div className={classes["form__inputs"]}>
               <InputField
                  type={"text"}
                  placeholder={""}
                  label={"Username"}
                  defaultValue={user.username}
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
            </div>

            <div className={classes["form__about"]}>
               <h5>About me</h5>
               <textarea
                  className={classes["form__textarea"]}
                  autoComplete="off"
                  placeholder="Write something about yourself..."
               ></textarea>
            </div>

            <button className={classes["form__btn"]}>Save</button>
         </div>
      </form>
   );
};

export default ProfileForm;
