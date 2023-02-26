import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/svg/logo.png';
import person from '../../assets/png/avatar.png';
import './header.scss';
import {BurgerNavigation} from '../navigation/burger-navigation';


type RootState = {
  burger: any
}

export const Header = () => {
  const [burgerOpenState, setBurgerOpenState] = useState(false);
  const dispatch = useDispatch()
  function burgerStateOpen(){
    dispatch({type: 'openBurger'})
    setBurgerOpenState(true)

  }
  function burgerStateClose(){
    dispatch({type: 'closeBurger'})
    setBurgerOpenState(false)
  }
  const valueStateBurger = useSelector((state: RootState) => state.burger);
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__body'>
          <button data-test-id='button-burger'
            type='button'
            className='header__burger'
            onScroll= {() =>false}
            onClick={() => valueStateBurger.burgerSet? burgerStateClose(): burgerStateOpen()}
          >
            <span className={valueStateBurger.burgerSet? 'header__burger_item-active':'header__burger_item'}> </span>
            <span className={valueStateBurger.burgerSet? 'header__burger_item-active':'header__burger_item'}> </span>
            <span className={valueStateBurger.burgerSet? 'header__burger_item-active':'header__burger_item'}> </span>
          </button>
          <BurgerNavigation  data-test-id='burger-navigation'/>
          <div className='header__wrapper'>
          <Link to='/all'>
            <div>
              <img className='header__img' src={logo} alt='logo' />
            </div>
          </Link>
          <h1 className='header__title'>Библиотека</h1>

          <div className='header__person'>

          <p className='header__person_info'>Привет, Иван!</p>
            <img className='header__person_info-img' src={person} alt='person' />
          </div>
          </div>

        </div>
      </div>
    </header>
  );
};
