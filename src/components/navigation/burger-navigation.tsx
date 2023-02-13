import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Navigation } from './navigation';
import { categories } from '../../assets/constants/mock-data';
import './navigation.scss';
import { getCategories } from '../../redux/actions/categories-action';
import { ResError } from '../res-error/res-error';
import { Loader } from '../loader/loader';

type RootState = {
  burger: any
}

export const BurgerNavigation = () => {
  const valueStateBurger = useSelector((state:RootState) => state.burger);
  const [test, setTest] = useState('');
  const [closeFlag, setCloseFlag] = useState(valueStateBurger);
  const [openAcard, setOpenAcard] = useState(true);
  const {categories,loading, error} = useSelector((state: any) => state.categories)
  const dispatch: any = useDispatch();
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
  if(error){
    return <ResError/>
    }
    if(loading){
      return <Loader/>
    }
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
                  to='/'
                >
                  Витрина книг{' '}
                </NavLink>

                <ul className={openAcard ? 'nav__list_second' : 'close__acardion'}>
                  <li className='nav__list_second-item'>
                    <NavLink
                      data-test-id='burger-books'
                      onClick={closeBurgerMenu}
                      className={({ isActive }) => (isActive ? 'link-active' : 'link')}
                      to='/'
                    >
                      Все книги
                    </NavLink>
                    <span className='nav__list_second-item--count'>100</span>
                  </li>

                  {categories.map((element:any) => (
                    <li key={Math.random()} className='nav__list_second-item'>
                      <NavLink
                        onClick={closeBurgerMenu}
                        className={({ isActive }) => (isActive ? 'link-active' : 'link')}
                        to={`/books/${element.path}`}
                      >
                        {element.name}
                      </NavLink>
                      {/* <span className='nav__list_second-item--count'>{element.coutn}</span> */}
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
                  <span className='nav__list_item-text'>Правила пользования</span>
                </NavLink>
              </li>
              <li className='nav__list_item'>
                <NavLink
                  data-test-id='burger-contract'
                  onClick={closeBurgerMenu}
                  className={({ isActive }) => (isActive ? 'first-link-active' : 'link')}
                  to='/treaty'
                >
                  <span className='nav__list_item-text'>Договор оферты</span>
                </NavLink>
              </li>

              <ul className='burger__navigation_profile'>
                <li className='nav__list_item'>
                  <NavLink onClick={closeBurgerMenu} to='/'>
                    <span className='nav__list_item-text'>Профиль</span>
                  </NavLink>
                </li>
                <li className='nav__list_item'>
                  <NavLink onClick={closeBurgerMenu} to='/'>
                    <span className='nav__list_item-text'>Выход</span>
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
