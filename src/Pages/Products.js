import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase.init';
import useService from '../hooks/useService';
import SingleProduct from './SingleProduct';
const Products = () => {
    const [services] = useService([])
    const [modalService, setModalService] = useState({})
    const [modalClose, setModalClose] = useState(null)

    const [user] = useAuthState(auth)
    const addOrder = e => {
        e.preventDefault()

        const order = {
            name: e.target.name.value,
            email: e.target.email.value,
            item: e.target.item.value,
            project: e.target.project.value,
            file: e.target.file.value,
            price: e.target.price.value
        }
        fetch('https://protected-shore-34848.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Order Confirm, Please check my order page')
                e.target.reset()
                setModalClose()

            })
    }
    return (
        <div className='mt-14'>
            <h1 className='text-2xl font-bold text-center mt-6'>Provide awesome <span className='text-green-300'>services</span> </h1>
            <div className='flex justify-end mr-10'> <button className=' text-red-500'><span className='flex gap-1'>See more<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg></span> </button></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:m-12'>
                {
                    services.map(service => <SingleProduct key={service._id} service={service} setModalService={setModalService}></SingleProduct>)
                }


                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">

                        <form onSubmit={addOrder} className='md:w-full p-6 bg-[#F4F7FC]'>
                            <input required className='w-full py-4 px-5 rounded-md' name='name' type="text" placeholder='Your name / company’s name' />
                            <input className='w-full py-4 px-5 mt-4 rounded-md' name='email' type="email" value={user?.email || ''} disabled placeholder='Your Email Address' />
                            <input disabled className='w-full py-4 px-5 mt-4 rounded-md' name='item' type="text" value={modalService.name} placeholder='Graphic Design' />
                            <input className='w-full py-6 px-5 mt-4 rounded-md' name='project' type="text" placeholder='Project Details' />
                            <div className='flex gap-4'>
                                <input className='w-full py-4 px-5 mt-4 rounded-md' name='price' type="text" disabled value={modalService?.price} placeholder='Price' />
                                <input className='w-full py-4 px-5 mt-4 rounded-md bg-[#DEFFED]' type="text" name='file' placeholder=' Upload project file' />
                            </div>
                            <input className='px-12 py-3 mt-3 bg-[#111430] text-white font-semibold rounded-md cursor-pointer' type="submit" value="Send" />
                        </form>

                        <div class="modal-action">
                            <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Products;