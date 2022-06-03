import React from 'react';
import product from '../images/icons/service1.png'
const Products = () => {
    return (
        <div className="flex md:w-1/4">
        <div className="block rounded-lg shadow-2xl bg-white max-w-sm text-center">
          <div className="p-4">
               <img className='w-14 h-14 rounded-full mx-auto' src={product} alt="" />
            <h5 className="text-gray-900 text-xl font-medium mb-2">Web Development</h5>
            <p className="text-gray-700 text-base mb-4">
            We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
            </p>
          </div>
          
        </div>
      </div>
    );
};

export default Products;