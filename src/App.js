import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieSection from "./components/Main/MovieSection/MovieSection";
import TvShows from "./components/Main/TvShows/TvShows";
import About from "./components/Main/About/About";
import TvShowDetail from "./components/Main/TvShowDetail/TvShowDetail";
function App() {
  return (
    <div className="bg-dark">
      <Container>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies" element={<MovieSection />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/tvshow/:id" element={<TvShowDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
