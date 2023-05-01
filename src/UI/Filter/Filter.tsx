import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import Select from 'react-select';

import classes from './Filter.module.scss';
import {RxCross1} from 'react-icons/rx';
import makeAnimated from 'react-select/animated';
import { filterTypeOptions, filterGenreOptions, filterAgeOptions, filterStatusOptions } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { IAnimeSearchParams } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { formatFilterValues } from '../../utils/utils';
import MyInputFilter from '../MyInputFilter/MyInputFilter';
import { getCurrentYear } from '../../utils/utils';
import useDebounce from '../../hooks/useDebounce';



const Filter = memo(() => {
    const dispatch = useDispatch();
    // const [defaultParams, setDefaultParams] = useState<IAnimeSearchParams>(defaultFilterParams);
    const {params} = useTypedSelector(state => state.filter);
    const debouncedParams = useDebounce(changeParams, 500);
    const animatedComponents = makeAnimated();

    const handlerClickClear = () => {
        dispatch(FilterActionCreators.clearFilterParams());
    }

    
    const handlerTypeChange = (typeList: any):void => {
        if (typeList.length) {
            const typeOptions = formatFilterValues(typeList);
            dispatch(FilterActionCreators.addParams({type: typeOptions}));
        } else {
            dispatch(FilterActionCreators.addParams({type: ''}));
        }
    }

    const handlerGenreChange = (genreList: any):void => {
        if (genreList.length) {
            const genreOptions = formatFilterValues(genreList);
            dispatch(FilterActionCreators.addParams({genres: genreOptions}));
        } else {
            dispatch(FilterActionCreators.addParams({genres: ''}));
        }
    }

    const handlerAgeChange = (ageList: any):void => {

        if (ageList.length) {
            const ageOptions = formatFilterValues(ageList);
            dispatch(FilterActionCreators.addParams({rating: ageOptions}));
        } else {
            dispatch(FilterActionCreators.addParams({rating: ''}));
        }
    }

    const handlerStatusChange = (statusList: any):void => {

        if (statusList.length) {
            const statusOptions = formatFilterValues(statusList);
            dispatch(FilterActionCreators.addParams({status: statusOptions}));
        } else {
            dispatch(FilterActionCreators.addParams({status: ''}));
        }
    }


    function changeParams(param: IAnimeSearchParams):void {
        dispatch(FilterActionCreators.addParams(param))
    }

    function handlerYearFromChange(e: ChangeEvent<HTMLInputElement>):void {
        debouncedParams({start_date: e.target.value})
    }

    function handlerYearToChange(e: ChangeEvent<HTMLInputElement>):void {
        debouncedParams({end_date: e.target.value});
    }

    function handlerScoreFromChange(e: ChangeEvent<HTMLInputElement>):void {
        debouncedParams({min_score: e.target.value})
    }

    const handlerScoreToChange = (e: ChangeEvent<HTMLInputElement>):void => {
        debouncedParams({max_score: e.target.value});
    }

    // useEffect(() => {
    //     setDefaultParams(params);
    // }, [])

    // useEffect(() => {
    //     console.log(params.start_date + 'params1');
    //     console.log(params.end_date + 'params2');
        
    // }, [params])


    return (
       <div className={classes['filter']}>
            <div className={classes['filter__row']}>
                <h3 className={classes['filter__title']}>Filters</h3>
                <div className={classes['filter__clear']} onClick={handlerClickClear}>
                    <h3 className={classes['filter__clear_title']}>Clear</h3>
                    <RxCross1 className={classes['filter__clear_cross']}/>
                </div>
            </div>

            <div className={classes['filter__column']}>
                <Select closeMenuOnSelect={true} options={filterTypeOptions} classNamePrefix={'custom-select'} placeholder={'Type'} isMulti={true} components={animatedComponents} onChange={handlerTypeChange}/>
                <Select closeMenuOnSelect={true} options={filterGenreOptions} classNamePrefix={'custom-select'} placeholder={'Genres'} isMulti={true} components={animatedComponents} onChange={handlerGenreChange}/>
                <Select closeMenuOnSelect={true} options={filterAgeOptions} classNamePrefix={'custom-select'} placeholder={'Age rating'} isMulti={true} components={animatedComponents} onChange={handlerAgeChange}/>
                <Select closeMenuOnSelect={true} options={filterStatusOptions} classNamePrefix={'custom-select'} placeholder={'Status'} isMulti={true} components={animatedComponents} onChange={handlerStatusChange}/>
                <h3 className={classes['filter__year']}>Year</h3>
                <div className={classes['filter__year_inputs']}>
                    <input className={classes['input']} defaultValue={params.start_date? params.start_date : ''} type="text" placeholder={'From'} onChange={handlerYearFromChange}/>
                    <input className={classes['input']} defaultValue={params.end_date? params.end_date : ''} type="text" placeholder={'To'} onChange={handlerYearToChange}/>
                </div>

                <h3 className={classes['filter__year']}>Score</h3>
                <div className={classes['filter__year_inputs']}>
                    <input className={classes['input']} defaultValue={params.min_score? params.min_score : ''} type="text" placeholder={'From'} onChange={handlerScoreFromChange}/>
                    <input className={classes['input']} defaultValue={params.max_score? params.max_score : ''} type="text" placeholder={'To'} onChange={handlerScoreToChange}/>
                </div>
            </div>
       </div>
    );
})

export default Filter;