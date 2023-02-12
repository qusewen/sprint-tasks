import React from 'react';
import './button.scss';

type Props = {
  buttonClass: string,
  buttonText:string
}
export const Button = ({ buttonClass, buttonText }: Props) => (
  <button type='button' className={`button ${buttonClass}`}>
    {buttonText}
  </button>
);
