import { useState, ChangeEvent, Dispatch, SetStateAction, FC, KeyboardEventHandler } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import classes from "./SearchInput.module.scss";

interface SearchInputProps {
    value: string
    setValue: Dispatch<SetStateAction<string>>
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    styles?: {}
    [x:string]: any;
}

const SearchInput:FC<SearchInputProps> = ({value, setValue, styles, onKeyDown, ...props}) => {
//    const [value, setValue] = useState<string>("");

   const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
   };

   return (
      <div className={classes["search"]}>
         <AiOutlineSearch />
         <input type="text" onChange={handleSearch} value={value} style={styles} onKeyDown={onKeyDown ? onKeyDown : () => {}} {...props}/>
         {value && <GrFormClose onClick={() => setValue("")} />}
      </div>
   );
};

export default SearchInput;
