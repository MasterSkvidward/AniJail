import { IAnime, IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { AnimeService } from "../../../services/AnimeService";
import { useFetching } from "../../../hooks/useFetching";
import { AppDispatch } from "../rootReducer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { GlobalAction, GlobalActionsEnum, ThemeType } from "./types";

export const GlobalActionCreators = {

  setTheme: (theme: ThemeType): GlobalAction => {
    document.documentElement.setAttribute("data-theme", theme);
    return ({ type: GlobalActionsEnum.SET_THEME, payload: theme,})
  },
};
