import { Routes, Route } from "react-router";
import { Home } from "../pages/Home/Home.jsx";
import { Cards } from "../pages/Cards/Cards.jsx";
import { Card } from "../pages/Card";
import { NotFound } from "../pages/NotFound";
import { ROUTES } from "./routes.js";
// import { Table } from "../components/Table/Table.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={ROUTES.home ? <Home /> : null} />
      <Route path={ROUTES.cards} element={<Cards />} />
      <Route path={ROUTES.card} element={<Card />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
