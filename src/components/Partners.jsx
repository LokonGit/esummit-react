export default function Partners() {
  const panel1Items = [
    { type: 'icon', src: '/asset_266.png', alt: 'Flower' },
    { type: 'card', src: '/asset_187.png', alt: 'Fampay Pink' },
    { type: 'icon', src: '/asset_023.png', alt: 'Asterisk' },
    { type: 'card', src: '/asset_187.png', alt: 'Fampay Pink' },
    { type: 'icon', src: '/asset_229.png', alt: 'Pyramid' },
    { type: 'card', src: '/asset_187.png', alt: 'Fampay Pink' },
    { type: 'icon', src: '/asset_057.png', alt: 'Circle' },
    { type: 'card', src: '/asset_187.png', alt: 'Fampay Pink' },
  ]

  const panel2Items = [
    { type: 'icon', src: '/asset_266.png', alt: 'Flower' },
    { type: 'card', src: '/asset_048.png', alt: 'Fampay Blue' },
    { type: 'icon', src: '/asset_102.png', alt: 'Eye' },
    { type: 'card', src: '/asset_048.png', alt: 'Fampay Blue' },
    { type: 'icon', src: '/asset_023.png', alt: 'Asterisk' },
    { type: 'card', src: '/asset_048.png', alt: 'Fampay Blue' },
    { type: 'icon', src: '/asset_229.png', alt: 'Pyramid' },
    { type: 'card', src: '/asset_048.png', alt: 'Fampay Blue' },
  ]

  const panel1Loop = [...panel1Items, ...panel1Items]
  const panel2Loop = [...panel2Items, ...panel2Items]

  return (
    <section className="relative w-full bg-[#faf7f0] py-16 sm:py-20 md:py-24 z-20 overflow-hidden">
      {/* Background paper texture overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: "url('/asset_113.png')",
          backgroundSize: 'repeat',
        }}
      />

      <div className="relative w-full z-10 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-center font-newake text-[40px] sm:text-[60px] md:text-[72px] lg:text-[84px] text-[#171717] tracking-[0.02em] select-none mb-10 sm:mb-14 md:mb-18 uppercase">
          Partners
        </h2>

        {/* Marquee Rows */}
        <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 overflow-hidden">

          {/* Panel 1 - Moving Left */}
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="flex w-max items-center animate-marquee-left hover:[animation-play-state:paused] cursor-pointer">
              {panel1Loop.map((item, idx) => (
                <div key={`p1-${idx}`} className="flex items-center shrink-0 mx-4 sm:mx-6 md:mx-8 select-none pointer-events-none">
                  {item.type === 'card' ? (
                    <div className="relative w-[180px] h-[90px] sm:w-[240px] sm:h-[113px] md:w-[296px] md:h-[139px]">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="relative w-[45px] h-[45px] sm:w-[56px] sm:h-[56px] md:w-[66px] md:h-[66px]">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 - Moving Right */}
          <div className="relative w-full overflow-hidden flex items-center">
            <div className="flex w-max items-center animate-marquee-right hover:[animation-play-state:paused] cursor-pointer">
              {panel2Loop.map((item, idx) => (
                <div key={`p2-${idx}`} className="flex items-center shrink-0 mx-4 sm:mx-6 md:mx-8 select-none pointer-events-none">
                  {item.type === 'card' ? (
                    <div className="relative w-[180px] h-[85px] sm:w-[240px] sm:h-[113px] md:w-[296px] md:h-[139px]">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="relative w-[45px] h-[45px] sm:w-[56px] sm:h-[56px] md:w-[66px] md:h-[66px]">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
