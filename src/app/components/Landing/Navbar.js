import React from 'react';

export default function Navbar(){
  return(
    <nav className='bg-[#333] w-10/12 mx-auto my-5 px-3 py-2 rounded-3xl flex justify-between items-center'> 
    <h2 className='text-2xl text-white'>Orbit</h2>
    <div className='text-[#aaa] flex gap-10'>
      <button className=''>About</button>
      <button className=''>Pricing</button>
      <button className=''>Features</button>
      <button className=''>Blog</button>
    </div>
    <div className='text-[#aaa]'>
    <button className='mr-5'>Login</button>
    <button className='rounded-3xl bg-white px-2 py-1 text-[#222]'>Get Started</button>
    </div>
    </nav>
  )

}