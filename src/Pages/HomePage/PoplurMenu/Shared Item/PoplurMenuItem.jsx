import React from 'react'

export default function PoplurMenuItem({item}) {
    const { name, recipe, image, category, price, _id} = item
    // console.log(item)
  return (
    <>
    <div className='flex space-x-4 md:p-2 rounded-md'>
       <div>
          <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="image" className='object-cover w-[80px]' />
       </div>
        <div>
            <h3 className='text-2xl text-[#151515] font-medium'>{name}----------</h3>
            <p className='text-[#737373]'>{recipe}</p>
        </div>
            <p className='text-[#BB8506] font-normal'>${price}</p>
    </div>
    
    </>
  )
}
