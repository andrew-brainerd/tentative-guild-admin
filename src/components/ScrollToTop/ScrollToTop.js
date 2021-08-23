import { React, useEffect } from 'react';
import { node } from 'prop-types';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {children}
    </>
  );
};

ScrollToTop.propTypes = {
  children: node
};

export default ScrollToTop;
