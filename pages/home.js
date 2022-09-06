import Profile from "../components/Home/Profile"
import SearchJobs from "../components/Home/SearchJobs"
export default function Home() {
  return (
    <div className='container mx-auto flex flex-row '  >
      <div className='flex basis-1/4 p-4' >
       <Profile />
      </div>

      <div className='flex basis-3/4 p-4'>
        <SearchJobs />
      </div>
    </div>
  )
}
