import SignUpForm from "../components/FirstPage/SignUpForm"
import Image from 'next/image';

export default function employeeSignUp() {
  return (
    <div className="flex flex-col container mx-auto">
    <div className="flex flex-row mt-10 mb-5" >
    <div className='w-[108px] h-[125px] relative'>   
          <Image
            src='/sutech.svg'
            alt='shiraz university of technology'
            layout='fill'
            objectFit='cover'
            quality={100}
            className="rounded-full"
          />   
      </div>
    </div>
    <div className='container mx-auto flex  flex-col md:flex-row '>
      <div className='flex basis-1/2 p-4 grow'>
       <SignUpForm />
      </div>

      <div className='hidden sm:flex basis-1/2 p-4 flex-col justify-center'>
      <div className='w-[332px] h-[317px] relative mb-5 self-center '>   
          <Image
            src='/signup-employee.png'
            alt='signup-employee'
            layout='fill'
            objectFit='cover'
            quality={100}
            className="rounded-full"
          />   
      </div>
      <p className='text-center w-[332px] self-center text-xs font-medium' >با ثبت نام در این سامانه میتوانید به راحتی 
      به موقعیت های شغلی زیادی دسترسی داشته
      باشید و همچنین مهارت های خود را با توجه به
      نیازمندی های خود , ارتقا داده و کسب درآمد کنید 
      </p>
      </div>
    </div>
    </div>

  )
}
