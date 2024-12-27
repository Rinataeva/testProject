import {Link, useLocation} from "react-router";
import {ROUTES} from "../../routes/routes.js";

import "./styles.css";

export const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found: {location.pathname}</h2>
      <p>
        <Link to={ROUTES.home}>Home</Link>
      </p>
    </div>
  );
}
