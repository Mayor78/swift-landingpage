import React, { useState } from 'react';
import truck from '../assets/Rectangle 18.png';
import { MdArrowOutward, MdMenuOpen } from "react-icons/md";
import Home from '../pages/Home';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion'
const Header = () => {
    const bg = truck;
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    const containerVariants = {
        hidden: { height: 0, opacity: 0, x: '-100%' },
        visible: { height: 'auto', opacity: 1, x: 0, transition: { duration: 0.8 } }
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.5, duration: 0.5 }
        })
      };
    return (
        <>
            {/* Keep Navbar outside of any other divs */}
            <nav className="flex sticky top-0 z-50 justify-between py-2 backdrop-blur-lg rounded-full mx-4">
                <div className="logo mx-4 mt-1">
                    <h2>
                        <span className="log font-extrabold p-[4px] rounded-md text-3xl">Tk</span>
                        <span className="text-3xl">Kahf</span>
                    </h2>
                </div>
                <ul className="hidden md:flex gap-[2rem] ">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#track">Track</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="/login">About Us</a></li>
                </ul>
                <div>
                    <button className="mx-4 hidden md:block">Contact Us</button>


                      {/* mobile navbar  */}


            <div className="sticky  top-0 z-10 mx-3 flex md:hidden justify-end " onClick={handleClick}>
                       
                       <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
         </svg>
             </div>
             {
               open && (
                   
                <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex justify-center items-center fixed top-[56px] left-[-15px]   bg-black opacity-50">
                       <div className="flex flex-col gap-4 w-full max-w-lg p-8">
                         
                           <motion.ul className="flex flex-col gap-4">
                               
                               <motion.li variants={itemVariants} initial="hidden" animate="visible"
                                onClick={handleClick}><a href="#home">Home</a></motion.li>
                               <motion.li variants={itemVariants} initial="hidden" animate="visible"
                                onClick={handleClick}><a href="#track">Track</a></motion.li>
                               <motion.li variants={itemVariants} initial="hidden" animate="visible"
                                onClick={handleClick}><a href="#service">Service</a></motion.li>
                               <motion.li variants={itemVariants} initial="hidden" animate="visible" 
                               onClick={handleClick}><a href="/login">About Us</a></motion.li>
                           </motion.ul>
                    </div>
                    </motion.div>
               )
           }
                </div>
                
            </nav>
            
          
         

            <div className="big-wrapper" style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                top: '0'
            }} id='home'>

               
                <div className="flex justify-center place-items-center mt-56">
                    <h1 className=" type mx-5 text-4xl md:text-6xl font-bold leading-tight">Streamlined Routes, <br />
                        <span className="mx-[20px]">Swift </span> 
                        <span className="text-lime-300">Deliveries.</span>
                    </h1>
                </div>
                <p className="flex justify-center mx-4 md:mx-0">
                    Changing the logistic business and delivering happiness to
                    <br /> people all over the globe
                </p>

                <div className="flex justify-center gap-3 mt-10">
                    <button className="mx-4 flex gap-2">Send Parcel<MdArrowOutward className="mt-1"/></button>
                    <buttonn className="mx-4 flex gap-2">Get a Quote<MdArrowOutward className="mt-1"/></buttonn>
                </div>
            </div>
            <Home className="z-10" />

            <div>

            </div>
        </>
    );
};

export default Header;
