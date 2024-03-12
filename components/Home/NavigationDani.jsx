import { useState } from "react";
import {
    MDBBtn,
    MDBNavbar
} from "mdb-react-ui-kit";


// eslint-disable-next-line react/prop-types
export default function NavigationDani() {


    const [overlayDisplay, setOverlayDisplay] = useState("none");
    function openNav() {
        setOverlayDisplay("block");
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        setOverlayDisplay("none");
    }
    return (<header className="position-fixed w-100
    ">
        <MDBNavbar id="top-navbar" className={"bg-transparent"}>
            <MDBBtn id={"toggler"} onClick={() => openNav()} className={"bg-transparent border-0 shadow-0 z-0"}style={{ display: !overlayDisplay }}>
                <img src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" width={200} className={" img-fluid well p-3 ms-2"}
                     alt={"dinosaur toggle"} />
            </MDBBtn>
        </MDBNavbar>
        <div id="myNav" className="overlay-x" style={{ display: overlayDisplay }}>
            <a href="" className="closebtn" onClick={() => closeNav()} style={{ display: overlayDisplay }}>&times;</a>



            <div className="overlay-x-content" >
                <a href="/home">Home</a>
                <a href="/films">Films</a>
                <a href="/about">About</a>
                <a href="#">Contact</a>
            </div>

        </div>
    </header>);

}

