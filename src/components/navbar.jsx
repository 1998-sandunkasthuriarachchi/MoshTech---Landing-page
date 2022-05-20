import { useEffect } from "react";
import "../styles/navbar.scss";
import {navlinks} from './data/nav';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        nav.classList.add("bg-dark", "shadow");
      } else {
        nav.classList.remove("bg-dark", "shadow");
      }
    });
  }, []);

  
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            MOSTECH LABS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mx-auto" />
            <ul className="navbar-nav">
              {navlinks.map((item, key) => {
                return (
                  <li className="nav-item" key={key}>
                    <NavLink exact activeClassName={item.active} to={item.link}  className="nav-link text-white" >
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
