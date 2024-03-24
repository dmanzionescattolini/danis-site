// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import "animate.css";

import { MDBNavbar, MDBListGroup, MDBListGroupItem, MDBNavbarNav, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBContainer } from 'mdb-react-ui-kit';

export default function VideoGallery() {
    const [pandemonic, setPandemonic] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [rackets, setRackets] = useState(false);
    const [three, setThree] = useState(false);
    const threeStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png";
    const pandemonicStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/Screen+Shot+2024-02-11+at+6.19.13+PM.png";
    const racketsStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png";
    const wrenchStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png";

    const [imageSrc, setImageSrc] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png");
    const styleNavigationBar = {
        position: 'fixed!important',
        bottom: '0!important',
        width: 'fit-content',
        fontSize: '2.3em !important' /* Large letters */
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
        opacity: '0.5',
        objectFit: 'cover',
        backgroundColor: 'black',
        overflow: 'hidden',
        transition: 'opacity 3s ease backwards',


    }
    const pandemonicVideoSrc = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4";
    const wrenchVideoSrc = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4";
    const racketsVideoSrc = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4";
    const threeVideoSrc = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4";
    const allClips = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4";
    const videos = [pandemonicVideoSrc, wrenchVideoSrc, racketsVideoSrc, threeVideoSrc, allClips];
    const [activeVideo, setActiveVideo] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
    const images = [threeStill, pandemonicStill, racketsStill, wrenchStill];

    useEffect(() => {


        if (pandemonic) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4");
            setImageSrc(pandemonicStill);
        } else if (wrench) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4");
            setImageSrc(wrenchStill);
        } else if (rackets) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4");
            setImageSrc(racketsStill);
        } else if (three) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4");
            setImageSrc(threeStill);
        } else {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
            setImageSrc(racketsStill);
        }
    }, [pandemonic, three, wrench, rackets]);
    if (window.screen.width > 768) return (
        <>
        <div className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
            <div className="mask bg-light-subtle opacity-25 w-100 h-auto" ></div>
            {rackets && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" alt="All Clips" />}
            {wrench && <video autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower"
                style={videoBackgroundStyle}
                alt="All Clips" />}
            {pandemonic && <video autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" style={videoBackgroundStyle} alt="All Clips" />}

            {three && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed animate__animated animate__fadeIn animate__slower" alt="All Clips" />}
            {activeVideo === "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4" && <video style={{ ...videoBackgroundStyle, filter: "blur(1.5em)" }} autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed" alt="All Clips" />}

         


        </div >
           <nav id="films-menu" style={styleNavigationBar} className={`position-fixed bottom-10  d-flex flex-column justify-content-end align-items-start lh-1 bg-transparent border-0 shadow-0 well`} >
                <a className=" bg-transparent" href="/films/a-pandemonic-serenade" onMouseEnter={() => setPandemonic(true)} onMouseLeave={() => setPandemonic(false)}
                >A Pandemonic Serenade
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setRackets(true)} onMouseLeave={() => setRackets(false)}
                >Rackets All the Way Down
                </a><a className=" bg-transparent" href="/films/the-wretch" onMouseEnter={() => setThree(true)} onMouseLeave={() => setThree(false)}
                >Three Bullets to Bombay Beach
                </a>
            </nav></>);
    else return (
        //     else return <section>
        // <nav className="films-menu">
        //         <MDBPagination className='mb-0'>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
        //             </MDBPaginationItem>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href={`#three`}>1</MDBPaginationLink>
        //             </MDBPaginationItem>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href='#pandemonic'>2</MDBPaginationLink>
        //             </MDBPaginationItem>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href='#rackets'>3</MDBPaginationLink>
        //             </MDBPaginationItem>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href='#wrench'>4</MDBPaginationLink>
        //             </MDBPaginationItem>
        //             <MDBPaginationItem>
        //                 <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        //             </MDBPaginationItem>
        //         </MDBPagination>

        //     </nav>
        //         <div id="pandemonic">
        //             <video style={videoBackgroundStyle} src={pandemonicVideoSrc} autoPlay playsInline loop muted className="min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed" > 
        //             <a href="/films/a-pandemonic-serenade" className="">A Pandemonic Serenade</a>
        //             <img src={pandemonicStill} alt="A Pandemonic Serenade" />
        //             </video> 

        //         </div>
        //         <div id="wrench">
        //             <video src={wrenchVideoSrc} autoPlay playsInline loop muted className="min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed">
        //             <a href="/films/the-wrench" className="">The Wrench</a>
        //                 <img src={wrenchStill} alt="The Wrench" />
        //             </video>
        //         </div>
        //         <div id="rackets">
        //             <video src={racketsVideoSrc} autoPlay playsInline loop muted className="min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed">
        //             <a href="/films/rackets-all-the-way-down">Rackets All the Way Down</a>
        //                 <img src={racketsStill} alt="Rackets All the Way Down" />
        //             </video>
        //         </div>
        //         <div id="three">
        //             <video src={threeVideoSrc} autoPlay playsInline loop muted className="min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed">
        //             <a href="/films/three-bullets-to-bombay-beach">Three Bullets to Bombay Beach</a>
        //                 <img src={threeStill} alt="Three Bullets to Bombay Beach" />
        //             </video>

        //         </div>

        //     </section>
        <div className="d-flex flex-column justify-content-evenly h-100 overflow-visible ">
            <video className="h-100 w-auto " playsInline autoPlay loop  src={pandemonicVideoSrc}>
             
                <img src={pandemonicStill} /></video>
            <a href="/films/a-pandemonic-serenade" className="text-nowrap text-center">A Pandemonic Serenade</a>
            <video className="  " playsInline autoPlay loop src={wrenchVideoSrc}>
                <img src={wrenchStill} /></video>
            <a href="/films/the-wrench" className=" text-nowrap text-center">The Wrench</a>

            <video className="h-100 w-auto  " playsInline autoPlay loop src={racketsVideoSrc}>
                <img src={racketsStill} /></video>
            <a href="/films/rackets-all-the-way-down" className="text-nowrap text-center">Rackets All the Way Down</a>

            <video className="h-100 w-auto  " playsInline autoPlay loop src={threeVideoSrc}>
                <img src={threeStill} /></video>
            <a href="/films/three-bullets-to-bombay-beach" className="text-nowrap text-center">Three Bullets to Bombay Beach</a>

        </div>);

}



