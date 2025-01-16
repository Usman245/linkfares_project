'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const Filters = () => {
  const [seletedSuppliers, setSelectedSuppliers] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    seats: false,
    transmission: false,
    pickup: false,
    policies: false,
    lowEmissions: false,
    features: false,
    suppliers: false,
  });
  // Filter data
  const filtersData = {
    seats: ["1-3", "4-5", "6+"],
    transmission: ["Automatic", "Manual"],
    pickup: [
      "Non-airport",
      "London City (LCY)",
      "London Gatwick (LGW)",
      "London Heathrow (LHR)",
      "London Luton (LTN)",
      "London Stansted (STN)"
    ],
    policies: [
        { label: "Unlimited mileage", description: "No additional costs if you go over your mileage allowance." },
        { label: "Free cancellation", description: "Cancel for free up to 48 hours before you pick up time." },
        { label: "Fair fuel policy", description: "Pick up and return your car with the same amount of fuel." },
      ],
    lowEmissions: ["Electric", "Hybrid"],
    features: ["Aircon", "Free breakdown assistance"],
    suppliers: [
        { label: "Green Motion", price:17998,logo:'/images/253.png.png' },
        { label: "Sixt", price : 22999,logo:'/images/673.png.png' },
        { label: "Enterprise", price:24000,logo:'/images/672.png.png' },
        { label: "Europcar",price:19999,logo:'/images/663.png.png' },
        { label: "Alamo", price: 15599,logo:'/images/650.png.png' },
        { label: "Green Motion", price:17998,logo:'/images/253.png.png' },
        { label: "Sixt", price : 22999,logo:'/images/673.png.png' },
        { label: "Enterprise", price:24000,logo:'/images/672.png.png' },
        { label: "Europcar",price:19999,logo:'/images/663.png.png' },
      ],
  };

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleSeatSelection = (seat) => {
    setSelectedFilters((prevState) => {
      const updatedFilters = prevState.filter((filter) => filter.type !== 'seats');
      updatedFilters.push({ type: 'seats', value: seat });
      return updatedFilters;
    });
  };

  const handleCheckboxSelection = (filterType, value) => {
    setSelectedFilters((prevState) => {
      const existingFilter = prevState.find((filter) => filter.type === filterType && filter.value === value);
      if (existingFilter) {
        // Remove the filter if it is already selected
        return prevState.filter((filter) => !(filter.type === filterType && filter.value === value));
      } else {
        // Add the filter if it is not selected
        return [...prevState, { type: filterType, value }];
      }
    });
  };

  const isSelected = (filterType, value) => {
    return selectedFilters.some((filter) => filter.type === filterType && filter.value === value);
  };


  const [suppliersData, setSuppliersData] = useState(filtersData.suppliers.slice(0,4))
  const handleSuppliers=() => {
    setSuppliersData(filtersData.suppliers)
  }
  const handleSelectAll = () => {
    const allSupplierLabels = suppliersData.map((supplier) => supplier.label);
    setSelectedSuppliers(allSupplierLabels);
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedSuppliers([]);
  };
  const handleSupplierSelection = (label) => {
    setSelectedSuppliers((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };
  return (
   <div className=' w-full mb-4'>
  <button className='bg-green-600 text-white px-4 py-2 rounded-lg lg:hidden' onClick={()=>{
   if(!isFilterOpen){
    setIsFilterOpen(true)
   }else{
    setIsFilterOpen(false)
   }
  }}>{isFilterOpen ? 'Hide Filter' : 'Show Filter'}</button>
     <div className={`p-4 rounded-lg w-full font-roboto ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
        <button className='text-green-600 font-medium font-poppins mb-4 cursor-default'>Reset all</button>
      {/* Seats Section with Buttons */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('seats')}>
          <h4 className="text-base font-bold flex items-center">
             Seats
          </h4>
          <FiChevronDown />
        </div>
        {openSections.seats && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {filtersData.seats.map((seat) => (
              <button
                key={seat}
                className={`px-4 py-2 border rounded-lg ${isSelected('seats', seat) ? 'bg-green-600 text-white' : 'border-gray-300 text-gray-700'}`}
                onClick={() => handleSeatSelection(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Transmission Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('transmission')}>
          <h4 className="text-base font-bold flex items-center">
            Transmission
          </h4>
          <FiChevronDown />
        </div>
        {openSections.transmission && (
          <div className="mt-2">
            {filtersData.transmission.map((type) => (
              <label key={type} className="block mb-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-4 h-4"
                  checked={isSelected('transmission', type)}
                  onChange={() => handleCheckboxSelection('transmission', type)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Pick-up Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('pickup')}>
          <h4 className="text-base font-bold flex items-center">
             Pick-up
          </h4>
          <FiChevronDown />
        </div>
        {openSections.pickup && (
          <div className="mt-2">
            {filtersData.pickup.map((location) => (
              <label key={location} className="block mb-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-4 h-4"
                  checked={isSelected('pickup', location)}
                  onChange={() => handleCheckboxSelection('pickup', location)}
                />
                {location}
              </label>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Policies Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('policies')}>
          <h4 className="text-base font-bold flex items-center">
             Policies
          </h4>
          <FiChevronDown />
        </div>
        {openSections.policies && (
          <div className="mt-2">
            {filtersData.policies.map((policy) => (
              <label key={policy.label} className="flex items-start justify-start mb-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className=" mt-[7px] mr-2 checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-5 h-4"
                  checked={isSelected('policies', policy.label)}
                  onChange={() => handleCheckboxSelection('policies', policy.label)}
                />
             <div className="flex flex-col">
                <span className='text-base font-normal text-black'>
                    {policy.label}
                </span>
                <span className='text-sm text-[#626971]'>{policy.description}</span>
             </div>
              </label>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Low Emissions Vehicles Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('lowEmissions')}>
          <h4 className="text-base font-bold flex items-center">
            Low Emissions Vehicles
          </h4>
          <FiChevronDown />
        </div>
        {openSections.lowEmissions && (
          <div className="mt-2">
            {filtersData.lowEmissions.map((type) => (
              <label key={type} className="block mb-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                 className="mr-2 checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-4 h-4"
                  
                  checked={isSelected('lowEmissions', type)}
                  onChange={() => handleCheckboxSelection('lowEmissions', type)}
                />
                {type}
              </label>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      {/* Features Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('features')}>
          <h4 className="text-base font-bold flex items-center">
            Features
          </h4>
          <FiChevronDown />
        </div>
        {openSections.features && (
          <div className="mt-2">
            {filtersData.features.map((feature) => (
              <label key={feature} className="block mb-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2 checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-4 h-4"
                  checked={isSelected('features', feature)}
                  onChange={() => handleCheckboxSelection('features', feature)}
                />
                {feature}
              </label>
            ))}
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('suppliers')}>
          <h4 className="text-base font-bold flex items-center">
            Suppliers
          </h4>
          <FiChevronDown />
        </div>
        {openSections.suppliers && (
          <div className="mt-2">
            <div className="flex gap-3 my-2">
              <button className='text-green-600 py-2 border-none outline-none text-base font-medium cursor-pointer' disabled={seletedSuppliers.length != 0} onClick={handleSelectAll}>Select all</button>
              <div className='bg-gray-400 w-[2px] h-auto'/>
              <button disabled={seletedSuppliers.length === 0} className='text-gray-600 py-2 border-none outline-none text-base font-medium cursor-pointer' onClick={handleClearAll}>Clear all</button>
            </div>
            <h5 className='text-lg font-normal text-[#626971] mb-2'>Popular Suplliers</h5>
            {suppliersData.map((suppliers) => (
              <label key={suppliers.label} className="flex justify-between items-center mb-2 text-sm text-gray-700">
               <div className="flex ">
               <input
                  type="checkbox"
                  className="mr-2 mt-[7px] checked:bg-green-600 checked:outline-none checked:text-white checked:border-none border-2 border-[#626970] rounded appearance-none w-4 h-4"
                  checked={isSelected('suppliers', suppliers.label)}
                  onChange={() => handleSupplierSelection('suppliers', suppliers.label)}
                />
             <div className="flex flex-col">
                <span className='text-base font-normal text-black'>
                    {suppliers.label}
                </span>
                <span className='text-sm text-[#626971]'>from {suppliers.price}</span>
             </div>
             </div>
             <Image src={suppliers.logo} width={44} height={22}/>
              
              </label>
            ))}
            <button className='mt-2 cursor-pointer text-base font-normal text-green-700' onClick={handleSuppliers}>Show all suppliers</button>
          </div>
        )}
        <hr className="my-2 border-gray-300" />
      </div>
    </div>
   </div>
  );
};

export default Filters;