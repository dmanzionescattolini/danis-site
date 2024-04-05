// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { useCallback, useEffect, useState } from "react";

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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    function changePicture() {
        if (wrench || pandemonic || rackets || three) {
            // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");
            return;
        }
        // document.querySelectorAll("#films-menu a").forEach(x => x.style.color = "white");

        if (currentImageIndex === 3) {
            setCurrentImageIndex(0);
        } else if(currentImageIndex===1){
            setCurrentImageIndex(2);
        }else if(currentImageIndex===0){
            setCurrentImageIndex(1);
        }else if(currentImageIndex===2){
            setCurrentImageIndex(3);
        }else{
            setCurrentImageIndex(currentImageIndex+1);
        }

     
    }
    window.setInterval(changePicture, 8000);

    useEffect(() => {
        changePicture();
        if (wrench || pandemonic || rackets || three) {
            // document.querySelectorAll("#films-menu a").forEach(x => {x.style.color = "white!important"; x.classList.remove("fadeOutAnchor"); x.classList.add("fadeInAnchor");});
            return;
        }

        if (pandemonic) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4"
            );
            // document.getElementById("pandemonicLink").style.color="gray!important";
            // document.getElementById("pademonicLink").classList.add("fadeOutAnchor");
        } else if (wrench) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4"
            );
            // document.getElementById("wrenchLink").style.color="gray!important";
            // document.getElementById("wrenchLink").classList.add("fadeOutAnchor");
        } else if (rackets) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4"
            );
            // document.getElementById("racketsLink").style.color="gray!important";
            // document.getElementById("racketsLink").classList.add("fadeOutAnchor");
        } else if (three) {
            setActiveVideo(
                "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4"
            );
            //     document.getElementById("threeLink").style.color="gray!important";
            //     document.getElementById("threeLink").classList.add("fadeOutAnchor");
        }
    }, [pandemonic, three, wrench, rackets]);
    if (window.screen.width > 768)
        return (
            <div className="min-vw-100 min-vh-100 p-0 m-0 " >
              
                    <div className="mask bg-light-subtle opacity-25 vw-100 h-auto"></div>
                    {rackets && (
                        <video
                            style={videoBackgroundStyle}
                            autoPlay
                            playsInline
                            loop
                            muted
                            src={racketsVideoSrc}
                            className=" img-fluid fadeIn vw-100 vh-100 p-0 m-0 "
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
                    {!pandemonic && !wrench && !rackets && !three && (
                        <>
                            {currentImageIndex === 0 && (
                                <img
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();
                                        e.target.classList.remove("fadeIn");
                                        e.target.classList.add("fadeOut");
                                    }}
                                    
                                    src={threeStill}
                                    alt={"Still of Three Bullets for Bombay Beach"}
                                    className="img-fluid fadeIn vw-100 vh-100 p-0 m-0"
                                />
                            )}
                            {currentImageIndex === 1 && (
                                <img
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();
                                        e.target.classList.remove("fadeIn");
                                        e.target.classList.add("fadeOut");
                                    }}
                                    
                                    src={pandemonicStill}
                                    className="img-fluid fadeIn vw-100 vh-100 p-0 m-0"
                                />
                            )}
                            {currentImageIndex === 2 && (
                                <img
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();
                                        e.target.classList.remove("fadeIn");
                                        e.target.classList.add("fadeOut");
                                    }}
                                    
                                    src={wrenchStill}
                                    className="img-fluid fadeIn vw-100 vh-100 p-0 m-0"
                                />
                            )}
                            {currentImageIndex === 3 && (
                                <img
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();
                                        e.target.classList.remove("fadeIn");
                                        e.target.classList.add("fadeOut");
                                    }}
                                    
                                    src={racketsStill}
                                    className="img-fluid fadeIn vw-100 vh-100 p-0 m-0"
                                />
                            )}
                        </>
                    )}{" "}
                    <nav
                        id="films-menu"
                        style={styleNavigationBar}
                        className={`position-fixed bottom-10  d-flex flex-column justify-content-end align-items-start lh-1 bg-transparent border-0 shadow-0 well`}
                    >
                        {(currentImageIndex === 0 && (
                            <a
                                className="text-opacity-50 text-light bg-transparent  fadeInAnchor "
                                onAnimationEnd={(e) => {
                                    e.preventDefault();
                                    let hasFadeIn = e.target.value.classList.contains("fadeInAnchor");
                                    if (hasFadeIn) {
                                        e.target.value.classList.remove("fadeInAnchor");
                                        e.target.value.classList.add("fadeOutAnchor");
                                    }
                                }}
                                id="Three+Bullets+to+Bombay+Beach"
                                href="/films/three-bullets-to-bombay-beach"
                                onMouseEnter={() => setThree(true)}
                                onMouseLeave={() => setThree(false)}
                            >
                                Three Bullets to Bombay Beach
                            </a>
                        )) || (
                                <a
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();

                                        e.target.value.classList.remove("fadeInAnchor");
                                        e.target.value.classList.add("fadeOutAnchor");

                                    }}
                                    onMouseEnter={() => setThree(true)}
                                    onMouseLeave={() => setThree(false)}
                                    className="bg-transparent text-white fadeInAnchor"
                                    href="/films/three-bullets-to-bombay-beach"
                                >
                                    Three Bullets to Bombay Beach
                                </a>
                            )}
                        {(currentImageIndex === 1 && (
                            <a
                                onAnimationEnd={(e) => {
                                    e.preventDefault();

                                    e.target.value.classList.remove("fadeInAnchor");
                                    e.target.value.classList.add("fadeOutAnchor");

                                }}
                                className="text-opacity-50 text-light bg-transparent  fadeOutAnchor "
                                id="A+Pandemonic+Serenade"
                                href="/films/a-pandemonic-serenade"
                                onMouseEnter={() => setPandemonic(true)}
                                onMouseLeave={() => setPandemonic(false)}
                            >
                                A Pandemonic Serenade
                            </a>
                        )) || (
                                <a
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();

                                        e.target.value.classList.remove("fadeInAnchor");
                                        e.target.value.classList.add("fadeOutAnchor");

                                    }}
                                    onMouseEnter={() => setPandemonic(true)}
                                    onMouseLeave={() => setPandemonic(false)}
                                    className="bg-transparent text-white fadeInAnchor"
                                    id="A+Pandemonic+Serenade"
                                    href="/films/a-pandemonic-serenade"
                                >
                                    A Pandemonic Serenade
                                </a>
                            )}
                        {(currentImageIndex === 2 && (
                            <a
                                onAnimationEnd={(e) => {
                                    e.preventDefault();

                                    e.target.value.classList.remove("fadeInAnchor");
                                    e.target.value.classList.add("fadeOutAnchor");

                                }}
                                className="text-opacity-50 text-light bg-transparent  fadeOutAnchor "
                                id="The+Wrench"
                                href="/films/the-wrench"
                                onMouseEnter={() => setWrench(true)}
                                onMouseLeave={() => setWrench(false)}
                            >
                                The Wrench
                            </a>
                        )) || (
                                <a
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();

                                        e.target.value.classList.remove("fadeInAnchor");
                                        e.target.value.classList.add("fadeOutAnchor");

                                    }}
                                    onMouseEnter={() => setWrench(true)}
                                    onMouseLeave={() => setWrench(false)}
                                    className="bg-transparent text-white fadeInAnchor"
                                    href="/films/the-wrench"
                                    id="The+Wrench"

                                >
                                    The Wrench
                                </a>
                            )}

                        {(currentImageIndex === 3 && (
                            <a
                                onAnimationEnd={(e) => {
                                    e.preventDefault();

                                    e.target.value.classList.remove("fadeInAnchor");
                                    e.target.value.classList.add("fadeOutAnchor");

                                }}
                                className="text-opacity-50 text-light bg-transparent  fadeOutAnchor "
                                id="Rackets+All+the+Way+Down"
                                href="/films/rackets-all-the-way-down"
                                onMouseEnter={() => setRackets(true)}
                                onMouseLeave={() => setRackets(false)}
                            >
                                Rackets All the Way Down
                            </a>
                        )) || (
                                <a
                                    onAnimationEnd={(e) => {
                                        e.preventDefault();

                                        e.target.value.classList.remove("fadeInAnchor");
                                        e.target.value.classList.add("fadeOutAnchor");

                                    }}
                                    onMouseEnter={() => setRackets(true)}
                                    onMouseLeave={() => setRackets(false)}
                                    className="bg-transparent text-white fadeInAnchor"
                                    href="/films/rackets-all-the-way-down"
                                    id="Rackets+All+the+Way+Down"
                                >
                                    Rackets All the Way Down
                                </a>
                            )}
                    </nav>{" "}
                </div>
        );
    else
        return (
            <section
                className="all-films vw-100 vh-100 p-0 m-0  overflow-y-scroll overflow-x-visible"
                style={{
                    backgroundColor: "white",
                    maxWidth: "fit-content!important",
                    overflowX: "hidden!important",
                }}
            >
                <div
                    className="grid media-tiles"
                    style={{ overflowX: "hidden!important" }}
                >
                    <div
                        className="grid section-header"
                        style={{ overflowX: "hidden!important" }}
                    >
                        <div className="title all">
                            <h2
                                className="group-name text-center"
                                style={{ color: "white!important" }}
                            >
                                Films
                            </h2>
                        </div>{" "}
                    </div>

                    <div
                        className="media-tile film active has-thumb mt-0"
                        style={{ overflowX: "hidden!important" }}
                    >
                        <a href="/films/the-wrench" title="The Wrench">

                            <figure>
                                <div className="w-responsive">
                                    <div className="embed-responsive-container">
                                        <div className="img-fluid">
                                            <video
                                                className="img-thumbnail"
                                                src={wrenchVideoSrc}
                                                style={{
                                                    width: "339.333px",
                                                    marginLeft: "0px",
                                                    marginTop: "-8px",
                                                }}
                                                playsInline
                                                autoPlay
                                                loop
                                                muted
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="overlay-vid">
                                        {" "}
                                        <div className="overlay-data-group credit">
                                            <div className="datum"></div>
                                        </div>
                                        <div className="overlay-data-group release-date">
                                            <h4>Release Date</h4>
                                            <div className="datum">
                                                <time>2018 </time>
                                            </div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Written and Directed by</h4>
                                            <div className="datum">Daniel Grzywacz</div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Starring</h4>
                                            <div className="datum">Lord Actor, Lady Actress</div>
                                        </div>{" "}
                                    </div>
                                </div>

                                <figcaption>
                                    <h3>The Wrench</h3>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div
                        className="media-tile film active has-thumb mt-0"
                        style={{ overflowX: "hidden!important" }}
                    >
                        <a
                            href="/films/three-bullets-to-bombay-beach"
                            title="Three Bullets for Bombay Beach"
                        >
                            <figure>
                                <div className="w-responsive">
                                    <div className="embed-responsive-container">
                                        <div className="img-fluid">
                                            <video
                                                className="img-thumbnail"
                                                src={threeVideoSrc}
                                                style={{
                                                    width: "339.333px",
                                                    marginLeft: "0px",
                                                    marginTop: "-8px",
                                                }}
                                                playsInline
                                                autoPlay
                                                loop
                                                muted
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="overlay-vid">
                                        {" "}
                                        <div className="overlay-data-group credit">
                                            <div className="datum"></div>
                                        </div>
                                        <div className="overlay-data-group release-date">
                                            <h4>Release Date</h4>
                                            <div className="datum">
                                                <time>2018 </time>
                                            </div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Written and Directed by</h4>
                                            <div className="datum">Daniel Grzywacz</div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Starring</h4>
                                            <div className="datum">Lord Actor, Lady Actress</div>
                                        </div>{" "}
                                    </div>
                                </div>

                                <figcaption>
                                    <h3>Three Bullets for Bombay Beach</h3>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div
                        className="media-tile film active has-thumb mt-0"
                        style={{ overflowX: "hidden!important" }}
                    >
                        <a
                            href="/films/rackets-all-the-way-down"
                            title="Rackets All the Way Down"
                        >
                            <figure>
                                <div className="w-responsive">
                                    <div className="embed-responsive-container">
                                        <div className="img-fluid">
                                            <video
                                                className="img-thumbnail"
                                                src={racketsVideoSrc}
                                                style={{
                                                    width: "339.333px",
                                                    marginLeft: "0px",
                                                    marginTop: "-8px",
                                                }}
                                                playsInline
                                                autoPlay
                                                loop
                                                muted
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="overlay-vid">
                                        {" "}
                                        <div className="overlay-data-group credit">
                                            <div className="datum"></div>
                                        </div>
                                        <div className="overlay-data-group release-date">
                                            <h4>Release Date</h4>
                                            <div className="datum">
                                                <time>2018 </time>
                                            </div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Written and Directed by</h4>
                                            <div className="datum">Daniel Grzywacz</div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Starring</h4>
                                            <div className="datum">Lord Actor, Lady Actress</div>
                                        </div>{" "}
                                    </div>
                                </div>

                                <figcaption>
                                    <h3>Rackets All the Way Down</h3>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div
                        className="media-tile film active has-thumb mt-0"
                        style={{ overflowX: "hidden!important" }}
                    >
                        <a
                            href="/films/a-pandemonic-serenade"
                            title="A Pandemonic Serenade"
                        >
                            <figure>
                                <div className="w-responsive">
                                    <div className="embed-responsive-container">
                                        <div className="img-fluid">
                                            <video
                                                className="img-thumbnail"
                                                src={pandemonicVideoSrc}
                                                style={{
                                                    width: "339.333px",
                                                    marginLeft: "0px",
                                                    marginTop: "-8px",
                                                }}
                                                playsInline
                                                autoPlay
                                                loop
                                                muted
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="overlay-vid">
                                        {" "}
                                        <div className="overlay-data-group credit">
                                            <div className="datum"></div>
                                        </div>
                                        <div className="overlay-data-group release-date">
                                            <h4>Release Date</h4>
                                            <div className="datum">
                                                <time>2018 </time>
                                            </div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Written and Directed by</h4>
                                            <div className="datum">Daniel Grzywacz</div>
                                        </div>
                                        <div className="overlay-data-group credit">
                                            <h4>Starring</h4>
                                            <div className="datum">Lord Actor, Lady Actress</div>
                                        </div>{" "}
                                    </div>
                                </div>

                                <figcaption>
                                    <h3>A Pandemonic Serenade</h3>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </section>
        );
}
