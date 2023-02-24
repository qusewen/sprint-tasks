import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '../button/button';
import { Rate } from '../rate/rate';
import './card.scss';


type Props = {
  cardClass: string,
  cardImg: string,
  img: any,
  lineCard: string,
  cardContent: string,
  rateContent: string,
  val: number,
  cardName: string,
  name: string,
  cardAuthor: string,
  author: string[],
  buttonContentBody: string,
  buttonContent: string,
  categories: string,
  id: number,
  inputValue:string
}
export const Card = ({
  cardClass,
  cardImg,
  img,
  lineCard,
  cardContent,
  rateContent,
  val,
  cardName,
  name,
  cardAuthor,
  author,
  buttonContentBody,
  buttonContent,
  categories,
  id,
  inputValue
}: Props) => (



 (  <Link className={cardClass} data-test-id='card' to={`/books/${categories}/${id}`}>
    <div className='card__photo'>
      <img src={img} alt='book' className={cardImg} />
    </div>
    <div className={lineCard}>
      <div className={cardContent}>
        <div className={cardName}>{name} </div>
        <div className={cardAuthor}>{author}</div>
      </div>
      <div className={rateContent}>
        <Rate val={val} />
      </div>
      <div className={buttonContentBody}>
        <Button buttonClass={buttonContent} buttonText='Забронировать' />
      </div>
    </div>
  </Link>)
);
