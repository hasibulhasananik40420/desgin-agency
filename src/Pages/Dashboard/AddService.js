import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {

    const { register,  handleSubmit } = useForm();
    const imageStoreKey = '3c1f06e572f598cefb6cae407a422a8b'

     const onSubmit =async data =>{
        //  console.log(data);
       const img = data.img[0]

       console.log(img);
       const formData = new FormData();
       formData.append('img', img) 
       const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`
    //    const url = 'https://api.imgbb.com/1/upload?key=3c1f06e572f598cefb6cae407a422a8b'

       fetch(url, {
           method: 'POST',
           body: formData
       })
       .then(res=> res.json())
       .then(result =>{
            // console.log(result);
            if(result.success){

                const img = result.data.display_url 
                const service ={
                    name: data.name ,
                    desc: data.desc,
                    price: data.price,
                    img: img

                }
                fetch('http://localhost:5000/service',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json',
                        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(service)
                })
                .then(res=> res.json())
                .then(data=>{
                 console.log(data);
                 if(data.insertedId){
                    // toast.success('Product added successfully')

                }
                else {
                    // toast.error('Failed to added product. Try again letter')
                }
                })
            }
       })
       
     }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-xl font-semibold ml-8'>Please Add a service</h1> 
             <div className='md:w-2/4 ml-12 mt-8 p-12  bg-white rounded-md'>
                
               <div className='md:flex md:gap-6'>
                <div>
                <label className='font-semibold' htmlFor="">Service Title</label>
                <input {...register("name")} className='w-full py-3 px-5  border mb-3' type="text" placeholder='Enter Title' />
               
                </div>

                <div>
                      <label  className='font-semibold ' htmlFor="">Icon</label>
                    <input {...register("img")} className='w-full border border-[#009444]   py-2 pl-3' type="file" placeholder='Upload image' />
                </div>
                </div>
                    
                <label className='font-semibold' htmlFor="">Amount</label>
                <input {...register("price")} className='w-full py-3 px-5  border mb-3' type="text" placeholder='Amount' />
               
                 <label  className='font-semibold' htmlFor="">Description</label>
                <input {...register("desc")} className='w-full py-6 px-5 border' type="text" placeholder='Enter Designation' />
               
             </div>

                   <div className='md:flex md:justify-end md:w-2/4 ml-12'>
                 <input className='px-12 py-3 mt-3 bg-[#111430] text-white font-semibold rounded-md cursor-pointer' type="submit" value="submit" />
                 </div>
        </form>
    );
};

export default AddService;