import React, { useState } from 'react';
import { Card } from '../card/card';
import { FilterBar } from '../filter-bar/filter-bar';
import {books} from '../../assets/constants/mock-data'
import unbook from '../../assets/jpg/badbook.jpg';
import './content-block.scss';

export const ContentBlock = () => {
  const [flag, setFlag] = useState(1);
  console.log(books)
  return (
    <div>
      <FilterBar
        filterClick={() => {
          setFlag(1);
        }}
        filterSecondClick={() => {
          setFlag(2);
        }}
      />
      <div className='content'>

      {books.map((card) =>
        (<Card
      cardClass={flag === 1 ? 'card' : 'line__card'}
       cardImg={flag === 1 ? 'card__photo_img' : 'line_img'}
       img={card.countImg === 0? unbook :  card.img.img1}
       lineCard={flag === 1 ? 'card__content' : 'line_info'}
       cardName={flag === 1 ? 'card__name' : 'line__card_name'}
       name={card.title}
       cardAuthor={flag === 1 ? 'card__author' : 'line__card_author'}
       cardContent={flag === 1 ? 'card__content_link' : 'item0 '}
       rateContent={flag === 1 ? 'card__rate' : 'item2'}
       author={card.author}
       val={card.rate}
       buttonContentBody={flag === 1 ? 'card__button' : 'item3'}
       buttonContent={flag === 1 ? 'card__button' : ' line__button'}
       id={card.id}/>)
      )}
      </div>
    </div>
  );
};
