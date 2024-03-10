// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@material-icons/font/css/all.css"
import '../../node_modules/bootstrap';
import {Outlet} from "react-router-dom";
import NavigationDani from "./NavigationDani.jsx";

export function Home() {
    let width = 50;
    let goingUp=true;
    window.setInterval(()=>{
            if(goingUp){
                if(width>=50){
                    goingUp=false;
                }

                // document.querySelector('#video-home').style.height=`${width+=.0006}%`;
                document.querySelector('#video-home').style.width=`${width+=.0006}%`;
            }else {
                // document.querySelector('#video-home').style.height=`${width-=.0006}%`;
                document.querySelector('#video-home').style.width=`${width-=.0006}%`;
                if(width<=10){
                    goingUp=true;
                }
            }
        }
        ,.001);
    return (
        <>
            <NavigationDani/>


            <Outlet/>
            </>
    );
}
