import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./styles.css"

export function Layout({ children }) {
    return (<>
    <Header />
    <main className="content">{children}</main>
        <Footer />
    </>);
}