import { FC, useState } from "react";
import { BsFillReplyFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { getShortenedString } from "../../../utils/utils";
import { IComment } from "../CommentList/CommentList";
import classes from "./CommentItem.module.scss";

import tmp_img from "../../../assets/images/makima.jpg";

interface ICommentItemProps {
   comment: IComment;
   replies: IComment[];
   backendComments: IComment[];
}

const CommentItem: FC<ICommentItemProps> = ({ comment, replies, backendComments }) => {
   const [repliesVisible, setRepliesVisible] = useState(false);

   const getReplies = (commentId: number, comments: IComment[]): IComment[] => {
      //! .sort((a,b) => newDate(a) - newDate(b))  <--- need to add
      return comments.filter((comment) => comment.parentId === commentId);
   };

   if (!comment) return <></>;
   return (
      <div className={classes["comment"]}>
         <div className={classes["comment__container"]}>
            <div className={classes["comment__content"]}>
               <div className={classes["comment__image"]}>
                  <img src={tmp_img} alt={comment.author} />
               </div>
               <div className={classes["comment__body"]}>
                  <div className={classes["comment__row"]}>
                     <h5 className={classes["comment__author"]}>{comment.author}</h5>
                     <span className={classes["comment__date"]}>{comment.date}</span>
                  </div>

                  <p className={classes["comment__data"]}>
                     {getShortenedString(comment.comment, 800)}
                     {/* {comment.comment}
                  {comment.comment} */}
                  </p>
               </div>
            </div>

            <div className={classes["comment__actions"]}>
               <button className={classes["comment__btn"]}>
                  Reply <BsFillReplyFill />
               </button>

               {replies.length > 0 && (
                  <p className={classes["comment__show"]} onClick={() => setRepliesVisible((prev) => !prev)}>
                     Show Replies ({replies.length})
                     <MdOutlineKeyboardArrowDown
                        className={repliesVisible ? [classes["arrow"], classes["rotate"]].join(" ") : classes["arrow"]}
                     />
                  </p>
               )}
            </div>
         </div>

         {replies.length > 0 && repliesVisible && (
            <div className={classes["comment__replies"]}>
               {replies.map((reply, index) => (
                  <CommentItem
                     comment={reply}
                     replies={getReplies(reply.id, backendComments)}
                     backendComments={backendComments}
                     key={index}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default CommentItem;
