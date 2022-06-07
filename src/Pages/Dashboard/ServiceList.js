import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase.init';
import Loading from '../Loading';

const ServiceList = () => {

  const [user] = useAuthState(auth) 
      const email = user?.email
     const { data: services, isLoading, refetch } = useQuery('services', () => fetch('https://protected-shore-34848.herokuapp.com/service').then(res => res.json()));
   

     if(isLoading){
       return <Loading></Loading>
     }

    return (
       <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
       
        <th>Item</th>
        <th>Service</th>
        <th>Project Details</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     

       {
         services?.map((service, index) => <tr service={service} key={service._id} index={index}>
        <th>{index + 1}</th>
        <td><img className='h-12 w-12 rounded-full' src={service.img} alt="" /></td>
        <td>{service.name}</td>
        
        <td>{service.des}</td>
        <td className='text-red-500 flex items-center'>Pending <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg></td>
         </tr>)
       }


         
    </tbody>
  </table>
</div>
       </div>
    );
};

export default ServiceList;