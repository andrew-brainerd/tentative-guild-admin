import React, { useState } from 'react';
import { bool } from 'prop-types';
import withSizes from 'react-sizes';
import { useLocation, Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Header.module.scss';

const Header = ({ isMobile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header>
      <div className={styles.navigation}>
        <div
          className={[
            isMobile ? styles.hamburger : styles.hidden
          ].join(' ')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </div>
        <nav className={isMobile && isMobileMenuOpen ? styles.mobile : ''}>
          {routes.map(route => (
            <Link
              key={route.path}
              to={route.path}
              className={[
                styles.navItem,
                isMobile && isMobileMenuOpen ? styles.mobile : '',
                isMobile && !isMobileMenuOpen ? styles.hidden : '',
                pathname === route.path ? styles.selected : ''
              ].join(' ')}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              {(!isMobile && route.icon) || route.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 675
});

Header.propTypes = {
  isMobile: bool
};

export default withSizes(mapSizesToProps)(Header);
