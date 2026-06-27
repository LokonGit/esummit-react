export default function Merchandise() {
  return (
    <section
      id="merchandise"
      className="relative w-full  bg-[#ea3d5d] pt-[72px] sm:pt-[96px] md:pt-[120px] pb-[72px] sm:pb-[96px] md:pb-[120px] z-20"
    >
      {/* Background Mask Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 mix-blend-multiply opacity-[0.85]"
        style={{
          backgroundImage: "url('/asset_031.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Top Torn Paper Border */}
      <div className="absolute top-0 left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[461px] pointer-events-none select-none z-10">
        <img src="/asset_261.png" alt="Upper torn paper border" className="w-full h-full object-cover object-top" />
      </div>

      {/* Bottom Torn Paper Border */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[488px] pointer-events-none select-none z-12">
        <img src="/asset_120.png" alt="Lower torn paper border" className="w-full h-full object-cover object-bottom" />
      </div>

      {/* Left Character */}
      <div className="absolute left-[-29px] bottom-[-20px] sm:bottom-[60px] md:bottom-[85px] lg:bottom-[20px] w-[360px] sm:w-[320px] md:w-[470px] lg:w-[655px] aspect-[655/890] pointer-events-none select-none z-35">
        <img src="/asset_118.png" alt="Stylized character left" className="w-full h-full object-contain object-left-bottom" />
      </div>

      {/* Right Character */}
      <div className="absolute right-[-16px] top-[-7%] sm:top-[17%] md:top-[1%] w-[320px] sm:w-[280px] md:w-[420px] lg:w-[580px] lg:h-[790px] aspect-[580/790] pointer-events-none select-none md:z-10 z-12">
        <img src="/asset_238.png" alt="Stylized character right" className="w-full h-full object-contain object-right-top" />
      </div>

      {/* Yellow Flower */}
      <div className="hidden sm:block absolute right-[8px] sm:right-[20px] md:right-[30px] lg:right-[1px] bottom-[-20px] sm:bottom-[0px] md:bottom-[75px] lg:bottom-[-60px] w-[170px] sm:w-[270px] md:w-[380px] lg:w-[500px] lg:h-[630px] aspect-[500/630] pointer-events-none select-none z-[11]">
        <img src="/asset_265.png" alt="Yellow flower illustration" className="w-full h-full object-contain object-right-bottom" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col items-center z-30">
        {/* Header Block */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-7 sm:mb-9 md:mb-11">
          <h2 className="text-[36px] pt-40 sm:text-[54px] md:text-[72px] lg:text-[84px] font-outfit font-black text-white tracking-[0.02em] leading-[1.0] select-none uppercase">
            Merchandise
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-[18px] font-outfit font-bold text-white/80 tracking-[0.05em] select-none mt-2">
            exciting t-shirts, totebags, mugs and more
          </p>
        </div>

        {/* Desktop Merchandise Collage */}
        <div className="relative w-full max-w-[650px] aspect-[650/380] my-2 sm:my-3 hidden sm:block">

          {/* 1. Canvas Tote Bag 1 */}
          <div className="absolute left-[-15%] top-[-20%] w-[63%] aspect-[550/676] z-12 transition-all duration-300 cursor-pointer">
            <img src="/asset_164.png" alt="Canvas Tote Bag Beach mockup" className="w-full h-full object-contain -rotate-[10deg]" />
          </div>

          {/* 2. Canvas Tote Bag 2 */}
          <div className="absolute right-[40%] top-[-28%] w-[60%] aspect-[528/656] z-10 transition-all duration-300 hover:scale-105 hover:z-40 cursor-pointer">
            <img src="/asset_165.png" alt="Canvas Tote Bag mockup" className="w-full h-full object-contain rotate-[8deg]" />
          </div>

          {/* 3. Black Hoodie */}
          <div className="absolute left-[13%] top-[-10%] w-[70%] aspect-[593/593] z-20 transition-all duration-300 cursor-pointer">
            <img src="/asset_025.png" alt="Black Hoodie mockup" className="w-full h-full object-contain" />
          </div>

          {/* 4. White Hoodie */}
          <div className="absolute right-[5%] top-[0%] w-[70%] aspect-[600/568] z-20 transition-all duration-300 cursor-pointer">
            <img src="/asset_263.png" alt="White Hoodie mockup" className="w-full h-full object-contain" />
          </div>

          {/* 5. Notebooks */}
          <div className="absolute left-[15%] top-[52%] w-[54%] aspect-[450/326] z-30 transition-all duration-300 cursor-pointer">
            <img src="/asset_010.png" alt="Notebook mockups" className="w-full h-full object-contain -rotate-[4deg]" />
          </div>

          {/* 6. Postcard */}
          <div className="absolute left-[-10%] top-[55%] w-[40%] aspect-[329/296] z-30 transition-all duration-300 cursor-pointer">
            <img src="/asset_018.png" alt="Postcard mockup" className="w-full h-full object-contain rotate-[5deg]" />
          </div>

          {/* 7. Bookmarks */}
          <div className="absolute left-[45%] top-[70%] w-[35%] aspect-[308/253] z-30 transition-all duration-300 cursor-pointer">
            <img src="/asset_002.png" alt="Bookmarks mockup" className="w-full h-full object-contain -rotate-[12deg]" />
          </div>

          {/* 8. Colorful Mug */}
          <div className="absolute left-[7%] top-[72%] w-[29%] aspect-[223/184] z-30 transition-all duration-300 cursor-pointer">
            <img src="/asset_008.png" alt="Colorful Mug mockup" className="w-full h-full object-contain rotate-[6deg]" />
          </div>

          {/* 9. White Mug */}
          <div className="absolute right-[48%] top-[76%] w-[29%] aspect-[284/249] z-30 transition-all duration-300 cursor-pointer">
            <img src="/asset_009.png" alt="Espresso Mug mockup" className="w-full h-full object-contain -rotate-[6deg]" />
          </div>

          {/* 10. Purple badge */}
          <div className="absolute left-[24%] top-[102%] w-[5%] aspect-square z-40 transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer rounded-full overflow-hidden border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            <img src="/asset_188.png" alt="Woohoo badge" className="w-full h-full object-cover -rotate-[15deg]" />
          </div>

          {/* 11. Black badge */}
          <div className="absolute left-[29%] top-[95%] w-[5%] aspect-square z-40 transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer rounded-full overflow-hidden border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            <img src="/asset_032.png" alt="Certified Felon badge" className="w-full h-full object-cover rotate-[10deg]" />
          </div>
        </div>

        {/* Mobile Collage */}
        <div className="relative w-full max-w-[340px] aspect-[316/307] my-4 block sm:hidden select-none">
          <div className="absolute z-10" style={{ left: '0%', top: '21.8%', width: '64.9%', aspectRatio: '205 / 224' }}>
            <img src="/asset_234.png" alt="Merch Tiles" className="w-full h-full object-contain" />
          </div>
          <div className="absolute z-20" style={{ left: '-3.2%', top: '-6.5%', width: '73.1%', aspectRatio: '231 / 231' }}>
            <img src="/asset_232.png" alt="Canvas Tote Bag Back" className="w-full h-full object-contain" />
          </div>
          <div className="absolute z-30" style={{ left: '23.1%', top: '20.8%', width: '63.3%', aspectRatio: '200 / 200' }}>
            <img src="/asset_231.png" alt="Canvas Tote Bag Front" className="w-full h-full object-contain" />
          </div>
          <div className="absolute z-40" style={{ left: '38.0%', top: '6.5%', width: '68.7%', aspectRatio: '217 / 268' }}>
            <img src="/asset_233.png" alt="Black Hoodie" className="w-full h-full object-contain" />
          </div>
          <div className="absolute z-50" style={{ left: '42.7%', top: '69.1%', width: '42.1%', aspectRatio: '133 / 133' }}>
            <img src="/asset_230.png" alt="White Mug" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Buy Merch CTA */}
        <div className="mt-8 sm:mt-12 md:mt-16 z-30">
          <button className="px-10 py-4 bg-[#FCAF3B] hover:bg-[#e39622] text-black font-extrabold text-base sm:text-lg md:text-xl rounded-full border-3 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 active:translate-x-[5px] active:translate-y-[5px] active:shadow-none uppercase cursor-pointer font-outfit relative group overflow-visible">
            <div className="absolute left-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[60px] group-hover:-translate-y-[45px] group-hover:-rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
              <img src="/asset_110.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[60px] group-hover:-translate-y-[45px] group-hover:rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
              <img src="/asset_111.png" alt="" className="w-full h-full object-contain" />
            </div>
            Buy Merch
          </button>
        </div>
      </div>
    </section>
  )
}
