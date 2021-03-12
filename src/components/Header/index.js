import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Header = () => {
  const [type, setType] = useState('white'); // white | black
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavOpen = useCallback(() => {
    setNavOpen(!navOpen);
  }, [navOpen]);

  // Set header type depends on scroll y
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY < 5) {
        setType('white');
      } else {
        setType('black');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cx('header', type)}>
      <FontAwesomeIcon
        icon={faBars}
        className={cx('open-nav-btn')}
        onClick={toggleNavOpen}
      />
      <Link to="/">HANCO</Link>
      <ul className={cx({ closed: !navOpen })}>
        <li>
          <NavLink to="/aboutme" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/works" activeClassName="active">
            Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactme" activeClassName="active">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
