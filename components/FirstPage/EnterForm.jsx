import Link from "next/link";

const EnterForm = () => {
  return (
    <div className="flex flex-col" >
    <h1 className="text-[#001f56] font-medium text-lg mb-5" >
    به سامانه کاریابی  
    دانشگاه صنعتی شیراز 
    خوش آمدید
    </h1>
    <div className="flex flex-col" > 
        <Link href="/login" >
          <a className="shadow-xl p-4 w-full mb-4 text-center cursor-pointer">
          ورود به سامانه  
          </a>
        </Link>
        <Link href="/employer-sign-up" >
          <a className="shadow-xl p-4 w-full mb-4 text-center cursor-pointer">
          ثبت نام به عنوان کارفرما 
          </a>
        </Link>
        <Link href="/employee-sign-up" >
          <a className="shadow-xl p-4 w-full mb-4 text-center cursor-pointer">
          ثبت نام به عنوان کارجو         
          </a>
        </Link>
    </div>
    </div>

  )
}

export default EnterForm