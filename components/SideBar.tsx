import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="flex fixed h-screen bg-black w-2.5/12  md:w-2/12 lg:w-2/12">
            <div className="w-full py-4 px-6 flex flex-col">
                <img src="/logoRickAndMorty.png" alt="logoRickAndMorty"/>
                <GiHamburgerMenu className="text-white text-3xl cursor-pointer sm:hidden" />
                <nav>
                    <ul className="mt-4">
                        <li className="py-2">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                Historia
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                About
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                Services
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-blue-500 hover:text-blue-700">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;