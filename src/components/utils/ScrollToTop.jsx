import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Garante que o body não fique travado ao navegar
    document.body.style.overflow = '';

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    } else {
      const scrollToHash = () => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      const timer1 = setTimeout(() => {
        if (!scrollToHash()) {
          setTimeout(scrollToHash, 150);
        }
      }, 60);

      return () => clearTimeout(timer1);
    }
  }, [pathname, hash, key]);

  return null;
};
