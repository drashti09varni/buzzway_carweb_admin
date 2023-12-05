// // import React from 'react';
// // import './App.css';
// // import { BrowserRouter, Route, Routes } from 'react-router-dom';
// // import Sidebar from './Component/Sidebar';
// // import Dashboard from './Component/Home';
// // import About from './Forms/carForm';
// // import Analytics from './Forms/carDetail';
// // import Comment from './Forms/cityForm';
// // import Header from './Component/Header';
// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <Sidebar>
// //         <Routes>

// //           <Route path="/" element={<Dashboard />} />
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/comment" element={<Comment />} />
// //           <Route path="/analytics" element={<Analytics />} />
// //         </Routes>
// //       </Sidebar>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;
// import React from 'react';
// import './App.css';
// import Navbar from './Component/Header';
// import Sidebar from './Component/Sidebar';
// import Dashboard from './Component/Home';

// const App = () => {
//   return (
//     <>
//       <Sidebar />

//         <Navbar />

//           <Dashboard />

//           </>

//   );
// };

// export default App;

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

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (<>
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-form" element={<CarForm />} />
          <Route path="/city-form" element={<CityForm />} />
           <Route path='/car-details-Form' element={<CarDetailsForm />} />
        </Routes>
        <ToastContainer closeButton={false} position="bottom-right" />
      </div>
    
    </Router>
    {/* <ToastContainer closeButton={false} position="bottom-right" /> */}
      </>
  );
}

export default App;
