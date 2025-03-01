
import CarouselBg from './Banner/CarouselContent/CarouselBg'
import Catagory from './Catagory/Catagory'
import CHEF_RECOMMENDS from './CHEF RECOMMENDS/CHEF_RECOMMENDS'
import Featured from './featured/Featured'
import PoplurMenu from './PoplurMenu/PoplurMenu'
import Service from './service/Service'
import Testimonails from './Testimonials/Testimonails'
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Helmet>
        <title>zainab's | Home</title>
      </Helmet>

      <CarouselBg />
      <Catagory />
      <Service />
      <PoplurMenu />
      <CHEF_RECOMMENDS />
      <Featured />
      <Testimonails />
    </div>
  )
}
