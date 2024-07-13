import { Button } from "@nextui-org/react";
import LANGUAGE from "../utils/languange";
import { capitalCase } from "text-case";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return ( 
        <header className="bg-white fixed top-0 right-0 z-50 lg:opacity-100 w-screen">
            <Button
                isIconOnly
                className="lg:hidden fixed top-4 right-4"
            >
                <GiHamburgerMenu />
            </Button>
            <nav className="hidden lg:flex lg:justify-end lg:items-end lg:py-[30px] lg:pr-9 lg:mx-auto xl:pr-[155px]">
                <ul className="flex items-center space-x-4">
                    <li>
                        <a href="#home" className='links'>{capitalCase(LANGUAGE.NAVBAR.HOME)}</a>
                    </li>
                    <li>
                        <a href="#about" className='links'>{capitalCase(LANGUAGE.NAVBAR.ABOUT)}</a>
                    </li>
                    <li>
                        <a href="#portfolio" className='links'>{capitalCase(LANGUAGE.NAVBAR.PORTFOLIO)}</a>
                    </li>
                    <li>
                        <a href="#footer" className='links'>{capitalCase(LANGUAGE.NAVBAR.CONTACT_ME)}</a>
                    </li>
                </ul> 
            </nav>
        </header>  
     );
}
 
export default Navbar;