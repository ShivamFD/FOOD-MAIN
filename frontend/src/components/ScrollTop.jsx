import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever pathname changes
  }, [pathname]);

  return null;
};

export default ScrollToTop;
