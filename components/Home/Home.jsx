import { useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Home() {
  // let width = 50;
  // let goingUp=true;
  // window.setInterval(()=>{
  //         if(goingUp){
  //             if(width>=50){
  //                 goingUp=false;
  //             }

  //             document.querySelector('#video-home').style.width=`${width+=.06}%`;
  //         }else {
  //             document.querySelector('#video-home').style.width=`${width-=.06}%`;
  //             if(width<=40){
  //                 goingUp=true;
  //             }
  //         }
  //     }
  //     ,100);

  useEffect(() => {
    document.getElementById("toggler").style.transform = "rotate3ds(640sdeg)";
  }, []);
  window.onbeforeunload = closingCode;
  function closingCode() {
    document.getElementById("toggler").style.display = "block";
  }

  return (
    <div className="m-0 p-0 d-flex justify-content-center embed-responsive embed-responsive-16by9 align-items-center vw-100 w-100 h-100 vh-100 moving-bg"

      style={{
        backgroundImage: `url("https://pagina-mama.s3.amazonaws.com/assets2/daniel/desert.png")`
      }
      } >
      <div className="position-fixed clearfix top-0 right-0 left-0 bottom-0 w-100 h-100 justify-align-content-sm-center justify-content-center justify-content-lg-end justify-content-xl-end  d-flex align-items-start z-5">
        <LazyLoadImage         effect="blur"
src={"/public/assets/banner.png"} alt="banner" className="img-fluid" style={{ height: "8em", width: "auto" }}></LazyLoadImage>
      </div>

      <div className="mask " style={{ backgroundColor: 'rgba(0,0, 0, 0.6)' }}>
        {/* <div className="float-end">
          <LazyLoadImage         effect="blur"
 width={200} className=" p-0 m-0 animate__animated animate__zoomIn animate__slower z-3 bg-transparent shadow-0" src={"https://pagina-mama.s3.amazonaws.com/assets2/daniel/sign.png"} />
        </div> */}
      </div>
      <MDBContainer fluid id="container-tv" className="position-fixed col-xs-12 col-md-6 col-xl-6 col-xxl-6 left-50 right-auto">
        <div id="monitor" className="">
          <div id="monitor-screen" className="embed-responsive embed-responsive-16by9">
            <a href={"/films"}>
              <video
                src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4"
                title="Rough Reel"
                autoPlay
                controls={false}
                allowFullScreen
                className="embed-responsive-item w-100"
              ></video>
            </a>
          </div>

        </div>
      </MDBContainer>
    </ div>
  );
}
