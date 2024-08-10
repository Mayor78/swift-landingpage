import React from 'react'
import sub from '../assets/Subtract.png'
import { MdArrowOutward } from "react-icons/md";
import Track from '../components/Track';
import ServiceCard from '../components/ServiceCard';
import Services from './Services';
import Started from '../components/Started';
const Home = () => {
  return (
    <>
        <div className='main-wrapper bg-gray-950 py-3' id='home'>
          <div className='secondary-wrapper block md:flex justify-around mx-8 mt-[50px]'>
             <div className='child-one'>
              <h1 className='text-lime-300'>We offer rapid <br />
              delivery services <br /> worldwide.</h1>
               <p className=''>Experience lightning-fast global delivery with our trusted service, <br />
                bringing your essentials right to your doorstep no  <br />matter where you are</p>
                <button className='mx-4 flex gap-2 mb-3'>Learn More<MdArrowOutward  className='mt-1'/></button>
             </div>
             <div className='child-two'>
              <img src={sub} alt='Subtract' className='h-[350px] w-[400px]' />
             </div>
          </div>
          
        </div>
        <Track/>
        <Services />
        <Started/>

    </>
  )
}

export default Home