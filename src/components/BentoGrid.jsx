import React from 'react';
import homes_img from "../assets/img/project/homes_img.webp";


// Sample placeholder image source function (replace with your actual image logic)
const getPlaceholderImage = (id) => {
  return homes_img; // Explicitly return the imported image variable
};

export const BentoGrid = () => {
  // Define the configuration for each grid item based on your CSS
  const gridItems = [
    // Div 1 (Text - span 3 cols, 3 rows)
    { 
    id: 1, 
    text: (
        <>
        <span className="text-8xl font-extrabold uppercase">Paolo</span> 
        <br />
        <span className='text-2xl'>is the <span className='text-3xl font-bold'>82<sup>nd</sup></span> human powering life </span> 
        <br />
        <span className='text-2xl'>with <span className='text-3xl bg-linear-to-r from-cyan-500 to-blue-700 
    text-transparent bg-clip-text font-semibold'>Blueshift.</span></span>
        </>
    ),
    classes: 'col-span-3 row-span-3 flex flex-col justify-start items-start p-6' 
    },
    // Div 2 (Image - span 2 cols, 3 rows, start col 4)
    { id: 2, isImage: true, classes: 'col-span-2 row-span-3 col-start-4' },
    // Div 3 (Image - span 1 col, 2 rows, start col 6)
    { id: 3, isImage: true, classes: 'row-span-2 col-start-6' },
    // Div 4 (Image - span 3 cols, 4 rows, start row 4)
    { id: 4, isImage: true, classes: 'col-span-3 row-span-4 row-start-4' },
    // Div 5 (Image - span 2 cols, 3 rows, start row 8)
    { id: 5, isImage: true, classes: 'col-span-2 row-span-3 row-start-8' },
    // Div 6 (Image - span 2 cols, 3 rows, start col 6, start row 3)
    { id: 6, isImage: true, classes: 'col-span-2 row-span-3 col-start-6 row-start-3' },
    // Div 7 (Image - span 1 col, 2 rows, start col 4, start row 4)
    { id: 7, isImage: true, classes: 'row-span-2 col-start-4 row-start-4' },
    // Div 8 (Image - span 2 cols, 2 rows, start col 4, start row 6)
    { id: 8, isImage: true, classes: 'col-span-2 row-span-2 col-start-4 row-start-6' },
    // Div 9 (Image - span 2 cols, 2 rows, start col 6, start row 6)
    { id: 9, isImage: true, classes: 'col-span-2 row-span-2 col-start-6 row-start-6' },
    // Div 10 (Image - span 2 cols, 3 rows, start col 3, start row 8)
    { id: 10, isImage: true, classes: 'col-span-2 row-span-3 col-start-3 row-start-8' },
    // Div 11 (Image - span 3 cols, 3 rows, start col 5, start row 8)
    { id: 11, isImage: true, classes: 'col-span-3 row-span-3 col-start-5 row-start-8' },
    // Div 12 (Image - span 1 col, 2 rows, start col 7)
    { id: 12, isImage: true, classes: 'row-span-2 col-start-7' },
    // Div 13 (Text - span 1 col, 2 rows, start col 5, start row 4)
    { 
    id: 13, 
    text: 'Join us now!', 
    classes: 'row-span-2 col-start-5 row-start-4' // Keep only layout classes here
    },
  ];

  const handleButtonClick = (id) => {
    // alert(`Button ${id} clicked!`);
    };

  const renderGridItem = (item) => {
    // Common classes for all grid items
    const baseClasses = 'relative overflow-hidden rounded-2xl transition duration-300 ease-in-out ';

    if (item.id === 13) {
        return (
            <button
                key={item.id}
                onClick={() => handleButtonClick(item.id)} // Attach the click handler
                className={`${baseClasses} ${item.classes} 
                   text-white 
                    hover:bg-blue-800 
                    bg-linear-to-r from-cyan-500 to-blue-700 
                    focus:outline-none focus:ring-4 focus:ring-blue-300 
                    w-full h-full 
                    flex items-center justify-center 
                    uppercase font-bold text-lg 
                    p-4
                `}
            >
                {item.text}
            </button>
        );
    }

    if (item.isImage) {
      // Image divs (2-12)
      return (
        <div key={item.id} className={`${baseClasses} ${item.classes}`}>
          <img
            src={getPlaceholderImage(item.id)}
            alt={`Item ${item.id}`}
            className="w-full h-full object-cover transform hover:scale-105"
          />
          {/* Optional: Overlay text to show div number */}
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center text-white text-3xl font-mono opacity-0 hover:opacity-100 transition-opacity">
            {item.id}
          </div>
        </div>
      );
    } else {
      // Text divs (1 and 13)
      return (
        <div key={item.id} className={`${baseClasses} ${item.classes}`}>
          <p>{item.text}</p>
        </div>
      );
    }
  };

  return (
    <div className="p-4 md:p-8 lg:py-30">
      <div className="
      max-w-7xl
        grid 
        grid-cols-7 
        grid-rows-10 
        gap-5
        h-[80vh] 
        max-h-[800px] 
        w-full 
        mx-auto
      ">
        {gridItems.map(renderGridItem)}
      </div>
    </div>
  );
};
