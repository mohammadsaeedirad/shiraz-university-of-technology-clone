
import LoginForm from "../components/FirstPage/LoginForm"
import Image from 'next/image';

export default function login() {
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
    <div className='container mx-auto flex flex-row'>
      <div className='flex basis-1/2 lg:basis-1/3 grow p-4 items-center'>
       <LoginForm />
      </div>

      <div className='hidden sm:flex basis-1/2 lg:basis-2/3 p-4  flex-row justify-center 2xl:justify-end'>
      <div className='w-[300px] h-[250px] lg:w-[404px] lg:h-[325px] xl:w-[504px] xl:h-[425px] relative'>   
          <Image
            src='/home.png'
            alt='login page'
            layout='fill'
            objectFit='cover'
            quality={100}
            className="rounded-full"
          />   
      </div>
      </div>
    </div>
    </div>

  )
}
