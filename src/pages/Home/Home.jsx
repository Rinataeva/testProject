import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { Table } from "../Table/Table.jsx";

export const Home = () => {
  const navigate = useNavigate();

  const goToCardsHandler = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigate(ROUTES.cards);
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to={ROUTES.cards}>Cards</Link>
      </p>
      <Table cards={[]} />
      <button onClick={goToCardsHandler}>Go to cards</button>
    </>
  );
};
