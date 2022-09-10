import {useState} from 'react'

const CourseSections = () => {
  const [open,setOpen]= useState()
  const CourseSections =[
    {
      id:1,
      title:"مقدمه",
      duratuion:"۱۵ دقیقه"
    },
    {
      id:2,
      title:"متغیرها و ثوابت",
      duratuion:"۱ ساعت"
    },
    {
      id:3,
      title:"ساختار حلقه",
      duratuion:"۳۰ دقیقه"
    },
    {
      id:4,
      title:"عبارات شرطی",
      duratuion:"۳۰ دقیقه"
    },
    {
      id:5,
      title:"پایتون",
      duratuion:"۳۰ دقیقه"
    },
    {
      id:6,
      title:"توابع در پایتون",
      duratuion:"۱ ساعت"
    }
  ]
  return (
    <div className={`p-4 relative  ${open ? "h-fit":"h-48"} overflow-hidden flex flex-col`} >
      <p className='mb-4 font-medium' >جلسات</p>
      {CourseSections.length > 0 && CourseSections.map((section,index)=>{
        return(
          <div key={index} className='flex flex-row justify-between items-center mb-4 ' >    
            <div className='flex flex-row' >
              <div className='rounded-full flex justify-center items-center w-5 h-5 text-xs bg-zinc-700 text-white'>{section.id}</div>
              <p className='mr-2 text-sm text-[#2a2828]' >{section.title}</p>
            </div>
            <div className='text-xs text-white p-1 bg-[#0870cb] rounded-full' >{section.duratuion}</div>
          </div>

        )
      })}
      <div onClick={()=>{setOpen(!open)}} className='absolute cursor-pointer bottom-0 left-0 right-0 m-auto bg-gradient-to-t from-gray-100 to-transparent text-[#2a2828] text-center text-sm' >مشاهده همه</div>
    </div>
  )
}

export default CourseSections;