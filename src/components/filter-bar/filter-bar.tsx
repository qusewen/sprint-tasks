import React, { useState } from 'react';
import { Filter } from '../filter/filter';
import { Search } from '../search/search';
import { SquareFilter } from '../square-filter/square-filter';
import './filter-bar.scss';

type Props ={
  filterClick: React.MouseEventHandler<HTMLButtonElement>,
  filterSecondClick: React.MouseEventHandler<HTMLButtonElement>
  sortClick:React.MouseEventHandler<HTMLButtonElement>,
  onInput:React.FormEventHandler,
  onFocus:React.FormEventHandler,
  onBlur:React.FormEventHandler,
}
export const FilterBar = ({ filterClick, filterSecondClick, sortClick, onInput, onFocus,onBlur }: Props) => {
  const [searchState, setSearchState] = useState(false)
  const handleSearch =()=>{
    setSearchState(true)
  }
  const handleClose = () => {
    setSearchState(false)
  }
  return(
  <div className='filter__bar'>
<div className='filter__bar-item'>
<Search onBlur={onBlur} onFocus={onFocus}  onInput={onInput} searchName={searchState? ' search search_on':'search'} onClick={handleSearch} onclick2={handleClose}  searchState={searchState}/>
    <Filter sortClick={sortClick} filterName={searchState? 'filter_off':'select'} />
</div>
    <SquareFilter squareName={searchState? 'filter_off':'square'} filterClick={filterClick} filterSecondClick={filterSecondClick} />
  </div>
)};
