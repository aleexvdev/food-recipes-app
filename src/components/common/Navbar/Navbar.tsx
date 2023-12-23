import { Link, useLocation } from 'react-router-dom';
import { navs } from '../../../data/navs';
import { useState } from 'react';

export const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const [isActive, setIsActive] = useState<string>(currentPath);

  const changeLink = (value: string) => {
    setIsActive(value);
  }

  return (
    <nav className='w-[80%] h-full'>
      <ul className='w-full h-full flex items-center justify-center gap-10'>
        {
          navs.map( nav => (
            <Link 
              to={nav.link} 
              key={nav.id} 
              className={`${isActive.toLocaleUpperCase() === nav.link.toLocaleUpperCase() ? 'text-orange-500' : 'text-black' } hover:text-orange-500`}
              onClick={() => changeLink(nav.link)}
            >
              <span className='text-xl font-semibold'>{nav.nav}</span>
            </Link>
          ))
        }
      </ul>
      
    </nav>
  )
}
