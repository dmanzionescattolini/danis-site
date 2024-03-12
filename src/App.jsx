import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import VideoGallery from "../components/Video Gallery/VideoGallery";
import APandemonicSerenade from "../components/Video Gallery/Pandemonic Serenade/APandemonicSerenade.jsx";
import { FilmTemplate } from "../components/Templates/FilmTemplate.jsx";
import { RacketsAllTheWayDown } from "../components/Video Gallery/Rackets All the Way Down/RacketsAllTheWayDown.jsx";
import { ThreeBulletsForBombay } from "../components/Video Gallery/Three Bullets for Bombay/ThreeBulletsForBombay.jsx";
import { TheWrench } from "../components/Video Gallery/The Wrench/TheWrench.jsx";
import { useEffect } from "react";
import NavigationDani from "../components/NavigationDani.jsx";

export default function App() {
  let x = 0;
  let backgroundPos = document.body.style.backgroundPositionX;
  useEffect(() => {
    window.setInterval(function () {
      document.body.style.backgroundPositionX = `${(x += 0.05)}%`;
      if (x === 100) x = 0;
    }, 50);
  }, [document.body]);
  return (
    <>
      <NavigationDani />
      <BrowserRouter className={"w-100 h-100 p-0 m-0 "}>
        <Routes>
          <Route element={<LandingPage />} path="" />
          <Route element={<Home />} path="/"/>
            <Route element={<VideoGallery />} path="/films" />

            <Route
              element={<APandemonicSerenade />}
              path="/a-pandemonic-serenade"
            />
            <Route
              element={<RacketsAllTheWayDown />}
              path="/rackets-all-the-way-down"
            />
            <Route element={<TheWrench />} path="/the-wrench" />
            <Route
              element={<ThreeBulletsForBombay />}
              path="/three-bullets-for-bombay"
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}
