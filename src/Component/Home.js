
import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BiSolidHome } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillCar, AiFillCheckCircle } from 'react-icons/ai';


function Home() {


  return (
    <main className='main-container'>
      <div className='p-5'>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>BOOKING</h3>
              <BsFillArchiveFill className='card_icon' />
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>FORMS</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>CARS</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>33</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>CITYS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home