import React from 'react'

export default function View_Button({title}) {
  return (
    <div className='flex justify-center items-center w-full mx-auto py-8'>
        <button style={{borderBottom:'3px solid rgb(31, 41, 55)', borderRadius: '8px'}} className='px-4 py-2 text-sm text-[#1F2937] uppercase font-medium cursor-pointer hover:bg-[#1f2937f1] hover:text-white duration-500 transition-all shadow-lg'>{title}</button>
    </div>
  )
}
