export default function ReadySynergy() {
  return (
    <section
      id="ready-set-synergy"
      className="relative w-full overflow-hidden bg-[#5078c0] min-h-[620px] sm:min-h-[720px] md:min-h-[820px] lg:min-h-[880px] flex flex-col items-center justify-center pt-[160px] pb-[180px] sm:pt-[220px] sm:pb-[240px] md:pt-[280px] md:pb-[300px] lg:pt-[340px] lg:pb-[380px] z-20"
    >
      {/* Background paper texture */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 mix-blend-multiply opacity-[0.85]"
        style={{
          backgroundImage: "url('/asset_029.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background Mask Overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 mix-blend-multiply opacity-[0.85]"
        style={{
          backgroundImage: "url('/asset_049.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[120px] sm:h-[180px] md:h-[240px] lg:h-[300px] xl:h-[381px] pointer-events-none select-none z-30">
        <img src="/asset_052.png" alt="Top torn border" className="w-full h-full object-cover object-top" />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] sm:h-[200px] md:h-[280px] lg:h-[360px] xl:h-[462px] pointer-events-none select-none z-30">
        <img src="/asset_024.png" alt="Bottom torn border" className="w-full h-full object-cover object-bottom" />
      </div>

      {/* Left Doodle Character */}
      <div className="absolute left-[-5px] bottom-8 w-[200px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] lg:w-[400px] lg:h-[400px] lg:bottom-[100px] pointer-events-none select-none z-10">
        <img src="/asset_119.png" alt="Left doodle character" className="w-full h-full object-contain object-left-bottom" />
      </div>

      {/* Right Doodle Character */}
      <div className="absolute right-5 bottom-0 w-[200px] h-[300px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[600px] lg:h-[600px] pointer-events-none select-none z-10">
        <img src="/asset_236.png" alt="Right doodle character" className="w-full h-full object-contain object-right-bottom" />
      </div>

      {/* Centered Typography & CTA */}
      <div className="relative z-40 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto mt-4 sm:mt-8 md:mt-12">
        <h2 className="font-outfit font-black text-white text-[24px] sm:text-[36px] md:text-[42px] lg:text-[54px] tracking-tight leading-[1.05] select-none mb-6 sm:mb-8 md:mb-10">
          ready. set. synergy?
        </h2>

        <button className="px-10 py-4 bg-[#ffb129] hover:bg-[#e69b1f] text-black font-extrabold text-base sm:text-lg md:text-xl rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none cursor-pointer font-outfit relative group overflow-visible">
          <div className="absolute left-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[60px] group-hover:-translate-y-[45px] group-hover:-rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
            <img src="/asset_110.png" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute right-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[60px] group-hover:-translate-y-[45px] group-hover:rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
            <img src="/asset_111.png" alt="" className="w-full h-full object-contain" />
          </div>
          Get Tickets
        </button>
      </div>
    </section>
  )
}
