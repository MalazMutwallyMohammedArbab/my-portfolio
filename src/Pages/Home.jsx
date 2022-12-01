import React from 'react';
import { NavLink } from 'react-router-dom';
import Image from "../Components/Images";


export default function Home() {
  return (
    <div className='font-regu my-12 container'>
      <div className='text-orange text-4xl font-semibold mt-24 mb-12'>قسم الكراسات</div>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-10'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/wake-up (2).png" alt="img" />
          <p className='px-4 font-semibold'>كراس مسطر (6×9 - 80 صفحة): هذا الكراس المميز باقتباس "Wake up HERO" على الغلاف، كراس بتصميم جميل للكتابة فيه مع اقتباسات محفزة داخل كل صفحة</p>
          <div className='text-orange text-xl font-semibold mt-3 mb-6'>500 جنيه سوداني</div>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/wake-up (2).png" alt="img" />
          <p className='px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nemo assumenda neque placeat aut id error ducimus delectus asperiores.</p>
          <div className='text-orange text-xl font-semibold mt-3 mb-6'>500 جنيه سوداني</div>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/wake-up (2).png" alt="img" />
          <p className='px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nemo assumenda neque placeat aut id error ducimus delectus asperiores.</p>
          <div className='text-orange text-xl font-semibold mt-3 mb-6'>500 جنيه سوداني</div>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <Image className='mb-6 w-full h-40' src="images/wake-up (2).png" alt="img" />
          <p className='px-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nemo assumenda neque placeat aut id error ducimus delectus asperiores.</p>
          <div className='text-orange text-xl font-semibold mt-3 mb-6'>500 جنيه سوداني</div>
          <NavLink to="/content" className='font-semibold bg-orange text-white p-3 rounded-lg'>تصفح المحتوى</NavLink>
        </div>
      </div>
    </div>
  )
}
