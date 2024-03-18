// eslint-disable-setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'
import 'bootstrap/dist/css/bootstrap.css';
import {MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarLink} from "mdb-react-ui-kit";
import {useState} from "react";

export default function VideoGallery() {
    const threeStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png";
    const pandemonicStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/Screen+Shot+2024-02-11+at+6.19.13+PM.png";
    const racketsStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png";
    const wrenchStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png";
    const [imageSrc, setImageSrc] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png");
    return <section id="video-gallery" className="w-100 h-100 m-0 p-0">

        <img id={"still-video-home"} src={imageSrc} className="img-fluid  position-fixed min-vh-100 min-vw-100  vh-auto vw-auto "
             alt="Three Bullets for Bombay"/>;
        <MDBNavbar fluid className={`position-fixed `} dir='vertical'>
            <MDBListGroup id="films-menu"
                          className="list-group-light text-white border-0 bg-transparent vh-100 justify-content-center">
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink href="/films/rackets-all-the-way-down" onMouseEnter={() =>
                        setImageSrc(racketsStill)}>
                        Rackets All the Way Down
                    </MDBNavbarLink> </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink onMouseEnter={() => setImageSrc(wrenchStill)}
                                   href="/films/the-wrench">
                        The Wrench
                    </MDBNavbarLink>
                </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink
                        onMouseEnter={() => setImageSrc(pandemonicStill)} href="/films/a-pandemonic-serenade"> A Pandemonic
                        Serenade </MDBNavbarLink> </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>

                    <MDBNavbarLink
                        href="/films/three-bullets-for-bombay" onMouseEnter={() => setImageSrc(threeStill)}>
                        Three Bullets to Bombay Beach
                    </MDBNavbarLink>
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBNavbar>
    </section>;
}
