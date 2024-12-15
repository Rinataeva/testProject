import {Link, useLocation} from "react-router";
import {ROUTES} from "../../routes/routes.js";

export const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <h1>Page Not Found: {location.pathname}</h1>
      <p>
        <Link to={ROUTES.home}>Home</Link>
      </p>
    </>
  );
}
