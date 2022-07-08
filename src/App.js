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
import OurTeam from './Pages/OurTeam';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Pages/PrivateRoute';
import PrivateAdmin from './Pages/PrivateAdmin';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />






        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route index element={<Review />} />
          <Route path='myorder' element={<Orders />} />
          <Route path='service' element={<ServiceList />} />
          {/* <Route path='users' element={<AllUsers />} /> */}

          <Route path='admin' element={<MakeAdmin />} />
          <Route path='addservice' element={<AddService />} />

        </Route>


      </Routes>
    </div>
  );
}

export default App;
