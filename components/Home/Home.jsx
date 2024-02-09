import { MDBContainer, MDBIcon,MDBNavbarNav, MDBNavbarLink} from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "./Home.scss"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
export function Home() {
  return (
    <MDBContainer fluid id="homeroot">
      {" "}
      <div id="homemain">
      <a
      id="menutoggle"
      className="btn btn-md btn-secondary mt-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
       <MDBIcon fas icon="bars"  />
        Menu
     </a>
     </div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="menubutton"
      >
        <div className="offcanvas-header">
         
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            
          ></button>
        </div>
        <div className="offcanvas-body">
          <MDBNavbarNav>
              <MDBNavbarLink>Films</MDBNavbarLink>
           
              <MDBNavbarLink>Videography</MDBNavbarLink>

            
              <MDBNavbarLink>About/Contact</MDBNavbarLink>
          </MDBNavbarNav>
          
        </div>
      </div>
     <div className="embed-responsive embed-responsive-16by9">
      <iframe allow="autoplay;fullscreen;" className="embed-responsive-item" src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Jingle+%26+Mingle.mp4?autoplay=1"/>
      </div>

      </MDBContainer>    
  );
}
