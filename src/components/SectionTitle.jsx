import React from 'react'

export default function SectionTitle({heading, subHeading}) {
  return (
    <div className='flex justify-center items-center flex-col py-6'>
        <p className='text-[#D99904] pb-2'>{subHeading}</p>
        <h3 className='text-3xl font-medium text-[#151515] border-y-2 border-[#D99904] py-2'>
          {heading}</h3>
    </div>
  )
}
