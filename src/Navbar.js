import { Button } from "@nextui-org/react";
import LANGUAGE from "./utils/languange";
import { capitalCase } from "text-case";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useSidebar from "./utils/hooks/useSidebar";

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  }

const navbarVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  }

const Navbar = () => {
    const { isSidebarVisible, setIsSidebarVisible, handleSidebar } = useSidebar()

    return (
        <header className="App bg-white fixed top-0 right-0 z-50 lg:opacity-100 w-screen">
            <Button
                isIconOnly
                className="lg:hidden z-10 fixed top-4 right-4"
                onPress={handleSidebar}
            >
                <GiHamburgerMenu />
            </Button>
            <motion.div
                initial="closed"
                animate={isSidebarVisible ? "open" : "closed"}
                variants={navbarVariants}
                className="lg:hidden fixed top-0 left-0 w-full bg-white"
            >
                <motion.ul
                    className="flex flex-col items-center space-y-4 pt-6 pb-2"
                >
                    <motion.li 
                        variants={itemVariants}
                    >
                        <NavLink to="/" onClick={() => setIsSidebarVisible(false)} className="active:text-gray-600 focus:text-gray-400">{capitalCase(LANGUAGE.NAVBAR.HOME)}</NavLink>
                    </motion.li>
                    <motion.li 
                        variants={itemVariants}
                    >
                        <NavLink to="/" onClick={() => setIsSidebarVisible(false)} className="active:text-gray-600 focus:text-gray-400">{capitalCase(LANGUAGE.NAVBAR.ABOUT)}</NavLink>
                    </motion.li>
                    <motion.li 
                        variants={itemVariants}
                    >
                        <NavLink to="portfolio/all" onClick={() => setIsSidebarVisible(false)} className="active:text-gray-600 focus:text-gray-400">{capitalCase(LANGUAGE.NAVBAR.PORTFOLIO)}</NavLink>
                    </motion.li>
                    <motion.li 
                        variants={itemVariants}
                    >
                        <NavLink to="/" onClick={() => setIsSidebarVisible(false)} className="active:text-gray-600 focus:text-gray-400">{capitalCase(LANGUAGE.NAVBAR.CONTACT_ME)}</NavLink>
                    </motion.li>
                </motion.ul>
            </motion.div>
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