import { FC, useState, ChangeEvent, FormEvent } from "react";
import classes from "./CommentForm.module.scss";
import { IoSend } from "react-icons/io5";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface CommentFormProps {
   handleAddComment: (value: string, parentId: number | null) => void;
}

const CommentForm: FC<CommentFormProps> = ({ handleAddComment }) => {
   const [value, setValue] = useState("");
   const { user } = useTypedSelector((state) => state.auth);

   const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      
      handleAddComment(value, null);
      setValue("");
   };

   return (
      <form className={classes["form"]} onSubmit={handleSubmit}>
         <div className={classes["form__image"]}>
            <img src={user.image_url} alt={user.username} />
         </div>
         <div className={classes["form__body"]}>
            <div className={classes["form__write"]}>
               <textarea
                  className={classes["form__textarea"]}
                  autoComplete="off"
                  placeholder="Write something..."
                  value={value}
                  onChange={handleChange}
               ></textarea>
               <IoSend onClick={handleSubmit} />
            </div>

            <p className={classes["form__letters"]}>
               <span
                  className={
                     value.length > 500
                        ? [classes["form__letters-count"], classes["form__letters-count_error"]].join(" ")
                        : classes["form__letters-count"]
                  }
               >
                  {value.length}
               </span>
               /500 letters
            </p>
         </div>
      </form>
   );
};

export default CommentForm;
