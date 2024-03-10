// eslint-disable-setVideonext-line no-unused-vars


import { MDBNavbar, MDBNavbarLink } from "mdb-react-ui-kit";
import { useCallback, useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.css'
export default function VideoGallery() {
    const [rackets, setRackets] = useState(true);
    const [wrench, setWrench] = useState(false);
    const [pandemonic, setPandemonic] = useState(false);
    const [three, setThree] = useState(false);

    const changeActive = useCallback(()=> {

        for (let el=0, arr = [three, rackets, wrench, pandemonic]; el < arr.length; el++) {
            if (arr[el]) {
                changeValues(el);
            }


        }

        function changeValues(el) {
            switch (el) {
                case 0:
                    setThree(three=>!three);
                    setRackets(r=>!r);
                    document.getElementById("menu-films").children[el].style.color="lightgray";
                    document.getElementById("menu-films").children[3].style.color="white";
                    el++;
                    break;
                case 1:
                    setRackets(rackets=>!rackets);
                    setWrench(wrench=>!wrench);

                    document.getElementById("menu-films").children[el-1].style.color="white";
                    document.getElementById("menu-films").children[el].style.color="lightgray";
                    el++;
                    break;
                case 2:
                    setWrench(wrench=>!wrench);
                    setPandemonic(pandemonic=>!pandemonic);
                    document.getElementById("menu-films").children[el-1].style.color="white";
                    document.getElementById("menu-films").children[el].style.color="lightgray";
                    el++;
                    break;
                case 3:
                    setPandemonic(pandemonic=>!pandemonic);
                    setThree(three=>!three);
                    document.getElementById("menu-films").children[el-1].style.color="white";
                    document.getElementById("menu-films").children[el].style.color="lightgray";

                    el=0;

                    break;
            }

        }


    

    changeActive();

}
    ,[rackets, wrench, pandemonic, three]);

    function makeActive(e) {
        e.preventDefault();
        e.target.active = true;
        e.target.style.color = 'grey!important';l
    }
    window.setInterval(() => {changeActive() }, 1000);
    return (
        <sectio id="video-gallery">
        <div id="white-background"  style={{backgroundColor:'rgba(255,255,255,0.7)',backgroundSize:'cover'}}>
        </div>

        <video id={"background-video-films"} loop controls={false} autoPlay muted width="100%" height="auto"
            className="floating-effect overflow-visible position-fixed w-100 m-0 p-0">
            <source type="video/mp4" src='public/assets/All Clips.mp4'></source>
        </video>
        <MDBNavbar id={"films-menu"} fluid className="position-fixed bottom-0" dir='vertical'>
            <ul id="menu-films" className="list-unstyled ">

                <MDBNavbarLink active={rackets} href="rackets-all-the-way-down" onHover={(e) => makeActive(e)}>
                    Rackets All the Way Down
                </MDBNavbarLink>
                <MDBNavbarLink active={wrench} onHover={(e) => makeActive(e)} href="the-wrench">
                    The Wrench
                </MDBNavbarLink>
                <MDBNavbarLink active={pandemonic} onHover={(e) => makeActive(e)} href="/a-pandemonic-serenade"> A Pandemonic Serenade

                </MDBNavbarLink>
                <MDBNavbarLink href="three-bullets-for-bombay">
                    Three Bullets to Bombay Beach
                </MDBNavbarLink>

            </ul>
        </MDBNavbar>

    </sectio>);




}






