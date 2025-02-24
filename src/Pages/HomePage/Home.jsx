
import CarouselBg from './Banner/CarouselContent/CarouselBg'
import Catagory from './Catagory/Catagory'
import PoplurMenu from './PoplurMenu/PoplurMenu'
import Service from './service/Service'

export default function Home() {
  return (
    <div>
      <CarouselBg />
      <Catagory />
      <Service />
      <PoplurMenu />
    </div>
  )
}
