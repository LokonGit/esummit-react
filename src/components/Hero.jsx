export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-0 py-12 ">

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6 mt-[-80px] lg:mt-[-40px] pb-36 lg:pb-0">
        {/* Central Graphic Title */}
        <div className="relative w-full max-w-[500px] aspect-[453/246] hover:scale-[1.02] transition-transform duration-300 ease-out">
          <img
            src="/asset_007.png"
            alt="Hi-Res Annual Design Convergence"
            className="w-full px-6 h-full object-contain"
          />
        </div>

        {/* Description Text */}
        <p className="max-w-2xl text-zinc-700 font-medium text-base md:text-lg leading-relaxed px-4 font-outfit">
          Join to ignite the spark of new beginnings, bringing visions to life
          through collective brilliance and shaping the future of design.
        </p>

        {/* Register CTA Button */}
        <button className="mt-4 px-8 py-3.5 bg-[#FCAF3B] hover:bg-[#e39622] text-black font-extrabold text-lg md:text-xl rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none font-outfit uppercase cursor-pointer relative group overflow-visible">
          {/* Left Butterfly */}
          <div className="absolute left-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[60px] group-hover:-translate-y-[45px] group-hover:-rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
            <img src="/asset_110.png" alt="" className="w-full h-full object-contain" />
          </div>
          {/* Right Butterfly */}
          <div className="absolute right-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[60px] group-hover:-translate-y-[45px] group-hover:rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
            <img src="/asset_111.png" alt="" className="w-full h-full object-contain" />
          </div>
          Register Now
        </button>
      </div>

      {/* Left Decoration: Flowers and butterflies */}
      <div className="absolute left-[-20px] md:left-[-50px] bottom-[-20px] lg:bottom-auto top-auto lg:top-[50%] translate-y-0 lg:-translate-y-1/2 w-[240px] md:w-[380px] lg:w-[450px] aspect-[456/728] z-20 pointer-events-none select-none animate-fade-in-left">
        <img
          src="/asset_115.png"
          alt="Flower collage left"
          className="w-full h-full hidden md:block object-contain object-left-bottom"
        />
      </div>

      {/* Right Decoration: Hand holding butterflies */}
      <div className="absolute right-[-20px] md:right-[-60px] bottom-[-20px] lg:bottom-auto top-auto lg:top-[60%] translate-y-0 lg:-translate-y-1/2 w-[240px] md:w-[380px] lg:w-[480px] aspect-[492/776] z-20 pointer-events-none select-none animate-fade-in-right">
        <img
          src="/asset_109.png"
          alt="Hand holding butterflies right"
          className="w-full hidden md:block h-full object-contain object-right-bottom"
        />
      </div>
      <img
        src="/asset_268.png"
        alt=""
        className="block md:hidden absolute left-1/2 -translate-x-1/2 -bottom-33 w-screen h-auto  z-300"
      />
    </section>
  )
}
