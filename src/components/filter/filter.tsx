import React from 'react';
import select from '../../assets/png/select.png';
import './filter.scss';

type Props ={
  filterName:string
}
export const Filter = ({filterName}:Props) => (
  <div className={filterName}>
    <select className='select__filter' name='select' id='select'>
      <option value='rate'>По рейтингу</option>
    </select>
    <img src={select} alt='select' className='select__img' />
  </div>
);
