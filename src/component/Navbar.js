import LANGUAGE from "../utils/languange";
import { capitalCase } from "text-case";

const Navbar = () => {
    return ( 
        <header className="opacity-0 bg-white fixed top-0 right-0 z-50 lg:opacity-100 w-screen">
            <nav className="flex justify-end items-end pr-[155px] py-[30px] mx-auto">
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