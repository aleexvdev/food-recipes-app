import { useEffect, useState } from 'react';
import { Header } from '../common/Header/Header'

export const Layout = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 0;

      setIsSticky(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isSticky ? 'stickyheader' : '';
  // bg-[#FFFEFC]
  return (
    <div className={`w-full ${headerClass} 2xl:px-52 lg:px-28 md:px-16 px-5`}>
      <Header />
    </div>
  )
}
