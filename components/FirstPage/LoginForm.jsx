import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex flex-col" >
    <h1 className="text-[#001f56] font-medium text-center text-lg mb-5 p-5" >
    ورود به سامانه 
    </h1>
    <div className="shadow-xl p-5" > 
        <input placeholder="شماره تلفن همراه یا ایمیل"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input placeholder="رمز عبور"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <Link href="/home">
        <a  className="bg-[#f7dbab] text-[#041a65 ] pt-1 pb-2 px-8 w-fit cursor-pointer rounded" >ورود
        </a>
        </Link>
    </div>
    </div>
  )
}

export default LoginForm