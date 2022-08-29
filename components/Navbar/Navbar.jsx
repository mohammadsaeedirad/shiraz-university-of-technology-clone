import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [enableIndex, setEnableIndex] = useState('');
  const [showdrow , setShowdrow] = useState(false);
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
         <div className='w-96'>
          <ul className='flex flex-row justify-between'>
          <li>
            <Link href="/" >
            <a>   
            خانه       
            </a>
            </Link>
            </li>
            <li>
            <Link href="/" >
            <a>   
             جستجوی مشاغل           
            </a>
            </Link>
            </li>
            <li>
            <Link href="/" >
            <a>   
             آموزش ها          
            </a>
            </Link>
            </li>
            <li>
            <Link href="/" >
            <a>   
            هشدار ها            
            </a>
            </Link>
            </li>
          </ul>
         </div>
         <div className=' flex flex-row justify-end  items-center'>
         <Link href="/" >
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
            <Link href="/" >
            <a className='w-[47px] h-[55px] relative' >   
                  <Image
                    src='/sutech.png'
                    alt='our goals'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                  />         
            </a>
            </Link> 
         </div>
      </div>

    </div>
  )
}

export default Navbar