import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { Layout } from "./components/Layout/Layout";
import { CounterContext } from "./context/CounterContext";
import { useCounter } from "./hooks/useCounter";
import { WordsProvider } from "./components/WordsProvider/WordsProvider";

function App() {
  const value = useCounter();
  return (
    <BrowserRouter>
      <CounterContext.Provider value={value}>
        <WordsProvider>
          {" "}
          <Layout>
            <AppRoutes />
          </Layout>
        </WordsProvider>
      </CounterContext.Provider>
    </BrowserRouter>
  );
}

export default App;
