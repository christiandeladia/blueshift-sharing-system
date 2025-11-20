import React, { useState } from 'react';

// Data for the FAQ items
const faqs = [
  {
    id: 1,
    question: "How long do panels really last?",
    answer: "Solar panels typically have a lifespan of over 30 years. This doesn’t mean they stop producing electricity after that time; rather, their efficiency gradually decreases to a point where manufacturers recommend replacing them.\n\nAt Blueshift Energy Inc., we offer a 12+ year product warranty and a 30-year performance warranty, ensuring your panels continue to generate reliable energy over the long term."
  },
  {
    id: 2,
    question: "What if my roof starts to leak after the installation?",
    answer: "If your roof starts to leak after installation and it’s determined to be a pre-existing issue or unrelated to our solar installation, we won’t be able to cover the repair. However, if the leak is caused by our installation, we offer a 5-year Blueshift warranty and will fix the problem at no cost to you."
  },
  {
    id: 3,
    question: "What is the maintenance for solar?",
    answer: "Solar panels generally require very little maintenance, mainly periodic system checks to ensure optimal performance. Cleaning the panels 1-3 times a year can boost their efficiency, but it’s not strictly necessary.\n\nWhen you install with Blueshift Energy Inc., you’ll enjoy a complimentary cleaning service in the first year, available up to 3 times. After the first year, you can request cleaning services as needed for a small fee.\n\nWith Blueshift Monitoring, our system will keep an eye on your solar performance 24/7, ensuring it consistently operates at 100% efficiency. To learn more about Blueshift Monitoring, click here."
  },
  {
    id: 4,
    question: "How long does it take to install a solar power system?",
    answer: "The installation process for residential clients typically takes 1-4 days, depending on the size of the system. However, for commercial and industrial clients, the timeline varies based on the size and complexity of the project."
  },
  {
    id: 5,
    question: "Should I get a solar with battery system?",
    answer: "Choosing to use batteries or hybrid system allows you to store unused power for later use. We typically recommend this option for clients who want protection against brownouts or people that want to replace their generators.\n\nWhile battery systems can be more costly, they offer several valuable benefits. Talk to us, and we can help you determine if this system is the right choice for you. Click here to learn more."
  }
];

// Reusable component for a single FAQ item
const FaqItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Split the answer by newline characters to render paragraphs correctly
  const paragraphs = answer.split('\n\n');

  return (
    <div className="border-t border-gray-700 py-3 px-2 md:px-0">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center grow">
          {/* Toggle Button/Icon Container */}
          <button
            className="shrink-0 flex justify-center items-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors mr-4"
            type="button"
            aria-expanded={isOpen}
            aria-controls={`faqCollapse${id}`}
            aria-label={`Toggle FAQ: ${question}`}
          >
            {/* Using an inline SVG for the arrow down icon, rotating it for toggle effect */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" 
              fill="currentColor" 
              viewBox="0 0 16 16" 
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
              <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
            </svg>
          </button>
          
          {/* Question Text */}
          <p className="text-lg font-medium leading-tight text-white m-0">
            {question}
          </p>
        </div>
      </div>
      
      {/* Collapse Content Area */}
      <div 
        id={`faqCollapse${id}`} 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="pl-12 pt-4 text-gray-300">
          {paragraphs.map((p, index) => (
            // Simple rendering of paragraphs. Handling the embedded link in FAQ 3 is simplified here.
            <p key={index} className="mb-4 last:mb-0">
              {p.split('click here.').map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  {part}
                  {partIndex < p.split('click here.').length - 1 && (
                    <a href="public/blueshift-monitoring.html" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                      click here.
                    </a>
                  )}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
export const FaqSection = () => {
  return (
    // Equivalent to section with background, margin-top, and padding
    <section id="faq" className=" py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <h1 className="text-4xl font-bold mb-8">FAQ</h1>
        
        {/* FAQ Grid Layout - The original used two columns side-by-side on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          
          {faqs.map((faq) => (
            <FaqItem key={faq.id} {...faq} />
          ))}

        </div>
      </div>
    </section>
  );
};
