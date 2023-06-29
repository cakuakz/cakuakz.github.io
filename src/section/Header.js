
const links = [
  { href: '/', label: 'Home' },
  { href: '/service', label: 'Services' },
  { href: '/profile', label: 'Profile' },
  { href: '/contact', label: 'Contact' },
];

const navbar = () => {
  return ( 
    <header className="bg-white">
      <nav className="flex justify-end items-end pr-[155px] py-[30px] mx-auto">
        <ul className="flex items-center">
          <li>
            <a href={ links } className="links">About</a>
          </li>
          <li>
            <a href={ links } className="links">Projects</a>
          </li>
          <li>
            <a href={ links } className="links">Skills</a>
          </li>
          <li>
            <a href={ links } className="links">Contact</a>
          </li>
        </ul>     
      </nav>
    </header>  
   );
}
 
export default navbar;