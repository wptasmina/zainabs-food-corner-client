import orderCover from '../assets/shop/banner2.jpg'
import CoverImg from '../components/Shared/CoverImg'
import MenuItem from './HomePage/CHEF RECOMMENDS/MenuItem'
import SectionTitle from './../components/SectionTitle';

export default function OrderFood() {
  return (
    <div>
      <CoverImg img={orderCover} title={"Order Food"} ></CoverImg>


      <div className=''>
        <MenuItem/>
      </div>
    </div>
  )
}
