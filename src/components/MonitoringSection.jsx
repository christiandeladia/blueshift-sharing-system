import React from 'react';
import homes_img from "../assets/img/project/homes_img.webp";


const monitoringCards = [
  {
    id: 1,
    title: 'Blueshift Active Monitoring',
    imageUrl: homes_img,
    description: 'Our 24/7 Active Monitoring is a special service that works all the time. It uses smart tools to find hidden problems and gives you helpful information to save you more money.',
    accentColor: 'bg-gradient-to-r from-cyan-500 to-blue-700', 
    buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-700',
  },
  {
    id: 2,
    title: 'Blueshift One',
    imageUrl: homes_img,
    description: 'Blueshift One is our all-inclusive, hands-on protection plan. We handle 100% of your systems physical upkeep, guaranteeing its performance and protecting you from surprise costs. You just sit back and enjoy the savings.',
    accentColor: 'bg-gradient-to-r from-cyan-500 to-blue-700', 
    buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-700',
  },
];


const PricingCard = ({ card }) => {
  const buttonClasses = `${card.buttonColor} active:bg-opacity-80 focus:ring-4 focus:ring-opacity-50 transition duration-300 ease-in-out`;
  const handleSignup = () => {
    alert(`Signing up for the ${card.title} plan (ID: ${card.id})...`);
  };

  return (
    <div className={`
      w-full
      sm:w-[calc(50%-3rem)]
      rounded-4xl
      flex flex-col text-white
    `}>


      <div className="
        w-full h-full 
        bg-black
        rounded-[28px] 
        
        flex flex-col 
        gap-4
      ">
        <p className="font-semibold">
          {card.title}
        </p>
        
        <div className="
  w-full h-[200px] 
  rounded-lg 
  overflow-hidden 
  border border-gray-700 
  bg-gray-800 
  flex items-center justify-center
  relative 
">
    <img 
      src={card.imageUrl} 
      alt={`${card.title} plan visualization`}
      className="w-full h-full object-cover"
    />

    <div className="
      absolute 
      top-3    /* Adjust top spacing as needed */
      right-3  /* Adjust right spacing as needed */
      bg-blue-500 /* Or any color you prefer */
      text-white     /* Text color */
      text-xs        /* Smaller text size */
      font-bold      /* Bold font */
      px-3           /* Horizontal padding */
      py-1           /* Vertical padding */
      rounded-full   /* Pill shape */
      shadow-md  
      uppercase  
      italic
      tracking-wider /* Optional: Letter spacing */
    ">
      Coming Soon!
    </div>
</div>
        
        <p className="description">
          {card.description}
        </p>
        
      </div>
    </div>
  );
};

export const MonitoringSection = () => {
  return (
    <div id="monitoring" className="p-4 md:p-8 lg:py-40  bg-black">
      
<div className='max-w-7xl w-full mx-auto flex justify-between mb-15'>
    
    <div className="w-full lg:w-1/2">
        <p className="text-sm text-blue-600 font-bold">
            Innovations
        </p>
        <h1 className='mb-2 text-4xl font-bold tracking-wide text-white'>
            The <span className="bg-linear-to-r from-cyan-500 to-blue-700 
            text-transparent bg-clip-text">Future of Solar Energy</span> with New Technologies.
            
        </h1>
    </div>
    
</div>

    <div className="
      flex 
      flex-wrap 
      justify-center 
      gap-20
      max-w-7xl
      w-full 
      mx-auto 
    ">

      {monitoringCards.map((card) => (
        <PricingCard key={card.id} card={card} />
      ))}
    </div>
    </div>
  );
};