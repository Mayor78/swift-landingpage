import React from 'react'

const Footer = () => {
  return (
    <> 
          <div className='ancestor bg-black p-2'>
         <div className='parent grid grid-cols-1 mx-3 md:grid-cols-4 mt-10'>
          <div className='child-one-logo'>
          <h2>
                        <span className="log font-extrabold p-[4px] rounded-md text-3xl">Tk</span>
                        <span className="text-3xl">Kahf</span>
                    </h2>
                    <p>Fast, Swift and Effective Cargo <br />
                     & Logistics business........</p>
                     <div className='social-media grid grid-cols-2 md:grid-cols-4 gap-3 mt-20 '>
                       <img src="https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white&style=for-the-badge" alt="Facebook"/>
                       <img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white&style=for-the-badge" alt="Instagram"/>
                       <img src="https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=white&style=for-the-badge" alt="Twitter"/>
                       <img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white&style=for-the-badge" alt="LinkedIn"/>

                     </div>
          </div>
          <div className='child-two-company '>
            <h3 className='font-semibold text-3xl mb-4'>Company</h3>
            <ul className='mt-3'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Press</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='child-three-service'>
            <h3 className='font-semibold text-3xl mb-4'>Services</h3>
            <ul>
              <li>Rapid Delivery</li>
              <li>Global Logistics</li>
              <li>Customization</li>
              <li>Bulk Shipments</li>
            </ul>
          </div>
          <div className='child-four-legal'>
            <h3 className='font-semibold text-3xl mb-4'>Legal</h3>
            <ul>
              <li>Rapid Delivery</li>
              <li>Global Logistics</li>
              <li>Customization</li>
              <li>Bulk Shipments</li>
            </ul>

            </div>    
               </div>
               <div className='flex justify-evenly'>
                <h3 className='text-white mt-20  font-semibold'>© 2024 MayorDev & AbiolaUI/UX. All rights reserved.</h3>
                <div className='text-center  grid  gap-4'>
                  <img src='https://img.shields.io/badge/License-MIT-blue.svg' alt='License' className='w-[100px]' />
                 <img src='https://img.shields.io/badge/Built%20with-React-blueviolet?style=for-the-badge&logo=react' alt='React'  className='w-[100px]' />
                 <img src='https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css' alt='Tailwind CSS'  className='w-[100px]'  />
                  
                    </div>
               </div>
               </div>
    </>
  )
}

export default Footer