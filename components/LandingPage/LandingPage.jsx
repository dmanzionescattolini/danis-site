import {  MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function LandingPage() {

  
  return (
    <MDBContainer fluid className=" center m-0 p-0">
    <MDBRow className="d-flex flex-row justify-content-center align-items-center h-100 w-100 m-0 p-0" >
      <a href="/home" id={"link-landing-page"} className="w-100 m-auto p-0 h-100 row">
        <MDBCol md={3}></MDBCol>
        <img id="dinosaur" className={"img-fluid floating-effect"} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
        {/*<h1 className="display-1" id="enter-sign">ENTER</h1> */}
      </a>
    </MDBRow>
    </MDBContainer>
  );
}
