import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LandingPage() {
  const [animation, setAnimation] = useState("");

    window.setTimeout(function () {
      setAnimation("wiggle 1s alternate");
      setTimeout(()=>{
        setAnimation("");
      },2000);
    }, 10000);
  return (
    <div className="m-0 p-0 d-flex justify-content-center align-items-center vw-100 w-100 h-100 vh-100 bg-image moving-bg" style={{ backgroundImage: "url('https://pagina-mama.s3.amazonaws.com/assets2/daniel/desert.png')" }}>
      <a id="dinosaur-container" href="/home" className="d-flex flex-row justify-content-center align-items-center w-100 ">
        {window.screen.width < 768 &&
          <LazyLoadImage 
 id="dinosaur" className={"img-fluid w-75 "} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
          ||
          <LazyLoadImage  
 id="dinosaur" className={"img-fluid w-50 "} style={{ animation: animation }} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
        }
      </a>

    </div>
  );
}
