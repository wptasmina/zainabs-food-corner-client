import SectionTitle from '../../../components/SectionTitle'
import img from '/featured.jpg' 

export default function Featured() {
  return (
    <section className='bg-featuredImg bg-fixed bg-center w-full my-4'>

        <div className=' bg-blackOvrtlay pt-10 pb-20 '>

        <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        
        >
        </SectionTitle>

           <div className="w-10/12 mx-auto flex md:flex-row flex-col justify-center items-center gap-10">
           <div>
                <img src={img} alt="Image" className='w-50 rounded-md' />
            </div>
            <div>
                <h4 className='text-white font-bold text-xl uppercase '>February 24, 2025</h4>
                <h3 className='text-white font-bold text-4xl uppercase '>WHERE CAN I GET SOME?</h3>
                <p className='text-white/80 font-medium text-md pt-2 pb-4'>At Zainab's Food Corner, we take pride in serving the finest and most delicious dishes, carefully crafted to satisfy your taste buds. Our featured dishes are a perfect blend of fresh ingredients, bold flavors, and expert culinary techniques. Whether you're craving classic favorites or unique specialties, we ensure a delightful dining experience with every bite.</p>
                <button style={{borderBottom:'3px solid rgb(255, 255, 255)', borderRadius: '8px'}} className='px-4 py-2 text-sm bg-[#151515B3] text-[#fff] uppercase font-medium cursor-pointer hover:bg-[#1f2937f1] hover:text-white duration-500 transition-all shadow-lg'>
                Read More
                </button>
            </div>
           </div>
        </div>

    </section>
  )
}
