// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '/node_modules/bootstrap';
import {Outlet} from "react-router-dom";
import NavigationDani from "./NavigationDani.jsx";

export function Home() {
   
    return (
        <>
            <NavigationDani/>


            <Outlet/>
            </>
    );
}
