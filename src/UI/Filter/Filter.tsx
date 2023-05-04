import React, { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import Select, { MultiValue } from 'react-select';
import classes from './Filter.module.scss';
import {RxCross1} from 'react-icons/rx';
import makeAnimated from 'react-select/animated';
import { filterTypeOptions, filterGenreOptions, filterAgeOptions, filterStatusOptions } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { IAnimeSearchParams } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { formatFilterValues } from '../../utils/utils';
import { getCurrentYear, getFilterOptions } from '../../utils/utils';
import useDebounce from '../../hooks/useDebounce';
import { IFilterOption } from '../../types/types';



const Filter = memo(() => {
    const dispatch = useDispatch();
    const {params} = useTypedSelector(state => state.filter);
    const debouncedParams = useDebounce(changeParams, 500);
    const animatedComponents = makeAnimated();

    const yearFrom = useRef<HTMLInputElement>(null);
    const yearTo = useRef<HTMLInputElement>(null);
    const scoreFrom = useRef<HTMLInputElement>(null);
    const scoreTo = useRef<HTMLInputElement>(null);

    const handlerClickClear = () => {
        dispatch(FilterActionCreators.clearFilterParams());
        if (yearFrom.current) yearFrom.current.value = '';
        if (yearTo.current) yearTo.current.value = '';
        if (scoreFrom.current) scoreFrom.current.value = '';
        if (scoreTo.current) scoreTo.current.value = '';
    }
    
    const handlerSelectChange = (optionList: MultiValue<IFilterOption>, paramValue: string):void => {
        optionList.length
            ? dispatch(FilterActionCreators.addParams({[paramValue]: formatFilterValues(optionList)}))
            : dispatch(FilterActionCreators.addParams({[paramValue]: ''}));
    }

    function changeParams(param: IAnimeSearchParams):void {
        dispatch(FilterActionCreators.addParams(param))
    }

    function handlerChange (e:ChangeEvent<HTMLInputElement>, paramValue:string) {
        debouncedParams({[paramValue]: e.target.value});
    }


    return (
       <div className={classes['filter']}>
            <div className={classes['filter__row']}>
                <h3 className={classes['filter__title']}>Filters</h3>
                <div className={classes['filter__clear']} onClick={handlerClickClear}>
                    <h3 className={classes['filter__clear_title']}>CLEAR</h3>
                    <RxCross1 className={classes['filter__clear_cross']}/>
                </div>
            </div>

            <div className={classes['filter__column']}>
                <Select value={getFilterOptions(filterTypeOptions, params.type ? params.type : '')} closeMenuOnSelect={true} options={filterTypeOptions} classNamePrefix={'custom-select'} placeholder={'Type'} isMulti={true} components={animatedComponents} onChange={(optionList) => handlerSelectChange(optionList, 'type')}/>
                <Select value={getFilterOptions(filterGenreOptions, params.genres ? params.genres : '')} closeMenuOnSelect={true} options={filterGenreOptions} classNamePrefix={'custom-select'} placeholder={'Genres'} isMulti={true} components={animatedComponents} onChange={(optionList) => handlerSelectChange(optionList, 'genres')}/>
                <Select value={getFilterOptions(filterAgeOptions, params.rating ? params.rating : '')} closeMenuOnSelect={true} options={filterAgeOptions} classNamePrefix={'custom-select'} placeholder={'Age rating'} isMulti={true} components={animatedComponents} onChange={(optionList) => handlerSelectChange(optionList, 'rating')}/>
                <Select value={getFilterOptions(filterStatusOptions, params.status ? params.status : '')} closeMenuOnSelect={true} options={filterStatusOptions} classNamePrefix={'custom-select'} placeholder={'Status'} isMulti={true} components={animatedComponents} onChange={(optionList) => handlerSelectChange(optionList, 'status')}/>
                <h3 className={classes['filter__block']}>Year</h3>
                <div className={classes['filter__block_inputs']}>
                    <input ref={yearFrom} className={classes['input']} defaultValue={params.start_date? params.start_date : ''} type="text" placeholder={'From'} onChange={(e) => handlerChange(e, 'start_date')}/>
                    <input ref={yearTo} className={classes['input']} defaultValue={params.end_date? params.end_date : ''} type="text" placeholder={'To'} onChange={(e) => handlerChange(e, 'end_date')}/>
                </div>

                <h3 className={classes['filter__block']}>Score</h3>
                <div className={classes['filter__block_inputs']}>
                    <input ref={scoreFrom} className={classes['input']} defaultValue={params.min_score? params.min_score : ''} type="text" placeholder={'From'} onChange={(e) => handlerChange(e, 'min_score')}/>
                    <input ref={scoreTo} className={classes['input']} defaultValue={params.max_score? params.max_score : ''} type="text" placeholder={'To'} onChange={(e) => handlerChange(e, 'max_score')}/>
                </div>
            </div>
       </div>
    );
})

export default Filter;