import React from 'react';
import image from '../images/customer-1.png'
import image2 from '../images/customer-2.png'
import image3 from '../images/customer-3.png'
const Feedback = () => {
    return (
       <div className='mt-16'>
         <h1 className=' text-center mb-16'><span className='text-3xl font-bold font-serif text-[#171B4E]'>Clients</span> <span className='text-3xl font-bold font-serif text-[#7AB259]'>Feedback</span></h1>
<div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-12 mb-24'>
            <div className='border border-[#BFBFBF] p-4'>
            <div className='flex items-center ml-8'>
                <div>  <img className='w-16 h-16 rounded-full' src={image} alt="" /></div>
                 <div className='ml-6'>
                     <h1 className='font-bold text-xl'>Nash Patrik</h1>
                    <p className='font-medium'>CEO, Manpol</p></div>
            </div>
             <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo placeat voluptas esse assumenda molestias, unde eaque odit? Vero voluptatibus numquam deserunt incidunt</p>
        </div> 
        
        <div className='border border-[#BFBFBF] p-4'>
            <div className='flex items-center ml-8'>
                <div>  <img className='w-16 h-16 rounded-full' src={image2} alt="" /></div>
                 <div className='ml-6'>
                     <h1 className='font-bold text-xl'>Nash Patrik</h1>
                    <p className='font-medium'>CEO, Manpol</p></div>
            </div>
             <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo placeat voluptas esse assumenda molestias, unde eaque odit? Vero voluptatibus numquam deserunt incidunt</p>
        </div> 

        <div className='border border-[#BFBFBF] p-4'>
            <div className='flex items-center ml-8'>
                <div>  <img className='w-16 h-16 rounded-full' src={image3} alt="" /></div>
                 <div className='ml-6'>
                     <h1 className='font-bold text-xl'>Nash Patrik</h1>
                    <p className='font-medium'>CEO, Manpol</p></div>
            </div>
             <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo placeat voluptas esse assumenda molestias, unde eaque odit? Vero voluptatibus numquam deserunt incidunt</p>
        </div> 
        </div>
       </div>
    );
};

export default Feedback;