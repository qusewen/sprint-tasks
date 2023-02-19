import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import line from '../../assets/svg/line2.svg';
import './route-bar.scss';

type Props = {
  name: string,
  categori:string
}
export const RouteBar = ({ name, categori }: Props) => {
  const [rout, setRout] = useState('...');
  const {book,error, loading} = useSelector((state:any) => state.page)
  return (
    <div className={error? 'error-route route' : 'route'}>
      <div className='container route-container container-book'>
        <span className='route_text'>{categori}</span>
        <img className='route_img' src={line} alt='line' />
        <span className='route_text'>{name}</span>
      </div>
    </div>
  );
};
