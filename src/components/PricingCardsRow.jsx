import React from 'react';
import homes_img from "../assets/img/project/homes_img.webp";


// --- 1. Data Array ---
const pricingCards = [
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

// --- 2. Supporting SVG Icon ---
const LightningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    aria-label="Most Popular Icon"
  >
    <path
      fill="currentColor"
      d="M10.277 16.515c.005-.11.187-.154.24-.058c.254.45.686 1.111 1.177 1.412c.49.3 1.275.386 1.791.408c.11.005.154.186.058.24c-.45.254-1.111.686-1.412 1.176s-.386 1.276-.408 1.792c-.005.11-.187.153-.24.057c-.254-.45-.686-1.11-1.176-1.411s-1.276-.386-1.792-.408c-.11-.005-.153-.187-.057-.24c.45-.254 1.11-.686 1.411-1.177c.301-.49.386-1.276.408-1.791m8.215-1c-.008-.11-.2-.156-.257-.062c-.172.283-.421.623-.697.793s-.693.236-1.023.262c-.11.008-.155.2-.062.257c.283.172.624.42.793.697s-.237.693.262 1.023c.009.11.2.155.258.061c.172-.282.42-.623.697-.792s.692-.237 1.022-.262c.11-.009.156-.2.062-.258c-.283-.172-.624-.42-.793-.697s-.236-.692-.262-1.022M14.704 4.002l-.242-.306c-.937-1.183-1.405-1.775-1.95-1.688c-.545.088-.806.796-1.327 2.213l-.134.366c-.149.403-.223.604-.364.752c-.143.148-.336.225-.724.38l-.353.141l-.248.1c-1.2.48-1.804.753-1.881 1.283c-.082.565.49 1.049 1.634 2.016l.296.25c.325.275.488.413.58.6c.094.187.107.403.134.835l.024.393c.093 1.52.14 2.28.634 2.542s1.108-.147 2.336-.966l.318-.212c.35-.233.524-.35.723-.381c.2-.032.402.024.806.136l.368.102c1.422.394 2.133.591 2.52.188c.388-.403.196-1.14-.19-2.613l-.099-.381c-.11-.419-.164-.628-.134-.835s.142-.389.365-.752l.203-.33c.786-1.276 1.179-1.914.924-2.426c-.254-.51-.987-.557-2.454-.648l-.379-.024c-.417-.026-.625-.039-.806-.135c-.18-.096-.314-.264-.58-.6m-5.869 9.324C6.698 14.37 4.919 16.024 4.248 18c-.752-4.707.292-7.747 1.965-9.637c.144.295.332.539.5.73c.35.396.852.82 1.362 1.251l.367.31l.17.145c.005.064.01.14.015.237l.03.485c.04.655.08 1.294.178 1.805"
    ></path>
  </svg>
);

// --- 3. Reusable Card Component ---
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


      {/* Card Content (Main Section) */}
      <div className="
        w-full h-full 
        bg-black
        rounded-[28px] 
        
        flex flex-col 
        gap-4
      ">
        {/* Title */}
        <p className="font-semibold">
          {card.title}
        </p>
        
        {/* IMAGE CONTAINER */}
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

    {/* The "Coming Soon!" pill */}
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
        
        {/* Description */}
        <p className="description">
          {card.description}
        </p>
        
        {/* Button */}
{/*         <button 
          onClick={handleSignup}
          className={`
            ${buttonClasses} 
            py-2 
            border-none 
            w-full 
            rounded-lg 
            text-white 
            text-xs 
            cursor-pointer 
            hover:shadow-lg 
            hover:scale-[1.03] 
            active:scale-100
            font-bold
          `}
        >
          Sign Up
        </button> */}
      </div>
    </div>
  );
};

// --- 4. Main Row Component (Default Export) ---
export const PricingCardsRow = () => {
  return (
    <div className="p-4 md:p-8 lg:py-40  bg-black">
      
<div className='max-w-7xl w-full mx-auto flex justify-between mb-15'>
    
    {/* 1. LEFT COLUMN: Text Group (Equipments + H1) */}
    <div className="w-full lg:w-1/2">
        <p className="text-sm text-blue-600 font-bold">
            Innovations
        </p>
        <h1 className='mb-2 text-4xl font-bold tracking-wide text-white'>
            The <span className="bg-linear-to-r from-cyan-500 to-blue-700 
            text-transparent bg-clip-text">Future of Solar Energy</span> with New Technologies.
            
        </h1>
    </div>
    
    {/* <div className="w-full lg:w-1/2 text-white flex items-center justify-end">
        <p className="text-2xl font-bold italic text-blue-400 tracking-wide underline underline-offset-8">
            Coming Soon!
        </p>
    </div> */}
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

      {pricingCards.map((card) => (
        <PricingCard key={card.id} card={card} />
      ))}
    </div>
    </div>
  );
};