import { Link } from "react-router";
import { navLinks } from "./navLinks";
import "./styles.css";

export function Navigation() {
  return (
    <nav className="navigation">
      {navLinks.map(({ link, title }, index) => (
        <Link key={index} to={link} className="navigation__link">
          {title}
        </Link>
      ))}
    </nav>
  );
}
