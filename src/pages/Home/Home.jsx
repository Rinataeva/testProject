import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { Table } from "../Table/Table.jsx";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();

  const goToCardsHandler = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigate(ROUTES.cards);
  };

  return (
    <div className="home-page">
      <h3></h3>
      <p>
        <Link to={ROUTES.cards}>Cards</Link>
      </p>
      <Table cards={[]} />
      <button className="home-page__go-to-cards-button" onClick={goToCardsHandler}>Go to cards</button>
    </div>
  );
};
