import React, { useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Title from "../../../UI/Title/Title";
import CommentItem from "../CommentItem/CommentItem";
import classes from "./CommentList.module.scss";

import user_image from "../../../assets/images/makima.jpg";

export interface IComment {
   id: number;
   parentId: number | null;
   author: string;
   img: string;
   date: string;
   comment: string;
}

export const backendComments: IComment[] = [
   {
      id: 1,
      parentId: null,
      author: "Atrhur",
      img: user_image,
      date: "3 days ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },

   {
      id: 2,
      parentId: 1,
      author: "Sergey",
      img: user_image,
      date: "1 day ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },

   {
      id: 3,
      parentId: null,
      author: "Vlad",
      img: user_image,
      date: "3 weeks ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },
   {
      id: 4,
      parentId: 3,
      author: "Dima",
      img: user_image,
      date: "yeasterday",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },
   {
      id: 5,
      parentId: null,
      author: "Leonid",
      img: user_image,
      date: "2 days ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },

   {
      id: 6,
      parentId: 2,
      author: "John Snow",
      img: user_image,
      date: "4 days ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },

   {
      id: 7,
      parentId: 2,
      author: "Anton",
      img: user_image,
      date: "5 days ago",
      comment:
         "Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot)) Wow! Wonderful show. Btw waifu is hot))",
   },
];

const CommentList = () => {
   const { user } = useTypedSelector((state) => state.auth);

   const rootComments = backendComments.filter((comment) => comment.parentId === null);

   const getReplies = (commentId: number, comments: IComment[]): IComment[] => {
      //! .sort((a,b) => newDate(a) - newDate(b))  <--- need to add
      return comments.filter((comment) => comment.parentId === commentId);
   };

   useEffect(() => {}, []);

   return (
      <div className={classes["comments"]}>
         <Title value={"Comments"} />
         {rootComments.map((rootComment, index) => (
            <CommentItem comment={rootComment} replies={getReplies(rootComment.id, backendComments)} backendComments={backendComments} key={index} />
         ))}
      </div>
   );
};

export default CommentList;
