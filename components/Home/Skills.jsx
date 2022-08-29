import Image from 'next/image';
import Link from 'next/link';
const Skills = () => {
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
  return (
    <div className="p-4 flex flex-col">
        <p className="font-medium text-[#ce8913] mb-3" >مهارت های داغ </p>
        {skills.length > 0 && skills.map((skill,index)=>{
            return(
                <div className="flex flex-col my-2" key={index} >
                <div className='flex flex-row items-center' >
                <div className='w-[35px] h-[35px] relative ml-4' >   
                  <Image
                    src={skill.img}
                    alt='shiraz university of technology'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className="rounded-full"
                  />   
                  </div>
                  <div className='flex flex-col text-sm'>
                  <p className="mb-1">{skill.title}</p>
                  <p className="" >موقعیت شغلی :{skill.jobs}</p>
                  </div>
                </div>
                <Link href="/">
                  <a className="p-2 my-2 text-xs font-medium text-[#041a65] w-fit rounded-xl bg-[#f7dbab] " >اطلاعات بیشتر</a>
                  </Link>
                </div>
            )

        })}

    </div>
  )
}

export default Skills