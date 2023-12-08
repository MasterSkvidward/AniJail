import { CommentAction, CommentActionsEnum, CommentState } from "./types";

const initialState: CommentState = {
   comments: [],
   commentsLoading: false,
   commentsError: "",
};

export default function commentReducer(state = initialState, action: CommentAction): CommentState {
   switch (action.type) {
      case CommentActionsEnum.GET_COMMENTS:
         return { ...state, comments: action.payload };

      case CommentActionsEnum.ADD_COMMENT:
         return { ...state, comments: [action.payload, ...state.comments] };

      //   case CommentActionsEnum.CLEAR_ANIME_SINGLE:
      //      return { ...state, commentSingle: null };

      default:
         return state;
   }
}
