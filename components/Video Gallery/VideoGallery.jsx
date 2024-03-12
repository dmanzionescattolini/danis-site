// eslint-disable-setVideonext-line no-unused-vars


import { MDBListGroup, MDBListGroupItem, MDBNavbar } from "mdb-react-ui-kit";
import { useCallback, useEffect, useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function VideoGallery() {
    const [rackets, setRackets] = useState(true);
    const [wrench, setWrench] = useState(false);
    const [pandemonic, setPandemonic] = useState(false);
    const [three, setThree] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [ele, setEle] = useState(0);
    const allClips = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips+Slower.mp4";
    const pandemonicClip = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4";
    const racketsClip = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4";
    const wrenchClip = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4";
    const threeClip = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4";
    const [video, setVideo] = useState(allClips);
    function makeActive(film) {
        switch (film) {
            case "rackets":
                setVideo(racketsClip);
                break;
            case "three":
                setVideo(threeClip);
                break;
            case "pandemonic":
                setVideo(pandemonicClip);
                break;
            case "wrench":
                setVideo(wrenchClip);
                break;
        }


    }
    const [listHeight, setListHeight] = useState('initial');
    const [listGroup, setListGroup] = useState(false);
    const [listgroupitem, setListgroupitem] = useState("");
    addEventListener("resize", function () {
        if (window.innerWidth < 600) {
            setListGroup(true);
        } else {
            setListGroup(false);
        }
    })

    return <section id="video-gallery" className="w-100 h-100 m-0 p-0">
        {/* <video controls autoPlay  autoFocus id="video-container" className="w-100 p-0 m-0" height="100vh">
            <source src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4" type="video/mp4"></source>
        </video> */}


        <video loop controls={false} autoPlay muted 
            className="floating-effect overflow-visible position-fixed vw-100 vh-100 m-0 p-0 opacity-50 z-5">
            <source type="video/mp4" src={video}></source>
        </video>
        <MDBNavbar id={"films-menu"} fluid className={`position-fixed bottom-0 ${listGroup}`} dir='vertical'>
            {listGroup  &&
                <MDBListGroup className="text-justify " light={false} onMouseEnter={(e)=>e.target.style.background="none"}>
                    <MDBListGroupItem>
                        <a href="three-bullets-for-bombay" onHover={makeActive("three")}>Three Bullets for Bombay</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <a href="a-pandemonic-serenade">A Pandemonic Serenade</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <a href="the-wrench">The Wrench</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                        <a href="rackets-all-the-way-down">Rackets All the Way Down</a>
                    </MDBListGroupItem>
                </MDBListGroup>

                ||

                <ul id=" bg-transparent" className="list-unstyled list-group" height={listHeight}>

                    <a className={`${listgroupitem}`} active={rackets} href="rackets-all-the-way-down" onHover={() => makeActive("rackets")}>
                        Rackets All the Way Down
                    </a>
                    <a className={`${listgroupitem}`} active={wrench} onHover={() => makeActive("wrench")} href="the-wrench">
                        The Wrench
                    </a>
                    <a className={`${listgroupitem}`} active={pandemonic} onHover={() => makeActive("pandemonic")} href="a-pandemonic-serenade"> A Pandemonic Serenade

                    </a>
                    <a className={`${listgroupitem}`} href="three-bullets-for-bombay" onHover={() => makeActive("three")}>
                        Three Bullets to Bombay Beach
                    </a>

                </ul>
            }
        </MDBNavbar>

    </section>;




}






