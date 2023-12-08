import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Title from "../../../UI/Title/Title";
import CommentItem from "../CommentItem/CommentItem";
import classes from "./CommentList.module.scss";

import user_image from "../../../assets/images/makima.jpg";
import CommentForm from "../CommentForm/CommentForm";
import { CommentActionCreators } from "../../../store/reducers/comment/action-creatores";
import { useDispatch } from "react-redux";

export interface IComment {
   id: number;
   parentId: number | null;
   author: string;
   img: string;
   date: string;
   comment: string;
}

const CommentList = () => {
   const { user } = useTypedSelector((state) => state.auth);
   const { comments } = useTypedSelector((state) => state.comment);

   const dispatch = useDispatch();

   let rootComments = comments.filter((comment) => comment.parentId === null);

   const getReplies = (commentId: number, comments: IComment[]): IComment[] => {
      //! .sort((a,b) => newDate(a) - newDate(b))  <--- need to add
      return comments.filter((comment) => comment.parentId === commentId);
   };

   const fetchComments = async () => {
      await dispatch(CommentActionCreators.getComments());
   };

   const handleAddComment = (text: string, parentId: number | null): void => {
      if (text) {
         const newComment: IComment = {
            id: comments.at(-1)?.id || 0 + 1,
            parentId: parentId,
            author: user.username,
            img: user_image,
            date: "recently",
            comment: text,
         };
         dispatch(CommentActionCreators.addComment(newComment));
      }

      //   rootComments = [newComment, ...comments];
   };

   useEffect(() => {
      fetchComments();
   }, []);

   console.log(comments);

   return (
      <div className={classes["comments"]}>
         <Title value={"Comments"} amount={rootComments.length} />
         <CommentForm handleAddComment={handleAddComment} />
         {rootComments.map((rootComment, index) => (
            <CommentItem
               comment={rootComment}
               replies={getReplies(rootComment.id, comments)}
               backendComments={comments}
               key={index}
            />
         ))}
      </div>
   );
};

export default CommentList;
