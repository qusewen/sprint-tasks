import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './rate.scss';

type Props ={
  val: number
}
export const Rate = ({val}: Props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {val===null? <p className='rate-no-rate'>ещё нет оценок</p>:[...Array(5)].map((star, i) => {
        const ratingValue:any = i + 1;
        return (


          <label key={Math.random () }>
            <input
              value={ratingValue}
              className='star-input'
              type='radio'
              name='rating'
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={20}
              color={ratingValue <= (hover || rating || val)  ? '#FFBC1F' : 'white'}
              className='star-item'

              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

    </div>
  );
};
