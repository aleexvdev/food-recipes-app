import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { UserHeader } from '../User/UserHeader'

export const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <UserHeader />
    </header>
  )
}

