import React, { useContext, useState } from 'react';
import { PlaceContext } from '../providers/PlaceProvider';
import axios from 'axios';
import "./styles.css"
import ToolBar from './ToolBar';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const { setPlaces, setLoading } = useContext(PlaceContext);
  const handleSearch = async (e) => {
    clearTimeout(searchTimeout);
    setLoading(true);
    setSearchText(e.target.value);

    // debounce method
    setTimeout(async () => {
      const { data } = await axios.get(`/places/search/${searchText}`);
      setPlaces(data);
      setLoading(false);
    }, 500);
  };

  // if(load)

  return (
    <>
    <ToolBar/>
    <br/>
      {/* <div className="flex justify-between px-4 py-2 bg-white rounded-full ps-2 w-1/2 border ">
         <div className="relative flex-1">
                <input
                  type="text"
                  className="flex-grow w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-transparent border-none focus:outline-none"
                  placeholder="Try Miami"
                  onChange={(e) => handleSearch(e)}
                  value={searchText}
                />
          </div>

          <div className="flex justify-center h-6 w-px bg-gray-300 mx-4 h-100  mt-4"></div>

              <div className="flex-1">
                <input
                  type="text"
                  className="w-full bg-transparent py-2 focus:outline-none border-none text-center text-black"
                  placeholder="Add dates"
                />
           </div>

                <div className="flex items-center h-6 w-px bg-gray-300 mt-4"></div>

                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full bg-transparent py-2 focus:outline-none border-none text-center"
                    placeholder="Add guests"
                  />
                </div>

                    <button className="bg-[#329a9a] text-white font-bold py-2 px-4 rounded-full" 
                            onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         fill="none" viewBox="0 0 24 24" 
                         stroke-width="1.5" 
                         stroke="currentColor" 
                         class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
                    </button>
    </div> */}
    </>
  );
};

export default SearchBar;
