import React, { useEffect } from 'react';
import './Nav.scss';

function Nav() {
  const [show, handleShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <a href='/'>
        <img
          className='nav__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158'
          alt='Netflix Logo'
        />
      </a>

      <a href='/'>
        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
          alt='Netflix Avatar'
        />
      </a>
    </nav>
  );
}

export default Nav;
