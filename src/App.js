import "./App.css";
import { React, useState, useEffect } from "react";
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
import SpinnerComponent from "./components/Spinner/SpinnerComponent";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // const [mobileScreen, setMobileScreen] = useState(false);

  // useEffect(() => {
  //   if (width < 576) {
  //     setMobileScreen(true);
  //   }
  // }, []);

  const changeScreenSize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    // if (width < 576) {
    //   setMobileScreen(true);
    // } else {
    //   setMobileScreen(false);
    // }
    // console.log(mobileScreen);
  };

  useEffect(() => {
    window.addEventListener("resize", changeScreenSize);
    return () => {
      window.removeEventListener("resize", changeScreenSize);
    };
  });

  return (
    <div className="bg-dark full-bg">
      <Container>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Main width={width} />} />
          <Route path="/movie/:id" element={<MovieDetail width={width} />} />
          <Route path="/movies" element={<MovieSection />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/tvshow/:id" element={<TvShowDetail width={width} />} />
          <Route path="/about" element={<About />} />
          <Route path="/loading" element={<SpinnerComponent />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
