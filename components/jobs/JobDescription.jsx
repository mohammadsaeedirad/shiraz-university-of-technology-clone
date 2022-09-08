import jobs from '../../data/jobs.json'
import {useRouter} from "next/router";

const JobDescription = () => {
  const router = useRouter();     
  return (
    <div>
        <div className="mb-10">
            <p className="font-medium text-lg mb-4 mx-2" >مهارت‌های مورد نیاز</p>
            <div className="flex flex-row" >
            {router.query.job=="توسعه-دهنده-اندروید" ? 
            jobs[0].langs.map((lang,index)=>{
                return(
                    <div key={index} className="bg-[#3d3c3c] w-fit mx-2 p-1.5 text-white text-xs rounded" >
                        <p>{lang.title}</p>
                    </div>
                )  
            })         
            : 
            jobs[1].title}
            </div>
        </div>

         <div className="flex flex-col mx-2" >
            <p className="text-lg font-bold mb-4" >شرح موقعیت شغلی</p>
            <p className="leading-9 text-sm text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
         </div>   
    </div>
  )
}

export default JobDescription