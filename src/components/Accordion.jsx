import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ACCORDION } from '../../Data';
import frame from '../assets/Frame 168.png';
import Review from './Review';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-4 text-left bg-deepGreen hover:bg-green-700 focus:outline-none"
      >
        <span className='text-white text-[15px]'>{title}</span>
        <span className='text-white'>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-black text-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    console.log("Accordion component is mounted");
    return () => {
      console.log("Accordion component is unmounted");
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-neonYellowGreen text-center">
        What kind of questions do people usually ask about us?
      </h2>
      <div className="block md:flex  justify-center mt-8 gap-4">
        {/* Scrollable accordion container */}
        <div className='md:max-w-[20rem] mx-3 md:mx-0 mb-3 h-[20rem] overflow-y-auto no-scrollbar border border-gray-300 rounded-md'>
          {ACCORDION.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
        <img src={frame} alt="Frame" className='h-[20rem] w-[23rem] mx-3 md:mx-0 md:w-auto'/>
      </div>
      <div className='reveiew-card'>
       <Review/>
      </div>
    </div>
  );
};

export default Accordion;
