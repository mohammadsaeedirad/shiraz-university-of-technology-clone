import {useRouter} from "next/router";
import { useState } from "react";
const SignUpForm = () => {
 const router = useRouter();
 const [error,setError]= useState(false)
  const [name,setName]= useState("")
  const [family,setFamily]= useState("")
  const [phone,setPhone]= useState(null)
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const signUp=()=>{
    if(name && family && phone && email && password){
      router.push("/home")
      setError(false)
    }
    setError(true)
  }

  return (
    <div className="flex flex-col" >
    <h1 className="text-[#001f56] font-medium text-center text-lg mb-3 px-5" >
    عضویت در سامانه 
    </h1>
    <div className="shadow-xl p-5" > 
        <input onChange={(e)=>setName(e.target.value)} value={name} placeholder="نام"  type="text" className="p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input onChange={(e)=>setFamily(e.target.value)} value={family} placeholder="نام خانوادگی" type="text"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="شماره تلفن همراه" type="number" maxLength="11" className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="سایمیل" type="email"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="رمز عبور" type="password"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <div>
        <p className="mb-2 text-xs font-medium text-[#ce8913]" >{router.pathname == "/employer-sign-up" ? "اگر در دانشگاه صنعتی شیراز تدریس میکنید ":"اگر در دانشگاه صنعتی شیراز تحصیل میکنید "}      </p>
        <input placeholder={router.pathname == "/employer-sign-up" ? "شماره پرسنلی":"شماره دانشجویی"} type="number" maxLength="11" className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        </div>

        <button onClick={()=>{signUp()}}  className="bg-[#f7dbab] text-[#041a65 ] pt-1 pb-2 px-8 w-fit cursor-pointer rounded" >
        ثبت نام
        </button>
       {error && <p className="text-xs font-medium text-red-500" >لطفا فیلد های مورد نظر را کامل کنید</p>}
    </div>
    </div>
  )
}

export default SignUpForm