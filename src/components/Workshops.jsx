export default function Workshops() {
  const workshops = [
    {
      id: 1,
      title: 'Workshop title is this',
      description:
        'lorem ipsum dolor sit amet consectetur. hac sit varius cursus purus nec vulputate amet. feugiat ac blandit risus. lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: 2,
      title: 'Workshop title is this',
      description:
        'lorem ipsum dolor sit amet consectetur. hac sit varius cursus purus nec vulputate amet. feugiat ac blandit risus. lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: 3,
      title: 'Workshop title is this',
      description:
        'lorem ipsum dolor sit amet consectetur. hac sit varius cursus purus nec vulputate amet. feugiat ac blandit risus. lorem ipsum dolor sit amet consectetur.',
    },
  ]

  return (
    <section
      id="workshops"
      className="relative w-full overflow-hidden bg-[#728ce1] pt-[150px] sm:pt-[220px] md:pt-[300px] pb-[160px] sm:pb-[240px] md:pb-[320px]"
    >
      {/* Background Fractal Pattern Overlay */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-85 select-none pointer-events-none z-0"
        style={{
          backgroundImage: "url('/asset_030.png')",
          backgroundSize: '1440px 1344px',
        }}
      />

      {/* Top Border */}
      <div className="absolute top-[-2px] left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[280px] pointer-events-none z-10 select-none">
        <img
          src="/asset_050.png"
          alt="Top transition border"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] mx-auto z-20 px-6 sm:px-12 md:px-16 flex flex-col items-center">

        {/* Section Title */}
        <h2 className="text-[44px] sm:text-[60px] md:text-[76px] font-outfit font-black text-white tracking-tight leading-none text-center mb-12 md:mb-18 select-none">
          Workshops
        </h2>

        {/* Workshops Cards */}
        <div className="w-full lg:w-[1100px] lg:h-[485px] flex flex-col lg:flex-row gap-6 lg:gap-[32px] justify-center items-center">
          {workshops.map((ws) => (
            <div
              key={ws.id}
              className="relative w-[280px] sm:w-[310px] md:w-[325px] h-[400px] sm:h-[450px] md:h-[467px] flex-shrink-0 bg-cover bg-no-repeat border-[3px] border-black rounded-[24px] overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 ease-out flex flex-col p-4 pb-5"
              style={{
                backgroundImage: "url('/asset_267.png')",
              }}
            >
              {/* Cover Photo Box */}
              <div className="relative w-full aspect-[4/3] border-[3px] border-black overflow-hidden rounded-[16px] select-none mb-4">
                <img
                  src="/asset_058.png"
                  alt="Workshop cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="font-outfit font-black text-xl sm:text-2xl md:text-[23px] text-white leading-[1.1] mb-2 px-1 select-none">
                {ws.title}
              </h3>

              {/* Description */}
              <p className="font-jakarta font-semibold text-[11px] sm:text-[12px] text-white/95 leading-relaxed px-1">
                {ws.description}
              </p>

              {/* Bottom Row */}
              <div className="mt-auto px-1 w-full flex items-center justify-between select-none">
                <div className="w-[76px] h-[32px] flex-shrink-0" />
                <div className="w-[50px] h-[50px]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[150px] sm:h-[220px] md:h-[300px] lg:h-[360px] pointer-events-none z-10 select-none">
        <img
          src="/asset_051.png"
          alt="Bottom transition border"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  )
}
