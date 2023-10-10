import React, { useRef, useState, useEffect, FocusEvent } from "react";
import classes from "./AnimeSearch.module.scss";

import MyInput from "../../../UI/MyInput/MyInput";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimeService } from "../../../services/AnimeService";
import useDebounce from "../../../hooks/useDebounce";
import { IAnimeSearchParams } from "../../../types/jikanMoe/jikan";
import { IAnime } from "../../../types/jikanMoe/jikan";

const AnimeSearch = () => {
  const search = useRef<HTMLFormElement>(null);
  const [value, setValue] = useState<string>("");
  const [animeItems, setAnimeItems] = useState<IAnime[] | []>([]);

  const debouncedSearch = useDebounce(searchAnime, 400);

  async function searchAnime() {
    const response = await AnimeService.getAnimeBySearch(searchParams);
    setAnimeItems(response.data);
  }

  const searchParams: IAnimeSearchParams = {
    q: value,
    order_by: "score",
    sort: "desc",
    limit: 15,
    sfw: false,
  };

  const handlerFocus = (e: FocusEvent<HTMLFormElement>): void => {
    e.preventDefault();
    search.current?.classList.add(classes.focused);
    e.stopPropagation();
  };

  const handlerBlur = (e: FocusEvent<HTMLFormElement>): void => {
    e.preventDefault();
    search.current?.classList.remove(classes.focused);
    e.stopPropagation();
  };

  useEffect(() => {
    debouncedSearch();
  }, []);

  return (
    <form
      ref={search}
      className={classes["search"]}
      onSubmit={() => false}
      onFocus={handlerFocus}
      onBlur={handlerBlur}
    >
      <MyInput setValue={setValue} placeholder={"Search anime..."} />
      <div className={classes["search__loupe"]}>
        <AiOutlineSearch />
      </div>
    </form>
  );
};

export default AnimeSearch;
