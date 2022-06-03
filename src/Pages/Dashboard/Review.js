import React from 'react';

const Review = () => {
    return (
        <div>
           <h1 className='text-xl font-semibold ml-8'>Please Sent Your review </h1>

            <div className='md:w-2/4 p-8'>
                 <input className='w-full py-4 px-5 rounded-md' type="text" placeholder='Your name ' />
                 <input className='w-full py-4 px-5 mt-4 rounded-md' type="text" placeholder='Company’s name, Designation' />
                 <input className='w-full py-8 px-5 mt-4 rounded-md' type="text" placeholder='Description' />
                 <button className='px-12 py-3 mt-6 bg-[#111430] text-white font-semibold rounded-md'>Submit</button>
            </div>
        </div>
    );
};

export default Review;