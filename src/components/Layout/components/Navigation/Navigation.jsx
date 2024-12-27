import { Link } from "react-router";
import { navLinks } from "./navLinks";
import "./styles.css";
import { useContext } from "react";
import { CounterContext } from "../../../../context/CounterContext";

export function Navigation() {
  const { counter } = useContext(CounterContext);
  return (
    <nav className="navigation">
      {navLinks.map(({ link, title }, index) => (
        <Link key={index} to={link} className="navigation__link">
          {title}
        </Link>
      ))}
      <div>Progress: {counter} words</div>
    </nav>
  );
}
