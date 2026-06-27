export default function UniteSection() {
  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[756px] flex flex-col items-center justify-center overflow-hidden bg-[#eadbb6]">
      {/* Background Image Texture */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1441px] h-[1021px] z-0 select-none pointer-events-none opacity-50">
        <img
          src="/asset_020.jpg"
          alt="Unite section background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Border: Torn Paper */}
      <div className="absolute top-[-2px] left-0 w-full h-[150px] sm:h-[220px] md:h-[280px] lg:h-[343px] pointer-events-none z-20 select-none">
        <img
          src="/asset_016.png"
          alt="Top torn border"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center justify-center mt-6 md:mt-12">

        {/* Central Typography Block */}
        <div className="relative w-[340px] sm:w-[500px] md:w-[615px] h-[320px] sm:h-[420px] md:h-[491px] flex flex-col justify-between items-center">

          {/* Butterflies Floating Group */}
          <div className="absolute left-[60%] top-[-30px] sm:left-[64%] sm:top-[-45px] md:left-[300px] md:top-[-20px] w-[120px] sm:w-[190px] md:w-[249px] h-[130px] sm:h-[190px] md:h-[130px] pointer-events-none select-none z-20 animate-float">
            <img
              src="/asset_053.png"
              alt="Floating butterflies"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Bold lowercase stacked words */}
          <div className="absolute top-[66px] sm:top-[30px] md:top-[50px] text-[44px] sm:text-[75px] md:text-[102px] font-newake text-[#2b3a67] tracking-tight leading-[0.76] sm:leading-[0.78] md:leading-[0.80] text-center select-none flex flex-col justify-between">
            <div>unite.</div>
            <div>create.</div>
            <div>transform.</div>
          </div>

          {/* Tagline */}
          <div className="absolute bottom-[15px] sm:bottom-[30px] md:bottom-[50px] max-w-[280px] sm:max-w-md md:max-w-xl text-center text-zinc-700/90 text-xs sm:text-sm md:text-[16px] font-newake tracking-wide leading-relaxed flex flex-col justify-between">
            <div>Discover, learn and grow in a space where</div>
            <div>creativity meets opportunity</div>
          </div>
        </div>
      </div>

      {/* Bottom Border: Torn Paper */}
      <div className="absolute bottom-[-2px] left-0 w-full h-[150px] sm:h-[220px] md:h-[280px] lg:h-[344px] pointer-events-none z-20 select-none">
        <img
          src="/asset_015.png"
          alt="Bottom torn border"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Left 3D Staircase */}
      <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[30px] left-[-55px] sm:left-[-35px] md:left-[-10px] w-[140px] sm:w-[200px] md:w-[250px] lg:w-[280px] aspect-[410/479] z-10 pointer-events-none select-none hover:scale-[1.03] transition-transform duration-500 ease-out">
        <img
          src="/asset_246.png"
          alt="3D Staircase Left"
          className="w-full h-full object-contain object-left-bottom"
        />
      </div>

      {/* Right 3D Staircase */}
      <div className="absolute bottom-[20px] sm:bottom-[30px] md:bottom-[45px] right-[-55px] sm:right-[-35px] md:right-[-10px] w-[140px] sm:w-[200px] md:w-[250px] lg:w-[280px] aspect-[408/479] z-10 pointer-events-none select-none hover:scale-[1.03] transition-transform duration-500 ease-out">
        <img
          src="/asset_245.png"
          alt="3D Staircase Right"
          className="w-full h-full object-contain object-right-bottom"
        />
      </div>
    </section>
  )
}
