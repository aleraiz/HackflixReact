import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Container from "react-bootstrap/Container";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <div className="bg-dark">
      <Container>
        <NavbarComponent />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
