import SectionTitle from '../../../components/SectionTitle'
import AddToCart from '../../../components/Add to cart btn/AddToCart'
import img from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/salide6.jpg'
import img3 from '../../../assets/home/salide7.jpg'

export default function CHEF_RECOMMENDS() {
  return (
    <section className='w-10/12 mx-auto mb-12'>
        <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
        >
        </SectionTitle>

    <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
       <div className="card bg-gray-50 shadow-md">
        <figure className="px-4 pt-4">
            <img
                src={img}
                alt="Salad"
                class="rounded-xl bg-center object-cover bg-no-repeat w-full h-48" />
         </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">

            <AddToCart />
    </div>
  </div>
       </div>
       <div className="card bg-gray-50 shadow-md">
        <figure className="px-4 pt-4">
            <img
                src={img2}
                alt="Salad"
                class="rounded-xl bg-center object-cover bg-no-repeat w-full h-48" />
         </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Fruit Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">

            <AddToCart />
    </div>
  </div>
       </div>
       <div className="card bg-gray-50 shadow-md">
        <figure className="px-4 pt-4">
            <img
                src={img3}
                alt="Salad"
                class="rounded-xl bg-center object-cover bg-no-repeat w-full h-48" />
         </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Fresh vegetable salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">

            <AddToCart />
    </div>
  </div>
       </div>
    </div>

    </section>
  )
}
