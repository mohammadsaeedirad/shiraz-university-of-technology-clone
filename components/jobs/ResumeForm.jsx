import {useState} from 'react'

const ResumeForm = () => {
  const [name,setName]= useState("")  
  const [number,setNumber]= useState(null)   
  const [upload,setUpload]= useState(false)  
  const [send,setSend]= useState(false)  
  const [error,setError]= useState(false)  

  const sendResume =()=>{
    if(upload && number && name){
        setSend(true)
        setError(false)
    }
    else{
     setError(true)
     setSend(false)
    }
  }
  return (
    <div className='p-4 text-sm shadow-xl mb-4' >
     <p className="text-lg font-medium mb-4" >چطوری استخدام شم؟</p>
     <input onChange={(e)=>{setName(e.target.value)}} placeholder="نام و نام خانوادگی " value={name} type="text"  className=" p-2 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
     <input onChange={(e)=>{setNumber(e.target.value)}} placeholder="شماره تلفن همراه" value={number} type="number" maxLength="11" className=" p-2 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
     <input id="upload" placeholder="فایل رزومه خود را آپلود کنید" type="file"  className=" hidden"></input>
     <label onClick={(e) => setUpload(true)} htmlFor="upload" className=" p-2 mb-4 flex flex-row w-full cursor-pointer focus:outline-none bg-zinc-200 rounded " >
        {upload ? "آپلود با موقعیت انجام شد":"آپلود فایل رزومه"}
     </label>
     <div onClick={()=>sendResume()}  className={`${send ? "bg-zinc-300  hover:bg-zinc-300":"bg-[#0870cb]  hover:bg-[#0c86f1] cursor-pointer"}  text-white mb-2 pt-1 pb-2 text-center rounded w-full`} >
     ارسال روزمه
     </div>
     {!send && error ? <p className='text-xs text-red-600 mb-2' >یکی از فیلد های مورد نظر خالی میباشد</p> :""}
     {send && !error ? <p className='text-xs text-green-600 mb-2' >رزومه شما با موفقیت ارسال شد</p> :""}

     <p className='text-xs text-zinc-700' >تا 22 روز دیگر امکان ارسال روزمه وجود دارد</p>
    </div>
  )
}

export default ResumeForm