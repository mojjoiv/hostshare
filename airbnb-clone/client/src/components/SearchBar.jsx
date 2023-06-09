import React, { useContext, useState } from 'react';
import { PlaceContext } from '../providers/PlaceProvider';
import axios from 'axios';
import "./styles.css"

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

{/* <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div> */}


      <div className="flex w-3/5 md:w-1/2 bg-gray-300 border border-gray-400 rounded-full overflow-hidden shadow-sm hover:shadow-lg">
        <div className="grow">
          <input
            type="search"
            placeholder="Where you want to go?"
            className="w-full py-2 px-4 border-none focus:outline-none  text-sm md:text-lg"
            onChange={(e) => handleSearch(e)}
            value={searchText}
          />
        </div>
        <div className="flex  bg-blue text-white cursor-pointer">
          <button
            className="flex py-2 px-4 md:p-2 bg-primary rounded-r-full"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="hidden md:block ml-1">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
