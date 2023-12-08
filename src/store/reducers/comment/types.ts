import { IComment } from "../../../types/comment";

export interface CommentState {
   comments: IComment[] | [];
//    newComment: IComment;
   commentsLoading: boolean;
   commentsError: string;
}

export enum CommentActionsEnum {
   //    CLEAR_ANIME_SEARCH = "CLEAR_ANIME_SEARCH",
   ADD_COMMENT = "ADD_COMMENT",
   GET_COMMENTS = "GET_COMMENTS",
   SET_COMMENTS_LOADING = "SET_COMMENTS_LOADING",
   SET_COMMENTS_ERROR = "SET_COMMENTS_ERROR",
}

interface AddComment {
    type: CommentActionsEnum.ADD_COMMENT;
    payload: IComment;
 }

interface GetComments {
   type: CommentActionsEnum.GET_COMMENTS;
   payload: IComment[] | [];
}

interface SetCommentsLoading {
   type: CommentActionsEnum.SET_COMMENTS_LOADING;
   payload: boolean;
}

interface SetCommentsError {
   type: CommentActionsEnum.SET_COMMENTS_ERROR;
   payload: string;
}

export type CommentAction = AddComment | GetComments | SetCommentsLoading | SetCommentsError;
