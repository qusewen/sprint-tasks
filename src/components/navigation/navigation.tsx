import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import './navigation.scss';
// import { categories } from '../../assets/constants/mock-data.js';
import { getCategories } from '../../redux/actions/categories-action';
import { Loader } from '../loader/loader';
import { ResError } from '../res-error/res-error';
import { AppDispatch } from '../../redux/store';

const activeStyle = {
  background: 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)',
};

type RootState = {
  burger: any
}

export const Navigation = () => {
  const valueStateBurger = useSelector((state:RootState) => state.burger);
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

  },[location.pathname, dispatch])

  function burgerStateClose() {
    dispatch({ type: 'closeBurger' });
  }
  const closeBurgerMenu = () => {
    if (closeFlag) {
      burgerStateClose();
    }
  };

if(loading){
return <Loader/>
}
if(error){
  return <ResError/>
  }


  return (
    <aside className={valueStateBurger.burgerSet ? 'nav__burger' : 'nav'}>
      <div className='nav__body'>
        <ul className='nav__list'>
          <li className='nav__list_item'>

              <NavLink
                onClick={() =>openAcard? setOpenAcard(false): setOpenAcard(true)}
                data-test-id='navigation-showcase'
                className={({ isActive }) =>
                  isActive
                    ? 'first-link-active  nav__list_item-text nav__list_item-text-first'
                    : 'link nav__list_item-text nav__list_item-text-first '
                }
                to='/'
              >
                Витрина книг{' '}
                <span className={openAcard? 'nav__list_item-text-first-open': 'nav__list_item-text-arrow-close'}> </span>
              </NavLink>


            <ul className={openAcard ? 'nav__list_second' : 'close__acardion'}>
              <li className='nav__list_second-item'>
                <NavLink
                  data-test-id='navigation-books'
                  onClick={closeBurgerMenu}
                  className={({ isActive }) => (isActive ? 'link-active' : 'link')}
                  to='/'
                >
                  Все книги
                </NavLink>
                <span className='nav__list_second-item--count'>100</span>
              </li>

              {categories.map((element:any) => (
                <li key={element.id} className='nav__list_second-item'>
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
          <li  className='nav__list_item'>

            <NavLink

              data-test-id='navigation-terms'
              className={({ isActive }) => (isActive ? 'first-link-active' : 'link')}
              to='/rules'
            >
              <span  className='nav__list_item-text'>Правила пользования</span>
            </NavLink>
          </li>
          <li   className='nav__list_item'>
            <NavLink

              data-test-id='navigation-contract'
              className={({ isActive }) => (isActive ? 'first-link-active ': 'link ')}
              to='/treaty'
            >
              <span  className='nav__list_item-text'>Договор оферты</span>
            </NavLink>
          </li>

          <ul className='burger__navigation_profile'>
            <li  className='nav__list_item'>
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
  );
};
