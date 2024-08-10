import React from 'react';
import { SERVICES } from '../../Data';
import ServiceCard from '../components/ServiceCard';
import group from '../assets/Group.png'
import trane from '../assets/trane_technologies_logo.svg.png'
import kayak from '../assets/kayak_logo.svg.png'
import ciao from '../assets/cainiao_logistics_logo.svg.png'
import yamoto from '../assets/yamato_transport_coltd_logo.png.png'
import tane from '../assets/16-05-18.svg.png'
import Accordion from '../components/Accordion';



const Services = () => {
  return (
      <div>
    <div className='md:bg-green-900 bg-neonYellowGreen mt-10 p-3 md:p-10' id='service'>
      <p className='text-md text-black font-light md:text-white'>Our Service</p>
      <h1 className='font-bold text-2xl text-black md:text-white mb-2'>What makes us stand out <br /> from others.</h1>
      <div className="block md:flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {SERVICES.map(service => (
          <div key={service.id} className="snap-center mx-2 my-5 md:my-0">
            <ServiceCard
              id={service.id}
              name={service.name}
              description={service.description.substring(0, 200)} // Short description
              image={service.image}
            />
          </div>
        ))}
      </div>


      
    </div>
    <div className='backed-by bg-deepGreen mt-10 p-3  md:p-16'>
      <p className='text-md text-white mx-3 font-light'>Backed by</p>
      <h1 className='font-bold text-2xl text-white mx-2 mb-6'>Some of our trusted partners.</h1>
      <div className='flex justify-center gap-10  overflow-x-auto snap-x snap-mandatory no-scrollbar'>
        <img src={group} alt='Placeholder' className='h-[30px]' />
        <img src={ciao} alt='Placeholder' className='h-[30px]' />
        <img src={kayak} alt='Placeholder' className='h-[30px]'/>
        <img src={trane} alt='Placeholder' className='h-[30px]'/>
        <img src={yamoto} alt='Placeholder' className='h-[30px]'/>
        <img src={tane} alt='Placeholder' className='h-[30px] text-6xl'/>
        </div>
         
      </div>
      <div className='Accordion'>
         <Accordion/>
      </div>
      
    </div>
  );
}

export default Services;
