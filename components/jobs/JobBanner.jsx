import Image from 'next/image';
import jobs from '../../data/jobs.json'
import {useRouter} from "next/router";

const JobBanner = () => {
  const router = useRouter();  
  return (
    <div className="mb-5" >
        <div className='w-[100%] h-[400px] relative' >   
                  <Image
                    src='/code-bg.png'
                    alt='our goals'
                    layout='fill'
                    objectFit='cover'
                    quality={100} 
                    className="rounded-xl"        
                  />         
                  <div className='absolute left-0 right-0 m-auto h-full bg-gradient-to-tl from-zinc-100 via-white to-transparent' >
                    <div className='p-8' >
                        <div className='flex flex-row  w-full' >
                            <div className='flex flex-col justify-start w-full' >
                                <h1 className='font-medium text-lg mb-2' >{router.query.job=="توسعه-دهنده-اندروید" ? jobs[0].title:  jobs[1].title}</h1>
                            </div>
                            <div className='flex justify-end  w-full' >
                                <p className='text-xs text-left leading-6 sm:text-sm font-medium text-zinc-200' >تاریخ آگهی:{router.query.job=="توسعه-دهنده-اندروید" ? jobs[0].date:  jobs[1].date}</p>
                            </div>
                        </div>
                        <div className='mb-20 bg-[#0870cb] rounded-full p-1.5 w-fit text-xs text-white' >{router.query.job=="توسعه-دهنده-اندروید" ? jobs[0].employer:  jobs[1].employer}</div>

                        <div className='grid grid-cols-3 gap-4' >
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs ' >دسته‌بندی</p>
                                <p className='text-xs' >برنامه نویسی</p>
                            </div>
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs' >نوع همکاری</p>
                                <p className='text-xs' >تمام وقت</p>
                            </div>
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs' >حداقل سابقه کار</p>
                                <p className='text-xs' >1 سال</p>
                            </div>
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs' >حداقل مدرک تحصیلی</p>
                                <p className='text-xs' >لیسانس</p>
                            </div>
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs' >رشته تحصیلی</p>
                                <p className='text-xs' >مهم نیست</p>
                            </div>
                            <div className='flex flex-col' >
                                <p className='font-medium mb-2 sm:text-normal text-xs' >حقوق</p>
                                <p className='text-xs' >۶ تا ۸ ملیون تومان</p>
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
    </div>
  )
}

export default JobBanner