import React from 'react'
import Lottie from "lottie-react";
import loader from '../../assets/constants/loader.json'
import './loader.scss'

type Props ={
    errors: boolean
}
export const Loader = ({errors}:Props) => (

<div data-test-id='loader' className={errors? 'closeLoader':'loader'}>
    <div className="loader__body">
    <Lottie className='loader-item' animationData={loader} loop={true}/>
    </div>

</div>

)


