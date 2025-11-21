import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from '../assets/icons/react-icons';
import PowerBrick  from '../assets/img/battery/PowerBrick.webp';
import AllBlack  from '../assets/img/solar/AllBlack.webp';
import inverter  from '../assets/img/inverter/inverter.webp';


const products = [
  {
    id: 'powerbrick',
    name: 'All Black',
    power: 'Solar panel',
    description: 'PowerBrick is a low-voltage product designed for household energy storage scenarios, with a stylish and elegant appearance.',
    warranty: '10 yrs',
    backupDuration: 'up to 7 hours',
    image: AllBlack,
    systemFlowImage: 'https://res.cloudinary.com/deywhsg5s/image/upload/q_auto/f_auto/dpr_auto/v1703672070/Screenshot_2023-12-27_at_12.54.19_AM_n07z6k.png'
  },
  {
    id: 'powerbox-pro',
    name: 'Battery-Ready Inverter',
    power: 'Inverter',
    description: 'High-performance energy storage solution for demanding applications. Offers robust power delivery and advanced monitoring.',
    warranty: '8 yrs',
    backupDuration: 'up to 5 hours',
    image: PowerBrick,
    systemFlowImage: 'https://res.cloudinary.com/deywhsg5s/image/upload/q_auto/f_auto/dpr_auto/v1703672070/Screenshot_2023-12-27_at_12.54.19_AM_n07z6k.png'
  },
  {
    id: 'dl5.0c',
    name: 'PowerBrick',
    power: 'Battery',
    description: 'Compact and efficient battery solution for smaller energy needs. Ideal for supplementary power or smaller homes.',
    warranty: '5 yrs',
    backupDuration: 'up to 3 hours',
    image: inverter,
    systemFlowImage: 'https://res.cloudinary.com/deywhsg5s/image/upload/q_auto/f_auto/dpr_auto/v1703672070/Screenshot_2023-12-27_at_12.54.19_AM_n07z6k.png'
  }
];


const ProductDropdown = ({ product, isSelected, onSelect }) => {
  const handleSelect = () => {
    onSelect(product.id);
  };

  return (
    <div className={`
      mb-3 last:mb-0 
      border rounded-xl 
      transition-all duration-300 ease-in-out shadow-lg
      ${isSelected ? 'border-blue-500 shadow-lg bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}
    `}>
      <div 
        className="flex items-center p-4 cursor-pointer" 
        onClick={handleSelect}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-12 h-12 rounded-md mr-4 object-contain bg-gray-100 p-1" 
        />
        <div className="grow">
          <p className="text-xs text-gray-600">{product.power}</p>
          <h3 className="text-lg font-semibold text-gray-800 leading-tight">{product.name}</h3>
        </div>
        <div className="transition-all duration-300">
          {isSelected ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      {isSelected && (
        <div 
          id={`product-details-${product.id}`} 
          className="px-4 pb-4 text-gray-700"
        >
          <p className="text-sm mb-4">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="font-semibold text-gray-900">WARRANTY</p>
              <p className="text-blue-700">{product.warranty}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">BACKUP DURATION</p>
              <p className="text-blue-700">{product.backupDuration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ProductSelector = ({ products, selectedProductId, onSelectProduct }) => {
  return (
    <div className="h-full flex flex-col">
      {products.map((product) => (
        <ProductDropdown
          key={product.id}
          product={product}
          isSelected={selectedProductId === product.id}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
};


const SystemFlowDisplay = ({ selectedProduct }) => {
  return (
    <div className="h-full flex flex-col">      
      <div className="grow flex items-center justify-center bg-gray-200 rounded-xl p-4">
        {selectedProduct ? (
          // Display the specific system flow image for the selected product
          <img
            src={selectedProduct.systemFlowImage}
            alt={`${selectedProduct.name} System Flow`}
            className="max-w-full max-h-full object-contain rounded-lg h-60"
            loading="lazy"
          />
        ) : (
          <p className="text-gray-500 text-center p-8">Select a product from the right to view its detailed system flow diagram.</p>
        )}
      </div>
    </div>
  );
};


export const Specifications = () => {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || null);
  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div id="specifications"  className="flex items-start justify-center p-4 sm:p-6 lg:py-20">
    <div className="flex flex-col w-full max-w-7xl">
        
        <div className="flex flex-col lg:flex-row w-full overflow-hidden gap-2">
            <div className="lg:w-3/5 p-6">
                <SystemFlowDisplay selectedProduct={selectedProduct} />
            </div>
            <div className="lg:w-2/5 p-6">
                <p className="text-sm text-blue-600 font-bold">
                    System specs
                </p>
                <h1 className='mb-2 text-4xl font-bold tracking-wide'>
                  Every Equipment is Quality, <span className="bg-linear-to-r from-cyan-500 to-blue-700 
    text-transparent bg-clip-text">Guaranteed.</span>
                </h1>
                <p className='mb-4 leading-5'>We showcase systems built with production-ready equipment, ensuring the flexibility and control needed for a superior installation.</p>
                <ProductSelector
                    products={products}
                    selectedProductId={selectedProductId}
                    onSelectProduct={setSelectedProductId}
                />
            </div>
        </div>

    </div>
</div>
  );
};
