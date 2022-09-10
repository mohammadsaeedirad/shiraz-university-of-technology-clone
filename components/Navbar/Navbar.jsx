import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [enableIndex, setEnableIndex] = useState('');
  const [showdrow , setShowdrow] = useState(false);
  const [openMenu , setOpenMenu] = useState(false);
  const handleToggle = (index) => {
    if(index === enableIndex){
      setEnableIndex(null)
    }else{
      setEnableIndex(index)
    }    
  } 

  return (
        <div className='sticky bg-white top-0 left-0 right-0 w-full z-50 shadow-lg py-2'>
      <div className='container mx-auto text-[#666666] text-sm font-semibold flex justify-between flex-row items-center px-5'>
         <div className='w-full sm:w-96'>
          <ul className='flex flex-row justify-between items-center'>
            <Link href="/home" >
            <a className='w-[40px] h-[48px] relative' >   
                  <Image
                    src='/sutech.png'
                    alt='our goals'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />         
            </a>
            </Link> 
            <li>
            <Link href="/home" >
            <a className='hidden sm:block'>   
             خانه            
            </a>
            </Link>
            </li>
            <li>
            <Link href="/home" >
            <a className='hidden sm:block' >   
             جستجوی مشاغل           
            </a>
            </Link>
            </li>
            <li>
            <Link href="/courses" >
            <a className='hidden sm:block'>   
             آموزش ها          
            </a>
            </Link>
            </li>
          </ul>
         </div>
         <div className=' flex flex-row justify-end  items-center'>
         <Link href="/login" >
            <a className='w-[20px] h-[22px] relative mx-4'>   
                  <Image
                    src='/profile.png'
                    alt='our goals'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />         
            </a>
            </Link>         
            <div onClick={()=>setOpenMenu(!openMenu)} className='w-[20px] h-[22px] relative cursor-pointer sm:hidden mx-4'>   
                  <Image
                    src='/burger.png'
                    alt='our goals'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />         
            </div>
         </div>
      </div>
      <ul className={` sm:hidden items-center flex-col space-y-6 text-[#666666] text-sm font-medium ${openMenu ? "flex":"hidden"}`} >
        <li>
        <Link href="/home" >
        <a className='hidden sm:block'>   
          خانه            
        </a>
        </Link>
        </li>
        <li>
        <Link href="/home" >
        <a>   
        جستجوی مشاغل           
        </a>
        </Link>
        </li>
        <li>
        <Link href="/courses" >
        <a>   
        آموزش ها          
        </a>
        </Link>
        </li>

    </ul>
    </div>
 
    

  )
}

export default Navbar