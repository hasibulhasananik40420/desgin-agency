import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Loading from '../Loading';


const Orders = () => {
      const [user] = useAuthState(auth) 
      const email = user?.email
     const { data: myorder, isLoading, refetch } = useQuery('myorder', () => fetch(`https://protected-shore-34848.herokuapp.com/myorder?email=${email}`,{
       method: 'GET', 
       headers: {
         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
       }
     }).then(res => res.json()));
   

     if(isLoading){
          return <Loading></Loading>
        }

        const handleOrderDelete = id =>{
          console.log(id);
          fetch(`https://protected-shore-34848.herokuapp.com/myorder/${id}`,{
           method: 'DELETE' ,
           headers:{
               'content-type': 'application/json',
                  // authorization: `Bearer ${localStorage.getItem('accessToken')}`
           }
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount){
                    toast.success(`Order cencle successfully`)
                      refetch()
                          
                  }
          })
      }


    return (
        <div>
           
           <h1 className='text-xl font-semibold '>Your's Order List </h1>

           <div class="overflow-x-auto p-6">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Service </th>
        <th>Price </th>
        <th>Cencle Order</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
     
       {
         myorder?.map((order,index)=> <tr index={index} key={order._id} order={order}> 
        <th>{index + 1}</th>
        <td>{order?.name}</td>
        <td>{order?.item}</td>
        <td>{order?.price}</td>
        <td><button onClick={()=>handleOrderDelete(order?._id) } className=' border border-red-500 rounded-full  px-4 cursor-pointer'>Cencle</button></td>
        <td><button  className=' border border-red-500 rounded-full  px-4 cursor-pointer'>PAY</button></td>
      
         </tr>)
       }

    </tbody>
  </table>
</div>

        </div>
    );
};

export default Orders;