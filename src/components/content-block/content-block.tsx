import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBooks } from '../../redux/actions/books-action';
import { Card } from '../card/card';
import { FilterBar } from '../filter-bar/filter-bar';
import unbook from '../../assets/jpg/badbook.jpg';
import './content-block.scss';
import { AppDispatch } from '../../redux/store';

export const ContentBlock = () => {
  const [flag, setFlag] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  const { book, error, loading } = useSelector((state: any) => state.books);
  const { categories } = useSelector((state: any) => state.categories);
  const [path, setPath] = useState('');
  const [pathName, setPathName] = useState('');
  const location = useLocation();
  const [test, setTest] = useState(false)
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  useEffect(() => {
    setPath(location.pathname.slice(7));
    categories.filter((elem: any) => (elem.path === path ? setPathName(elem.name) : ''));
  }, [location, categories, path]);
  const newArray = [...book]
  return (
    <div className={error ? 'bar-none' : ''}>
      <FilterBar
        filterClick={() => {
          setFlag(1);
        }}
        filterSecondClick={() => {
          setFlag(2);
        }}
        sortClick={() => test? setTest(false) : setTest(true)}
      />
      <div className='content'>
        {(test? (newArray.sort((a:any, b:any) => (+a.rating < +b.rating ? -1 : 1))):(newArray.sort((a:any, b:any) => (+a.rating < +b.rating ? 1 : -1)))).map((card: any) =>
          pathName === '' ? (
            <Card
              cardClass={flag === 1 ? 'card' : 'line__card'}
              cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
              img={!card?.image?.url ? unbook : `https://strapi.cleverland.by${card?.image?.url}`}
              lineCard={flag === 1 ? 'card__content' : 'line_info'}
              cardName={flag === 1 ? 'card__name' : 'line__card_name'}
              name={card.title}
              cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
              cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
              rateContent={flag === 1 ? 'card__rate' : 'item2'}
              author={card.authors}
              val={card.rating}
              buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
              buttonContent={flag === 1 ? 'card__button' : ' line__button'}
              id={card.id}
              key={card.id}
            />
          ) : card.categories.includes(pathName) ? (
            <Card
              cardClass={flag === 1 ? 'card' : 'line__card'}
              cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
              img={!card?.image?.url ? unbook : `https://strapi.cleverland.by${card?.image?.url}`}
              lineCard={flag === 1 ? 'card__content' : 'line_info'}
              cardName={flag === 1 ? 'card__name' : 'line__card_name'}
              name={card.title}
              cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
              cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
              rateContent={flag === 1 ? 'card__rate' : 'item2'}
              author={card.authors}
              val={card.rating}
              buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
              buttonContent={flag === 1 ? 'card__button' : ' line__button'}
              id={card.id}
              key={card.id}
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};
