import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='w-[80%] bg-slate-600'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/recipe">Recipe</Link>
    </nav>
  )
}
