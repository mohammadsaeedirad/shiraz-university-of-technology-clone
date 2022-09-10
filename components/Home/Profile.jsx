import Image from 'next/image';
import Skills from './Skills';
const Profile = () => {
  const skills =[
    {
        title:"پایتون پیشرفته",
        img:"/python.png",
        url:"/",
        jobs:5 ,
    },
    {
        title:"مقدماتی UX و UI مبانی",
        img:"/UI.png",
        url:"/",
        jobs:6 ,
    },
    {
        title:"اندروید",
        img:"/android.png",
        url:"",
        jobs:3 ,
    },
    {
        title:"C++",
        img:"/c.png",
        url:"",
        jobs:2 ,
    },
    {
        title:"Illustrator",
        img:"/illustrator.png",
        url:"/",
        jobs:4 ,
    },
  ]
  const selectedCourses =[
      {
        title:"آموزش پیشرفته برنامه نویسی به زبان جاوا",
        img:"/java-course.png",
        date:'1399/07/22',
        duration:"جلسات باقی مانده 3" ,
        count:"مدت زمان دوره 21 ساعت "
    },
    {
        title:"یادگیری فتوشاپ در 10 جلسه",
        img:"/ps.png",
        duration:"تعداد جلسات 10" ,
        count:"مدت زمان دوره 15 ساعت "
    },
    {
        title:"اصول پیشرفته برنامه نویسی با پایتون",
        img:"/python-course.png",
        duration:"تعداد جلسات 12" ,
        count:"مدت زمان دوره 17 ساعت "
    },
    {
        title:"آموزش دیجیتال مارکتینگ",
        img:"/marketing.png",
        duration:"تعداد جلسات 22" ,
        count:"مدت زمان دوره 23 ساعت "
    },
  ]
  return (
    <div className='sticky top-20 flex flex-col shadow-lg h-fit w-full border-zinc-200 border rounded-lg  font-medium' >
        <div className='w-[100%] h-[267px] relative' >   
                  <Image
                    src='/uni-background.png'
                    alt='shiraz university of technology'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className="rounded-t-lg"
                  />         
            <div className='absolute left-0 right-0 h-full rounded-t-lg p-4' >

                <div className='flex flex-row items-center' >
                <div className='w-[75px] h-[75px] relative ml-4' >   
                  <Image
                    src='/fateme-nikooei.png'
                    alt='shiraz university of technology'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className="rounded-full"
                  />   
                  </div>
                  <div className='flex flex-col'>
                  <p className="mb-1">فاطمه نیکویی</p>
                  <p className="text-sm" >دانشجوی مهندسی کامپیوتر</p>
                  </div>
                </div>
                <div className='flex justify-center h-2/3 items-center text-sm' >
                    <ul className='flex flex-col' >
                        <li className="mb-2" >مهارت ها : 5</li>
                        <li className="mb-2" >پروژه های در دست : 2</li>
                        <li className="mb-2" >موقعیت های شغلی موجود برای شما : 34  </li>
                    </ul>
                </div>
            </div>      
        </div>
        <Skills   skills={skills} courses={selectedCourses}  />
    </div>
  )
}

export default Profile