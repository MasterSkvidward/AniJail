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

let tempParams: IAnimeSearchParams = {};

const AnimeFilter = memo(() => {
   const dispatch = useDispatch();
   const { params } = useTypedSelector((state) => state.filter);
   //    const debouncedParams = useDebounce(setParams, 300);

   const animatedComponents = makeAnimated();

   const yearFrom = useRef<HTMLInputElement>(null);
   const yearTo = useRef<HTMLInputElement>(null);
   const scoreFrom = useRef<HTMLInputElement>(null);
   const scoreTo = useRef<HTMLInputElement>(null);

   function setParams(obj: IAnimeSearchParams) {
      dispatch(FilterActionCreators.addParams(obj));
   }

   const handlerClickClear = () => {
      tempParams = {};
      dispatch(FilterActionCreators.clearFilterParams());
      if (yearFrom.current) yearFrom.current.value = "";
      if (yearTo.current) yearTo.current.value = "";
      if (scoreFrom.current) scoreFrom.current.value = "";
      if (scoreTo.current) scoreTo.current.value = "";
      window.scrollTo(0, 0);
   };

   const handlerSelectSingleChange = (option: SingleValue<IFilterOption>, paramValue: string): void => {
      let result = option ? option.value : "";
      const obj = { [paramValue]: result };
      tempParams = { ...tempParams, ...obj };
      setParams(obj);

      //   dispatch(FilterActionCreators.addParams(obj));
      //   console.log(tempParams);
   };

   const handlerSelectMultiChange = (options: MultiValue<IFilterOption>, paramValue: string, context: any): void => {
      const obj = { [paramValue]: formatFilterValues(options) };
      console.log(obj);

      tempParams = { ...tempParams, ...obj };
      console.log("-----------------");
      setParams(obj);
   };

   //    const handlerSelectChange = (optionList: MultiValue<IFilterOption>, paramValue: string): void => {
   //       optionList.length
   //          ? dispatch(FilterActionCreators.addParams({ [paramValue]: formatFilterValues(optionList) }))
   //          : dispatch(FilterActionCreators.addParams({ [paramValue]: "" }));
   //    };

   function changeParams(param: IAnimeSearchParams): void {
      tempParams = { ...tempParams, ...param };
      dispatch(FilterActionCreators.addParams(param));
   }

   //    function handlerChange(e: ChangeEvent<HTMLInputElement>, paramValue: string, defaultValue: number = 0) {
   //       debouncedParams({ [paramValue]: e.target.value ? e.target.value : defaultValue });
   //    }

   return (
      <div className={classes["filter"]}>
         <div className={classes["filter__container"]}>
            {/* <div className={classes['filter__row']}>
                    <h3 className={classes['filter__title']}>Filters</h3>
                </div> */}
            {/* <Title value="Filter" /> */}
            <div className={classes["filter__rows"]}>
               <label>
                  Type
                  <Select
                     value={getFilterOptionsSingle(CONSTANTS.filterTypeOptions, tempParams.type || "")}
                     closeMenuOnSelect={true}
                     options={CONSTANTS.filterTypeOptions}
                     classNamePrefix={"custom-select"}
                     placeholder={"Any"}
                     isMulti={false}
                     isClearable={true}
                     components={animatedComponents}
                     onChange={(option) => handlerSelectSingleChange(option, "type")}
                  />
               </label>

               <label>
                  Genres
                  <Select
                     value={getFilterOptionsMulti(CONSTANTS.filterGenreOptions, tempParams.genres || "")}
                     closeMenuOnSelect={false}
                     options={CONSTANTS.filterGenreOptions}
                     classNamePrefix={"custom-select"}
                     placeholder={"Any"}
                     isMulti={true}
                     hideSelectedOptions={false}
                     isClearable={true}
                     components={animatedComponents}
                     onChange={(options, context) => handlerSelectMultiChange(options, "genres", context)}
                  />
               </label>
               <label>
                  Age rating
                  <Select
                     value={getFilterOptionsSingle(CONSTANTS.filterAgeOptions, tempParams.rating || "")}
                     closeMenuOnSelect={true}
                     options={CONSTANTS.filterAgeOptions}
                     classNamePrefix={"custom-select"}
                     placeholder={"Any"}
                     isMulti={false}
                     isClearable={true}
                     components={animatedComponents}
                     onChange={(option) => handlerSelectSingleChange(option, "rating")}
                  />
               </label>
               <label>
                  Status
                  <Select
                     value={getFilterOptionsSingle(CONSTANTS.filterStatusOptions, tempParams.status || "")}
                     closeMenuOnSelect={true}
                     options={CONSTANTS.filterStatusOptions}
                     classNamePrefix={"custom-select"}
                     placeholder={"Any"}
                     isMulti={false}
                     isClearable={true}
                     components={animatedComponents}
                     onChange={(option) => handlerSelectSingleChange(option, "status")}
                  />
               </label>

               <button className={classes["filter__clear"]} onClick={handlerClickClear}>Clear</button>
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
           
         </div>
      </div>
   );
});

export default AnimeFilter;
