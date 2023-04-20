export interface FilterState {

}

export enum FilterActionEnum {
    SORT_BY_DATE = "SORT_BY_DATE",
    SORT_BY_SCORE = "SORT_BY_SCORE",
}

interface SortByDateAction {
    type: FilterActionEnum.SORT_BY_DATE;
    payload: boolean;
}