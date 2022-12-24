import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import Quotes from './Quotes'


export default function Navbar() {
  return (
    <div className='font-regu font-semibold container'>
      {/* For Computer */}
      <div className='hidden lg:block lg:flex lg:justify-between lg:items-center lg:my-12'>
        <div className='text-3xl text-orange font-cairo flex-start'>كشكول</div>

        <div className='flex justify-evenly w-[34%] text-xl absolute right-[25%]'>
          <NavLink className="border-b-2 border-orange hover:text-orange transition ease-out duration-500" to="/" >الصفحة الرئيسية</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/skills">مهاراتي</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/projects">المشاريع العملية</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/contact">تواصل</NavLink>
        </div>

        <div className='text-xl w-[40%] absolute left-[3%] text-center hover:text-orange'><Quotes /></div>
      </div>

      {/* For Mobile */}
      <div className='lg:hidden border-b p-3 flex justify-between items-center'>
        <div className='text-3xl text-orange font-cairo'>كشكول</div>        
        <Navigation />
      </div>
    </div>
  )
}
