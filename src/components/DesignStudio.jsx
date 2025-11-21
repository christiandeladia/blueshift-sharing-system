import React from 'react';

export const DesignStudio = () => {
  const phoneImageUrl = "https://res.cloudinary.com/deywhsg5s/image/upload/q_auto/f_auto/dpr_auto/v1737095339/sds-phone_i4a5wv.webp";
  const laptopImageUrl = "https://res.cloudinary.com/deywhsg5s/image/upload/q_auto/f_auto/dpr_auto/v1737095359/sds-laptop_b3vwmm.webp";
  
  const phoneWidthClass = 'w-[125px]'; 
  const phoneMarginClass = '-mr-[85px]';

  return (
    <section id="indexDesignStudioSection" className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      
      <div className="max-w-5xl mx-auto">

        <p className="text-center text-sm md:text-base text-gray-500 mb-2">
          Design Studio
        </p>
        
        <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get Your Own System
        </h1>
        
        <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
          Instantly see how much you'll save when you switch to solar with us.
        </p>
        
        <div className="flex justify-center mb-12">
          <a 
            id="designYoursBtn" 
            className="inline-block bg-gray-900 text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition-colors shadow-xl"
            href="https://blueshift.ph/design"
          >
            Design Yours
          </a>
        </div>
        
        <div className="flex justify-center items-end">
          
          <img 
            src={phoneImageUrl}
            alt="SDS Phone Mockup" 
            className={`
              ${phoneWidthClass} 
              ${phoneMarginClass} 
              z-10 
              block 
              h-auto 
              transition-transform duration-300 hover:scale-[1.02]
              max-w-[25%]
              drop-shadow-xl
              rounded-xl
              border-0
            `}
            loading="lazy"
            width="125"
            height="auto"
          />
          
          <img 
            src={laptopImageUrl}
            alt="SDS Laptop Mockup" 
            className="w-full max-w-lg md:max-w-xl lg:max-w-[520px] block h-auto rounded-xl transition-transform duration-300 hover:scale-[1.01] drop-shadow-2xl"
            loading="lazy"
            width="520"
            height="auto"
          />
        </div>
      </div>
    </section>
  );
};
