import React, { useState } from 'react';
import glass from '../../assets/png/search.png';
import cross from '../../assets/svg/cross.svg'
import './search.scss';

type Props = {
  searchName: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  searchState: boolean,
  onclick2:React.MouseEventHandler<HTMLButtonElement>
}
export const Search = ({searchName,onClick,searchState,onclick2}: Props) =>
  (
  <div className={searchName} >
    <button onClick={onClick} data-test-id='button-search-open' type='button' className={searchState? 'searchButton_unactive' : 'searchButton'}><label className='button__search_label' htmlFor="searchBtn"> </label> </button>
    <input data-test-id='input-search'   id='searchBtn' className={searchState? 'search__field_active': 'search__field'} type='text' placeholder='Поиск книги или автора…'  />
    <img src={glass} alt='glass' className='search__img' />
    <button data-test-id='button-search-close' type='button' onClick={onclick2} className={searchState? 'closeButton-active':'closeButton'}> </button>


  </div>
);
