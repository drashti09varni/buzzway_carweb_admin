// import React, { useState } from 'react';
// import Home from './Home';
// import Sidebar from './Sidebar';
// import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
// import { IoMdNotifications } from 'react-icons/io';
// import { AiFillSetting } from 'react-icons/ai';
// import {BsArrowLeftShort} from 'react-icons/bs';
// import { Outlet } from 'react-router-dom';
// export default function Header() {
//   const [open, setOpen] = useState(true);
//   const [drawer , setDrawer] = useState(false);
//   const handleClick = () => {
//     setOpen(!open)
//   }
//   const handleDrawer = () => {
//     setDrawer(!drawer)
//   }
//   return (
//     <>
//       <div class="flex w-screen h-screen text-gray-700 ">

//         {open ? <Sidebar /> : ""}

//         <div className="flex flex-col flex-grow">
//           <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 bg-[#188ae2]">
//            {drawer ? <div className='absolute bg-[#000] w-full  mt-[245px] ml-[-30px]'>
//             <ul className=" flex-col space-y-5 my-5">
//                 <li className="ml-[30px]">
//                   <FaSearch size={19} fill='#fff' />
//                 </li>
//                 <li className=" ml-[30px]">
//                   <IoMdNotifications size={22} fill='#fff' />
//                 </li>
//                 <li className=" ml-[30px]">
//                   <AiFillSetting size={22} fill='#fff' />
//                 </li>
//                 <li className="ml-[30px]">
//                   <FaUserCircle size={22} fill='#fff' />
//                 </li>
//               </ul>
//             </div> : ""}
//             <button onClick={handleClick}>
//               <BsArrowLeftShort size={35} fill='#fff' />
//             </button>
//             <div className="ml-10">
//               <h1 className='text-white text-[20px]'>Dashboard</h1>
//             </div>

//             <div className="flex ml-auto">
//               <ul className="flex space-x-8">
//                 <li className="mr-2 hidden sm:inline-block">
//                   <FaSearch size={19} fill='#fff' />
//                 </li>
//                 <li className="mr-2 hidden sm:inline-block">
//                   <IoMdNotifications size={22} fill='#fff' />
//                 </li>
//                 <li className="mr-2 hidden sm:inline-block">
//                   <AiFillSetting size={22} fill='#fff' />
//                 </li>
//                 <li className="mr-2 hidden sm:inline-block">
//                   <FaUserCircle size={22} fill='#fff' />
//                 </li>
//               </ul>
//             </div>
//             <div className="flex ml-auto lg:hidden md:hidden sm:hidden">
//               <button onClick={handleDrawer} >
//                 <FaBars size={22} fill='#fff' />
//               </button>
//             </div>

//           </div>
//           <Home />

//         </div>




//       </div>

//       <div>

//       </div>

//     </>
//   )
// }
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className=" top-0 left-0 right-0 bg-blue-500 p-4 text-white">
//       <div className="container mx-auto">
//         <h1 className="text-2xl font-bold">My Dashboard</h1>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import {BsArrowLeftShort} from 'react-icons/bs';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header bg-[#188ae2]'>
        <div className='menu-icon'>
            <BsJustify size={20} fill='#fff' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <h1 className='text-white text-[20px] '>Dashboard</h1>
        </div>
        <div className='header-right flex space-x-8'>
            <BsFillBellFill size={20} fill='white'/>
            <BsFillEnvelopeFill size={20} fill='white'/>
            <BsPersonCircle size={20} fill='white'/>
        </div>
        {/* <div className="flex ml-auto ">
               <ul className="flex space-x-8">
                 <li className="mr-2 hidden sm:inline-block">
                   <FaSearch size={19} fill='#fff' />
                </li>
                 <li className="mr-2 hidden sm:inline-block">
                  <IoMdNotifications size={22} fill='#fff' />
                 </li>
                 <li className="mr-2 hidden sm:inline-block">
                  <AiFillSetting size={22} fill='#fff' />
                 </li>
                <li className="mr-2 hidden sm:inline-block">
                 <FaUserCircle size={22} fill='#fff' />
                </li>
              </ul>
           </div> */}
    </header>
  )
}

export default Header
