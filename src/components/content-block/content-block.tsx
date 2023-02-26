import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { getBooks } from '../../redux/actions/books-action';
import { Card } from '../card/card';
import { FilterBar } from '../filter-bar/filter-bar';
import unbook from '../../assets/jpg/badbook.jpg';
import './content-block.scss';
import { AppDispatch } from '../../redux/store';

type Param = {
  categoria: any;
};
type Highlight = {
  children: string;
  highlightIndex: number;
};
const Highlights = ({ children, highlightIndex }: Highlight) => (
  <span data-test-id='highlight-matches' className='activeClass'>
    {children}
  </span>
);
export const ContentBlock = () => {
  const { categoria } = useParams<Param>();
  const [flag, setFlag] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  const { book, error, loading } = useSelector((state: any) => state.books);
  const { categories } = useSelector((state: any) => state.categories);
  const [path, setPath] = useState('all');
  const [pathName, setPathName] = useState('all');
  const location = useLocation();
  const [test, setTest] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  useEffect(() => {
    if (categoria === undefined) {
      setPath('all');
    } else {
      setPath(categoria);
    }

    categories.filter((elem: any) => (elem.path === path ? setPathName(elem.name) : ''));
  }, [location, categories, path, categoria]);

  const newArray = [...book];
  console.log(path);

  const sortFunc = () => {
    const newArrayCard: any = [''];
    newArray.map((card: any) => (card.title.toLowerCase().includes(inputValue) ? newArrayCard.push(card) : ''));
    return newArrayCard;
  };
  const sortFuncSecond = () => {
    const newSortArray: any = [];
    if (pathName === 'all') {
      newSortArray.push(book);
    } else {
      newArray.map((card: any) => (card.categories.includes(pathName) ? newSortArray.push(card) : ''));
    }

    return newSortArray;
  };
useEffect(() => {
  setFocusInput(false)
}, [location])

console.log(focusInput)
  console.log(sortFuncSecond().length);
  return (
    <div className={error ? 'bar-none div' : 'div'}>
      <FilterBar
        filterClick={() => {
          setFlag(1);
        }}
        filterSecondClick={() => {
          setFlag(2);
        }}
        sortClick={() => (test ? setTest(false) : setTest(true))}
        onInput={(e: any) => setInputValue(e.target.value.toLowerCase())}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
        sort={test}
        focusInputGlass={focusInput}
      />
      <div className='content'>
        {focusInput ? (
          sortFunc().length <= 1 ? (
            <h2 className='error-search-title' data-test-id='search-result-not-found'>
              По запросу ничего не найдено
            </h2>
          ) : (
            ''
          )
        ) : (
          ''
        )}
        {sortFuncSecond().length === 0 ? (
          <h2 className='error-search-title' data-test-id='empty-category'>
            В этой категории книг ещё нет
          </h2>
        ) : (
          ''
        )}
        {(test
          ? newArray.sort((a: any, b: any) => (+a.rating < +b.rating ? -1 : 1))
          : newArray.sort((a: any, b: any) => (+a.rating < +b.rating ? 1 : -1))
        ).map((card: any) =>



        focusInput  && inputValue !== '' ? (
          card.title.toLowerCase().includes(inputValue) ? (
            <Card
              cardClass={flag === 1 ? 'card' : 'line__card'}
              cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
              img={!card?.image?.url ? unbook : `https://strapi.cleverland.by${card?.image?.url}`}
              lineCard={flag === 1 ? 'card__content' : 'line_info'}
              cardName={flag === 1 ? 'card__name' : 'line__card_name'}
              name={
                <Highlighter
                  highlightClassName='activeClass'
                  searchWords={[inputValue]}
                  autoEscape={true}
                  textToHighlight={card.title}
                  allowAsProps={true}
                  highlightTag={Highlights}
                />
              }
              cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
              cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
              rateContent={flag === 1 ? 'card__rate' : 'item2'}
              author={card.authors}
              val={card.rating}
              buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
              buttonContent={flag === 1 ? 'card__button' : ' line__button'}
              categories={path}
              id={card.id}
              key={card.id}
              inputValue={inputValue}
            />
          ) : (
            ''
          )
          ) : pathName === 'all' ? (
            <Card
              cardClass={flag === 1 ? 'card' : 'line__card'}
              cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
              img={!card?.image?.url ? unbook : `https://strapi.cleverland.by${card?.image?.url}`}
              lineCard={flag === 1 ? 'card__content' : 'line_info'}
              cardName={flag === 1 ? 'card__name' : 'line__card_name'}
              name={
                <Highlighter
                  highlightClassName='activeClass'
                  searchWords={[inputValue]}
                  autoEscape={true}
                  textToHighlight={card.title}
                  highlightTag={Highlights}
                />
              }
              cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
              cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
              rateContent={flag === 1 ? 'card__rate' : 'item2'}
              author={card.authors}
              val={card.rating}
              buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
              buttonContent={flag === 1 ? 'card__button' : ' line__button'}
              id={card.id}
              key={card.id}
              categories={path}
              inputValue={inputValue}
            />
          ) : card.categories.includes(pathName) ? (
            <Card
              cardClass={flag === 1 ? 'card' : 'line__card'}
              cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
              img={!card?.image?.url ? unbook : `https://strapi.cleverland.by${card?.image?.url}`}
              lineCard={flag === 1 ? 'card__content' : 'line_info'}
              cardName={flag === 1 ? 'card__name' : 'line__card_name'}
              name={
                <Highlighter
                  highlightTag={Highlights}
                  highlightClassName='activeClass'
                  searchWords={[inputValue]}
                  autoEscape={true}
                  textToHighlight={card.title}
                />
              }
              cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
              cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
              rateContent={flag === 1 ? 'card__rate' : 'item2'}
              author={card.authors}
              val={card.rating}
              buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
              buttonContent={flag === 1 ? 'card__button' : ' line__button'}
              id={card.id}
              key={card.id}
              categories={path}
              inputValue={inputValue}
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};
