import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative flex items-center p-4 bg-white">
    <div className="relative flex-1">
      <input
        type="text"
        className="w-full bg-transparent pl-10 py-2 focus:outline-none border-none text-center"
        placeholder="Try Miami"
        
      />
    </div>
    <div className="flex items-center h-6 w-px bg-gray-300 mx-4 "></div>
    <div className="flex-1">
      <input
        type="text"
        className="w-full bg-transparent py-2 focus:outline-none border-none text-center"
        placeholder="Add dates"
      />
    </div>
    <div className="flex items-center h-6 w-px bg-gray-300 mx-4"></div>
    <div className="flex-1">
      <input
        type="text"
        className="w-full bg-transparent py-2 focus:outline-none border-none text-center"
        placeholder="Add guests"
      />
    </div>
    <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full">
      Search
    </button>
  </div>
  );
};


export default SearchBar;
