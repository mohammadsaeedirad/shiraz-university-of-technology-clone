
import {useState} from 'react'
import Image from "next/image";
import courses from "../../data/courses.json"
import CourseCard from './CourseCard';
const SearchCourses = () => {
  const [search,setSearch]=useState("")
  const [foundCourses, setFoundCourses] = useState(courses);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
        const results = courses.filter((course) => {
          return course.title.toLowerCase().includes(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundCourses(results);
      } else {
        setFoundCourses(courses);
        // If the text field is empty, show all users
      }
    
    setSearch(keyword);
  };
  return (
    <div className="flex flex-col w-full" >
        <div className="relative w-full 2xl:px-20 mb-10">
        <input
        type='text'
        className='                                       
          form-control
          block                                    
          px-4  
          h-[50px]
          py-1
          text-xs
          text-gray-900
          bg-clip-padding
          border border-solid border-zinc-400
          bg-transparent
          rounded
          transition
          ease-in-out     
          w-full                          
          focus:text-white-900 focus:outline-none
        '
        value={search}
        placeholder='جست و جوی موقعیت شغلی'
        onChange={filter}
      />
      <div className='absolute top-0 left-0 2xl:left-20 h-[50px] w-[50px] rounded bg-[#041a65] '>
        <div className='flex justify-center pt-4' >
        <Image src='/search.png' alt='search' width='20' height='20' />
        </div>
      </div>
    </div>
    <div>
    {foundCourses && foundCourses.length > 0 ? (
          foundCourses.map((course,index) => {
            return(
                <div className="2xl:px-20 mb-16 shadow-lg p-5" key={index} >
                    <div className="flex flex-row mb-4" >
                        <p className='font-medium text-zinc-600 text-sm xl:text-lg mx-2' >{course.title}</p>
                    </div>
                    <div className="flex flex-row" >
                        {course.langs.map((lang,index)=>{
                            return(
                                <p key={index} className="text-xs  text-[#666666]  mx-2" >{lang.title} </p>
                            )
                        })}
                    </div>
                    <div className='flex flex-row my-5 mx-2 w-full justify-between' >
                        {course.courses.map((item,index)=>{
                          return <CourseCard item={item} index={index}/>
                        })}
                    </div>
                </div>
               )  
          }
          )
        ) : (
          <h1>هیچ نتیجه ای یافت نشد</h1>
        )}
    </div>
    </div>

  )
}

export default SearchCourses