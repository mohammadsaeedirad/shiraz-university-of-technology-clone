import SearchCourses from "../../components/courses/SearchCourses"
import Profile from "../../components/Home/Profile"
const index = () => {
  return (
    <div className='container mx-auto flex flex-col sm:flex-row'  >
    <div className='flex sm:basis-1/2 md:basis-2/5 lg:basis-1/4 p-4' >
    <Profile />
    </div>

    <div className='flex sm:basis-1/2 md:basis-3/5 lg:basis-3/4 p-4 grow'>
     <SearchCourses />
    </div>
  </div>
  )
}

export default index