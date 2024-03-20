// eslint-disable-setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'
import 'bootstrap/dist/css/bootstrap.css';
import {  MDBNavbar } from "mdb-react-ui-kit";
import { useState } from "react";

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
    return <div className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
        <div className="mask bg-light-subtle opacity-25 w-100 h-auto" ></div>
        
        <video autoPlay playsInline loop muted  src={activeVideo} className="min-vw-100 min-vh-100 h-auto w-100 zn-1 embed-responsive"
            alt="Three Bullets for Bombay" />;
        <div className={`position-fixed bottom-0 z-1 d-flex flex-column justify-content-end  `} >
     

                    <a className="mb-0" href="/films/rackets-all-the-way-down" onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() =>
                        setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4")}>
                        Rackets All the Way Down
                    </a> 

                    <a onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4")}
                        href="/films/the-wrench">
                        The Wrench
                    </a>
                

                    <a
                        onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4")} href="/films/a-pandemonic-serenade"> A Pandemonic
                        Serenade </a> 


                    <a
                        href="/films/three-bullets-for-bombay" onMouseLeave={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4")} onMouseEnter={() => setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4")}>
                        Three Bullets to Bombay Beach
                    </a>
                
        </div>
    </div>;
}
