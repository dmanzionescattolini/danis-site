import { useState } from "react";
import { MDBBtn, MDBNavbar } from "mdb-react-ui-kit";

// eslint-disable-next-line react/prop-types
export default function NavigationDani() {
  const [overlayDisplay, setOverlayDisplay] = useState("none");
  function openCloseNav() {
    setOverlayDisplay(() => {
      if (overlayDisplay === "block") {
        return "none";
      } else {
        return "block";
      }
    });
  }

  // function closeNav() {
  //     setOverlayDisplay("none");
  // }
  return (
    <header
      className=" w-100
    "
    id="top-navbar z-10"
    >
      <MDBNavbar  className={"bg-transparent"}>
        <a
          id={"toggler"}
          href="#"
          onClick={() => openCloseNav()}
          className={"bg-transparent border-0 shadow-0 "}
        >
          <img
            style={{ display: !overlayDisplay }}
            src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png"
            width={200}
            className={" img-fluid well p-3 ms-2"}
            alt={"dinosaur toggle"}
          />
        </a>
      </MDBNavbar>
      <div id="myNav" className="overlay-x" style={{ display: overlayDisplay }}>
        {/* <a
                    href=""
                    className="closebtn"
                    onClick={() => closeNav()}
                    style={{ display: overlayDisplay }}
                >
                    &times;
                </a> */}

        <div className="overlay-x-content">
          <a href="/home">Home</a>
          <a href="/films">Films</a>
          <a href="/about">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  );
}
