// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
export default function VideoGallery() {
    const [pandemonic, setPandemonic] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [rackets, setRackets] = useState(false);
    const [three, setThree] = useState(false);
    const threeStill =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png";
    const pandemonicStill =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/Screen+Shot+2024-02-11+at+6.19.13+PM.png";
    const racketsStill =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png";
    const wrenchStill =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png";

    const styleNavigationBar = {
        position: "fixed!important",
        bottom: "0!important",
        width: "fit-content",
        fontSize: "2.3em !important" /* Large letters */,
    };

    // const navLinkHoverStyle = {
    //     backgroundColor: '#000', /* This will change the background color of the link on hover */
    // }

    const videoBackgroundStyle = {
        animationDuration: "2s",
        animationName: "fadeIn",
        animationFillMode: "both",
        height: "100%",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        opacity: "0.5",
        objectFit: "cover",
        backgroundColor: "black",
        overflow: "hidden",
        // transition: 'opacity 3s ease backwards',    }
    };
    const pandemonicVideoSrc =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4";
    const wrenchVideoSrc =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4";
    const racketsVideoSrc =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4";
    const threeVideoSrc =
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4";
    const [, setActiveVideo] = useState(
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4"
    );
    const videos = [threeVideoSrc, pandemonicVideoSrc, racketsVideoSrc, wrenchVideoSrc];
    const [currentImageIndex, setCurrentImageIndex] = useState(3);
    function changePicture() {
        if (wrench || pandemonic || rackets || three) {
            // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");

            return;
        }
        // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");
        if (window.screen.width > 700) {
            if (currentImageIndex === 3) {
                setCurrentImageIndex(0);
                document.getElementById("wrenchlink").classList.remove("fadeInAnchor");

                document.getElementById("threelink").classList.add("fadeInAnchor");
            } else if (currentImageIndex === 0) {
                setCurrentImageIndex(1);
                document.getElementById("threelink").classList.remove("fadeInAnchor");

                document.getElementById("pandemoniclink").classList.add("fadeInAnchor");

            } else if (currentImageIndex === 1) {
                setCurrentImageIndex(2);
                document.getElementById("pandemoniclink").classList.remove("fadeInAnchor");

                document.getElementById("racketslink").classList.add("fadeInAnchor");

            } else if (currentImageIndex === 2) {
                document.getElementById("racketslink").classList.remove("fadeInAnchor");
                document.getElementById("wrenchlink").classList.add("fadeInAnchor");

                setCurrentImageIndex(3);
            }
        }

    }
    // setInterval(changePicture, 4000);

    useEffect(() => {


        if (pandemonic || wrench || rackets || three) {
            document.querySelectorAll("#films-menu a").forEach(x => {
                x.classList.remove("fadeInAnchor");
                x.style.color = "white!important";
            })
        }
        if (pandemonic) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4"
            );
            document.getElementById("pandemoniclink").style.color = "lightgray!important";
            // document.getElementById("pademonicLink").classList.add("fadeOutAnchor");
        } else if (wrench) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4"
            );
            document.getElementById("wrenchlink").style.color = "lightgray!important";
            // document.getElementById("wrenchLink").classList.add("fadeOutAnchor");
        } else if (rackets) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4"
            );
            document.getElementById("racketslink").style.color = "lightgray!important";
            // document.getElementById("racketsLink").classList.add("fadeOutAnchor");
        } else if (three) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4"
            );
            // document.getElementById("threelink").style.color="gray!important";
            //     document.getElementById("threeLink").classList.add("fadeOutAnchor");
        }
    }, [pandemonic, three, wrench, rackets]);

    if (window.screen.width > 700)
        return (

            <div
                className={(!pandemonic && !wrench && !rackets && !three) ? "image-container vw-100 vh-100 p-0 m-0  overflow-y-scroll overflow-x-visible" :
                    "vw-100 vh-100 p-0 m-0  overflow-y-scroll overflow-x-visible"}>

                <div className="mask bg-light-subtle opacity-25 vw-100 h-auto"></div>
                {rackets && (
                    <video
                        style={videoBackgroundStyle}
                        autoPlay
                        playsInline
                        loop
                        muted
                        src={racketsVideoSrc}
                        className=" img-fluid fadeIn min-vw-100 p-0 m-0 "
                        alt="All Clips"
                    />
                )}
                {wrench && (
                    <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        src={wrenchVideoSrc}
                        className=" img-fluid fadeIn vw-100 vh-100 p-0 m-0 "
                        style={videoBackgroundStyle}
                        alt="All Clips"
                    />
                )}
                {pandemonic && (
                    <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        src={pandemonicVideoSrc}
                        className=" img-fluid fadeIn vw-100 vh-100 p-0 m-0 "
                        style={videoBackgroundStyle}
                        alt="All Clips"
                    />
                )}
                {three && (
                    <video
                        style={videoBackgroundStyle}
                        autoPlay
                        playsInline
                        loop
                        muted
                        src={threeVideoSrc}
                        className=" img-fluid fadeIn vw-100 vh-100 p-0 m-0 "
                        alt="All Clips"
                    />
                )}

                <nav
                    id="films-menu"
                    style={styleNavigationBar}
                    className={`position-fixed bottom-10  d-flex flex-column justify-content-end align-items-start lh-1 bg-transparent border-0 shadow-0 well`}
                >
                    <a

                        className=" bg-transparent  fw-bold  text-shadow-0"
                        id="threelink"
                        href="/films/three-bullets-to-bombay-beach"
                        onMouseEnter={() => setThree(true)}
                        onMouseLeave={() => setThree(false)}
                    >
                        Three Bullets to Bombay Beach
                    </a>
                    <a
                        onMouseEnter={() => setPandemonic(true)}
                        onMouseLeave={() => setPandemonic(false)}
                        className="bg-transparent fw-bold text-shadow-0"
                        id="pandemoniclink"
                        href="/films/a-pandemonic-serenade"
                    >
                        A Pandemonic Serenade
                    </a>
                    <a
                        className="bg-transparent fw-bold"
                        id="racketslink"
                        href="/films/rackets-all-the-way-down text-shadow-0"
                        onMouseEnter={() => setRackets(true)}
                        onMouseLeave={() => setRackets(false)}
                    >
                        Rackets All the Way Down
                    </a>
                    <a
                        onMouseEnter={() => setWrench(true)}
                        onMouseLeave={() => setWrench(false)}
                        className="bg-transparent fw-bold text-shadow-0 "
                        href="/films/the-wrench"
                        id="wrenchlink"

                    >
                        The Wrench
                    </a>


                </nav>{" "}
            </div>
        );
    else
        return (<section className="bg-image overflow-y-scroll z-2">
            <img src={`https://pagina-mama.s3.amazonaws.com/assets2/daniel/desert.png`} alt="Background Image" class="min-vh-100 min-vw-100 w-auto h-100 z-0 position-fixed" />
            <div class="mask" style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.6)' }}></div>



            <div
                className="section-header z-3 position-absolute w-100 "
                style={{ overflowX: "hidden!important" }}
            >
                <br />
                <div className="title all">
                    <h2
                        className="group-name text-center"
                        style={{ color: "white!important" }}
                    >
                        Films
                    </h2>
                </div>{" "}
            </div>
            <br />
            <br />
            <br />

            <div
                className=" film active has-thumb mt-0 mx-2 mb-5"
                style={{ overflowX: "hidden!important" }}
            >
                <a href="/films/the-wrench" title="The Wrench" className="text-decoration-none">

                    <figure>
                        <div className="" id="container-tv">
                            <div className="" id="monitor">
                                <div className="" id="monitor-screen">
                                    <video
                                        allowFullScreen
                                        className=" w-100"
                                        controls={false}
                                        autoPlay
                                        playsInline
                                        src={threeVideoSrc}

                                    />
                                </div>
                                <figcaption className="d-flex p-2 align-items-center justify-content-center">
                                    <h3 style={{ letterSpacing: ".1em" }} className="mt-2 mb-0 text-center text-white z-3 small text-decoration-none font-variant-none align-items-center">Three Bullets to Bombay Beach</h3>
                                </figcaption>
                            </div>

                        </div>


                    </figure>
                </a>
            </div>

            <div
                className=" film active has-thumb mt-0 mx-2 mb-5"
                style={{ overflowX: "hidden!important" }}
            >
                <a
                    href="/films/three-bullets-to-bombay-beach"
                    title="Three Bullets to Bombay Beach"
                    className="text-decoration-none "
                >
                    <figure>
                        <div className="" id="container-tv">

                            <div className="" id="monitor">

                                <div className="" id="monitor-screen">
                                    <video
                                        allowFullScreen
                                        className=" w-100"
                                        controls={false}
                                        autoPlay
                                        playsInline
                                        src={pandemonicVideoSrc}

                                    />
                                </div>
                                <figcaption className="d-flex p-2 align-items-center justify-content-center">
                                    <h3 style={{ letterSpacing: ".1em" }} className="mt-2 mb-0 text-center text-white z-3 text-decoration-none small">A Pandemonic Serenade</h3>
                                </figcaption>
                            </div>{" "}




                        </div>
                    </figure>
                </a>
            </div>
            <div
                className=" film active has-thumb mt-0 mx-2 mb-5"
                style={{ overflowX: "hidden!important" }}
            >
                <a
                    href="/films/rackets-all-the-way-down"
                    title="Rackets All the Way Down"
                    className="text-decoration-none"
                >
                    <figure>
                        <div className="" id="container-tv">
                            <div className="" id="monitor">
                                <div className="" id="monitor-screen">
                                    <video
                                        allowFullScreen
                                        className=" w-100"
                                        controls={false}
                                        autoPlay
                                        playsInline
                                        src={wrenchVideoSrc}

                                    />
                                </div>
                                <figcaption className="d-flex p-2 align-items-center justify-content-center">
                                    <h3 style={{ letterSpacing: ".1em" }} className="mt-2 mb-0
                                    text-center text-white z-3 text-decoration-none text-decoration-none small">The Wrench</h3>
                                </figcaption>
                            </div>{" "}




                        </div>
                    </figure>
                </a>
            </div>
            <div
                className=" film active has-thumb mt-0 mx-2 mb-5"
                style={{ overflowX: "hidden!important" }}
            >
                <a
                    href="/films/a-pandemonic-serenade"
                    title="A Pandemonic Serenade"
                    className="text-decoration-none"
                >
                    <figure>
                        <div className="" id="container-tv">
                            <div className="" id="monitor">
                                <div className="" id="monitor-screen">
                                    <video
                                        allowFullScreen
                                        className=" w-100"
                                        controls={false}
                                        autoPlay
                                        playsInline
                                        src={racketsVideoSrc}

                                    />
                                </div>
                                <figcaption className="d-flex p-2 align-items-center justify-content-center">
                                    <h3 style={{ letterSpacing: ".1em" }} className="mt-2 mb-0
                                    text-center text-white z-3 text-decoration-none small">Rackets All the Way Down</h3>
                                </figcaption>
                            </div>{" "}




                        </div>

                    </figure>
                </a>
            </div>
        </section >
        );
}

