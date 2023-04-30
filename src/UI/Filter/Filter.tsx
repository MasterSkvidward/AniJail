import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import classes from './Filter.module.scss';
import {RxCross1} from 'react-icons/rx';
import makeAnimated from 'react-select/animated';
import { filterTypeOptions } from '../../utils/data';
import { useDispatch } from 'react-redux';
import { FilterActionCreators } from '../../store/reducers/filter/action-creatores';
import { IAnimeSearchParams } from '../../types/jikan';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { defaultFilterParams } from '../../utils/data';
import { formatFilterValues } from '../../utils/utils';
import { filterAgeOptions } from '../../utils/data';
import MyInputFilter from '../MyInputFilter/MyInputFilter';
import { getCurrentYear } from '../../utils/utils';


const Filter = () => {
    const dispatch = useDispatch();
    const [defaultParams, setDefaultParams] = useState<IAnimeSearchParams>(defaultFilterParams);
    const {params} = useTypedSelector(state => state.filter);


    const animatedComponents = makeAnimated();
    
    const handlerTypeChange = (newType: any):void => {
        if (newType.length) {
            const typeOptions = formatFilterValues(newType);
            dispatch(FilterActionCreators.addParams({type: typeOptions}));

        } else {
            dispatch(FilterActionCreators.addParams({type: ''}));
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

    useEffect(() => {
        setDefaultParams(params);
    }, [])


    return (
       <div className={classes['filter']}>
            <div className={classes['filter__row']}>
                <h3 className={classes['filter__title']}>Filters</h3>
                <div className={classes['filter__clear']}>
                    <h3 className={classes['filter__clear_title']}>Clear</h3>
                    <RxCross1 className={classes['filter__clear_cross']}/>
                </div>
            </div>

            <div className={classes['filter__column']}>
                <Select options={filterTypeOptions} classNamePrefix={'custom-select'} placeholder={'Type'} isMulti={true} components={animatedComponents} onChange={handlerTypeChange}/>
                <Select options={filterTypeOptions} classNamePrefix={'custom-select'} placeholder={'Genres'} isMulti={true} components={animatedComponents} onChange={handlerTypeChange}/>
                <Select options={filterAgeOptions} classNamePrefix={'custom-select'} placeholder={'Age rating'} isMulti={true} components={animatedComponents} onChange={handlerAgeChange}/>
                <h3 className={classes['filter__year']}>Release Year</h3>
                <div className={classes['filter__year_inputs']}>
                    {/* <MyInputFilter placeholder='From' maxValue={getCurrentYear()} pattern={new RegExp(/[0-9]$/)} value={params.start_date}/>
                    <MyInputFilter placeholder='To' maxValue={getCurrentYear()} pattern={new RegExp(/[0-9]$/)} value={params.end_date} setValue={setYearFrom}/> */}
                </div>
            </div>
       </div>
    );
}

export default Filter;