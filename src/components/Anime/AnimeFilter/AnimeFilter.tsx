import React, { ChangeEvent, memo, useEffect, useRef, useState, MouseEvent } from "react";
import Select, { components, MultiValue, SingleValue } from "react-select";
import classes from "./AnimeFilter.module.scss";
import "./react-select.scss";
import makeAnimated from "react-select/animated";
import * as CONSTANTS from "./constants";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { formatFilterValues } from "../../../helpers/helpers";
import { getCurrentYear, getFilterOptionsSingle, getFilterOptionsMulti, deleteEmptyProperties } from "../../../utils/utils";
import useDebounce from "../../../hooks/useDebounce";
import { IFilterOption } from "../../../types/types";
import Title from "../../../UI/Title/Title";

import { GiSettingsKnobs } from "react-icons/gi";
import MyInput from "../../../UI/MyInput/MyInput";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { defaultFilterParams } from "../../../store/reducers/filter/filterReducer";
import { useNavigate } from "react-router-dom";

let tempParams: IAnimeSearchParams = defaultFilterParams;

const AnimeFilter = memo(() => {
   const dispatch = useDispatch();
   const { params } = useTypedSelector((state) => state.filter);
   const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
   const [value, setValue] = useState<string>(tempParams.q || "");
   //    const debouncedParams = useDebounce(setParams, 300);
   const debouncedSearch = useDebounce(searchAnime, 400);
   const navigate = useNavigate();

   const animatedComponents = makeAnimated();

   const yearFrom = useRef<HTMLInputElement>(null);
   const yearTo = useRef<HTMLInputElement>(null);
   const scoreFrom = useRef<HTMLInputElement>(null);
   const scoreTo = useRef<HTMLInputElement>(null);

   //    function setParams(obj: IAnimeSearchParams) {
   //       dispatch(FilterActionCreators.addParams(obj));
   //    }

   const handlerClickClear = () => {
      navigate("/anime");
      tempParams = defaultFilterParams;
      dispatch(FilterActionCreators.clearFilterParams());
      if (yearFrom.current) yearFrom.current.value = "";
      if (yearTo.current) yearTo.current.value = "";
      if (scoreFrom.current) scoreFrom.current.value = "";
      if (scoreTo.current) scoreTo.current.value = "";
      setValue("");
      window.scrollTo(0, 0);
   };

   const handleClearSearch = () => {
      navigate("/anime");
      setValue("");
      debouncedSearch("");
   };

   const handlerSelectSingleChange = (option: SingleValue<IFilterOption>, paramValue: string): void => {
      navigate("/anime");
      let value = option ? option.value : "";
      let obj = { [paramValue]: value };

      tempParams = { ...tempParams, ...obj };

      let finalParams = { ...params, ...tempParams };
      finalParams = deleteEmptyProperties(finalParams);

      dispatch(FilterActionCreators.setParams(finalParams));

      //   dispatch(FilterActionCreators.addParams(obj));
      //   console.log(tempParams);
   };

   const handlerSelectMultiChange = (options: MultiValue<IFilterOption>, paramValue: string, context: any): void => {
      navigate("/anime");
      let obj = { [paramValue]: formatFilterValues(options) };
      //   console.log(obj);

      tempParams = { ...tempParams, ...obj };
      //   tempParams = deleteEmptyProperties(tempParams);
      //   setParams(obj);
      let finalParams = { ...params, ...tempParams };
      finalParams = deleteEmptyProperties(finalParams);

      dispatch(FilterActionCreators.setParams(finalParams));
   };

   //    const handlerSelectChange = (optionList: MultiValue<IFilterOption>, paramValue: string): void => {
   //       optionList.length
   //          ? dispatch(FilterActionCreators.addParams({ [paramValue]: formatFilterValues(optionList) }))
   //          : dispatch(FilterActionCreators.addParams({ [paramValue]: "" }));
   //    };

   //    function changeParams(param: IAnimeSearchParams): void {
   //       tempParams = { ...tempParams, ...param };
   //       dispatch(FilterActionCreators.addParams(param));
   //    }

   const handleClick = (e: MouseEvent): void => {
      e.stopPropagation();
      setIsMenuVisible((prev) => !prev);
   };

   const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
      navigate("/anime");

      setValue(e.target.value);
      debouncedSearch(e.target.value);
   };

   //    function handlerChange(e: ChangeEvent<HTMLInputElement>, paramValue: string, defaultValue: number = 0) {
   //       debouncedParams({ [paramValue]: e.target.value ? e.target.value : defaultValue });
   //    }

   const handlerDocumentClick = (e: Event): void => {
      setIsMenuVisible(false);
   };

   function searchAnime(newValue: string) {
      tempParams = { ...tempParams, q: newValue };
      let finalParams = { ...params, ...tempParams };
      finalParams = deleteEmptyProperties(finalParams);
      dispatch(FilterActionCreators.setParams(finalParams));
   }

   //    useEffect(() => {
   //       if (tempParams.q || (!tempParams.q && value)) debouncedSearch(value);
   //    }, [value]);

   useEffect(() => {
      document.addEventListener("click", handlerDocumentClick);
      tempParams = { ...params };
      setValue(tempParams.q || "");
      //   setValue(params.q || "");
      return () => document.removeEventListener("click", handlerDocumentClick);
   }, []);

   useEffect(() => {
      //   console.log("---------------");

      //   console.log(params);
      //   console.log(tempParams);

      if (JSON.stringify(params) !== JSON.stringify(tempParams)) tempParams = { ...params };
      if (!tempParams.q) setValue("");
      else if (value !== tempParams.q) setValue(tempParams.q);
   }, [params]);

   return (
      <div className={classes["filter"]}>
         <div className={classes["filter__container"]}>
            <div className={classes["filter__row"]}>
               <label>
                  Search
                  <div className={classes["filter__search"]}>
                     <AiOutlineSearch />
                     <input type="text" value={value} onChange={handleSearch} />
                     {value && <GrFormClose onClick={handleClearSearch} />}
                  </div>
               </label>
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
                     isClearable={false}
                     components={components}
                     //  components={animatedComponents}
                     onChange={(options, context) => handlerSelectMultiChange(options, "genres", context)}
                     openMenuOnClick={true}
                     //  onMenuClose={false}
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

               <button className={classes["filter__clear"]} onClick={handlerClickClear}>
                  Clear
               </button>

               <div className={classes["filter__options"]} onClick={handleClick}>
                  <GiSettingsKnobs />
                  <div
                     className={
                        isMenuVisible
                           ? [classes["filter__menu"], classes["menu"], classes["visible"]].join(" ")
                           : [classes["filter__menu"], classes["menu"]].join(" ")
                     }
                     onClick={(e) => e.stopPropagation()}
                  >
                     <div className={classes["menu__options"]}>
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
                        <label>
                           Producers
                           <Select
                              value={getFilterOptionsMulti(CONSTANTS.filterProducersOptions, tempParams.producers || "")}
                              closeMenuOnSelect={true}
                              options={CONSTANTS.filterProducersOptions}
                              classNamePrefix={"custom-select"}
                              placeholder={"Any"}
                              isMulti={true}
                              isClearable={true}
                              //   components={animatedComponents}
                              onChange={(options, context) => handlerSelectMultiChange(options, "producers", context)}
                           />
                        </label>
                     </div>
                     {/* <div className={classes["menu__sliders"]}>
                        <InputRange
                           options={{
                              title: "Year Range",
                              defaultValues: [1970, getCurrentYear() || 2023],
                              minValue: 1970,
                              maxValue: getCurrentYear() || 2023,
                           }}
                        />
                        <InputRange options={{ title: "Score Range", defaultValues: [0, 10], minValue: 0, maxValue: 10 }} />
                     </div> */}

                     {/* <input
                           ref={yearFrom}
                           className={classes["input"]}
                           defaultValue={params.start_date ? params.start_date : ""}
                           type="text"
                           placeholder={"From"}
                           //    onChange={(e) => handlerChange(e, "start_date", 0)}
                        />
                        <input
                           ref={yearTo}
                           className={classes["input"]}
                           defaultValue={params.end_date ? params.end_date : ""}
                           type="text"
                           placeholder={"To"}
                           //    onChange={(e) => handlerChange(e, "end_date", getCurrentYear() + 1)}
                        /> */}
                  </div>
               </div>
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
