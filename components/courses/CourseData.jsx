import React from 'react'

const CourseData = () => {
  return (
    <div className='p-4 shadow-lg mb-10' >
      <div className="flex flex-row justify-between mb-3" >
        <p className="font-medium" >
        هزینه دوره
        </p>
        <p className="line-through" >
        ۱۴۰,۰۰۰ <span className="text-xs" >تومان</span>
        </p>
      </div>
      <div className="flex flex-row mb-4 justify-between" >
        <p className="text-white rounded-lg p-1 bg-red-500 text-sm" >
        با تخفیف
        </p>
        <p className="text-red-500 text-medium" >
        ۸۰,۰۰۰ <span className="text-sm text-red-500" >تومان</span>
        </p>
      </div>
      <div className="flex flex-col" >
        <div className="rounded-full p-1 text-center flex justify-center bg-zinc-500 text-white mb-4" >1 روز تا پایان تخفیف</div>
        <div className="className text-center text-zinc-700 text-sm leading-7 mb-4" >این دوره شامل بیش از ۱۲ ساعت تدریس است و تا بحال ۳۲ شرکت کننده داشته.</div>
        <div className="bg-[#2240a7] text-white text-center p-2" >
          <p>پرداخت و شروع این دوره</p>
        </div>
      </div>
    </div>
  )
}

export default CourseData