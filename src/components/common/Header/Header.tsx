import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { UserHeader } from '../User/UserHeader'

export const Header = () => {
  return (
    <header className='bg-gray-500 flex items-center justify-between h-20'>
      <Logo />
      <Navbar />
      <UserHeader />
    </header>
  )
}

