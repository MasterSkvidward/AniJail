import { FC } from "react";
import { BsFillReplyFill } from "react-icons/bs";
import { backendComments, IComment } from "../CommentList/CommentList";
import classes from "./CommentItem.module.scss";

interface ICommentItemProps {
   comment: IComment;
   replies: IComment[];
   backendComments: IComment[];
}

const CommentItem: FC<ICommentItemProps> = ({ comment, replies, backendComments }) => {
   const getReplies = (commentId: number, comments: IComment[]): IComment[] => {
      //! .sort((a,b) => newDate(a) - newDate(b))  <--- need to add
      return comments.filter((comment) => comment.parentId === commentId);
   };

   if (!comment) return <></>;
   return (
      <div className={classes["comment"]}>
         <div className={classes["comment__content"]}>
            <div className={classes["comment__image"]}>
               <img src={comment.img} alt={comment.author} />
            </div>
            <div className={classes["comment__body"]}>
               <div className={classes["comment__row"]}>
                  <h5 className={classes["comment__author"]}>{comment.author}</h5>
                  <span className={classes["comment__date"]}>{comment.date}</span>
               </div>

               <p className={classes["comment__data"]}>
                  {comment.comment}
                  {comment.comment}
               </p>
               <div className={classes["comment__actions"]}>
                  <BsFillReplyFill />
               </div>
            </div>
         </div>

         {replies.length > 0 && (
            <div className={classes["comment__replies"]}>
               {replies.map((reply, index) => (
                  <CommentItem comment={reply} replies={getReplies(reply.id, backendComments)} backendComments={backendComments} key={index} />
               ))}
            </div>
         )}
      </div>
   );
};

export default CommentItem;
