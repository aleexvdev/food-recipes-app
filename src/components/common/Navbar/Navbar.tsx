import { Link } from 'react-router-dom';
import { navs } from '../../../data/navs';

export const Navbar = () => {
  return (
    <nav className='w-[80%] h-full'>
      <ul className='w-full h-full flex items-center justify-center gap-10'>
        {
          navs.map( nav => (
            <Link to={nav.link} key={nav.id}>
              <span className='text-xl font-semibold'>{nav.nav}</span>
            </Link>
          ))
        }
      </ul>
      
    </nav>
  )
}
