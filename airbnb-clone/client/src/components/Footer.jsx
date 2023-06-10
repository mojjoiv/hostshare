import React from 'react';
import black from "../assets/black.png"
import ToolBar from './ToolBar'

const Footer = () => {
    return ( 
        <>
        
<footer className="bg-[#329a9a] w-full shadow dark:bg-gray-900 m-4 overflow-hidden">
<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">

<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    <img src={black} className="h-8 mr-3" alt="hostshare" />
      <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="hostshare" className="hover:underline">Hostshare™</a>. All Rights Reserved.
    </span>
    </div>
    <ToolBar/>

</footer>


        </>
     );
}
 
export default Footer;