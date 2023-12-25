import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { Menu } from '../Menu/Menu'

export const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 container'>
      <Logo />
      <Navbar />
      <Menu />
    </header>
  )
}

