// eslint-disable-()=>setVideonext-line no-unused-varsimport {MDBNavbar} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import {  useEffect, useState } from "react";

export default function VideoGallery() {
    const [pandemonic, setPandemonic] = useState(false);
    const [wrench, setWrench] = useState(false);
    const [rackets, setRackets] = useState(false);
    const [three, setThree] = useState(false);

    const [activeVideo, setActiveVideo] = useState("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
    useEffect(() => {

        
        if(pandemonic) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4");
        } else if(wrench) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4");
        } else if(rackets) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4");
        } else if(three) {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4");
        } else {
            setActiveVideo("https://pagina-mama.s3.amazonaws.com/assets2/daniel/All+Clips.mp4");
        }
    },[pandemonic, three, wrench, rackets]);
    return (<div className="w-100 h-100 m-0 p-0 object-fit-contain m-0 p-0">
        <div className="mask bg-light-subtle opacity-25 w-100 h-auto" ></div>
        <video autoPlay playsInline loop muted src={activeVideo} className=" min-vw-100 min-vh-100 h-auto w-100 embed-responsive position-fixed" alt="All Clips"/>
        <div id="menu-films" className={`position-fixed bottom-0  d-flex flex-column justify-content-end  `} >
     
            <a className="mb-0" href="/films/rackets-all-the-way-down" onMouseEnter={
                () => setRackets(true)} onMouseLeave={() => setRackets(false)}>
                Rackets All the Way Down
            </a>

            <a onMouseEnter={() => setWrench(true)} onMouseLeave={() => setWrench(false)}
                href="/films/the-wrench">
                The Wrench
            </a>


            <a
                onMouseEnter={() => setPandemonic(true)} onMouseLeave={() => setPandemonic(false)} href="/films/a-pandemonic-serenade"> A Pandemonic
                Serenade </a>


            <a
                href="/films/three-bullets-for-bombay" onMouseEnter={
                    () => setThree(true)} onMouseLeave={() => setThree(false)}>
                Three Bullets to Bombay Beach
            </a>

        </div>
    </div>);
}
