import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { Layout } from "./components/Layout/Layout";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
