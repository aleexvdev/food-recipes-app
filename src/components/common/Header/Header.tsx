import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { UserHeader } from '../User/UserHeader'

export const Header = () => {
  return (
    <header className='bg-white flex items-center justify-between h-20'>
      <Logo />
      <Navbar />
      <UserHeader />
    </header>
  )
}

