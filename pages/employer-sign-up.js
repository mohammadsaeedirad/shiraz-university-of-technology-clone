import SignUpForm from "../components/FirstPage/SignUpForm"
import Image from 'next/image';

export default function employerSignUp() {
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
      <div className='flex basis-1/2 grow p-4 '>
       <SignUpForm />
      </div>

      <div className='hidden sm:flex basis-1/2 p-4 flex-col justify-center'>
      <div className='w-[332px] h-[296px] relative mb-5 self-center '>   
          <Image
            src='/signup-employer.png'
            alt='signup-employee'
            layout='fill'
            objectFit='cover'
            quality={100}
          />   
      </div>
      <p className='text-center w-[332px] self-center text-xs font-medium'>
      با ثبت نام در این سامانه میتوانید به راحتی  کارجوهای پرتلاش زیادی را استخدام کنید و همچنین مهارت ها و دانش خود را در اختیار دانش پژوهان قرار دهید  
      </p>
      </div>
    </div>
    </div>

  )
}
