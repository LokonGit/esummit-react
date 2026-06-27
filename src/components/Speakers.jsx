export default function Speakers() {
  const cards = Array.from({ length: 9 }).map((_, index) => {
    const colIndex = index % 3
    return {
      id: index,
      colIndex,
      name: 'Ansh Mehra',
      role: 'Design Consultant',
      bio: 'Lorem ipsum dolor sit amet consectetur. Hac sit varius cursus purus nec vulputate. Hac sit varius',
    }
  })

  return (
    <section
      id="speakers"
      className="relative w-full overflow-hidden bg-[#fafafa] bg-repeat pt-[140px] sm:pt-[200px] md:pt-[260px]"
      style={{
        backgroundImage: "url('/asset_113.png')",
        backgroundSize: '600px',
      }}
    >
      {/* Main Container */}
      <div className="relative w-full max-w-[1440px] mx-auto z-20 px-6 sm:px-12 md:px-16">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24 -mt-50 select-none">
          <h2 className="text-[40px] sm:text-[56px] md:text-[72px] font-outfit font-black text-[#171717] tracking-tight leading-none text-center">
            Voices That Matter
          </h2>
          <p className="text-xs sm:text-sm font-jakarta font-bold text-zinc-500 tracking-[0.2em] uppercase text-center mt-3">
            2025 SPEAKERS
          </p>
        </div>

        {/* 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20 justify-items-center">
          {cards.map((card) => {
            const isCol1 = card.colIndex === 0
            const isCol2 = card.colIndex === 1
            const isCol3 = card.colIndex === 2

            const tiltClass = isCol2 ? 'sm:rotate-[1.5deg]' : 'sm:rotate-[-1.5deg]'

            const nameColorClass = isCol1
              ? 'text-[#2b3a67]'
              : isCol2
              ? 'text-[#d62b70]'
              : 'text-[#fcaf3b]'

            return (
              <div
                key={card.id}
                className="flex flex-row sm:flex-col items-center justify-start sm:justify-center w-full max-w-[350px] sm:max-w-none sm:w-[330px] md:w-[370px] gap-4 sm:gap-0"
              >
                {/* Polaroid Frame Wrapper */}
                <div className={`relative select-none flex-shrink-0 sm:flex-shrink-0 ${tiltClass} hover:scale-[1.02] transition-transform duration-300`}>

                  {/* Polaroid Photo Box */}
                  <div className="relative w-[130px] sm:w-[270px] md:w-[300px] aspect-square overflow-hidden bg-zinc-50 border border-zinc-100">
                    <img
                      src="/asset_121.png"
                      alt={card.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Column 1 Butterflies */}
                  {isCol1 && (
                    <>
                      <div className="absolute right-[-15px] top-[-20px] sm:right-[-29px] sm:top-[-44px] w-[80px] h-[80px] sm:w-[170px] sm:h-[170px] pointer-events-none select-none z-10 animate-float">
                        <img src="/asset_241.png" alt="Blue butterfly" className="w-full h-full object-contain" />
                      </div>
                      <div className="absolute left-[-5px] top-[50%] w-[50px] h-[50px] sm:left-[-10px] sm:w-[100px] sm:h-[100px] pointer-events-none select-none z-10 animate-float" style={{ animationDelay: '1.0s' }}>
                        <img src="/asset_242.png" alt="Green butterfly" className="w-full h-full object-contain" />
                      </div>
                    </>
                  )}

                  {/* Column 2 Butterflies */}
                  {isCol2 && (
                    <>
                      <div className="absolute left-[-10px] bottom-[12px] sm:left-[-20px] sm:bottom-[25px] w-[65px] h-[65px] sm:w-[130px] sm:h-[130px] pointer-events-none select-none z-10 animate-float">
                        <img src="/asset_243.png" alt="Purple butterfly" className="w-full h-full object-contain" />
                      </div>
                      <div className="absolute left-[-11px] bottom-[-10px] sm:left-[-22px] sm:bottom-[-20px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] pointer-events-none select-none z-10 animate-float" style={{ animationDelay: '0.8s' }}>
                        <img src="/asset_242.png" alt="Green butterfly" className="w-full h-full object-contain" />
                      </div>
                    </>
                  )}

                  {/* Column 3 Butterflies */}
                  {isCol3 && (
                    <>
                      <div className="absolute left-[-7px] top-[-7px] sm:left-[-15px] sm:top-[-15px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] pointer-events-none select-none z-10 animate-float">
                        <img src="/asset_244.png" alt="Red butterfly" className="w-full h-full object-contain" />
                      </div>
                      <div className="absolute right-[-7px] bottom-[-5px] sm:right-[-15px] sm:bottom-[-10px] w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] pointer-events-none select-none z-10 animate-float" style={{ animationDelay: '1.5s' }}>
                        <img src="/asset_240.png" alt="Blue butterfly" className="w-full h-full object-contain" />
                      </div>
                    </>
                  )}
                </div>

                {/* Speaker Info */}
                <div className="flex flex-col items-start sm:items-center text-left sm:text-center flex-1 min-w-0 mt-0 sm:mt-6 sm:max-w-[330px]">
                  <div className="flex items-center gap-1.5 sm:gap-2.5 justify-start sm:justify-center text-left sm:text-center w-full">
                    <div className="relative w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] flex-shrink-0">
                      <img src="/asset_229.png" alt="Diamond icon" className="w-full h-full object-contain" />
                    </div>
                    <span className={`text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight ${nameColorClass} font-outfit truncate`}>
                      {card.name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-zinc-800 mt-1 font-jakarta text-left sm:text-center">
                    {card.role}
                  </span>
                  <p className="text-[10px] sm:text-xs md:text-[14px] leading-relaxed text-zinc-500 font-jakarta mt-2 max-w-[310px] text-left sm:text-center">
                    {card.bio}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
