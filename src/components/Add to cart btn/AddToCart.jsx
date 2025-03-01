import React from 'react'

export default function AddToCart() {
  return (
    <div className='flex justify-center items-center w-full mx-auto py-4'>
        <button style={{borderBottom:'3px solid rgb(187, 133, 6)', borderRadius: '8px'}} className='bg-[#E8E8E8] px-4 py-2 text-sm text-[#BB8506] uppercase font-medium cursor-pointer hover:bg-[#1F2937] hover:text-[#BB8506] duration-500 transition-all shadow-lg'>ADD TO CART</button>
    </div>
  )
}
