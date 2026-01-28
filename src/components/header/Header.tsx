import { Link, NavLink } from "react-router-dom";
import "./Header.scss"
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <Link to="/" className="header__logo-link">
            </Link>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" className="header__nav-link">
                  Главная
                </NavLink>
              </li>


              <li className="header__nav-item">
                <NavLink to="/about" className="header__nav-link">
                  Обо мне
                </NavLink>
              </li>

              <li className="header__nav-item">
                <NavLink to="/skills" className="header__nav-link">
                  Навыки
                </NavLink>
              </li>

              <li className="header__nav-item">
                <NavLink to="/career" className="header__nav-link">
                  Карьера
                </NavLink>
              </li>

              <li className="header__nav-item">
                <NavLink to="/contacts" className="header__nav-link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}