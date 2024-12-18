import { Navigation } from "./Navigation/Navigation";
// import logo from "../../../../assets/ewa.svg";
// import { Link } from "react-router";
// import { navLinks } from "./Navigation/navLinks";
import "./styles.css";
export function Header() {
  return (
    <header className="header">
      {/* <Link to={navLinks.cards}><img className="logo" src={logo} alt="logo" /></Link> */}
      <h2>Word Wild App</h2>
      <Navigation />
    </header>
  );
}
