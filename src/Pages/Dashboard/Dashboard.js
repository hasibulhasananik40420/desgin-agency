import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile bg-[#F4F7FC]">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
           {/* <h1 className='text-2xl font-serif'>Welcome to Dashboard</h1> */}
            <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          
            <li><Link className='btn btn-outline mb-2' to=''>Review</Link></li>
            <li><Link  className='btn btn-outline mb-2' to='/dashboard/myorder'>My Order</Link></li>
            <li><Link className='btn btn-outline mb-2' to='/dashboard/service'>Service List</Link></li>
            <li><Link className='btn btn-outline mb-2' to='/dashboard/admin'>Admin</Link></li>
            <li><Link className='btn btn-outline mb-2' to='/dashboard/addservice'>Add Service</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;