

export default function Cover({img, title, desc}) {
  return (
<div
  class="hero md:h-[700px] h-[350px] w-full"
  style={{backgroundImage: `url("${img}")`, width: `100%`,}}
  >
  <div className="hero-overlay" ></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="max-w-md md:w-[800px] md:h-50 py-10 px-10  "style={{background: `rgba(21, 21, 21, 0.6)`}}>
      <h1 className="md:mb-5 mb-2 md:text-5xl text-3xl font-bold pt-10 text-center uppercase menuText">{title}</h1>
      <p className="mb-5">
        {desc}
      </p>
      
    </div>
  </div>
</div>
  )
}
