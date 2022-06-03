import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Firebase.init';
import logo from '../images/logos/logo.png'
const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSingOut = ()=>{
        signOut(auth)
    }

    return (
            <div class="navbar bg-[#FBD062]">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/portfolio'>Our Portfolio</Link></li>
                        <li><Link to='/ourtim'>Our Team</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        {user? <button className='px-12 py-3 bg-[#111430] text-white font-semibold rounded-md md:ml-12'>Singout</button> :<li><Link  to='/login' className='px-12 py-3 bg-[#111430] text-white font-semibold rounded-md md:ml-12'>Login</Link></li>}


                    </ul>
                </div>
                <img className='w-[100px] md:mx-14' src={logo} alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/portfolio'>Our Portfolio</Link></li>
                    <li><Link to='/ourtim'>Our Team</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    {user? <button onClick={handleSingOut} className='px-12 py-3 bg-[#111430] text-white font-semibold rounded-md md:ml-12'>Singout</button> :<li><Link  to='/login' className='px-12 py-3 bg-[#111430] text-white font-semibold rounded-md md:ml-12'>Login</Link></li>}                   
                </ul>
            </div>
            
        </div>
      
    );
};

export default Navbar;