import React, {FC, useState, useEffect, useRef, MouseEvent} from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { ISelectOption } from '../../types/userInteface';
import classes from './MySelect.module.scss';
import {BsFilterLeft} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Dispatch } from 'redux';
import {AiOutlineSortAscending} from 'react-icons/ai';
import {AiOutlineSortDescending} from 'react-icons/ai';
import { useComponentDidMount } from '../../hooks/useComponentDidMount';

interface MySelectProps {
    options: ISelectOption[];
    selectedOption?: number;
}

const MySelect:FC<MySelectProps> = ({options}) => {
    const dispatch = useDispatch();
    const {selectedOptionNumber, params} = useTypedSelector(state => state.filter); 
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const MySelect = useRef<HTMLDivElement>(null);

    const handlerDocumentClick = (e: Event):void => {
        setIsVisible(false);
    }

    const handlerButtonClick = (e: MouseEvent):void => {
        e.preventDefault();
        setIsVisible(!isVisible);
        e.stopPropagation();
    }

    const handlerClickSort = () => {
        const param = (params.sort === 'desc') ? 'asc' : 'desc';
        dispatch(FilterActionCreators.addParams({sort: param}))
    }

    const handlerOptionClick = (e: MouseEvent, index: number):void => {
        const sortParams = {
            order_by: options[index].order_by,
            sort: options[index].sort
        }

        dispatch(FilterActionCreators.setSelectedOptionNumber(index));
        setIsVisible(false);
        dispatch(FilterActionCreators.setParams(sortParams));
    }

    useEffect(() => {
        document.addEventListener('click', handlerDocumentClick);
        return () => document.removeEventListener("click",  handlerDocumentClick);
    }, [])


    return (
        <div className={classes.MySelect} ref={MySelect}>
            <div className={classes['MySelect__body']} onClick={handlerButtonClick}>
                <BsFilterLeft/>
                <button className={classes['MySelect__btn']}>{options[selectedOptionNumber].name}</button>
                <MdOutlineKeyboardArrowDown className={isVisible? [classes['arrow'], classes['rotate']].join(' '): classes['arrow']}/>
            </div>
            <div className={classes['sortArrow']} onClick={handlerClickSort}>
                {params.sort === 'desc'
                    ? <AiOutlineSortDescending/>
                    : <AiOutlineSortAscending/>
                }
            </div>
            <div className={isVisible? [classes['MySelect__options'], classes['active']].join(' '): classes['MySelect__options']}>
                {options.map((option, index) =>
                    <div 
                        className={index === selectedOptionNumber? [classes['MySelect__option'], classes['selected']].join(' ') : classes['MySelect__option']}
                        onClick={(e) => handlerOptionClick(e, index)}
                        key={index}
                        >{option.name}
                    </div>
                )}
            </div>
         </div>
    )
}

export default MySelect;