import { useState, MouseEvent } from "react";
import { defaultFilterParams } from "../../../store/reducers/filter/filterReducer";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { deleteEmptyProperties, getFilterOptionsMulti, getFilterOptionsSingle } from "../../../utils/utils";
import Select, { components, MultiValue, SingleValue } from "react-select";
import classes from "./ProfileFilter.module.scss";
import { filterAgeOptions, filterGenreOptions, filterStatusOptions, filterTypeOptions } from "./constants";
import { formatFilterValues } from "../../../helpers/helpers";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FilterActionCreators } from "../../../store/reducers/filter/action-creatores";
import { useDispatch } from "react-redux";
import { IFilterOption } from "../../../types/types";
import makeAnimated from "react-select/animated";

export const profileFilterLinks = [
   { label: "All", accessor: "all", amount: 500 },
   { label: "Watching", accessor: "watching", amount: 5 },
   { label: "Planned", accessor: "planned", amount: 153 },
   { label: "Completed", accessor: "completed", amount: 331 },
   { label: "Favourite", accessor: "favourite", amount: 8 },
   { label: "Dropped", accessor: "dropped", amount: 50 },
];

let tempParams: IAnimeSearchParams = defaultFilterParams;

const ProfileFilter = () => {
   const [activeLink, setActiveLink] = useState<string>("all");
   const { params } = useTypedSelector((state) => state.filter);
   const dispatch = useDispatch();

   const animatedComponents = makeAnimated();

   const handleClick = (e: MouseEvent, accessor: string): void => {
      setActiveLink(accessor);
   };

   const handlerClickClear = () => {
    tempParams = defaultFilterParams;
    dispatch(FilterActionCreators.clearFilterParams());
    // window.scrollTo(0, 0);
 };

   const handlerSelectMultiChange = (options: MultiValue<IFilterOption>, paramValue: string, context: any): void => {
      let obj = { [paramValue]: formatFilterValues(options) };
      console.log(obj);

      tempParams = { ...tempParams, ...obj };
      //   tempParams = deleteEmptyProperties(tempParams);
      //   setParams(obj);
      let finalParams = { ...params, ...tempParams };
      finalParams = deleteEmptyProperties(finalParams);

      dispatch(FilterActionCreators.setParams(finalParams));
   };

   const handlerSelectSingleChange = (option: SingleValue<IFilterOption>, paramValue: string): void => {
      let value = option ? option.value : "";
      let obj = { [paramValue]: value };

      tempParams = { ...tempParams, ...obj };

      let finalParams = { ...params, ...tempParams };
      finalParams = deleteEmptyProperties(finalParams);

      dispatch(FilterActionCreators.setParams(finalParams));

      //   dispatch(FilterActionCreators.addParams(obj));
      //   console.log(tempParams);
   };

   return (
      <div className={classes["filter"]}>
         <ul className={classes["filter__folders"]}>
            {profileFilterLinks.map((link, index) => (
               <li
                  className={
                     link.accessor === activeLink
                        ? [classes["filter__folder"], classes["filter__folder_active"]].join(" ")
                        : classes["filter__folder"]
                  }
                  key={index}
                  onClick={(e) => handleClick(e, link.accessor)}
               >
                  <p>{link.label}</p>
                  <span>{link.amount || 0}</span>
               </li>
            ))}
         </ul>
         <div className={classes["filter__block"]}>
            <h3 className={classes["filter__title"]}>Filters</h3>
            <div className={classes["filter__selects"]}>
               <Select
                  value={getFilterOptionsSingle(filterTypeOptions, tempParams.type || "")}
                  closeMenuOnSelect={true}
                  options={filterTypeOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Type"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "type")}
               />

               <Select
                  value={getFilterOptionsMulti(filterGenreOptions, tempParams.genres || "")}
                  closeMenuOnSelect={true}
                  options={filterGenreOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Genres"}
                  isMulti={true}
                  hideSelectedOptions={false}
                  isClearable={false}
                  components={components}
                  //  components={animatedComponents}
                  onChange={(options, context) => handlerSelectMultiChange(options, "genres", context)}
                  openMenuOnClick={true}
                  //  onMenuClose={false}
               />
               <Select
                  value={getFilterOptionsSingle(filterAgeOptions, tempParams.rating || "")}
                  closeMenuOnSelect={true}
                  options={filterAgeOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Age Rating"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "rating")}
               />
               <Select
                  value={getFilterOptionsSingle(filterStatusOptions, tempParams.status || "")}
                  closeMenuOnSelect={true}
                  options={filterStatusOptions}
                  classNamePrefix={"custom-select"}
                  placeholder={"Status"}
                  isMulti={false}
                  isClearable={true}
                  components={animatedComponents}
                  onChange={(option) => handlerSelectSingleChange(option, "status")}
               />

               <button className={classes["filter__clear"]} onClick={handlerClickClear}>
                  Clear
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProfileFilter;
