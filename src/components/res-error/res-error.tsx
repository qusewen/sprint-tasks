import React from 'react';
import warningImg from '../../assets/svg/WarningCircle.svg';
import closeImg from '../../assets/svg/closeicon.svg';
import './res-error.scss';

export const ResError = () => (
  <div className='error' data-test-id='error'>
    <img className='error__img' src={warningImg} alt='warning' />
    <p className='error__title'>Что-то пошло не так. Обновите страницу через некоторое время.</p>
    <button type='button'>
      <img className='close__img' src={closeImg} alt='close icon' />
    </button>
  </div>
);
