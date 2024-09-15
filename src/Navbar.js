import { Button } from "@nextui-org/react";
import LANGUAGE from "./utils/languange";
import { capitalCase } from "text-case";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="App bg-white fixed top-0 right-0 z-50 lg:opacity-100 w-screen">
            <Button
                isIconOnly
                className="lg:hidden fixed top-4 right-4"
            >
                <GiHamburgerMenu />
            </Button>
            <nav className="hidden lg:flex lg:justify-end lg:items-end lg:py-[30px] lg:pr-9 lg:mx-auto xl:px-28">
                <ul className="flex items-center space-x-4">
                    <li>
                        <NavLink to="/" className='links active:text-gray-600 focus:text-gray-400'>{capitalCase(LANGUAGE.NAVBAR.HOME)}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='links active:text-gray-600 focus:text-gray-400'>{capitalCase(LANGUAGE.NAVBAR.ABOUT)}</NavLink>
                    </li>
                    <li>
                        <NavLink to="portfolio/all" className='links active:text-gray-600 focus:text-gray-400'>{capitalCase(LANGUAGE.NAVBAR.PORTFOLIO)}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className='links active:text-gray-600 focus:text-gray-400'>{capitalCase(LANGUAGE.NAVBAR.CONTACT_ME)}</NavLink>
                    </li>
                </ul> 
            </nav>
        </header>  
     );
}
 
export default Navbar;