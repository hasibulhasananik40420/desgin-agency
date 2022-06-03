import React from 'react';

const AddService = () => {
    return (
        <div >
            <h1 className='text-xl font-semibold ml-8'>Please Add a service</h1> 
             <div className='md:w-2/4 ml-12 mt-8 p-12  bg-white rounded-md'>
                
               <div className='md:flex md:gap-6'>
                <div>
                <label className='font-semibold' htmlFor="">Service Title</label>
                <input className='w-full py-3 px-5  border mb-3' type="text" placeholder='Enter Title' />
               
                </div>

                <div>
                      <label  className='font-semibold ' htmlFor="">Icon</label>
                    <input className='sm-w-full border border-[#009444]   py-3 pl-3' type="text" placeholder='Upload image' />
                </div>
                </div>

                 <label  className='font-semibold' htmlFor="">Description</label>
                <input className='w-full py-6 px-5 border' type="text" placeholder='Enter Designation' />
             </div>

             <div className='md:flex md:justify-end md:w-2/4 ml-12'>
                 <button className='px-12 py-3 mt-3 bg-[#111430] text-white font-semibold rounded-md'>Submit</button>
                 </div>
        </div>
    );
};

export default AddService;