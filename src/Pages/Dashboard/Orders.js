import React from 'react';

const Orders = () => {
    return (
        <div>
           <h1 className='text-xl font-semibold '>Your's Order List </h1>

            <div className='md:w-2/4 p-6'>
                 <input className='w-full py-4 px-5 rounded-md' type="text" placeholder='Your name / company’s name' />
                 <input className='w-full py-4 px-5 mt-4 rounded-md' type="email" placeholder='Your Email Address' />
                 <input className='w-full py-4 px-5 mt-4 rounded-md' type="text" placeholder='Graphic Design' />
                 <input className='w-full py-8 px-5 mt-4 rounded-md' type="text" placeholder='Project Details' />
                 <div className='flex gap-4'>
                 <input className='w-full py-4 px-5 mt-4 rounded-md' type="text" placeholder='Price' />
                 <input className='w-full py-4 px-5 mt-4 rounded-md bg-[#DEFFED]' type="text" placeholder=' Upload project file' />
                 </div>
                 <button className='px-12 py-3 mt-6 bg-[#111430] text-white font-semibold rounded-md'>Send</button>

            </div>
        </div>
    );
};

export default Orders;