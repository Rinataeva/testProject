import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { Layout } from "./components/Layout/Layout";
import { CounterContext } from "./context/CounterContext";
import { useCounter } from "./hooks/useCounter";
// import { WordsProvider } from "./components/WordsProvider/WordsProvider";
import { WordsStoreProvider } from "./store/WordsStore/WordsStoreProvider";

function App() {
  const value = useCounter();
  return (
    <BrowserRouter>
      <CounterContext.Provider value={value}>
        <WordsStoreProvider>
          {" "}
          <Layout>
            <AppRoutes />
          </Layout>
        </WordsStoreProvider>
      </CounterContext.Provider>
    </BrowserRouter>
  );
}

export default App;
