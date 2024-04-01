// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import "animate.css";

export default function VideoGallery() {
    const [pandemonic, setPandemonic] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [rackets, setRackets] = useState(false);
    const [three, setThree] = useState(false);
    const threeStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png";
    const pandemonicStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/Screen+Shot+2024-02-11+at+6.19.13+PM.png";
    const racketsStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png";
    const wrenchStill = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png";

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
    const images = [pandemonicStill, wrenchStill, racketsStill, threeStill];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const changePicture = () => {
        if (wrench || pandemonic || rackets || three) {
            // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");
            return;
        }
        // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");

        if (currentImageIndex === 3 || currentImageIndex === -1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(Math.floor((Math.random() * 3)+1));
            console.log(Math.floor((Math.random() * 3)+1));


        }

        // document.getElementById(images[currentImageIndex].split("/")[5].trim()).style.color = "gray";
        setTimeout(() => {
            if(wrench || pandemonic || rackets || three) {
                return;
            }
            const element = document.getElementById('filmimage');
            const anchorEl = document.getElementById(images[currentImageIndex].split("/")[5].trim());
            element.classList.remove('fadeIn'); // Remove fadeIn class
            anchorEl.classList.remove('fadeInAnchor');
            element.classList.add('fadeOut');
            anchorEl.classList.add('fadeOutAnchor'); // Add fadeOut class
        }, 5000);

    };
    window.setInterval(changePicture, 9000);

    useEffect(() => {
        changePicture();
        if(wrench || pandemonic || rackets || three) {
            // document.querySelectorAll("#films-menu a").forEach(x => {x.style.color = "white!important"; x.classList.remove("fadeOutAnchor"); x.classList.add("fadeInAnchor");});
            return;
        }

        if (pandemonic) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4");
            // document.getElementById("pandemonicLink").style.color="gray!important";
            // document.getElementById("pademonicLink").classList.add("fadeOutAnchor");
        } else if (wrench) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4");
            // document.getElementById("wrenchLink").style.color="gray!important";
            // document.getElementById("wrenchLink").classList.add("fadeOutAnchor");

        } else if (rackets) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4");
            // document.getElementById("racketsLink").style.color="gray!important";
            // document.getElementById("racketsLink").classList.add("fadeOutAnchor");
        } else if (three) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4");
        //     document.getElementById("threeLink").style.color="gray!important";
        //     document.getElementById("threeLink").classList.add("fadeOutAnchor");
        }
    }, [pandemonic, three, wrench, rackets]);
    if (window.screen.width > 768) return (
        <>
            <div className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
                <div className="mask bg-light-subtle opacity-25 w-100 h-auto" ></div>
                {rackets && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={racketsVideoSrc} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed  fadeIn " alt="All Clips" />}
                {wrench && <video autoPlay playsInline loop muted src={wrenchVideoSrc} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed  fadeIn "
                    style={videoBackgroundStyle}
                    alt="All Clips" />}
                {pandemonic && <video autoPlay playsInline loop muted src={pandemonicVideoSrc} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed  fadeIn " style={videoBackgroundStyle} alt="All Clips" />}

                {three && <video style={videoBackgroundStyle} autoPlay playsInline loop muted src={threeVideoSrc} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed  fadeIn " alt="All Clips" />}
                {!pandemonic && !wrench && !rackets && !three && <>
                    {currentImageIndex === 0 && <img id={"filmimage"} src={pandemonicStill} className="w-100 h-100 min-vh-100 min-vw-100 img-fluid bg-image   fadeIn" />}
                    {currentImageIndex === 1 && <img id={"filmimage"} src={wrenchStill} className="w-100 h-100 min-vh-100 min-vw-100 img-fluid bg-image   fadeIn" />}
                    {currentImageIndex === 2 && <img id={"filmimage"} src={racketsStill} className="min-vw-100 min-vh-100 w-100 h-100 img-fluid bg-image   fadeIn" />}
                    {currentImageIndex === 3 && <img id={"filmimage"} src={threeStill} className="min-vw-100 min-vh-100 w-100 h-100 img-fluid bg-image   fadeIn" />}
                </>}




            <nav id="films-menu" style={styleNavigationBar} className={`position-fixed bottom-10  d-flex flex-column justify-content-end align-items-start lh-1 bg-transparent border-0 shadow-0 well`} >
                {currentImageIndex === 0 && <a className="text-opacity-50 text-light bg-transparent  fadeOutAnchor " id="A+Pandemonic+Serenade" href="/films/a-pandemonic-serenade" onMouseEnter={() => setPandemonic(true)} onMouseLeave={() => setPandemonic(false)}
                >A Pandemonic Serenade
                </a> || <a onMouseEnter={() => setPandemonic(true)} onMouseLeave={() => setPandemonic(false)} className="bg-transparent text-white fadeInAnchor" href="/films/a-pandemonic-serenade">A Pandemonic Serenade</a>}
                {currentImageIndex === 1 && <a className="text-opacity-50 text-light bg-transparent  fadeOutAnchor " id="The+Wrench" href="/films/the-wrench" onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                >The Wrench
                </a> || <a onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)} href="/films/the-wrench" className="text-white fadeInAnchor">The Wrench</a>}

                {currentImageIndex === 2 &&
                    <a className="text-opacity-50 text-light bg-transparent fadeOutAnchor " id="Rackets+All+the+Way+Down" href="/films/rackets-all-the-way-down" onMouseEnter={() => setRackets(true)} onMouseLeave={() => setRackets(false)}>

                        Rackets All the Way Down            </a> || <a onMouseEnter={() => setRackets(true)} onMouseLeave={() => setRackets(false)} href="/films/rackets-all-the-way-down" className="text-white fadeInAnchor">Rackets All the Way Down</a>}
                {currentImageIndex === 3 &&
                    <a className="text-opacity-50 text-light bg-transparent  fadeOutAnchor " id="Three+Bullets+to+Bombay+Beach" href="/films/three-bullets-to-bombay-beach" onMouseEnter={() => setThree(true)} onMouseLeave={() => setThree(false)}>

                        Three Bullets to Bombay Beach            </a> || <a onMouseEnter={()=>setThree(true)} onMouseLeave={()=>setThree(false)} href="/films/three-bullets-to-bombay-beach" className="text-white fadeInAnchor">Three Bullets to Bombay Beach</a>}
                </nav>            </div >
</>);
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
        <section className="all-films" style={{ backgroundColor: "white", maxWidth: "fit-content!important", overflowX: "hidden!important" }}>

            <div className="grid media-tiles" style={{ overflowX: "hidden!important" }}>

                <div className="grid section-header" style={{ overflowX: "hidden!important" }}>
                    <div className="title all">
                        <h2 className="group-name text-center" style={{ color: "white!important" }}>Films</h2>
                    </div>


                </div>

                <div className="media-tile film active has-thumb mt-0" style={{ overflowX: "hidden!important" }}>
                    <a href="/films/the-wrench" title="The Wrench">
                        <figure>






                            <div className="w-responsive">
                                <div className="embed-responsive-container">





                                    <div className="img-fluid">
                                        <video className="img-thumbnail" src={wrenchVideoSrc} style={{ width: "339.333px", marginLeft: "0px", marginTop: "-8px" }} playsInline autoPlay loop muted />

                                    </div>
                                </div>


                                <div className="overlay-vid">


                                    <div className="overlay-data-group credit">
                                        <div className="datum"></div>
                                    </div>

                                    <div className="overlay-data-group release-date">
                                        <h4>Release Date</h4>
                                        <div className="datum">

                                            <time >2018 </time>
                                        </div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Written and Directed by</h4>
                                        <div className="datum">Daniel Grzywacz</div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Starring</h4>
                                        <div className="datum">Lord Actor, Lady Actress</div>
                                    </div>


                                </div>
                            </div>

                            <figcaption>

                                <h3>The Wrench</h3>

                            </figcaption>
                        </figure>

                    </a>
                </div>

                <div className="media-tile film active has-thumb mt-0" style={{ overflowX: "hidden!important" }}>
                    <a href="/films/three-bullets-for-bombay-beach" title="Three Bullets for Bombay Beach">
                        <figure>






                            <div className="w-responsive">
                                <div className="embed-responsive-container">





                                    <div className="img-fluid">
                                        <video className="img-thumbnail" src={threeVideoSrc} style={{ width: "339.333px", marginLeft: "0px", marginTop: "-8px" }} playsInline autoPlay loop muted />

                                    </div>
                                </div>


                                <div className="overlay-vid">


                                    <div className="overlay-data-group credit">
                                        <div className="datum"></div>
                                    </div>

                                    <div className="overlay-data-group release-date">
                                        <h4>Release Date</h4>
                                        <div className="datum">

                                            <time >2018 </time>
                                        </div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Written and Directed by</h4>
                                        <div className="datum">Daniel Grzywacz</div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Starring</h4>
                                        <div className="datum">Lord Actor, Lady Actress</div>
                                    </div>


                                </div>
                            </div>

                            <figcaption>

                                <h3>Three Bullets for Bombay Beach</h3>

                            </figcaption>
                        </figure>

                    </a>
                </div>
                <div className="media-tile film active has-thumb mt-0" style={{ overflowX: "hidden!important" }}>
                    <a href="/films/rackets-all-the-way-down" title="Rackets All the Way Down">
                        <figure>






                            <div className="w-responsive">
                                <div className="embed-responsive-container">





                                    <div className="img-fluid">
                                        <video className="img-thumbnail" src={racketsVideoSrc} style={{ width: "339.333px", marginLeft: "0px", marginTop: "-8px" }} playsInline autoPlay loop muted />

                                    </div>
                                </div>


                                <div className="overlay-vid">


                                    <div className="overlay-data-group credit">
                                        <div className="datum"></div>
                                    </div>

                                    <div className="overlay-data-group release-date">
                                        <h4>Release Date</h4>
                                        <div className="datum">

                                            <time >2018 </time>
                                        </div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Written and Directed by</h4>
                                        <div className="datum">Daniel Grzywacz</div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Starring</h4>
                                        <div className="datum">Lord Actor, Lady Actress</div>
                                    </div>


                                </div>
                            </div>

                            <figcaption>

                                <h3>Rackets All the Way Down</h3>

                            </figcaption>
                        </figure>

                    </a>
                </div>
                <div className="media-tile film active has-thumb mt-0" style={{ overflowX: "hidden!important" }}>
                    <a href="/films/a-pandemonic-serenade" title="A Pandemonic Serenade">
                        <figure>






                            <div className="w-responsive">
                                <div className="embed-responsive-container">





                                    <div className="img-fluid">
                                        <video className="img-thumbnail" src={pandemonicVideoSrc} style={{ width: "339.333px", marginLeft: "0px", marginTop: "-8px" }} playsInline autoPlay loop muted />

                                    </div>
                                </div>


                                <div className="overlay-vid">


                                    <div className="overlay-data-group credit">
                                        <div className="datum"></div>
                                    </div>

                                    <div className="overlay-data-group release-date">
                                        <h4>Release Date</h4>
                                        <div className="datum">

                                            <time >2018 </time>
                                        </div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Written and Directed by</h4>
                                        <div className="datum">Daniel Grzywacz</div>
                                    </div>
                                    <div className="overlay-data-group credit">
                                        <h4>Starring</h4>
                                        <div className="datum">Lord Actor, Lady Actress</div>
                                    </div>


                                </div>
                            </div>

                            <figcaption>

                                <h3>A Pandemonic Serenade</h3>

                            </figcaption>
                        </figure>

                    </a>
                </div>

            </div></section>
    );

}



