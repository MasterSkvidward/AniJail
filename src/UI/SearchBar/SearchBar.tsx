import React, {useRef} from 'react';
import classes from './SearchBar.module.scss';
import MyInput from '../MyInput/MyInput';

const SearchBar = () => {
    const placeholder:string = 'Search anime...'
    const search = useRef<HTMLFormElement>(null);

    const handleClick = () => {
        search.current?.classList.add(classes.focused);
    }

    return (
       <form ref={search} className={classes.search} onClick={handleClick}>
            <MyInput placeholder={placeholder}/>
            <div className={classes.search__loupe}>
                 <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 96 960 960" width="48"><path d="M790.231 914.923 533.154 657.846q-30.696 26.829-72.261 40.414-41.564 13.586-81.147 13.586-102.023 0-171.231-69.028-69.208-69.029-69.208-170.001 0-100.971 69.029-170.125t169.441-69.154q100.411 0 170.509 69.065 70.099 69.066 70.099 169.961 0 42.205-14.269 82.321-14.27 40.115-40.731 70.73l258.308 257.077-31.462 32.231ZM378.577 668.077q83.16 0 139.599-56.023 56.439-56.022 56.439-139.362 0-83.339-56.35-139.362-56.351-56.022-139.6-56.022-83.441 0-139.514 56.022-56.074 56.023-56.074 139.362 0 83.34 56.074 139.362 56.073 56.023 139.426 56.023Z"/></svg>
            </div>
            <div className={classes.search__list}>Nothing yet...</div>
       </form>
    );
}

export default SearchBar;