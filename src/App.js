import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
import About from './Forms/carDetail';
import CarForm from './Forms/carForm';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CityForm from './Forms/cityForm';
import CarDetailsForm from './Forms/carDetail';
import Memories from './Forms/Memories';
import CarCabForm from './Forms/carCabForm';
import TourForm from './Forms/tourForm';
import ContactForm from './Forms/ContactDetail';
import BookingDetails from './Forms/BookingDetails';
import Login from './Component/Login';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (<>
    <Router>
      <div className='grid-container'>
        <Login />
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-form" element={<CarForm />} />
          <Route path="/city-form" element={<CityForm />} />
          <Route path='/car-details-Form' element={<CarDetailsForm />} />
          <Route path='/car-memories' element={<Memories />} />
          <Route path='/car-cab-collection' element={<CarCabForm />} />
          <Route path='/tour' element={<TourForm />} />
          <Route path='/booking-detail' element={<BookingDetails />} />
          <Route path='/contact-detail' element={<ContactForm />} />
        </Routes>
        <ToastContainer closeButton={false} position="bottom-right" />
      </div>

    </Router>
    {/* <ToastContainer closeButton={false} position="bottom-right" /> */}
  </>
  );
}

export default App;
