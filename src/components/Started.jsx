import React from 'react'
import frame1 from '../assets/Frame 184.png'
import frame2 from '../assets/Rectangle 11.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Started = () => {
    const bg = {
        backgroundImage: `url(${frame2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        overflow: 'hidden',
        // zIndex: '-1',
        borderRadius: '10px',
        boxShadow: '0 5px 10px rgba(0,0,0,0.2)'
    }
  return (
    <>
                  <div className='bg-gray-800 mt-5 p-3' id='about'>
                     <div className='parent block md:flex gap-5 mx-3 mt-6'>
                        <div className='child-one mb-2'>
                            <h1 className='font-bold text-3xl mb-2 text-neonYellowGreen'>Get Started with us today</h1>
                            <p className='font-light text-[15px]'>Start using our product today to experience seamless, fast, <br />
                             and highly effective cargo and logistics handling. Enjoy peace <br />
                              of mind with reliable, on-time deliveries and exceptional customer <br />
                               support. Join our growing list of satisfied clients and elevate your <br />
                               shipping experience with us</p>
                               <button className='flex gap-2 '>Get started <FaArrowRightLong className='mt-[5px]' /></button>
                        </div>
                         <div className='child-two  ' style={bg}>
                            <div className='relative right-0 md:right-[20rem]'>
                                <img src={frame1} alt='frame1' className='w-[300px]'/>
                                
                            </div>
                            
                            
                         </div>
                     </div>
                  </div>
    </>
  )
}

export default Started