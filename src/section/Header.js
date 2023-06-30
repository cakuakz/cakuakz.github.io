

const navbar = () => {
  return ( 
    <header className="opacity-0 bg-white sticky top-0 z-50 lg:opacity-100">
      <nav className="flex justify-end items-end pr-[155px] py-[30px] mx-auto">
        <ul className="flex items-center">
          <li>
            <a href="#about" className='links'>About</a>
          </li>
          <li>
            <a href="#projects" className='links'>Projects</a>
          </li>
          <li>
            <a href="#skills" className='links'>Skills</a>
          </li>
          <li>
            <a href="#footer" className='links'>Contact</a>
          </li>
        </ul> 
      </nav>
    </header>  
   );
}
 
export default navbar;