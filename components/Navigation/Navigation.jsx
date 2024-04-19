import { useEffect, useState } from "react";
import { MDBNavbar } from "mdb-react-ui-kit";
import { LazyLoadImage } from "react-lazy-load-image-component";
// eslint-disable-next-line react/prop-types
export default function Navigation() {
    const [overlayDisplay, setOverlayDisplay] = useState("block");
    const [videoFilms, setVideoFilms] = useState(true);

    function openCloseNav(e) {
        e.preventDefault();

        setOverlayDisplay(() => {

            if (overlayDisplay === "block") {

                return "none";

            } else {
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

    useEffect(() => {
        if (overlayDisplay === "none") {
            document.getElementById("myNav").style.display = "block";
            if (document.getElementById("films-menu") !== null && document.getElementById("films-menu") !== undefined)
                document.querySelectorAll("figcaption > h3").forEach(x => x.style.display = "none");
        } else {
            document.getElementById("myNav").style.display = "none";
            if (document.getElementById("films-menu") !== null && document.getElementById("films-menu") !== undefined)
                document.querySelectorAll("figcaption > h3").forEach(x => x.style.display = "block");
        }

    }, [overlayDisplay]);
    // function closeNav() {
    //     setOverlayDisplay("none");
    // }
    return (<>

        <MDBNavbar id="top-navbar" className={"border-0 position-fixed"}>
            {window.location.pathname.trim() !== "/" && window.location.pathname.trim() !== "" &&
                <a
                    id={"toggler"}
                    onClick={openCloseNav}
                    className={"bg-transparent border-0 shadow-0 z-2 w-75"}
                >
                    {window.screen.width < 700 &&
                        <LazyLoadImage         effect="blur"

                            src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png"
                            width={150}
                            className={"shadow-0 border-0 bg-transparent  img-fluid p-3 ms-2"}
                            alt={"dinosaur toggle"}
                        />
                        ||
                        <LazyLoadImage         effect="blur"

                            src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png"
                            width={200}
                            className={"shadow-0 border-0 bg-transparent  img-fluid p-3 ms-2"}
                            alt={"dinosaur toggle"}
                        />
                    }


                </a>
            }
        </MDBNavbar>
        <div id="myNav" className="overlay-x lh-sm text-left m-0 " style={{ display: `${overlayDisplay}!important` }}>

            {window.screen.width < 700 ?
                <div className="overlay-x-content d-flex flex-column justify-content-center">
                    <a className="shadow-1 flex-fill fs-1" href="/home"><h1 className="display-1">Home</h1></a>
                    <a className="flex-fill display-1" href="/films"><h1 className="display-1">Films</h1></a>
                    <a className="flex-fill fs-1" href="/about"><h1 className="display-1">About</h1></a>
                </div>
                :
                <div className="overlay-x-content d-flex flex-column justify-content-center position-absolute">
                    <a className="shadow-1 flex-fill fs-2" href="/home"><h1 className="">Home</h1></a>
                    <a className="flex-fill fs-2" href="/films"><h1 className="">Films</h1></a>
                    <a className="flex-fill fs-" href="/about"><h1 className="">About</h1></a>
                </div>
}
        </div>
    </>
    );
}
