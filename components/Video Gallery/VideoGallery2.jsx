// eslint-disable-setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'
import 'bootstrap/dist/css/bootstrap.css';
import { MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarLink } from "mdb-react-ui-kit";
import { useState } from "react";

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
    return <div id="video-gallery" className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
        <div className="mask ng-dark-subtle opacity-25 w-100 h-auto embed-responsive-container" ></div>
        
        <video autoPlay playsInline loop muted id={"w-auto h-100"} src={activeVideo} className="min-vw-100 min-vh-100 h-auto w-100 z-0 embed-responsive"
            alt="Three Bullets for Bombay" />;
        <MDBNavbar fluid className={`position-fixed z-1`} dir='vertical'>
            <MDBListGroup id="films-menu"
                className="list-group-light text-white border-0 bg-transparent vh-100 justify-content-end text-indent">
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink href="/films/rackets-all-the-way-down" onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() =>
                        setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png")}>
                        Rackets All the Way Down
                    </MDBNavbarLink> </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4")}
                        href="/films/the-wrench">
                        The Wrench
                    </MDBNavbarLink>
                </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>
                    <MDBNavbarLink
                        onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4")} href="/films/a-pandemonic-serenade"> A Pandemonic
                        Serenade </MDBNavbarLink> </MDBListGroupItem>
                <MDBListGroupItem className={"list-group-item text-white border-0 bg-transparent"}>

                    <MDBNavbarLink
                        href="/films/three-bullets-for-bombay" onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4")}>
                        Three Bullets to Bombay Beach
                    </MDBNavbarLink>
                </MDBListGroupItem>
            </MDBListGroup>
        </MDBNavbar>
    </div>;
}
