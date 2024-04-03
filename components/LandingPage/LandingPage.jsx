
export default function LandingPage() {


  return (
    <div className="m-0 p-0 d-flex justify-content-center align-items-center vw-100 w-100 h-100 vh-100 bg-image ">
      <a id="dinosaur-container" href="/home" className="d-flex flex-row justify-content-center align-items-center w-100 ">
        {window.screen.width < 768 &&
          <img id="dinosaur" className={"img-fluid w-75 "} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
||
   <img id="dinosaur" className={"img-fluid w-50 "} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/DinoLarge.png" alt="Dinosaur" />
        }
      </a>

    </div>
  );
}
