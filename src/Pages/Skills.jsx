import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from "../Components/Images";

function Skills() {
  return (
    <div className='container font-regu'>
      <div className='text-2xl text-orange mt-20 font-semibold'>تطوير واجهات المواقع Front End Web Developer</div>
      <div className='text-xl text-orange mt-12 font-semibold'>اللغات والمهارات المستخدمة: <span className='text-black font-normal'>HTML, CSS, Js, Bootstrap, Tailwind, React</span></div>
      <div className='text-3xl text-orange mt-9 font-semibold'>المشاريع المنجزة:</div>
      <div className='text-2xl mt-9 mb-5'>1. باستخدام HTML, CSS</div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-20'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 relative'>
            <Image className='h-40 absolute right-0' src="images/Template-1(1).png" alt="img" />
            <Image className='h-40 absolute left-[77%] top-0' src="images/Template-1(2).png" alt="img" />
            <Image className='h-20 absolute left-0 top-0 w-28' src="images/Template-1(4).png" alt="img" />
            <Image className='h-20 absolute left-0 top-[50%] w-28' src="images/Template-1(3).png" alt="img" />
            <Image className='h-20 absolute left-[32%] top-0 w-28' src="images/Template-1(5).png" alt="img" />
            <Image className='h-20 absolute left-[32%] top-[50%] w-28' src="images/Template-1(6).png" alt="img" />
            <Image className='h-40 absolute left-[65%] top-0 z-[-1] w-10' src="images/Template-1(8).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Template 1</span><br /> تم تصميم الموقع باستخدام HTML و CSS <br />موقع Leon: موقع يعرض خدمات شركة Leon ومعرض الأعمال وتعريف بشركة Leon وطريقة التواصل وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 relative'>
            <Image className='h-20 w-28 absolute left-0 top-0' src="images/Template-2(1).png" alt="img" />
            <Image className='h-20 w-28 absolute left-0 bottom-0' src="images/Template-2(7).png" alt="img" />
            <Image className='h-20 w-28 absolute left-[33%] top-0' src="images/Template-2(3).png" alt="img" />
            <Image className='h-20 w-28 absolute left-[33%] bottom-0' src="images/Template-2(5).png" alt="img" />
            <Image className='h-20 w-28 absolute right-0 top-0' src="images/Template-2(2).png" alt="img" />
            <Image className='h-20 w-28 absolute right-0 bottom-0' src="images/Template-2(6).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Template 2</span><br /> تم تصميم الموقع باستخدام HTML و CSS <br />موقع Kasper: موقع يعرض خدمات شركة Kasper ومعرض الأعمال وتعريف بشركة Kasper وأسعار الخدمات وطريقة التواصل وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-6 w-full h-40 relative'>
            <Image className='h-40 w-[80%] absolute left-0' src="images/card.png" alt="img" />
            <Image className='h-40 w-[20%] absolute right-0' src="images/card(2).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Preview Card</span><br />تم تصميم الموقع باستخدام HTML و CSS <br />موقع Preview Card: هو تصميم بطاقة أعمال وهو كرت متوسط الحجم متوافق مع قياسين للحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

      </div>

      <div className='text-2xl mt-9 mb-5'>2. باستخدام Javascript</div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-20'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-6 w-full h-40 relative'>
            <Image className='h-40 absolute top-0 right-0 w-[33%]' src="images/Weather1.png" alt="img" />
            <Image className='h-40 absolute left-[33%] top-0 z-[-1] w-[34%]' src="images/Weather2.png" alt="img" />
            <Image className='h-40 absolute left-0 top-0 w-[33%]' src="images/Weather3.png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Weather app</span><br /> تم تصميم الموقع باستخدام لغات HTML و CSS و Js <br /> موقع Weather: موقع يعرض حالة الطقس لبلدك أو أي بلد تختاره وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-6 w-full h-40 relative'>
            <Image className='h-40 w-[100%] absolute' src="images/Brazil1.png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Brazil</span><br /> تم تصميم الموقع باستخدام لغات HTML و CSS و Js <br />موقع Brazil: موقع يعرض العد التنازلي لموعد رحلة الأبطال نحو البرازيل في 31-12-2024 وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 relative'>
            <Image className='h-40 w-[80%] absolute left-0' src="images/e-commerce.png" alt="img" />
            <Image className='h-40 w-[20%] absolute right-0' src="images/e-commerce(2).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>E-commerce Product Page</span><br />تم تصميم الموقع باستخدام HTML وCSS وJs <br />موقع E-commerce: موقع تجاري يعرض منتج شركة خاصة بالأحذية، صور الأحذية وأسعارها ووصف بسيط لها،يمكن التبديل بين الصور واختيار الحذاء مع العدد المطلوب ووضعه في سلة المشتريات، وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

      </div>

      <div className='text-2xl mt-9 mb-5'>3. باستخدام Bootstrap</div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-20'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-6 w-full h-40 relative'>
            <Image className='h-[100%] w-[15%] absolute left-0 top-0' src="images/Bootstrap1(5).png" alt="img" />
            <Image className='h-[50%] w-[34%] absolute top-0 left-[16%] ' src="images/Bootstrap1(1).png" alt="img" />
            <Image className='h-[50%] w-[34%] absolute bottom-0 left-[16%]' src="images/Bootstrap1(2).png" alt="img" />
            <Image className='h-[50%] w-[34%] absolute top-0 left-[50%]' src="images/Bootstrap1(3).png" alt="img" />
            <Image className='h-[50%] w-[34%] absolute bottom-0 left-[50%]' src="images/Bootstrap1(4).png" alt="img" />
            <Image className='h-[100%] w-[15%] absolute right-0 top-0' src="images/Bootstrap1(6).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Bootstrap</span><br />تم تصميم الموقع باستخدام Bootstrap <br />موقع Bootstrap: موقع تعليمي يعرض ميزات استخدام Bootstrap وسهولة استخدامه وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 grid grid-cols-3'>
            <Image className='h-20 w-28' src="images/Bootstrap2(1).png" alt="img" />
            <Image className='h-20 w-28' src="images/Bootstrap2(2).png" alt="img" />
            <Image className='h-20 w-28' src="images/Bootstrap2(3).png" alt="img" />
            <Image className='h-20 w-28' src="images/Bootstrap2(4).png" alt="img" />
            <Image className='h-20 w-28' src="images/Bootstrap2(6).png" alt="img" />
            <Image className='h-20 w-28' src="images/Bootstrap2(5).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>The Book</span><br />تم تصميم الموقع باستخدام Bootstrap <br />موقع Net Ninja Pro - the Book: موقع يعرض أحد الكتب،تعريف بالكتاب وسعره ومحتوياته وتقييم ومراجعة العملاء للكتاب، وطريقة التواصل، وإمكانية التسجيل لمعرفة آخر التحديثات، والكتب الأخرى المتوفرة غير هذا الكتاب، وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>
      </div>

      <div className='text-2xl mt-9 mb-5'>4. باستخدام React</div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-20'>
        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 relative'>
            <Image className='h-40 w-[80%] absolute left-0' src="images/pricing-component.png" alt="img" />
            <Image className='h-40 w-[20%] absolute right-0' src="images/pricing-component(2).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Pricing Component</span><br />تم تصميم الموقع باستخدام React <br />موقع Pricing Component: موقع يعرض بطاقة أسعار خدمة انترنت مع زر تبديل بين العروض اليومية والعروض الشهرية وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 flex'>
            <Image className='h-40 w-[15%]' src="images/easybank(3).png" alt="img" />
            <Image className='h-40 w-[15%]' src="images/easybank(4).png" alt="img" />
            <Image className='h-40 w-[15%]' src="images/easybank(2).png" alt="img" />
            <Image className='h-40 w-[55%]' src="images/easybank.png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Easybank Landing Page</span><br />تم تصميم الموقع باستخدام React <br />موقع easybank: موقع يعرض خدمات بنك easybank الالكترونية والمميزات لاختيار البنك ومقالات للتعريف عن خدمات البنك، وطرق التواصل، وهو تصميم متجاوب على الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-2 w-full h-40 flex'>
            <Image className='h-40 w-[33%] h-20' src="images/portfolio1.png" alt="img" />
            <Image className='h-40 w-[34%] h-20' src="images/portfolio2.png" alt="img" />
            <Image className='h-40 w-[33%] h-20' src="images/portfolio3.png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>Ultra Profile</span><br />تم تصميم الموقع باستخدام React <br />موقع Ultra Profile: موقع شخصي يعرض تعريف بسيط بالمصمم ومعرض أعماله ومهاراته وطرق التواصل وهو موقع مكون من صفحتين ومتجاوب مع الحاسب والهاتف</p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

        <div className='shadow-xl text-center pb-6 mb-20'>
          <div className='mb-6 w-full h-40 flex'>
            <Image className='h-40 w-[50%]' src="images/to-do(1).png" alt="img" />
            <Image className='h-40 w-[50%]' src="images/to-do(2).png" alt="img" />
          </div>
          <p className='px-5 font-semibold mb-9'><span className='text-semiBlack text-lg'>To Do</span><br />تم تصميم الموقع باستخدام React <br />موقع To Do: موقع تدوين ملاحظات ومهام، يقوم المستخدم بإدخال النص ثم الضغط على الزر ليتم إضافة ملاحظته إلى القائمة، يوجد إمكانية حذف الملاحظة </p>
          <a href="" target="_blank" className='font-semibold bg-orange text-white p-3 rounded-lg'>رابط الموقع</a>
        </div>

      </div>

    </div>
  )
}

export default Skills;