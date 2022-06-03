import React from 'react';
import logo1 from '../images/logos/airbnb.png'
import logo2 from '../images/logos/Frame.png'
import logo3 from '../images/logos/google.png'
import logo4 from '../images/logos/netflix.png'
import logo5 from '../images/logos/slack.png'
import logo6 from '../images/logos/uber.png'
const Stiker = () => {
    return (
        <div className='md:flex gap-2 md:justify-evenly mt-10 md:mx-32'>
            <img className='w-[165px] h-[40px] mb-3' src={logo1} alt="" />
           
            <img className='w-[165px] h-[40px] mb-3' src={logo3} alt="" />
            <img className='w-[165px] h-[40px] mb-3' src={logo4} alt="" />
            <img className='w-[165px] h-[40px] mb-3' src={logo5} alt="" />
            <img className='w-[165px] h-[40px] mb-3' src={logo6} alt="" />
        </div>
    );
};

export default Stiker;