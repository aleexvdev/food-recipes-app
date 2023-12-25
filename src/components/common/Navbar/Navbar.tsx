import { NavLink } from 'react-router-dom';
import { navs } from '../../../data/navs';

export const Navbar = () => {

  return (
    <nav className='w-[80%] h-full md:w-full hidden'>
      <ul className='w-full h-full flex items-center justify-center gap-10'>
        {
          navs.map( nav => (
            <NavLink 
              to={nav.link} 
              key={nav.id}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#F97316" : "black",
                };
              }}
            >
              <span className='text-xl font-semibold'>{nav.nav}</span>
            </NavLink>
          ))
        }
      </ul>
      
    </nav>
  )
}
