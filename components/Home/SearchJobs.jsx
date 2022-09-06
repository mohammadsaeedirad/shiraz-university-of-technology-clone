import {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import jobs from "../../data/jobs.json"
import JobCard from './JobCard';
const SearchJobs = () => {
  const [search,setSearch]=useState("")
  const [foundJobs, setFoundJobs] = useState(jobs);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = jobs.filter((job) => {
        return job.title.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundJobs(results);
    } else {
        setFoundJobs(jobs);
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
    {foundJobs && foundJobs.length > 0 ? (
          foundJobs.map((job,index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <h1>هیچ نتیجه ای یافت نشد</h1>
        )}
    </div>
    </div>

  )
}

export default SearchJobs