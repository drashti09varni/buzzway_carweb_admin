// // import React, { useState } from 'react';
// // import Logo from '../Images/user.PNG';
// // import {BiSolidDashboard} from 'react-icons/bi';
// // import {BsLayersFill} from 'react-icons/bs';
// // import {FaWpforms, FaAngleDown} from 'react-icons/fa';
// // import {AiFillCar} from 'react-icons/ai';
// // import {HiLocationMarker} from 'react-icons/hi';
// // import { Link, Outlet } from 'react-router-dom';


// // export default function Sidebar() {
    
// //   return (
// //     <>
   
//    <div class="flex flex-col w-[220px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-screen">
//               <button class="relative text-sm focus:outline-none group">
//                   <div class="flex items-center justify-between w-full text-red-900 text-2xl h-16 px-4  border-gray-300 hover:bg-gray-300">
//                       <span class=" font-[600] text-lg text-[#188ae2] ">
//                       HINDUSTANRIDES
//                       </span> 
                     
//                   </div>
                
//               </button>
//               <div class="flex flex-col flex-grow overflow-auto">
//                   <div className='flex'>
//                   <header>
//                             <div class="flex mb-2 ">
//                                 <a class="relative inline-flex items-start mr-2 p-2" href="#0">
//                                     <div class="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow" aria-hidden="true">
                                       
//                                     </div>
//                                     <img class="rounded-full" src={Logo} width="60" height="74" alt="User 01" />
//                                 </a>
//                                 <div class="mt-1 pr-3 p-2">
//                                     <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
//                                         <h2 class="text-[16px] leading-snug justify-center font-semibold text-[#333]">
//                                         John Doe
//                                         </h2>
//                                     </a>
//                                     <div class="flex items-center">
//                                         <span class="text-sm font-medium -mt-0.5 mr-1 text-[#777]">Car Admin</span></div>
//                                 </div>
//                             </div>
//                         </header>

//                   </div>
                  
//                    <div className='mt-3'>
//                    <div className="flex p-5 space-x-7 group hover:bg-[#c7def0] ">
//                         <BiSolidDashboard size={25}  />
//                        <a href='/'> Dashboard  </a>
//                     </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]'>
//                             <BsLayersFill size={20} />
//                             <a className=''>Layout</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <AiFillCar size={20}  />
//                             <a className='' href='/car-form'>Car Forms</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <HiLocationMarker size={20}  />
//                             <a className=''>City Forms</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <FaWpforms size={20}  />
//                             <a className=''>Car Detail Forms</a>
//                         </div>
                   
                     
//                    </div>
//               </div>

//           </div>
         
// //     </>
// //   )
// // }
// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import Logo from '../Images/user.PNG';
// import {BiSolidDashboard} from 'react-icons/bi';
// import {BsLayersFill} from 'react-icons/bs';
// import {FaWpforms, FaAngleDown} from 'react-icons/fa';
// import {AiFillCar} from 'react-icons/ai';
// import {HiLocationMarker} from 'react-icons/hi';
// import { Link, Outlet } from 'react-router-dom';


// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div className="container">
//              <div class="flex flex-col w-[220px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-screen">
//               <button class="relative text-sm focus:outline-none group">
//                   <div class="flex items-center justify-between w-full text-red-900 text-2xl h-16 px-4  border-gray-300 hover:bg-gray-300">
//                       <span class=" font-[600] text-lg text-[#188ae2] ">
//                       HINDUSTANRIDES
//                       </span> 
                     
//                   </div>
                
//               </button>
//               <div class="flex flex-col flex-grow overflow-auto">
//                   <div className='flex'>
//                   <header>
//                             <div class="flex mb-2 ">
//                                 <a class="relative inline-flex items-start mr-2 p-2" href="#0">
//                                     <div class="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow" aria-hidden="true">
                                       
//                                     </div>
//                                     <img class="rounded-full" src={Logo} width="60" height="74" alt="User 01" />
//                                 </a>
//                                 <div class="mt-1 pr-3 p-2">
//                                     <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
//                                         <h2 class="text-[16px] leading-snug justify-center font-semibold text-[#333]">
//                                         John Doe
//                                         </h2>
//                                     </a>
//                                     <div class="flex items-center">
//                                         <span class="text-sm font-medium -mt-0.5 mr-1 text-[#777]">Car Admin</span></div>
//                                 </div>
//                             </div>
//                         </header>

//                   </div>
                  
//                    <div className='mt-3'>
//                    <div className="flex p-5 space-x-7 group hover:bg-[#c7def0] ">
//                         <BiSolidDashboard size={25}  />
//                        <a href='/'> Dashboard  </a>
//                     </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]'>
//                             <BsLayersFill size={20} />
//                             <a className=''>Layout</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <AiFillCar size={20}  />
//                             <a className='' href='/car-form'>Car Forms</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <HiLocationMarker size={20}  />
//                             <a className=''>City Forms</a>
//                         </div>
//                         <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
//                             <FaWpforms size={20}  />
//                             <a className=''>Car Detail Forms</a>
//                         </div>
                   
                     
//                    </div>
//               </div>

//           </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <aside className="fixed bg-blue-800 text-white w-64 h-screen mt-10">
//       <div className="p-4 flex items-center justify-center">
//         <span className="text-3xl font-bold">Logo</span>
//       </div>
//       <ul className="p-4">
//         <li className="py-2 hover:bg-blue-600 cursor-pointer">Dashboard</li>
//         <li className="py-2 hover:bg-blue-600 cursor-pointer">Reports</li>
//         <li className="py-2 hover:bg-blue-600 cursor-pointer">Settings</li>
//       </ul>
      
//       <Outlet/>
//     </aside>
//   );
// };

// export default Sidebar;


import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../Images/user.PNG';
import {BiSolidDashboard} from 'react-icons/bi';
import {BsLayersFill} from 'react-icons/bs';
import {FaWpforms, FaAngleDown} from 'react-icons/fa';
import {AiFillCar} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';
import {MdTour} from 'react-icons/md';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
         <div class="flex flex-col w-[260px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] h-screen overflow-x">
              <button class="relative text-sm focus:outline-none group">
                  <div class="flex items-center justify-between w-full text-red-900 text-2xl h-16 px-4  border-gray-300 hover:bg-gray-300">
                      <span class=" font-[600] text-lg text-[#188ae2] ">
                      HINDUSTANRIDES
                      </span> 
                     
                  </div>
                
              </button>
              <div class="flex flex-col flex-grow overflow-auto">
                  <div className='flex'>
                  <header>
                            <div class="flex mb-2 ">
                                <a class="relative inline-flex items-start mr-2 p-2" href="#0">
                                    <div class="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow" aria-hidden="true">
                                       
                                    </div>
                                    <img class="rounded-full" src={Logo} width="60" height="74" alt="User 01" />
                                </a>
                                <div class="mt-1 pr-3 p-2">
                                    <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                        <h2 class="text-[16px] leading-snug justify-center font-semibold text-[#333]">
                                        John Doe
                                        </h2>
                                    </a>
                                    <div class="flex items-center">
                                        <span class="text-sm font-medium -mt-0.5 mr-1 text-[#777]">Car Admin</span></div>
                                </div>
                            </div>
                        </header>

                  </div>
                  
                   <div className='mt-3'>
                   <div className="flex p-5 space-x-7 group hover:bg-[#c7def0] ">
                        <BiSolidDashboard size={25}  />
                       <a href='/'> Dashboard  </a>
                    </div>
                        <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]'>
                            <BsLayersFill size={20} />
                            <a className=''>Layout</a>
                        </div>
                        <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
                            <AiFillCar size={20}  />
                            <Link to='/car-form'>Car Forms</Link>
                        </div>
                        <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
                            <HiLocationMarker size={20}  />
                           <Link to='/city-form'>City Forms</Link>
                        </div>
                        <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
                            <FaWpforms size={20}  />
                            <Link to='/car-details-Form'>Car Detail Forms</Link>
                        </div>
                        <div className='flex p-5 space-x-7 group hover:bg-[#c7def0]' >
                            <MdTour size={20}  />
                            <a className=''>Tour Detail Forms</a>
                        </div>
                     
                   </div>
              </div>

          </div>  
        <Outlet/>
    </aside>
   
  )
}

export default Sidebar
