import React, { useState } from 'react';
import './route-bar.scss';
import line from '../../assets/svg/line2.svg';

type Props = {
  name: string
}
export const RouteBar = ({ name }: Props) => {
  const [rout, setRout] = useState('...');

  return (
    <div className='route '>
      <div className='container route-container container-book'>
        <span className='route_text'>Бизнес книги</span>
        <img className='route_img' src={line} alt='line' />
        <span className='route_text'>{name}</span>
      </div>
    </div>
  );
};
