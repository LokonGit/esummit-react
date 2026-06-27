import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "What is E-Summit '25 and who is eligible to attend?",
      answer: "E-Summit '25 is the annual flagship entrepreneurship and design convergence summit. It is open to students, professionals, designers, developers, and aspiring entrepreneurs from all universities and fields.",
    },
    {
      question: 'How do I register for the workshops and speaker sessions?',
      answer: "You can register by clicking the 'Register Now' or event action buttons on our homepage. Simply select the specific events or tracks you wish to participate in and complete the secure registration form.",
    },
    {
      question: 'Are there any team size limits for the Photoshop Battle?',
      answer: "Yes, the Photoshop Battle is an individual competition, but other events under the 'Genesis in Action' track may allow teams of up to 3 members. Please check the specific event guidelines for full details.",
    },
    {
      question: 'When and where will the E-Summit merchandise be distributed?',
      answer: 'Official merchandise, including limited-edition t-shirts, tote bags, and mugs, can be collected from the main registration desk on the campus during the summit days.',
    },
    {
      question: 'Will I receive certificates for participating in the workshops?',
      answer: "Yes, all registered participants who attend the workshops and complete the associated projects will receive an official digital Certificate of Participation verified by the E-Summit '25 committee.",
    },
    {
      question: 'How can I contact the support team for registration queries?',
      answer: 'For any technical queries or registration assistance, please reach out to our dedicated support team via the Contact Us section at the bottom of the page or email us at support@esummit.in.',
    },
  ]

  return (
    <section id="faqs" className="relative w-full bg-[#faf7f0] pt-10 pb-16 sm:pb-24 z-20 overflow-hidden">
      {/* Background paper texture overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: "url('/asset_113.png')",
          backgroundSize: 'repeat',
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 sm:px-12 md:px-16 z-10 flex flex-col">
        {/* Section Heading */}
        <h2 className="text-left font-outfit font-black text-[#171717] text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] tracking-tight leading-[1.1] select-none mb-8 sm:mb-12">
          FAQs?
        </h2>

        {/* Accordion list */}
        <div className="w-full flex flex-col">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx
            return (
              <div
                key={idx}
                onClick={() => toggleIndex(idx)}
                className="border-b border-[#171717]/10 py-5 sm:py-6 md:py-7 cursor-pointer group flex flex-col"
              >
                <div className="flex justify-between items-center w-full gap-6">
                  <div className="text-[#171717] font-jakarta font-medium text-base sm:text-lg md:text-[20px] leading-snug tracking-wide select-none pr-4">
                    {item.question}
                  </div>
                  <div className={`text-[#171717] text-2xl sm:text-3xl font-light transition-transform duration-300 select-none cursor-pointer ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </div>

                {/* Expandable Answer */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-[#171717]/75 font-jakarta font-normal text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
