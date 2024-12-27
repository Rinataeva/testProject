import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ROUTES } from "../../routes/routes.js";
import { Table } from "../../components/Table/Table.jsx";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();

  const goToCardsHandler = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate(ROUTES.cards);
  };

  return (
    <div className="home-page">
      <h2>Be wild in learning</h2>
      <h3>as in conversation</h3>
      <p>
        <Link to={ROUTES.cards} className="home-page__link">Get started</Link>
      </p>
      <Table cards={[]} />
      <button
        className="home-page__go-to-cards-button"
        onClick={goToCardsHandler}
      >
        Go to cards
      </button>
    </div>
  );
};
