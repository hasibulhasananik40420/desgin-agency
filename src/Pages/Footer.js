import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FBD062] md:flex  p-14'>
            <div className='md:w-2/4'>
                <h1 className='text-2xl font-bold mb-2'>Let us handle your</h1>
                <h1 className='text-2xl font-bold'> project, professionally.</h1>
                <p className='font-thin text-xs mt-5'>Lorem ipsum dolor sit amet consectetur, !</p>
                <p className='font-thin text-xs mb-6'>adipisicing elit. Doloremque, recus.</p>
            </div>
             <div>
                 <input className='w-full py-4 px-5 rounded-md' type="email" placeholder='Your Email Address' />
                 <input className='w-full py-4 px-5 mt-4 rounded-md' type="text" placeholder='Your Name' />
                 <input className='w-full py-16 px-5 mt-4 rounded-md' type="text" placeholder='Your Message' />
                 <button className='px-12 py-3 mt-6 bg-[#111430] text-white font-semibold rounded-md'>Send</button>

             </div>
        </div>
    );
};

export default Footer;