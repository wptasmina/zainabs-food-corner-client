import PoplurMenuItem from '../../Pages/HomePage/PoplurMenu/Shared Item/poplurMenuItem'
import CoverImg from './CoverImg'



export default function MenuCategory({items, title, desc, bgImg}) {
  return (
   <div>
     { title && <CoverImg img={bgImg} title={title} desc={desc}></CoverImg> }
    <div className='grid md:grid-cols-2 gap-10 w-10/12 my-10 mx-auto'>
      {
        items.map(item => <PoplurMenuItem key={item._id} item={item} ></PoplurMenuItem>)
      }

    </div>
   </div>
  )
}

