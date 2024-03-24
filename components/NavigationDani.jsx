import { useState } from "react";
import { MDBBtn, MDBNavbar } from "mdb-react-ui-kit";

// eslint-disable-next-line react/prop-types
export default function NavigationDani() {
  const [overlayDisplay, setOverlayDisplay] = useState("none");
  const [videoFilms, setVideoFilms] = useState(true);
  function openCloseNav(e) {
    e.preventDefault();
    
    setOverlayDisplay(() => {
      if (overlayDisplay === "block") {
        document.getElementById("myNav").style.display = "none!important";
        return "none";

      } else {
        document.getElementById("myNav").style.display = "block!important";
        return "block";
      }
    });
    // if(overlayDisplay==="block"){
    //   document.getElementById("toggler").style.transform="none";

    // }else {
    //   document.getElementById("toggler").style.transform="rotate(40deg)";
    // }
    setVideoFilms(!videoFilms);
  }

  // function closeNav() {
  //     setOverlayDisplay("none");
  // }
  return (
    <>
      <MDBNavbar id="top-navbar"  className={"border-0 position-fixed"}>
        {window.location.pathname.trim() !== "/" && window.location.pathname.trim() !== "" &&
        <a
          id={"toggler"}
          onClick={(e) => openCloseNav(e)}
          className={"bg-transparent border-0 shadow-0 z-3 w-75"}
        >
          <img
            style={{ display: !overlayDisplay }}
            src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png"
            width={200}
            className={"shadow-0 border-0 bg-transparent  img-fluid well p-3 ms-2"}
            alt={"dinosaur toggle"}
          />
        </a>
}
      </MDBNavbar>
      <div id="myNav" className="overlay-x lh-sm text-left" style={{ display: overlayDisplay }}>
        

        <div className="overlay-x-content">
          <a className="shadow-1 object-fit-fill" href="/home">Home</a>
          <a href="/films">Films</a>
          <a href="/about">About</a>
        </div>
      </div>
    </>
  );
}
