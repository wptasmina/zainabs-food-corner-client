

export default function CoverImg({ img, title, desc }) {
  return (
    <div
      className="hero md:h-[700px]  w-full"
      style={{ backgroundImage: `url("${img}")`, width: `100%`, }}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className=" md:h-50 p-10" style={{ background: `rgba(21, 21, 21, 0.6)`,}}>
          <h1 className="md:mb-5 mb-2 md:text-5xl text-3xl text-white font-bold pt-10 text-center uppercase menuText">{title}</h1>
          <p className="mb-5 uppercase w-[600px] mx-auto">{desc}</p>
        </div>
      </div>
    </div>
  )
}
