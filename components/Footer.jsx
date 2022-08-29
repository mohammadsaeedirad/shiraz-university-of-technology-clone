import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="container mx-auto p-4 mt-10" >
     <div className="flex flex-col-reverse md:flex-row font-medium text-sm text-[#001f56]" >
        <div className='flex flex-col basis-1/4 mb-8 md:mb-0' >
            <p className='text-[#ce8913] mb-5'>خدمات</p>
            <ul className='font-normal'>
                <li className='mb-3'>
                <Link href="/" >
                    <a>
                    ورود به صفحه اصلی 
                    </a>
                </Link>
                </li>
                <li className='mb-3'>
                <Link href="/" >
                    <a>
                    فرصت های شغلی  
                    </a>
                </Link>
                </li>
                <li className='mb-3'>
                <Link href="/" >
                    <a>
                    وبینار ها 
                    </a>
                </Link>
                </li>
                <li className='mb-3'>
                <Link href="/" >
                    <a>
                    راهنمای کارجویان
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/" >
                    <a>
                    راهنمای کارفرمایان
                    </a>
                </Link>
                </li>      
            </ul>
        </div>
        <div className='flex flex-col basis-1/4 mb-8 md:mb-0' >
        <p className='text-[#ce8913] mb-5'>پشتیبانی</p>
            <ul className='font-normal flex-col'>
                <li className='mb-3'>
                <Link href="/" >
                    <a>
                    سوالات متداول 
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/" >
                    <a>
                    درباره ما 
                    </a>
                </Link>
                </li>
            </ul>
        </div>
        <div className='flex flex-col basis-2/4 mb-8 md:mb-0' >
        <p className='text-[#ce8913] mb-5'>تماس با ما</p>
            <ul className='font-normal'>
                <li className='mb-3' >
                <Link href="/" >
                    <a>
                    آدرس : استان فارس , شیراز , بلوار مدرس دانشگاه صنعتی شیراز  
                    </a>
                </Link>
                </li>
                <li>
                <Link href="/" >
                    <a>
                    تلفن :07137354501
                    </a>
                </Link>
                </li>
            </ul>
        </div>
     </div>
     <div className='w-full text-center pt-4'>
        <p className='text-sm font-' >تمامی حقوق برای دانشگاه صنعتی شیراز محفوظ است </p>
     </div>
    </div>
    
  )
}

export default Footer