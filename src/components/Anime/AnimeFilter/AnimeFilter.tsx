import React, { ChangeEvent, memo, useEffect, useRef, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import classes from "./AnimeFilter.module.scss";
import "./react-select.scss";
import makeAnimated from "react-select/animated";
import * as CONSTANTS from "./constants";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { formatFilterValues } from "../../../helpers/helpers";
import { getCurrentYear, getFilterOptionsSingle, getFilterOptionsMulti } from "../../../utils/utils";
import useDebounce from "../../../hooks/useDebounce";
import { IFilterOption } from "../../../types/types";
import Title from "../../../UI/Title/Title";

const AnimeFilter = memo(() => {
   const dispatch = useDispatch();
   const { params } = useTypedSelector((state) => state.filter);
   const debouncedParams = useDebounce(changeParams, 500);
   const animatedComponents = makeAnimated();

   const yearFrom = useRef<HTMLInputElement>(null);
   const yearTo = useRef<HTMLInputElement>(null);
   const scoreFrom = useRef<HTMLInputElement>(null);
   const scoreTo = useRef<HTMLInputElement>(null);

   const handlerClickClear = () => {
      dispatch(FilterActionCreators.clearFilterParams());
      if (yearFrom.current) yearFrom.current.value = "";
      if (yearTo.current) yearTo.current.value = "";
      if (scoreFrom.current) scoreFrom.current.value = "";
      if (scoreTo.current) scoreTo.current.value = "";
      window.scrollTo(0, 0);
   };

   const handlerSelectSingleChange = (option: SingleValue<IFilterOption>, paramValue: string): void => {
      let result = option ? option.value : "";
        console.log(paramValue);
        console.log(option);
        
        
      dispatch(FilterActionCreators.addParams({ [paramValue]: result }));
   };

   const handlerSelectMultiChange = (options: MultiValue<IFilterOption>, paramValue: string): void => {
      dispatch(FilterActionCreators.addParams({ [paramValue]: formatFilterValues(options) }));
   };

   function changeParams(param: IAnimeSearchParams): void {
      dispatch(FilterActionCreators.addParams(param));
   }

   function handlerChange(e: ChangeEvent<HTMLInputElement>, paramValue: string, defaultValue: number = 0) {
      debouncedParams({ [paramValue]: e.target.value ? e.target.value : defaultValue });
   }

   return (
      <div className={classes["filter"]}>
         <div className={[classes["filter__container"], "_container1800"].join(" ")}>
            {/* <div className={classes['filter__row']}>
                    <h3 className={classes['filter__title']}>Filters</h3>
                </div> */}
            {/* <Title value="Filter" /> */}
            <div className={classes["filter__rows"]}>
               <Select
                  value={getFilterOptionsSingle(CONSTANTS.filterTypeOptions, params.type ? params.type : "")}
                  closeMenuOnSelect={true}
                  options={CONSTANTS.filterTypeOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Type"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "type")}
               />
               <Select
                  value={getFilterOptionsMulti(CONSTANTS.filterGenreOptions, params.genres ? params.genres : "")}
                  closeMenuOnSelect={true}
                  options={CONSTANTS.filterGenreOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Genres"}
                  isMulti={true}
                  components={animatedComponents}
                  onChange={(options) => handlerSelectMultiChange(options, "genres")}
               />
               <Select
                  value={getFilterOptionsSingle(CONSTANTS.filterAgeOptions, params.rating ? params.rating : "")}
                  closeMenuOnSelect={true}
                  options={CONSTANTS.filterAgeOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Age rating"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "rating")}
               />
               <Select
                  value={getFilterOptionsSingle(CONSTANTS.filterStatusOptions, params.status ? params.status : "")}
                  closeMenuOnSelect={true}
                  options={CONSTANTS.filterStatusOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Status"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "status")}
               />
               {/* <h3 className={classes['filter__block']}>Year</h3>
                    <div className={classes['filter__block_inputs']}>
                        <input ref={yearFrom} className={classes['input']} defaultValue={params.start_date? params.start_date : ''} type="text" placeholder={'From'} onChange={(e) => handlerChange(e, 'start_date', 0)}/>
                        <input ref={yearTo} className={classes['input']} defaultValue={params.end_date? params.end_date : ''} type="text" placeholder={'To'} onChange={(e) => handlerChange(e, 'end_date', getCurrentYear()+1)}/>
                    </div> */}

               {/* <h3 className={classes['filter__block']}>Score</h3>
                    <div className={classes['filter__block_inputs']}>
                        <input ref={scoreFrom} className={classes['input']} defaultValue={params.min_score? params.min_score : ''} type="text" placeholder={'From'} onChange={(e) => handlerChange(e, 'min_score', 0)}/>
                        <input ref={scoreTo} className={classes['input']} defaultValue={params.max_score? params.max_score : ''} type="text" placeholder={'To'} onChange={(e) => handlerChange(e, 'max_score', 999)}/>
                    </div> */}
            </div>
            <div className={classes["filter__clear"]} onClick={handlerClickClear}>
               <h3 className={classes["filter__clear_title"]}>CLEAR</h3>
               {/* <RxCross1 className={classes['filter__clear_cross']}/> */}
            </div>
         </div>
      </div>
   );
});

export default AnimeFilter;
