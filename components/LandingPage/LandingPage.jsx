import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {


  return (

      <a id="dinosaur-container" href="/home" className="d-flex flex-row justify-content-center align-items-center w-100 ">
          <img id="dinosaur" className={"img-fluid w-50 "} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
      </a>

  );
}
