import React from 'react';
import side from '../images/Milestones of business projects-bro.png'


const Landing = () => {
    return (
          <div className=' md:flex bg-[#FBD062] px-12 stylea1'>
          <div className='md:mt-16'>
           <h1 className='text-4xl font-bold '>Let’s Grow Your </h1>
            <h1  className='text-4xl font-bold '>Brand To The  </h1>
            <h1  className='text-4xl font-bold mb-3'>Next Level </h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus magni quia molestias officia tempore optio accusantium non nesciunt voluptatibus adipisci error consectetur reprehenderit inventore, quisquam asperiores facilis dolorem vitae veritatis.</p>
             <button className='px-12 py-3 mt-8 bg-[#111430] text-white font-semibold rounded-md'>Hire us</button>
           </div>
            <div className='mt-8'>
                <img className='md:w-3/4 md:ml-20' src={side} alt="" />
            </div>
          </div>

          
    );
};

export default Landing;