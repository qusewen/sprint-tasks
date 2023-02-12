import React from 'react'
import Lottie from "lottie-react";
import loader from '../../assets/constants/loader.json'

export const Loader = () => (
    <Lottie animationData={loader} loop={true}/>
)


