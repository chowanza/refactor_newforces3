import { Navbar } from "flowbite-react";
import { Link } from 'react-router';
import { useEffect } from 'react';
import '../components/Header.css';

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={`header-outer-container`}>
      <Navbar className={`custom-navbar h-fixed fixed w-full z-50`}>
        <Navbar.Brand>
          <img
            src="/logo-newforce.webp"
            alt="Logo"
            className="mr-2 object-contain logo"
            style={{ width: "120px", height: "60px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle id="custom-navbar-toggler" />
        <Navbar.Collapse>
          <li className={`nav-button nav-buttons ${currentPage === 'residentialconstruction' ? 'active' : ''}`}>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'commercialconstruction' ? 'active' : ''}`}>
            <Link to="/commercialconstruction"
            viewTransition>
              <button>Commercial Construction</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'residential' ? 'active' : ''}`}>
            <Link to="/residentialconstruction"
            viewTransition>
              <button>Residential Construction</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'newhomeconstruction' ? 'active' : ''}`}>
            <Link to="/newhomeconstruction">
              <button>New Home Construction</button>
            </Link>
          </li>
          <li className={`nav-button nav-buttons ${currentPage === 'kitchen' ? 'active' : ''}`}>
            <Link to="/kitchen&bath">	
              <button>Kitchen & Bath</button>
            </Link>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
