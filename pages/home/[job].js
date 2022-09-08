import RelatedJobs from "../../components/jobs/RelatedJobs"
import JobBanner from "../../components/jobs/JobBanner"
import JobDescription from "../../components/jobs/JobDescription"
import ResumeForm from "../../components/jobs/ResumeForm"
const Job = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row '  >
        <div className='flex flex-col grow basis-3/5 lg:basis-3/4 p-4'>
            <JobBanner />
            <JobDescription />
        </div>   
        <div className='flex flex-col basis-2/5 lg:basis-1/4 p-4' >
            <div className="sticky top-16" >
            <ResumeForm />
            <RelatedJobs />
            </div>

        </div>
    </div>
  )
}

export default Job

export async function getServerSideProps(context) {
    return {
        props: {
            title:'test'
        }
    }
  }
  