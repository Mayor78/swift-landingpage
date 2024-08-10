import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({ id, name, description, image }) => {
  return (
    <div className="flex justify-center">
      <div className="card-wrapper w-[280px] h-[300px] relative">
        <img className="card-image w-full h-full object-cover rounded-md" src={image} alt={name} />
        
        {/* For smaller screens, show content without hover; for larger screens, keep hover effect */}
        <div className="card-body absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent p-3 text-white 
          opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm md:truncate md:hover:whitespace-normal">{description}</p>
          <button className="mt-2 bg-neonYellowGreen hover:bg-blue-700 text-white mx-8 justify-center flex gap-2">
            Learn More <MdArrowOutward className='mt-1'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
