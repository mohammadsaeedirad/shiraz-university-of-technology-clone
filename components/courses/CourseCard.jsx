import React from 'react'
import Link from "next/link";

const CourseCard = ({item,key}) => {
  return (
    <div key={key} className="w-full p-2 max-w-md bg-white rounded-lg shadow-xl ">
    <Link href={`/courses/${item.Url}/`}>
    <a>
        <img className="w-full rounded-t-lg" src={item.image} alt="product image" />
    </a>
    </Link>
    <div>
        <Link href={`/courses/${item.Url}/`}>
        <a>
            <p className="px-5 py-4 font-medium tracking-tight text-zinc-900 ">{item.title}</p>
        </a>
        </Link>
        <p className="px-5 pb-5 text-xs tracking-tight text-zinc-600 ">{item.teacher}</p>
        <div className="flex justify-between items-center px-5">
            <span className="text-base font-meduim text-gray-900 ">{item.price}</span>
            <Link href={`/courses/${item.Url}/`}>
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">مشاهده دوره</a>
            </Link>       
        </div>
    </div>
</div>
  )
}

export default CourseCard