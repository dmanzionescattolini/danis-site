import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import VideoGallery from "../components/Video Gallery/VideoGallery";
import APandemonicSerenade from "../components/Video Gallery/Pandemonic Serenade/APandemonicSerenade.jsx";
import { RacketsAllTheWayDown } from "../components/Video Gallery/Rackets All the Way Down/RacketsAllTheWayDown.jsx";
import { ThreeBulletsForBombay } from "../components/Video Gallery/Three Bullets for Bombay/ThreeBulletsForBombay.jsx";
import { TheWrench } from "../components/Video Gallery/The Wrench/TheWrench.jsx";
import { useEffect, useState } from "react";
import NavigationDani from "../components/NavigationDani.jsx";

export default function App() {
  const [goingUp, setGoingUp] = useState(true);
  const [x, setX] = useState(0);
  useEffect(() => {
    let y = Number.parseInt(x);
    let up = goingUp;
    window.setInterval(function () {
      if (up) {
        y += 0.1;
        document.body.style.backgroundPositionX = `${y}%`;
        if (y > 100) {
          setGoingUp(false);
          setX(y);
          up = false;
        }
      } else {
        y -= 0.1;
        document.body.style.backgroundPositionX = `${y}%`;
        if (y < 0) {
          up = true;
          setGoingUp(true);
          setX(y);
        }
      }
    }, 100);
  }, []);
  return (
    <>
      <NavigationDani />
      <BrowserRouter className={"w-100 h-100 p-0 m-0 "}>
        <Routes>
          <Route element={<LandingPage />} path="" />
          <Route element={<Home />} path="/home" />
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
