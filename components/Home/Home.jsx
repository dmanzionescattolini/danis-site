import { useEffect } from "react";

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
    <div className="m-0 p-0 d-flex justify-content-center embed-responsive embed-responsive-16by9 align-items-center vw-100 w-100 h-100 vh-100 " >

      {/* //     style={{ */}
      {/* //       backgroundImage: `url("https://pagina-mama.s3.amazonaws.com/assets2/daniel/desert.png")`   */}
      {/* // }}> */}

      <div className="mask " style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        {/* <div className="float-end">
          <img width={200} className=" p-0 m-0 animate__animated animate__zoomIn animate__slower z-3 bg-transparent shadow-0" src={"https://pagina-mama.s3.amazonaws.com/assets2/daniel/sign.png"} />
        </div> */}
      </div>
      <div id="container-tv" className="position-fixed w-50 left-50 right-auto">
        <div id="monitor" className="">
          <div id="monitor-screen"  className="ratio ratio-16x9">
              <iframe
                src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
            
        </div>
      </div>
    </div>
  );
}
