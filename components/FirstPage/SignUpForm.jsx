import Link from "next/link";
import {useRouter} from "next/router";

const SignUpForm = () => {
 const router = useRouter();

  return (
    <div className="flex flex-col" >
    <h1 className="text-[#001f56] font-medium text-center text-lg mb-3 px-5" >
    عضویت در سامانه 
    </h1>
    <div className="shadow-xl p-5" > 
        <input placeholder="نام"  type="text" className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input placeholder="نام خانوادگی" type="text"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input placeholder="شماره تلفن همراه" type="number" maxlength="11" className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input placeholder="سایمیل" type="email"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <input placeholder="رمز عبور" type="password"  className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        <div>
        <p className="mb-2 text-xs font-medium text-[#ce8913]" >{router.pathname == "/employer-sign-up" ? "اگر در دانشگاه صنعتی شیراز تدریس میکنید ":"اگر در دانشگاه صنعتی شیراز تحصیل میکنید "}      </p>
        <input placeholder={router.pathname == "/employer-sign-up" ? "شماره پرسنلی":"شماره دانشجویی"} type="number" maxlength="11" className=" p-4 w-full mb-4 cursor-pointer focus:outline-none bg-zinc-200 rounded"></input>
        </div>

        <Link href="/home">
        <a  className="bg-[#f7dbab] text-[#041a65 ] pt-1 pb-2 px-8 w-fit cursor-pointer rounded" >
        ثبت نام
        </a>
        </Link>
    </div>
    </div>
  )
}

export default SignUpForm