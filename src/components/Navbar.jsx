import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Hi-Res', href: '#hi-res' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' },
  ]

  return (
    <nav className="w-full px-6 py-4 md:px-12 flex items-center justify-between z-50 bg-transparent relative">
      {/* Left: Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src="/asset_004.png"
            alt="E-Summit '25 Logo"
            className="object-contain h-10 w-auto"
          />
        </a>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden lg:flex items-center gap-8 bg-white/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/5 shadow-sm">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[15px] font-medium text-zinc-800 hover:text-black transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: CTA Button / Hamburger Menu */}
      <div className="flex items-center gap-4">
        {/* Desktop CTA */}
        <a
          href="#login"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-zinc-300 hover:border-black text-[15px] font-medium text-zinc-800 hover:text-black bg-white/50 backdrop-blur-sm transition-all duration-200 shadow-sm hover:shadow"
        >
          Login/Signup
        </a>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-zinc-800 hover:text-black focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 6h16" />
              <path d="M8 12h12" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-[85%] left-6 right-6 bg-white/95 backdrop-blur-md border border-black/10 shadow-lg rounded-2xl p-6 z-50 flex flex-col gap-3 font-outfit lg:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[16px] font-semibold text-zinc-800 hover:text-black transition-colors py-2 border-b border-zinc-100 last:border-b-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#login"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center px-6 py-3 rounded-xl border border-zinc-300 text-[16px] font-semibold text-zinc-800 bg-zinc-50 hover:bg-zinc-100 transition-all duration-200"
          >
            Login/Signup
          </a>
        </div>
      )}
    </nav>
  )
}
