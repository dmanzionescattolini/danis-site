import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [home, setHome] = useState(false);
  const [bubble, setBubble] = useState(false);
  function goHome() {
    setHome(true);
  }
  useEffect(() => {
    if (home) {
      navigate("/home");
    }
  }, [home, navigate]);
  return (
    <header className="container-fluid ">
      <img
        id="banner"
        src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/banner.png"
        alt="banner yellow dinosaur productions"
        className="img-fluid shadow-1-soft"
      />
      <div id="dinosaur">
        {" "}
        <img
          style={{ visibility: bubble ? "visible" : "hidden" }}
          id="rawr"
          src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rawr.png"
          alt="rawr"
          className="img-fluid"
        />{" "}
        <img
          onAnimationEnd={() => setBubble(true)}
          onAnimationStart={() => setBubble(false)}
          onClick={() => goHome()}
          src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/dinosaur.png"
          alt="yellow dinosaur"
          className="img-fluid "
        />
      </div>
    </header>
  );
}
