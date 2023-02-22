import React from 'react';
import { useSelector } from 'react-redux';
import select from '../../assets/png/select.png';
import './filter.scss';

type Props = {
  filterName: string,
  sortClick: React.MouseEventHandler<HTMLButtonElement>
};
export const Filter = ({ filterName, sortClick }: Props) => (
  <div className={filterName}>
    <button type='button' onClick={sortClick} className='select__filter'>
      {' '}
      <img src={select} alt='select' className='select__img' /> По рейтингу
    </button>
  </div>
)
;
