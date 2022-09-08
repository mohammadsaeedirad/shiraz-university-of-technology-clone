import Profile from "../../components/Home/Profile"
import SearchJobs from "../../components/Home/SearchJobs"
export default function Index() {
  return (
    <div className='container mx-auto flex flex-col sm:flex-row'  >
      <div className='flex sm:basis-1/2 md:basis-2/5 lg:basis-1/4 p-4' >
       <Profile />
      </div>

      <div className='flex sm:basis-1/2 md:basis-3/5 lg:basis-3/4 p-4 grow'>
        <SearchJobs />
      </div>
    </div>
  )
}
