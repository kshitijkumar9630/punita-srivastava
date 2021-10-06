import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className='main_menu home_menu'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <nav className='navbar navbar-expand-lg navbar-light'>
                <Link className='navbar-brand' to='/'>
                  <img src='img/logo_new.png' alt='logo' />
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon' />
                </button>
                <div
                  className='
                  collapse
                  navbar-collapse
                  main-menu-item
                  justify-content-end
                '
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav align-items-center'>
                    <li className='nav-item active'>
                      <Link className='nav-link' to='/'>
                        Home
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/about'>
                        About
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/success'>
                        Success
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/programs'>
                        Programs
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/bloghomepage'>
                        Blog
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/contact'>
                        Contact
                      </Link>
                      {/* <a className='nav-link' href='contact.html'>
                        Contact
                      </a> */}
                    </li>
                    <li className='d-none d-lg-block'>
                      <a className='btn_1' href='https://rzp.io/l/FYBvqbFG'>
                        learn more
                      </a>
                    </li>
                    {/* <li className='nav-item dropdown'>
                      <a
                        className='nav-link dropdown-toggle'
                        href='blog.html'
                        id='navbarDropdown'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Pages
                      </a>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='navbarDropdown'
                      >
                        <a className='dropdown-item' href='services.html'>
                          services
                        </a>
                        <a className='dropdown-item' href='elements.html'>
                          Elements
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
