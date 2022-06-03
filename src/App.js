import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Review from './Pages/Dashboard/Review';
import Orders from './Pages/Dashboard/Orders';
import ServiceList from './Pages/Dashboard/ServiceList';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AddService from './Pages/Dashboard/AddService';

function App() {
  return (
    <div >
      <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/singup" element={<Singup />} />






        <Route path="/dashboard" element={<Dashboard />}> 
        <Route index element={<Review />} />
        <Route path='order' element={<Orders />} />
        <Route path='service' element={<ServiceList />} />

        <Route path='admin' element={<MakeAdmin />} />
        <Route path='addservice' element={<AddService />} />

        </Route>


       </Routes>
    </div>
  );
}

export default App;
