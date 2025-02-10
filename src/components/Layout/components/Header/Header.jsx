import { Navigation } from "../Navigation";
// import logo from "../../../../assets/ewa.svg";
// import { Link } from "react-router";
// import { navLinks } from "./Navigation/navLinks";
import "./styles.css";
export function Header() {
  return (
    <header className="header">
      {/* <Link to={navLinks.cards}><img className="logo" src={logo} alt="logo" /></Link> */}
      <h3>Word Wild App</h3>
      <Navigation />
    </header>
  );
}
