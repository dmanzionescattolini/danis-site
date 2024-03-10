import {useEffect} from "react";
import {MDBIcon} from "mdb-react-ui-kit";

export default function HomeVideo() {


        return (
            <div id="video-container-home" className='embed-responsive embed-responsive-16by9'>
                flow-
            <video controls controlsList="nodownload"  autoPlay muted loop id="video-home" className="well embed-responsive-item " allowFullScreen>
                <source aria-controls={"fullscreen"} type="video/mp4" src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4" />

                <i className="bi bi-fullscreen z-3"></i></video>

            </div>

    );
}