import Image from 'next/image';
import Link from 'next/link';
const RelatedJobs = () => {
  const skills =[
    {
        title:"توسعه دهنده پایتون ",
        img:"/python.png",
        employer:"کارفرما : دکتر صادقی",
        url:"/",
    },
    {
        title:"طراح UI/UX",
        img:"/UI.png",
        employer:"کارفرما : دکتر صادقی",
        url:"/",
    },
    {
        title:"توسعه دهنده اندروید ",
        img:"/android.png",
        employer:"کارفرما : دکتر صادقی",
        url:"",
    },
    {
        title:"توسعه دهنده ++c ",
        img:"/c.png",
        employer:"کارفرما : دکتر صادقی",
        url:"",
    },
  ]
  return (
    <div className='p-4 shadow-xl '>
        <p className="font-medium text-[#ce8913] mb-3" >مهارت های داغ </p>
        {skills.length > 0 && skills.map((skill,index)=>{
            return(
                <div className="flex flex-col my-6" key={index} >
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
                  <p className="mb-1 font-medium">{skill.title}</p>
                  <p className="" >{skill.employer}</p>
                  </div>
                </div>
                </div>
            )
        })}

    </div>
  )
}

export default RelatedJobs