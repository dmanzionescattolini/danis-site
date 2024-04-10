import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LandingPage from "../components/LandingPage/LandingPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import { RacketsAllTheWayDown } from "../components/Video Gallery/Rackets All the Way Down/RacketsAllTheWayDown.jsx";
import { ThreeBulletsForBombay } from "../components/Video Gallery/Three Bullets for Bombay/ThreeBulletsForBombay.jsx";
import { TheWrench } from "../components/Video Gallery/The Wrench/TheWrench.jsx";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation.jsx";
import APandemonicSerenade from "../components/Video Gallery/Pandemonic Serenade/APandemonicSerenade.jsx";
import VideoGallery2 from "../components/Video Gallery/VideoGallery2.jsx";
import VideoGallery from "../components/Video Gallery/VideoGallery.jsx";
import About from "../components/About/About.jsx";
import {MDBContainer} from "mdb-react-ui-kit";
export default function App() {
  const [goingUp, setGoingUp] = useState(true);
  const [x, setX] = useState(0);
  const [speed] = useState((window.screen.width < 768) ? 100 : 20);
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
    }, (speed));
  }, []);
  return (
    <>
      <Navigation />
      <BrowserRouter >
        <Routes>
          <Route element={<LandingPage />} path="" />
          <Route element={<Home />} path="/home" />
          <Route element={<VideoGallery />} path="/films2" />
          <Route element={<VideoGallery2 />} path="/films" />

          <Route
            element={<APandemonicSerenade
            />} path={"/films/a-pandemonic-serenade"}
          />
          <Route
            element={<RacketsAllTheWayDown />}
            path="/films/rackets-all-the-way-down"
          />
          <Route element={<TheWrench />} path="/films/the-wrench" />
          <Route
            element={<ThreeBulletsForBombay />}
            path="/films/three-bullets-to-bombay-beach"
          />
          <Route element={<About />} path={"/about"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
