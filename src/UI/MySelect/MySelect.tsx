import React, {FC, useState, useEffect, useRef, MouseEvent} from 'react';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { ISelectOption } from '../../types/userInteface';
import classes from './MySelect.module.scss';
import {BsFilterLeft} from 'react-icons/bs'

interface MySelectProps {
    options: ISelectOption[];
    selectedOption: number;
}

const MySelect:FC<MySelectProps> = ({options, selectedOption}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(selectedOption);
    const MySelect = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const handlerDocumentClick = (e: Event):void => {
        setIsVisible(false);
    }

    const handlerButtonClick = (e: MouseEvent):void => {
        e.preventDefault();
        setIsVisible(!isVisible);
        e.stopPropagation();
    }

    const handlerOptionClick = (e: MouseEvent, index: number):void => {
        setSelectedIndex(index);
        setIsVisible(false);
        dispatch(FilterActionCreators.setAnime({order_by: options[index].order_by, sort: options[index].sort}));
    }

    useEffect(() => {
        document.addEventListener('click', handlerDocumentClick);
        return () => document.removeEventListener("click",  handlerDocumentClick);
    }, [])

    return (
        <div className={classes.MySelect} ref={MySelect}>
            <div className={classes['MySelect__body']} onClick={handlerButtonClick}>
                <BsFilterLeft/>
                <button
                    className={classes['MySelect__btn']}
                >{options[selectedIndex].name}
                </button>
            </div>
            <div className={isVisible? [classes['MySelect__options'], classes['active']].join(' '): classes['MySelect__options']}>
                {options.map((option, index) =>
                    <div 
                        className={index === selectedIndex? [classes['MySelect__option'], classes['selected']].join(' ') : classes['MySelect__option']}
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