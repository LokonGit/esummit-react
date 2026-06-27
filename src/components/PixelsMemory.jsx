export default function PixelsMemory() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ED6F2E] pt-[140px] sm:pt-[200px] md:pt-[260px] lg:pt-[300px] pb-[140px] sm:pb-[200px] md:pb-[260px] lg:pb-[300px] z-20">
      {/* Leaf veins background overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-80 mix-blend-multiply"
        style={{
          backgroundImage: "url('/asset_177.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Top Orange Torn Paper Border */}
      <div className="absolute top-0 left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[477px] pointer-events-none select-none z-10">
        <img src="/asset_178.png" alt="Orange upper torn paper border" className="w-full h-full object-cover object-top" />
      </div>

      {/* Bottom Orange Torn Paper Border */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[488px] pointer-events-none select-none z-10">
        <img src="/asset_176.png" alt="Orange lower torn paper border" className="w-full h-full object-cover object-bottom" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto flex flex-col items-center z-30">

        {/* Header Title Block */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-outfit font-black text-white tracking-[0.02em] leading-[1.1] select-none">
            Pixels of Memory
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-jakarta font-medium text-white/80 tracking-[0.05em] select-none mt-2">
            Hi-Res&apos;24
          </p>
        </div>

        {/* Desktop Polaroid Frames Layout */}
        <div className="hidden sm:block relative w-full h-[230px] md:h-[347px] select-none">

          {/* 1. Leftmost Frame */}
          <div className="absolute left-0 top-0 w-[140px] h-[230px] md:w-[199px] md:h-[347px] hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer select-none">
            <img src="/asset_117.png" alt="Polaroid cropped left" className="w-full h-full object-contain object-left" />
          </div>

          {/* 2. Middle Frame 1 */}
          <div className="absolute left-[17%] top-[-30px] w-[190px] h-[230px] md:w-[285px] md:h-[347px] hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer select-none">
            <img src="/asset_104.png" alt="Polaroid memory 1" className="w-full h-full object-contain" />
          </div>

          {/* 3. Middle Frame 2 */}
          <div className="absolute left-[40%] top-0 w-[190px] h-[230px] md:w-[285px] md:h-[347px] hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer select-none">
            <img src="/asset_104.png" alt="Polaroid memory 2" className="w-full h-full object-contain" />
          </div>

          {/* 4. Middle Frame 3 */}
          <div className="absolute right-[15%] top-[-30px] w-[190px] h-[230px] md:w-[285px] md:h-[347px] hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer select-none">
            <img src="/asset_104.png" alt="Polaroid memory 3" className="w-full h-full object-contain" />
          </div>

          {/* 5. Rightmost Frame */}
          <div className="absolute right-0 top-0 w-[140px] h-[230px] md:w-[199px] md:h-[347px] hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer select-none">
            <img src="/asset_237.png" alt="Polaroid cropped right" className="w-full h-full object-contain object-right" />
          </div>
        </div>

        {/* Mobile 2-Column Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[420px] mx-auto px-6 sm:hidden select-none pb-12">
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative w-full hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer" style={{ aspectRatio: '285/347' }}>
                <img src="/asset_104.png" alt={`Polaroid memory ${n}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-12">
            {[4, 5, 6].map((n) => (
              <div key={n} className="relative w-full hover:scale-105 hover:z-40 transition-all duration-300 cursor-pointer" style={{ aspectRatio: '285/347' }}>
                <img src="/asset_104.png" alt={`Polaroid memory ${n}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
