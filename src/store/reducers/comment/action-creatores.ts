import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { CommentAction, CommentActionsEnum } from "./types";
import useDebounce from "../../../hooks/useDebounce";
import { FilterActionCreators } from "../filter/action-creatores";
import { CommentService } from "../../../services/CommentService";
import { IComment } from "../../../types/comment";

export const CommentActionCreators = {
   setCommentsLoading: (flag: boolean): CommentAction => ({
      type: CommentActionsEnum.SET_COMMENTS_LOADING,
      payload: flag,
   }),

   setCommentsError: (error: string): CommentAction => ({
      type: CommentActionsEnum.SET_COMMENTS_ERROR,
      payload: error,
   }),

   addComment: (comment: IComment): CommentAction => ({
      type: CommentActionsEnum.ADD_COMMENT,
      payload: comment,
   }),

   getComments: (): any => async (dispatch: AppDispatch) => {
      try {
         console.log("fetch Comments");
         dispatch(CommentActionCreators.setCommentsLoading(true));
         const response = await CommentService.getComments();
         dispatch({
            type: CommentActionsEnum.GET_COMMENTS,
            payload: response,
         });
      } catch (e: any) {
         dispatch(CommentActionCreators.setCommentsError(e.message));
         if (e.response && e.response.status === 429) {
            setTimeout(() => {
               dispatch(CommentActionCreators.getComments());
               dispatch(CommentActionCreators.setCommentsError(""));
            }, 1000);
         }
      } finally {
         dispatch(CommentActionCreators.setCommentsLoading(false));
      }
   },
};
