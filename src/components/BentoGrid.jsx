import React from 'react';
import homes_img from "../assets/img/project/homes_img.webp";


const getPlaceholderImage = (id) => {
  return homes_img;
};

export const BentoGrid = () => {
  const gridItems = [
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
    { id: 2, isImage: true, classes: 'col-span-2 row-span-3 col-start-4' },
    { id: 3, isImage: true, classes: 'row-span-2 col-start-6' },
    { id: 4, isImage: true, classes: 'col-span-3 row-span-4 row-start-4' },
    { id: 5, isImage: true, classes: 'col-span-2 row-span-3 row-start-8' },
    { id: 6, isImage: true, classes: 'col-span-2 row-span-3 col-start-6 row-start-3' },
    { id: 7, isImage: true, classes: 'row-span-2 col-start-4 row-start-4' },
    { id: 8, isImage: true, classes: 'col-span-2 row-span-2 col-start-4 row-start-6' },
    { id: 9, isImage: true, classes: 'col-span-2 row-span-2 col-start-6 row-start-6' },
    { id: 10, isImage: true, classes: 'col-span-2 row-span-3 col-start-3 row-start-8' },
    { id: 11, isImage: true, classes: 'col-span-3 row-span-3 col-start-5 row-start-8' },
    { id: 12, isImage: true, classes: 'row-span-2 col-start-7' },
    { 
    id: 13, 
    text: 'Join us now!', 
    classes: 'row-span-2 col-start-5 row-start-4'
    },
  ];

  const handleButtonClick = (id) => {
    // alert(`Button ${id} clicked!`);
    };

  const renderGridItem = (item) => {
    const baseClasses = 'relative overflow-hidden rounded-2xl transition duration-300 ease-in-out ';

    if (item.id === 13) {
        return (
            <button
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
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
      return (
        <div key={item.id} className={`${baseClasses} ${item.classes}`}>
          <img
            src={getPlaceholderImage(item.id)}
            alt={`Item ${item.id}`}
            className="w-full h-full object-cover transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center text-white text-3xl font-mono opacity-0 hover:opacity-100 transition-opacity">
            {item.id}
          </div>
        </div>
      );
    } else {
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
