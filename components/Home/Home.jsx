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
    document.getElementById("toggler").style.display = "none";
  },[]);
  window.onbeforeunload = closingCode;
  function closingCode() {
    document.getElementById("toggler").style.display = "block";
  }

  return (
    <div className="m-0 p-0 d-flex justify-content-center embed-responsive embed-responsive-16by9 align-items-center vw-100 w-100 h-100 vh-100">
      <video
        controls
        controlsList="nodownload noplayback"
        autoPlay
        muted
        loop
        id="video-home"
        className="  well embed-responsive-item "
        allowFullScreen
        src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rough+Reel.mp4"
      />
    </div>
  );
}
