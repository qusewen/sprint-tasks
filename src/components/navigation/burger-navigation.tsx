import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation } from './navigation';
import { categories } from '../../assets/constants/mock-data';
import './navigation.scss';
import { getCategories } from '../../redux/actions/categories-action';
import { ResError } from '../res-error/res-error';
import { Loader } from '../loader/loader';
import { AppDispatch } from '../../redux/store';
import { Count } from '../count/count';

type RootState = {
  burger: any
}

export const BurgerNavigation = () => {
  const valueStateBurger = useSelector((state:RootState) => state.burger);
  const [test, setTest] = useState('');
  const [closeFlag, setCloseFlag] = useState(valueStateBurger);
  const [openAcard, setOpenAcard] = useState(true);
  const {categories,loading, error} = useSelector((state: any) => state.categories)
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if(location.pathname === '/treaty' || location.pathname === '/rules'){
        setOpenAcard(false)
    }else{
      setOpenAcard(true)
      dispatch(getCategories())
    }

  },[location.pathname,dispatch])

  function burgerStateClose() {
    dispatch({ type: 'closeBurger' });
  }
  const closeBurgerMenu = () => {
    if (valueStateBurger) {
      burgerStateClose();
    }
  };

  const openAcardion = () => {
    if (openAcard) {
      setOpenAcard(false);
    } else {
      setOpenAcard(true);
    }
  };
  return (
    <>
      <button
        type='button'
        onClick={closeBurgerMenu}
        className={valueStateBurger.burgerSet ? 'burger__close_field' : ''}
      >
        {' '}
      </button>
      <div className={valueStateBurger.burgerSet ? 'burger__navigation_active' : 'burger__navigation'}>
        <aside className={valueStateBurger.burgerSet ? 'nav__burger' : 'nav'}>
          <div className='nav__body'>
            <ul className='nav__list'>
              <li className='nav__list_item'>
                <NavLink
                  onClick={openAcardion}
                  data-test-id='burger-showcase'
                  className={({ isActive }) =>
                    isActive
                      ? 'first-link-active nav__list_item-text nav__list_item-text-first'
                      : 'link nav__list_item-text nav__list_item-text-first'
                  }
                  to='/all'
                >
                  ?????????????? ????????{' '}
                </NavLink>

                <ul className={openAcard ? 'nav__list_second' : 'close__acardion'}>
                  <li className='nav__list_second-item'>
                    <NavLink
                      data-test-id='burger-books'
                      onClick={closeBurgerMenu}
                      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
                      to='/all'
                    >
                      ?????? ??????????
                    </NavLink>

                  </li>

                  {categories.map((element:any) => (
                    <li key={Math.random()} className='nav__list_second-item'>
                      <NavLink
                      data-test-id={`burger-${element.path}`}
                        onClick={closeBurgerMenu}
                        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
                        to={`/books/${element.path}`}
                      >
                        {element.name}
                      </NavLink>
                      <Count datatest={`burger-book-count-for-${element.path}`} name={element.name}/>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='nav__list_item'>
                <NavLink
                  data-test-id='burger-terms'
                  onClick={closeBurgerMenu}
                  className={({ isActive }) => (isActive ? 'first-link-active' : 'link')}
                  to='/rules'
                >
                  <span className='nav__list_item-text'>?????????????? ??????????????????????</span>
                </NavLink>
              </li>
              <li className='nav__list_item'>
                <NavLink
                  data-test-id='burger-contract'
                  onClick={closeBurgerMenu}
                  className={({ isActive }) => (isActive ? 'first-link-active' : 'link')}
                  to='/treaty'
                >
                  <span className='nav__list_item-text'>?????????????? ????????????</span>
                </NavLink>
              </li>

              <ul className='burger__navigation_profile'>
                <li className='nav__list_item'>
                  <NavLink onClick={closeBurgerMenu} to='/'>
                    <span className='nav__list_item-text'>??????????????</span>
                  </NavLink>
                </li>
                <li className='nav__list_item'>
                  <NavLink onClick={closeBurgerMenu} to='/'>
                    <span className='nav__list_item-text'>??????????</span>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};
