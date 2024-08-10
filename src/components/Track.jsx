import React from 'react';
import circle from '../assets/Frame 112.png';
import map from '../assets/world_map_no_icons.png';
import { FaCheckSquare } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { FaEuroSign } from "react-icons/fa";

const Track = () => {
  const bg = map;
  
  const style ={
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <>
      <div className='parent block md:flex justify-around mt-10' id='track'>
        <div className='child-one mx-6 md:mx-0'>
          <img src={circle} alt='circle' className='w-[300px] md:w-[350px]'/>
        </div>
        <div className='child-two bg-slate-950 p-4 text-white'>
          <h1 className='text-xl md:text-2xl'>Track your parcels with <br /> just a tap.</h1>
          <p className='mt-2'>Effortlessly track all your packages with just a few clicks by entering your tracking ID below.</p>
          <h2 className='bg-black w-[5rem] p-3 mt-4'>Tracking</h2>
          <div className='bg-black p-2 mt-4'>
            <input type='text' placeholder='Enter Tracking ID' className='w-full px-4 py-2' /><br />
            <button className='track-btn flex justify-center bg-lime-400 px-4 py-2 mt-3'>Track</button>
          </div>
        </div>
      </div>

      <div className='parent-two bg-green-950 mt-10 p-6 text-white'>
        <div className='child-one text-center'>
          <h2 className='font-bold text-xl'>Why Choose Us</h2>
          <div style={style} className='mt-6 p-4'>
            <h1 className='text-2xl md:text-3xl mb-4'>We are revolutionizing the logistics and cargo ecosystem for faster and more efficient sending and receiving</h1>
            <p className='text-sm md:text-base'>Experience a new era in logistics with our cutting-edge solutions designed to streamline your shipping process and ensure timely deliveries worldwide.</p>
          </div>
        </div>
        <div className='child-two-box mt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='box-one bg-neonYellowGreen md:bg-white text-black rounded-md p-4'>
            <FaCheckSquare className='text-2xl mb-2'/>
            <p className='text-sm'>Our shipping and receiving processes are designed with top-notch security measures, ensuring the safety and integrity of your packages every step of the way.</p>
            <p className='mt-4 font-bold'>Secure Process</p>
          </div>
          <div className='box-two bg-black md:text-white text-neonYellowGreen rounded-md p-4'>
            <GiElectric className='text-2xl mb-2'/>
            <p className='text-sm'>Experience swift and reliable delivery with us. We prioritize speed and dependability to ensure your packages arrive on time, every time.</p>
            <p className='mt-4 font-bold'>Fast and Reliable</p>
          </div>
          <div className='box-three bg-neonYellowGreen md:bg-white text-black rounded-md p-4'>
            <FaEuroSign className='text-2xl mb-2'/>
            <p className='text-sm'>Our pricing is straightforward and affordable, with no hidden fees or unnecessary charges, ensuring you get the best value without any surprises.</p>
            <p className='mt-4 font-bold'>Affordable Pricing</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
