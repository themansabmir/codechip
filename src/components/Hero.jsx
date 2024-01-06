import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen   '>
      <div className='pb-20'></div>
      <h1 className=' text-center sm:text-[100px] text-5xl  lg:text-[250px] font-bold text-primaryText'>
        Code<span className='text-secondaryColor font-bold'>-</span>Chip
      </h1>
      <div className='flex justify-between mt-10 text-2xl text-primaryText'>
        <h1>Where ideas evolves into reality</h1>
        <nav>
          <ul className='flex gap-10  '>
            <li className='cursor-pointer'>Work</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Studio</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Hero