// import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import PoplurMenuItem from './Shared Item/poplurMenuItem'
import View_Button from '../../../components/View Button/View_Button'
import useMenu from '../../../hooks/useMenu'

export default function PoplurMenu() {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    

    // const [menu, setMenu] = useState([])

    // useEffect( ()=>{
    //     fetch("menu.json")
    //     .then(res => res.json())
    //     .then(data=> {
    //         const poplurItems = data.filter(item => item.category === 'popular')
    //         setMenu(poplurItems)})
    // }, [])

  return (
    <section className='bg-white my-10'>
        <SectionTitle 
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className='w-10/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 pt-10'>
            {
              popular.map(item => <PoplurMenuItem key={item._id} item={item} /> )
            }
        </div>
            <View_Button title={"View Full  Menu"} ></View_Button>
    </section> 
  )
}
