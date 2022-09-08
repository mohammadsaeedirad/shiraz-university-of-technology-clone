import CourseDescriptions from "../../components/courses/CourseDescriptions"
import CourseComments from "../../components/courses/CourseComments"
import CourseData from "../../components/courses/CourseData"
import CourseSections from "../../components/courses/CourseSections"
const course = (props) => {
  return (
    <div className='container mx-auto '  >
    <div className="flex flex-col" >
     <div className="flex flex-col md:flex-row" >
        <div className='flex flex-col md:basis-3/5 lg:basis-3/4 p-4' >
        <CourseDescriptions  />
        </div>
        <div className='flex  md:basis-2/5 lg:basis-1/4 p-4 grow'>
          <CourseData />
          <CourseSections />
        </div>
      </div> 
    
    <div>
    <CourseComments />
    </div>
    </div>
   
  </div>
  )
}

export default course

export async function getServerSideProps(context) {
    return {
        props: {
            url:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
        }
    }
  }