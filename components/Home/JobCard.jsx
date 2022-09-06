import React from 'react'
import Image from "next/image";
import Link from "next/link";

const JobCaed = ({job,key}) => {
  return (
    <div key={key} className="2xl:px-20 mb-5 text-zinc-700 " >
      <div className='rounded shadow-xl p-5' >
        <div className='flex flex-row justify-between mb-2'>
          <div className='flex flex-row' >
            <div className='w-[50px] h-[50px] relative ml-4' >   
              <Image
                src={job.image}
                alt='shiraz university of technology'
                layout='fill'
                objectFit='cover'
                quality={100}
                className="rounded-full"
              />   
            </div>
            <div className='flex flex-col font-medium '>
              <p className="mb-2" >{job.title}</p>
              <p className="text-xs" >{job.employer}</p>
            </div>
          </div>
          <div className=' font-medium ' >
            <p className="text-xs">{job.salary}</p>
          </div>
        </div>

        <div className='flex flex-row text-xs text-zinc-800' >
          <div className='mx-2 rounded-xl p-1.5 bg-zinc-300' >{job.type}</div>
          <div className='mx-2 rounded-xl p-1.5 bg-zinc-300' >{job.duration}</div>
        </div>

        <ul className='flex flex-col pt-10 pb-5' >
            <li className='flex flex-row items-center' >
            <div className='w-[15px] h-[15px] relative ml-2' >   
              <Image
                src="/profile.png"
                alt='shiraz university of technology'
                layout='fill'
                objectFit='cover'
                quality={100}
                className="rounded-full"
              />   
            </div>
            <p className='font-medium text-xs mb-3' >به {job.count} نفر نیازمندیم</p>
            </li>
            {job.skills.length > 0 && job.skills.map((skill,index) =>{
              return(
                <li key={index} className='flex flex-row items-center text-xs font-medium mb-3' >
                  -{skill.title}
                </li>
              )
            })}
        </ul>
        <div className="flex flex-row justify-end" >
            <Link href="/" >
            <a className="rounded p-4 text-white text-xs bg-[#0870cb]" >
            مشاهده اطلاعات کامل
            </a>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default JobCaed