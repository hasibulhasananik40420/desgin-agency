import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const SingleProduct = ({service, setModalService}) => {

   
    return (
        <div>
             <div className="flex ">       
           <div className="block rounded-lg shadow-xl bg-white max-w-sm text-center">
            <div className="p-4">
                 <img className='w-14 h-14 rounded-full mx-auto' src={service.img} alt="" />
              <h5 className="text-gray-900 text-xl font-medium mb-2">{service.name}</h5>
              <p className="text-gray-700 text-base mb-4">
                {service.des}
               
              </p>
             
              
              <label onClick={()=> {
                 console.log('btn click')
                 setModalService(service)}

               } className=' border border-red-500 rounded-full py-1 px-3 cursor-pointer' for="my-modal-6" >Order Now</label>

           
            </div>
            
          </div>
        </div>
        </div>
    );
};

export default SingleProduct;