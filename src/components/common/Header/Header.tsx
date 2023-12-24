import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { UserHeader } from '../User/UserHeader'

export const Header = () => {
  return (
    <header className=' flex items-center justify-between h-20 px-32'>
      <Logo />
      <Navbar />
      <UserHeader />
    </header>
  )
}

