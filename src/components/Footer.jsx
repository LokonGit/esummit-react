export default function Footer() {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.526 3.5 12 3.5 12 3.5s-7.526 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.025 0 12 0 12s0 3.975.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.474 20.5 12 20.5 12 20.5s7.526 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="w-full bg-[#141110] px-4 sm:px-6 md:px-8 pb-12 md:pb-16 pt-4 text-white z-20 relative select-none">
      {/* Footer Main Card */}
      <div className="max-w-[1200px] mx-auto bg-[#161616] border border-white/5 rounded-[24px] p-6 sm:p-8 md:p-12 flex flex-col gap-10 md:gap-14 shadow-2xl">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left Div */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8 sm:gap-10">

            {/* Upper: Logo + Description */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/asset_004.png"
                  alt="E-Summit Logo"
                  className="object-contain h-9 w-auto"
                />
                <div className="w-[1.5px] h-[32px] bg-white/20" />
                <img
                  src="/asset_100.png"
                  alt="E-Cell Logo"
                  className="object-contain h-9 w-auto"
                />
              </div>
              <p className="text-white/60 font-jakarta font-medium text-sm sm:text-[15px] leading-relaxed max-w-lg">
                E-Summit IIT Roorkee is North India&apos;s largest entrepreneurial fest, organized by the Entrepreneurship Cell to inspire and empower future leaders.
              </p>
            </div>

            {/* Lower: Address */}
            <div className="flex flex-col gap-2">
              <h4 className="text-white/40 font-outfit font-black tracking-wider text-[11px] sm:text-xs uppercase">
                ADDRESS
              </h4>
              <p className="text-white/60 font-jakarta font-medium text-sm sm:text-[15px] leading-relaxed">
                E-Cell Office, SAC Building
                <br />
                IIT Roorkee
                <br />
                Roorkee, Uttarakhand - 247667
              </p>
            </div>
          </div>

          {/* Right Div */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">

            {/* Links and Contact */}
            <div className="grid grid-cols-2 gap-8">
              {/* Explore */}
              <div className="flex flex-col gap-3.5">
                <h4 className="text-white/40 font-outfit font-black tracking-wider text-[11px] sm:text-xs uppercase">
                  EXPLORE
                </h4>
                <div className="flex flex-col gap-2.5 font-jakarta font-medium text-sm sm:text-[15px] text-white/60">
                  <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                  <a href="#benefits" className="hover:text-white transition-colors duration-200">Benefits</a>
                  <a href="#process" className="hover:text-white transition-colors duration-200">How it works?</a>
                  <a href="#testimonials" className="hover:text-white transition-colors duration-200">Testimonials</a>
                  <a href="#faqs" className="hover:text-white transition-colors duration-200">FAQs</a>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex flex-col gap-3.5">
                <h4 className="text-white/40 font-outfit font-black tracking-wider text-[11px] sm:text-xs uppercase">
                  CONTACTS
                </h4>
                <div className="flex flex-col gap-2.5 font-jakarta font-medium text-sm sm:text-[15px] text-white/60">
                  <a href="mailto:esummit@iitr.ac.in" className="hover:text-white transition-colors duration-200 break-all">
                    esummit@iitr.ac.in
                  </a>
                  <a href="tel:+916387630920" className="hover:text-white transition-colors duration-200">
                    +91 6387630920
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center lg:justify-end gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 shadow-sm hover:shadow"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 font-jakarta font-medium text-xs sm:text-sm">
          <span>Made with ❤️ by Design &amp; Tech Team</span>
          <span>© 2024 E-Summit IIT Roorkee. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
