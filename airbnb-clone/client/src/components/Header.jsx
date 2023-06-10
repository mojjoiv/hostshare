import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import SearchBar from './SearchBar';
import Swiper from './Swiper';
import logo from '../assets/logo.png'

export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
    <header className="flex items-center justify-between">
      <SearchBar />
    </header>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Swiper/>
    </>
  );
};
