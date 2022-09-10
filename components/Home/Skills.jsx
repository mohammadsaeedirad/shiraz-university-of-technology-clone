import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/router";
const Skills = ({skills, courses}) => {
  const router = useRouter();
  return (
    <div className="p-4 flex flex-col">
        <p className="font-medium text-[#ce8913] mb-3" >{router.pathname=="/home" ? "مهارت های داغ":"نشان شده ها"}</p>
        { router.pathname=="/home" && skills.length > 0 ? skills.map((skill,index)=>{
            return(
                <div className="flex flex-col my-4" key={index} >
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
                </div>
            )

        })
        :
       courses.map((course,index)=>{
          return(
              <div className="flex flex-col my-4" key={index} >
              <div className='w-full h-[150px] relative mb-4' >   
                <Image
                  src={course.img}
                  alt='shiraz university of technology'
                  layout='fill'
                  objectFit='cover'
                  quality={100}
                  className="rounded"
                />   
                </div>
                <div className='flex flex-col font-normal text-xs'>
                <p className="mb-3">{course.title}</p>
                <p className="mb-3" >{course.duration}</p>
                <div className='flex flex-row justify-between w-full' >
                <p className="mb-3" >{course.count}</p>
                <p className="mb-3 text-red-500" >{course.date && course.date} </p>
                </div>
              
                </div>
              </div>
          )

      })
        }

    </div>
  )
}

export default Skills