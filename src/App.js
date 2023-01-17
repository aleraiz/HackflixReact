import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return (
    <div className="bg-dark">
      <Container>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
