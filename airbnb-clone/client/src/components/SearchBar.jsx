import React, { useContext, useState } from 'react';
import { GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, SearchIcon } from '@heroicons/react/solid';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { PlaceContext } from '../providers/PlaceProvider';
import { UserContext } from '../providers/UserProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import "./styles.css"

const SearchBar = () => {
  const { user } = useContext(UserContext);
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

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <>

    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-5 md:px-10 w-full h-12">
      <Link to={'/'} className="flex items-center gap-1">
        <img
          className="h-8 w-8 md:h-10 md:w-10"
          src={logo}
          alt=""
        />

        <span className="hidden md:block font-bold text-2xl text-[#329a9a]">
          HostShare
        </span>
      </Link>
      <div className="flex items-center border rounded-full md:space-y-0 space-y-2 md:border md:rounded-full shadow-md w-full md:border-gray-300 w-80 h-10 relative">

        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-center text-gray-900 border-none"
          type="text"
          placeholder="Anywhere"
          onChange={(e) => handleSearch(e)}
          value={searchText}
        />
        <div className="flex items-center h-6 w-px bg-gray-300 "></div>
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-black placeholder-gray-400 border-none"
          type="text"
          placeholder="Any Week"
        />
         <div className="flex items-center h-6 w-px bg-gray-300 "></div>
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 border-none"
          type="text"
          placeholder="Add guests"
        />
        <br/>
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-[#329a9a] text-white rounded-full p-2 cursor-pointer md:mx-2 relative w-24 left-0 top-0"
          onClick={handleSearch}
        />
      </div>
      <div className="flex items-center space-x-4 justify-end text-black">
        <p className="hidden md:inline cursor-pointer">HostShare your home</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
           <Link
        to={user ? '/account' : '/login'}
        className="flex gap-2 items-center"
      >
          <UserCircleIcon className="h-6" />
          {user && <div>{user.name}</div>}
          </Link>
        </div>
      </div>
      {showDatePicker && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[
              {
                startDate,
                endDate,
                key: 'selection',
              },
            ]}
            minDate={new Date()}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={toggleDatePicker}>Cancel</button>
            <button className="flex-grow text-red-400" onClick={handleSearch}>Search</button>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      )}
    </header>
    </>
  );
};

export default SearchBar;
