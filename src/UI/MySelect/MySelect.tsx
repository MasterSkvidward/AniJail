import React, { FC, useState, useEffect, useRef, MouseEvent, memo } from "react";
import { useDispatch } from "react-redux";
import { FilterActionCreators } from "../../store/reducers/filter/action-creatores";
import { ISelectOption } from "../../types/user-inteface";
import classes from "./MySelect.module.scss";
import { BsFilterLeft } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Dispatch } from "redux";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";
import { useComponentDidMount } from "../../hooks/useComponentDidMount";

interface selectProps {
   options: ISelectOption[];
}

const select: FC<selectProps> = memo(({ options }) => {
   const dispatch = useDispatch();
   const { selectedOptionNumber, params } = useTypedSelector((state) => state.filter);
   const [isVisible, setIsVisible] = useState<boolean>(false);

   const select = useRef<HTMLDivElement>(null);

   const handlerDocumentClick = (e: Event): void => {
      setIsVisible(false);
   };

   const handlerButtonClick = (e: MouseEvent): void => {
      e.preventDefault();
      setIsVisible(!isVisible);
      e.stopPropagation();
   };

   //    const getSelectedOptionNumber = (params, )

   const handlerClickSort = () => {
      const param = params.sort === "desc" ? "asc" : "desc";
      dispatch(FilterActionCreators.addParams({ sort: param, page: 1 }));
   };

   const handlerOptionClick = (e: MouseEvent, index: number): void => {
      const sortParams = {
         order_by: options[index].order_by,
         sort: options[index].sort,
         page: 1,
      };

      dispatch(FilterActionCreators.setSelectedOptionNumber(index));
      setIsVisible(false);
      dispatch(FilterActionCreators.addParams(sortParams));
   };

   useEffect(() => {
      document.addEventListener("click", handlerDocumentClick);
      return () => document.removeEventListener("click", handlerDocumentClick);
   }, []);

   return (
      <div className={classes.select} ref={select}>
         <div className={classes["select__body"]}>
            {/* <BsFilterLeft /> */}
            <div className={classes["sortArrow"]} onClick={handlerClickSort}>
               {params.sort === "desc" ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}
            </div>
            <button className={classes["select__btn"]} onClick={handlerButtonClick}>
               {options[selectedOptionNumber].name}
            </button>
            {/* <MdOutlineKeyboardArrowDown
               className={isVisible ? [classes["arrow"], classes["rotate"]].join(" ") : classes["arrow"]}
            /> */}
         </div>

         <div className={isVisible ? [classes["select__options"], classes["active"]].join(" ") : classes["select__options"]}>
            {options.map((option, index) => (
               <div
                  className={
                     index === selectedOptionNumber
                        ? [classes["select__option"], classes["selected"]].join(" ")
                        : classes["select__option"]
                  }
                  onClick={(e) => handlerOptionClick(e, index)}
                  key={index}
               >
                  {option.name}
               </div>
            ))}
         </div>
      </div>
   );
});

export default select;
