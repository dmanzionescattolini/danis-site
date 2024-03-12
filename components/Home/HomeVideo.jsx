import {useEffect} from "react";
import {MDBIcon} from "mdb-react-ui-kit";

export default function HomeVideo() {
    let width = 50;
    let goingUp=true;
    window.setInterval(()=>{
            if(goingUp){
                if(width>=50){
                    goingUp=false;
                }

                document.querySelector('#video-home').style.width=`${width+=.06}%`;
            }else {
                document.querySelector('#video-home').style.width=`${width-=.06}%`;
                if(width<=40){
                    goingUp=true;
                }
            }
        }
        ,100);

        return (
            <div className='object-fit d-flex justify-content-center embed-responsive embed-responsive-16by9 object-fit'>
            <video controls controlsList="nodownload noplayback"   autoPlay muted loop id="video-home" className="  well embed-responsive-item " allowFullScreen>
                <source aria-controls={"fullscreen"} type="video/mp4" src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4" />

                <i className="bi bi-fullscreen z-3"></i></video>

            </div>

    );
}