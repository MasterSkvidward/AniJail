import React, {useRef, FC} from 'react';
import classes from './SearchBar.module.scss';
import MyInput from '../MyInput/MyInput';
import {AiOutlineSearch} from 'react-icons/ai';


const SearchBar:FC = () => {
    const placeholder:string = 'Search anime...'
    const search = useRef<HTMLFormElement>(null);

    const handleClick = () => {
        search.current?.classList.add(classes.focused);
    }

    return (
       <form ref={search} className={classes.search} onClick={handleClick}>
            <MyInput placeholder={placeholder}/>
            <div className={classes.search__loupe}>
                <AiOutlineSearch/>
            </div>
            <div className={classes.search__list}>Nothing yet...</div>
       </form>
    );
}

export default SearchBar;