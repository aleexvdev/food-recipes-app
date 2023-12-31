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

  return (
    <div className={`w-full ${headerClass} 2xl:px-72 lg:px-40 md:px-16 px-4`}>
      <Header />
    </div>
  )
}
