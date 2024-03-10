import {useState} from "react";
import {NavLink, Offcanvas} from "react-bootstrap";
import {
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBNavbar, MDBNavbarLink
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function NavigationDani() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<header>
        <MDBNavbar id="top-navbar"className={"bg-transparent"}>
        <MDBBtn onClick={handleShow} onHover={handleShow}className={"bg-transparent border-0 shadow-0 z-0"}>
            <img  src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" width={200} className={"img-fluid well p-3 ms-2"}
                  id={"toggler"} alt={"dinosaur toggle"}/>
                {/*<h1 className="bi bi-list text-lg-center text-white"></h1>*/}
        </MDBBtn>
        </MDBNavbar>
            <Offcanvas   show={show} onHide={handleClose}style={{borderRight:`13px solid #555`}}>
                <Offcanvas.Header closeButton  closeVariant={
                    "white"} className={"float-end"}
                 color='white'   bg="black" style={{width:`55vw`}}></Offcanvas.Header>
                <Offcanvas.Body  id={"offcanvas-body"}>

                <MDBListGroup className={" list-group p-2"} id={"navmenu"}>
                    <NavLink className={"list-group-item bg-transparent color:white border-0 fw-medium"} href="/home">Home</NavLink>
                        <NavLink className={"list-group-item bg-transparent color:white border-0 fw-medium"} href="/films">Films</NavLink>
                        <NavLink className="list-group-item bg-transparent color:white border-0 fw-medium" href="/about">About</NavLink>
                </MDBListGroup>
            </Offcanvas.Body>
            </Offcanvas>
        </header>);

}

