import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { Logo } from "../../icons/LogoComponents";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/skills", label: "Skills" },
    { path: "/career", label: "Career" },
    { path: "/contacts", label: "Contacts" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">

          <Link to="/" className="header__logo-link" onClick={closeMenu}>
            <Logo style={{ fill: "white", width: "100%", height: "100%" }} />
          </Link>

          {/* 🔥 Burger Button */}
          <button
            className={`header__burger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* 🔥 Navigation */}
          <nav className={`header__nav ${isOpen ? "open" : ""}`}>
            <ul className="header__nav-list">
              {navItems.map(({ path, label }) => (
                <li key={path} className="header__nav-item">
                  <NavLink
                    to={path}
                    end={path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "header__nav-link header__nav-link--active"
                        : "header__nav-link"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}