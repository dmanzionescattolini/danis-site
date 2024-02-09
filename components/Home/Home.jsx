import { MDBContainer, MDBIcon,MDBNavbarNav, MDBNavbarLink} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.css"
import "./Home.scss"
import "bootstrap/dist/js/bootstrap.js"
export function Home() {
  return (
    <MDBContainer fluid>
      {" "}
      <a
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <MDBIcon icon="bars"></MDBIcon>
        Menu
     </a>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
Menu          </h5>
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
      <video poster="https://i.vimeocdn.com/video/727292597-2a6dcb1b09357177931af07b00dde0d0e0f89c4e5f69b6e6cb2f639042441238-d_1920x1080" style="" src="blob:https://vimeo.com/0e558ef5-3fbe-46a3-8bac-c81675d56a2e" data-airgap-id="68"></video>    </MDBContainer>
  );
}
