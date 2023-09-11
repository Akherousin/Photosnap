import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.prevLocation) {
      const heading = document.querySelector('h1');
      heading.tabIndex = -1;
      heading.focus();
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;
