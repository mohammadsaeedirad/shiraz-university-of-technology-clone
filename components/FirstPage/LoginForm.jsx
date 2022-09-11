import { useState } from "react";
import {useRouter} from "next/router";
const LoginForm = () => {
  const router = useRouter();
  const [error,setError]= useState(false)
  const [password,setPassword]= useState("")
  const [phone,setPhone]= useState()
  const login=()=>{
    if( phone && password){
      router.push("/home")
      setError(false)
    }
    setError(true)
  }
  return (
    <div className="flex flex-col" >
    <h1 className="text-[#001f56] font-medium text-center text-lg mb-5 p-5" >
    ورود به سامانه 
    </h1>
    <div className="shadow-xl p-5" > 
        <input onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="شماره تلفن همراه یا ایمیل"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="رمز عبور"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <button onClick={()=>{login()}} className="bg-[#f7dbab] text-[#041a65 ] pt-1 pb-2 px-8 w-fit cursor-pointer rounded" >ورود
        </button>
        {error && <p className="text-xs font-medium text-red-500" >لطفا فیلد های مورد نظر را کامل کنید</p>}

    </div>
    </div>
  )
}

export default LoginForm