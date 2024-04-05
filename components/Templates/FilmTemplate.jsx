import {
    MDBBtn,
    MDBTable,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBCollapse
} from "mdb-react-ui-kit";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
let params = { clip: String, image: String, title: String, cast: Array, date: String };

export default function FilmTemplate(params) {
    const { date, fullLengthVideo, title, cast, runtime, blurb, still, process } = params;
    const [basicModal, setBasicModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => setShowInfo(!showInfo);
    const toggleOpen = () => {
        setBasicModal(!basicModal);
        const vid = document.getElementById("video-film-page");
        vid.play();
    };
    return (
        <div className="">
            <div className="jumbotron jumbotron-fluid embed-responsive embed-responsive-16by9 px-50 mx-auto bg-black">
                {(window.screen.width < 768) &&
                    <>{basicModal && <video className="embed-responsive-item" autoPlay={false} src="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/FullLength.mp4" alt="Three Bullets for Bombay" title="Three Bullets to Bombay Beach" id="video-film-page"></video>
                        ||
                        (window.screen.width < 768 && !basicModal) &&
                        <div>
                        <img src={still} alt={`#{title} Still Image`} className="img-fluid" />
                        <MDBBtn onClick={toggleOpen} id="playbutton" className="play-btn hover-overlay shadow-1 hover bg-image hover-overlay ripple shadow-1-strong rounded" >
                            <svg enableBackground="new 0 0 141.73 141.73"
                                height="141.73px"
                                id="Warstwa_1"
                                version="1.1"
                                viewBox="0 0 141.73 141.73"
                                width="141.73px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="M101.628,40.092c-8.22-8.22-19.149-12.746-30.774-12.746c-11.624,0-22.553,4.526-30.772,12.746
        c-16.968,16.969-16.967,44.578,0.001,61.546c8.22,8.22,19.149,12.747,30.773,12.747s22.553-4.526,30.772-12.746
        s12.747-19.148,12.747-30.773S109.848,48.312,101.628,40.092z M100.214,100.225c-7.842,7.842-18.269,12.16-29.358,12.16
        s-21.517-4.319-29.359-12.161c-16.188-16.188-16.188-42.529-0.001-58.718c7.842-7.842,18.269-12.16,29.358-12.16
        c11.091,0,21.518,4.318,29.36,12.16c7.842,7.843,12.161,18.269,12.161,29.359S108.056,92.382,100.214,100.225z"
                                        fill="#ffffff" />
                                    <path d="M65.893,55.983c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l13.466,13.466L64.478,84.331
        c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L80.065,71.57
        c0.391-0.391,0.391-1.023,0-1.414L65.893,55.983z"
                                        fill="#ffffff" />
                                </g>
                            </svg>

                        </MDBBtn>
                        </div>
                    }</>
                }

                {(window.screen.width >= 768) &&

                    <>{basicModal &&
                        <video style={{ display: (basicModal) ? "flex" : "none" }} className="embed-responsive-item w-50 mx-auto " autoPlay="false" controls playsInline src={fullLengthVideo} alt="Three Bullets for Bombay" title="Three Bullets to Bombay Beach" ></video>
                        || (window.screen.width >= 768 && !basicModal) &&
                        <div>
                        <img src={still} alt={`#{title} Still Image`} className="img-fluid vw-50 mx-auto" />
                         <MDBBtn onClick={toggleOpen} id="playbutton" className="play-btn hover-overlay shadow-1 hover bg-image hover-overlay ripple shadow-1-strong rounded" >
                            <svg enableBackground="new 0 0 141.73 141.73"
                                height="141.73px"
                                id="Warstwa_1"
                                version="1.1"
                                viewBox="0 0 141.73 141.73"
                                width="141.73px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path d="M101.628,40.092c-8.22-8.22-19.149-12.746-30.774-12.746c-11.624,0-22.553,4.526-30.772,12.746
        c-16.968,16.969-16.967,44.578,0.001,61.546c8.22,8.22,19.149,12.747,30.773,12.747s22.553-4.526,30.772-12.746
        s12.747-19.148,12.747-30.773S109.848,48.312,101.628,40.092z M100.214,100.225c-7.842,7.842-18.269,12.16-29.358,12.16
        s-21.517-4.319-29.359-12.161c-16.188-16.188-16.188-42.529-0.001-58.718c7.842-7.842,18.269-12.16,29.358-12.16
        c11.091,0,21.518,4.318,29.36,12.16c7.842,7.843,12.161,18.269,12.161,29.359S108.056,92.382,100.214,100.225z"
                                        fill="#ffffff" />
                                    <path d="M65.893,55.983c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l13.466,13.466L64.478,84.331
        c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L80.065,71.57
        c0.391-0.391,0.391-1.023,0-1.414L65.893,55.983z"
                                        fill="#ffffff" />
                                </g>
                            </svg>

                        </MDBBtn>
                        </div>
                    }
                    </>
                }



            </div>
            {/* <video autoPlay loop style={{display:(basicModal)?"block":"none"}} src={clip} width="100%" height="100%" alt={title}/> */}
            {/* <div className="mask bg-dark bg-opacity-25 "></div> */}
     
           
            {/* <MDBModal open={basicModal} setOpen={setBasicModal} >
                    <MDBModalDialog>
                        
                        <div className="ratio ratio-16x9">
                          <video
                            playsInline
                            autoPlay
                            src={clip}
                            autoFocus
                            onEnded={() => setPlay(false)}
                            title="YouTube video"
                            allowfullscreen
                          ></video>
                        </div> 

                      
                    </MDBModalDialog>
                </MDBModal> */}

            <MDBTable
                className="vh-50  w-100 m-0 bg-white"
                border={0}
                id={"movie-info"}
            >
                <h2 className="display-6 text-center my-2"><small>{title}</small></h2>

                {window.screen.width < 700 &&
                    <div>
                        <p className="fs-5 p-5">{blurb}</p>
                    </div>
                    ||
                    <div className="px-5 mx-5 my-2 text-justify mw-50">
                        <p className="m-sm-0 p-sm-0 ms-sm-2 mx-lg-5 px-lg-5 py-2 my-2 ms-5 fs-5">{blurb}</p>
                    </div>
                }
                <MDBTableBody className="bg-white">
                    <tr className="d-flex flex-row justify-content-evenly">
                        <td className="">
                            <dt className="text-muted ">Release Date</dt>
                            <dd>{date}</dd>
                        </td>
                        <td>
                            <dt className="text-muted">Director</dt>
                            <dd>Daniel Grzywacz</dd>
                        </td>
                        <td>
                            <dt className={"text-muted"}>Starring</dt>
                            <ul className="list-unstyled">
                                {cast.map((c) =>
                                    (<li key={cast.indexOf(c)}>{`${c.castMember}`}<small><em> as </em><span className="ms-1"> {c.role}</span></small></li>))}

                            </ul>
                        </td>
                        <td>
                            <dt className={"text-muted"}>Runtime</dt>
                            <dd>{`${runtime.value} ${runtime.unit ? runtime.unit : runtime.units}`}</dd>
                        </td>
                    </tr>



                </MDBTableBody>

                <MDBRow>
                    {window.screen.width > 700 &&
                        <MDBCol>
                        </MDBCol>
                    }
                    <MDBCol>
                        <MDBBtn color="muted" className="border-0 shadow-0 outline-0 d-flex text-center flex-row justify-content-center" onClick={toggleInfo}>Peek into Daniel's process&nbsp;&nbsp;<span className="text-muted fw-light"><i className="fa fa-caret-down" aria-hidden="true"></i></span></MDBBtn>

                        <MDBCollapse open={showInfo} className='mt-3'>

                            {process.map(p => {
                                return (<p key={process.indexOf(p)} className="text-justify text-muted p-2" style={{ textIndent: '1em' }}>
                                    {p}
                                </p>);
                            })}
                        </MDBCollapse>
                    </MDBCol>
                    {window.screen.width > 700 &&
                        <MDBCol>
                        </MDBCol>
                    }
                </MDBRow>
            </MDBTable >
        </div>
    );
}