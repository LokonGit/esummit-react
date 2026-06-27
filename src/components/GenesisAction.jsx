// Reusable hover button with butterflies
function RegisterButton() {
  return (
    <button className="hidden lg:inline-block px-8 py-3 bg-[#FCAF3B] hover:bg-[#e39622] text-black font-extrabold text-sm md:text-base rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase cursor-pointer relative group overflow-visible">
      <div className="absolute left-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-x-[60px] group-hover:-translate-y-[45px] group-hover:-rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
        <img src="/asset_110.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[10px] top-[15%] w-[100px] h-[100px] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-[60px] group-hover:-translate-y-[45px] group-hover:rotate-[12deg] transition-all duration-300 ease-out pointer-events-none z-10">
        <img src="/asset_111.png" alt="" className="w-full h-full object-contain" />
      </div>
      Register
    </button>
  )
}

export default function GenesisAction() {
  return (
    <section
      id="genesis-in-action"
      className="relative w-full overflow-hidden bg-[#faf7f0] pt-[80px] sm:pt-[120px] md:pt-[160px] pb-[60px] sm:pb-[50px] md:pb-[50px] z-20"
      style={{
        backgroundImage: "url('/asset_113.png')",
        backgroundSize: '600px',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Top-Left Hand */}
      <div className="absolute left-0 top-0 sm:top-[10px] md:top-[15px] lg:top-[40px] w-[320px] sm:w-[480px] md:w-[640px] lg:w-[795.5px] h-[259px] sm:h-[389px] md:h-[518px] lg:h-[644.79px] pointer-events-none select-none z-10">
        <img src="/asset_108.png" alt="Upper hand illustration" className="w-full h-full object-contain object-left-top" />
      </div>

      {/* Bottom-Right Hand */}
      <div className="absolute right-0 top-[150px] sm:top-[280px] md:top-[340px] lg:top-[0px] w-[240px] sm:w-[380px] md:w-[480px] lg:w-[612px] h-[382px] sm:h-[604px] md:h-[763px] lg:h-[973px] pointer-events-none select-none z-10">
        <img src="/asset_107.png" alt="Lower hand illustration" className="w-full h-full object-contain object-right-bottom" />
      </div>

      {/* Header with Butterfly */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col items-center justify-center mb-16 md:mb-24 h-[300px] sm:h-[400px] md:h-[450px] mt-[-20px] sm:mt-[-40px] md:mt-[0px]">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[55%] w-[320px] sm:w-[420px] md:w-[491px] aspect-[491/492] pointer-events-none select-none z-0 opacity-85">
          <img src="/asset_105.png" alt="Background butterfly" className="w-full h-full object-contain" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <h2 className="text-[48px] sm:text-[80px] md:text-[90px] font-outfit font-black text-[#171717] tracking-[0.04em] leading-[1.0] select-none">
            Genesis In Action
          </h2>
          <p className="text-sm sm:text-lg md:text-[24px] font-jakarta font-bold text-zinc-500 tracking-[0.2em] uppercase select-none mt-4">
            EVENTS TO EXPLORE
          </p>
        </div>
      </div>

      {/* Cards Stack */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col gap-12 md:gap-[50px] items-center">

        {/* Card 1: Orange Block (Zenigma) */}
        <div
          className="w-full lg:w-[1000px] h-[460px] sm:h-[500px] lg:h-[390px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-[3px] border-black rounded-[24px] overflow-hidden p-6 sm:p-8 md:py-6 md:px-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out"
          style={{
            backgroundColor: '#ed763f',
            backgroundImage: "url('/asset_113.png')",
            backgroundBlendMode: 'multiply',
            backgroundSize: '450px',
          }}
        >
          <div className="hidden sm:block absolute top-4 left-4 w-20 h-20">
            <img src="/asset_229.png" alt="Diamond marker" className="w-full h-full object-contain opacity-75" />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col items-start text-left z-10">
            <h3 className="font-outfit font-black text-2xl sm:text-[30px] md:text-[36px] text-white leading-none mb-3 select-none">
              Zenigma
            </h3>
            <p className="font-jakarta font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-white/80 leading-relaxed mb-3 md:mb-5 max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur. Hac sit varius cursus purus nec vulputate amet. Feugiat ac blandit risus.
            </p>
            <RegisterButton />
          </div>

          <div className="w-full lg:w-[45%] flex items-center justify-center relative min-h-0 lg:h-full select-none overflow-visible z-0">
            <div className="absolute right-[-90px] bottom-[-100px] w-[310px] h-[350px] sm:right-[-10px] sm:bottom-[-30px] sm:w-[300px] sm:h-[340px] lg:absolute lg:right-[8%] lg:bottom-[-30px] lg:w-[340px] lg:h-[380px] z-10">
              <div className="absolute left-[-10%] top-[-13%] w-[64.7%] h-[56.6%] z-0">
                <img src="/asset_169.png" alt="Yellow flower" className="w-full h-full object-contain" />
              </div>
              <div className="absolute right-[-17%] bottom-[-5%] w-[58.8%] h-[56.8%] z-0">
                <img src="/asset_175.png" alt="Pink flower" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-[8.5%] left-[17.3%] w-[62%] h-[90.7%] rounded-[20px] overflow-hidden bg-[#faf7f0] z-10">
                <img src="/asset_173.png" alt="Phone screen background" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 w-full h-full z-20">
                <img src="/asset_174.png" alt="Phone frame" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-[15%] left-[16%] w-[53%] h-[53%] z-30 hover:scale-[1.03] transition-transform duration-300">
                <img src="/asset_170.png" alt="Mockup card back" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-[18%] left-[10%] w-[55%] h-[55%] z-40 hover:scale-[1.03] transition-transform duration-300">
                <img src="/asset_171.png" alt="Mockup card front" className="w-full h-full object-contain" />
              </div>
              <div className="absolute bottom-[6%] left-[30%] w-[55%] h-[25.5%] z-50 hover:scale-[1.03] transition-transform duration-300">
                <img src="/asset_172.png" alt="Mockup action card" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Blue Block (Photoshop Battle) */}
        <div
          className="w-full lg:w-[1000px] h-[460px] sm:h-[500px] lg:h-[390px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-[3px] border-black rounded-[24px] overflow-hidden p-6 sm:p-8 md:py-6 md:px-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out"
          style={{
            backgroundColor: '#7b92df',
            backgroundImage: "url('/asset_113.png')",
            backgroundBlendMode: 'multiply',
            backgroundSize: '450px',
          }}
        >
          <div className="hidden sm:block absolute top-4 left-4 w-20 h-20">
            <img src="/asset_229.png" alt="Diamond marker" className="w-full h-full object-contain opacity-75" />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col items-start text-left z-10">
            <h3 className="font-outfit font-black text-2xl sm:text-[30px] md:text-[36px] text-white leading-none mb-3 select-none">
              Photoshop Battle
            </h3>
            <p className="font-jakarta font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-white/80 leading-relaxed mb-3 md:mb-5 max-w-[440px]">
              Lorem ipsum dolor sit amet consectetur. Hac sit varius cursus purus nec vulputate amet. Feugiat ac blandit risus.
            </p>
            <RegisterButton />
          </div>

          <div className="absolute right-0 bottom-0 w-[290px] h-[240px] sm:w-[380px] sm:h-[320px] lg:w-[475px] lg:h-[390px] select-none z-0">
            <div className="absolute z-0" style={{ right: '7.5%', top: '13.3%', width: '33%', aspectRatio: '1 / 1' }}>
              <img src="/asset_045.png" alt="Yellow circle background" className="w-full h-full object-contain" />
            </div>
            <div className="absolute z-10 hover:scale-[1.03] transition-transform duration-300" style={{ left: '18.9%', top: '27.4%', width: '67%', aspectRatio: '331 / 228' }}>
              <img src="/asset_047.png" alt="Photoshop main panel" className="w-full h-full object-contain" />
            </div>
            <div className="absolute z-20 hover:scale-[1.03] transition-transform duration-300" style={{ left: '7.5%', top: '15.9%', width: '37.7%', aspectRatio: '284 / 244' }}>
              <img src="/asset_044.png" alt="Photoshop toolbar window" className="w-full h-full object-contain" />
            </div>
            <div className="absolute z-30 hover:scale-[1.03] transition-transform duration-300" style={{ left: '4.7%', top: '39.8%', width: '51.9%', aspectRatio: '285 / 282' }}>
              <img src="/asset_046.png" alt="Eyemask layout graphic" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Card 3: Pink Block (Brandstorm) */}
        <div
          className="w-full lg:w-[1000px] h-[480px] sm:h-[520px] lg:h-[410px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-[3px] border-black rounded-[24px] overflow-hidden p-6 sm:p-8 md:py-6 md:px-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out"
          style={{
            backgroundColor: '#e85789',
            backgroundImage: "url('/asset_113.png')",
            backgroundBlendMode: 'multiply',
            backgroundSize: '450px',
          }}
        >
          <div className="hidden sm:block absolute top-4 left-4 w-20 h-20">
            <img src="/asset_229.png" alt="Diamond marker" className="w-full h-full object-contain opacity-75" />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col items-start text-left z-10">
            <h3 className="font-outfit font-black text-2xl sm:text-[30px] md:text-[36px] text-white leading-none mb-3 select-none">
              Brandstorm
            </h3>
            <p className="font-jakarta font-semibold text-[14px] sm:text-[15px] lg:text-[16px] text-white/80 leading-relaxed mb-3 md:mb-5 max-w-[440px]">
              Lorem ipsum dolor sit amet consectetur. Hac sit varius cursus purus nec vulputate amet. Feugiat ac blandit risus.
            </p>
            <RegisterButton />
          </div>

          <div className="absolute right-0 bottom-0 w-[300px] h-[260px] sm:w-[380px] sm:h-[330px] lg:relative lg:right-auto lg:bottom-auto lg:w-[45%] lg:h-full lg:min-h-0 lg:max-w-none select-none z-0">
            <div className="absolute left-[3%] top-[10%] w-[150px] sm:w-[130px] lg:w-[165px] lg:top-[120px] lg:left-[110px] aspect-[220/351] z-10 hover:scale-[1.03] transition-transform duration-300">
              <img src="/asset_182.png" alt="Brand list column 1" className="w-full h-full object-contain" />
            </div>
            <div className="absolute left-[35%] top-[0%] w-[180px] sm:w-[145px] lg:w-[180px] lg:top-[65px] lg:left-[200px] aspect-[244/422] z-10 hover:scale-[1.03] transition-transform duration-300">
              <img src="/asset_183.png" alt="Brand list column 2" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[-22%] top-[5%] w-[150px] sm:w-[120px] lg:w-[145px] lg:top-[48px] lg:right-[-48px] aspect-[185/422] z-10 hover:scale-[1.03] transition-transform duration-300">
              <img src="/asset_184.png" alt="Brand list column 3" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[-2%] top-[-3%] w-[180px] sm:w-[80px] lg:w-[115px] lg:top-[48px] lg:right-[-60px] aspect-[205/205] z-15 animate-float pointer-events-none">
              <img src="/asset_180.png" alt="Blue butterfly overlay" className="w-full h-full object-contain" />
            </div>
            <div className="absolute left-[2%] bottom-[-20%] w-[150px] sm:w-[75px] lg:w-[105px] aspect-[179/179] z-20 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
              <img src="/asset_185.png" alt="Purple butterfly overlay" className="w-full h-full object-contain" />
            </div>
            <div className="absolute right-[-20%] bottom-[12%] w-[100px] sm:w-[50px] lg:w-[70px] aspect-[116/116] z-20 animate-float pointer-events-none" style={{ animationDelay: '1.8s' }}>
              <img src="/asset_181.png" alt="Green butterfly overlay" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
