import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles.css"

export function Layout({ children }) {
    return (<>
    <Header />
    <main className="content">{children}</main>
        <Footer />
    </>);
}