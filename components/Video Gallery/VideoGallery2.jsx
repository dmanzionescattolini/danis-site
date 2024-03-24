// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import "animate.css";
import { MDBNavbar,  MDBListGroup, MDBListGroupItem, MDBNavbarNav } from 'mdb-react-ui-kit';

export default function VideoGallery() {
    const [pandemonic, setPandemonic] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [rackets, setRackets] = useState(false);
    const [three, setThree] = useState(false);

    const styleNavigationBar = {
        position: 'fixed!important',
        bottom: '0!important',
        width: 'fit-content',
        fontSize: '0.2em !important' /* Large letters */
    }

    // const navLinkHoverStyle = {
    //     backgroundColor: '#000', /* This will change the background color of the link on hover */
    // }

    const videoBackgroundStyle = {
        animationDuration: '2s',
        animationName: 'fadeIn',
        animationFillMode: 'both',
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '-1',
        opacity: '0.5',
        objectFit: 'cover',
        backgroundColor: 'black',
        overflow: 'hidden',
        transition: 'opacity 3s ease backwards',


    }
    const [activeVideo, setActiveVideo] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
    useEffect(() => {


        if (pandemonic) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4");
        } else if (wrench) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4");
        } else if (rackets) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4");
        } else if (three) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4");
        } else {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
        }
    }, [pandemonic, three, wrench, rackets]);
    return (<div className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
        <div className="mask bg-light-subtle opacity-25 w-100 h-auto" ></div>
        {rackets && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" alt="All Clips" />}
        {wrench && <video autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower"
            style={videoBackgroundStyle}
            alt="All Clips" />}
        {pandemonic && <video autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" style={videoBackgroundStyle} alt="All Clips" />}

        {three && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" alt="All Clips" />}
        {activeVideo === "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4" && <video style={{ ...videoBackgroundStyle, filter: "blur(1.5em)" } } autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed" alt="All Clips" />}
        {/* {
            activeVideo === "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4" &&
            <img style={{ ...videoBackgroundStyle, filter: "blur(1em)"}} src={"https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png"} alt="All Clips" />
        } */}



    
            <nav id="films-menu" style={styleNavigationBar}   className={`position-fixed bottom-10  d-flex flex-column justify-content-end align-items-start lh-1 bg-transparent border-0 shadow-0 well`} >
            <a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a>
        </nav>
    </div>);
}
