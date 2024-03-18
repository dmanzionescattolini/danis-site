import {
    MDBBtn,
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalHeader,
    MDBModalTitle,
    MDBTable,
    MDBTableBody,
} from "mdb-react-ui-kit";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
let params = { clip: String, image: String, title: String, cast: Array, date: String };
function BtnPlay() {
    return (<button id="playbutton" className="play-btn" onClick={() => playVideo()}>
        <svg enableBackground="new 0 0 141.73 141.73"
            height="141.73px"
            id="Warstwa_1"
            version="1.1"
            viewBox="0 0 141.73 141.73"
            width="141.73px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
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
    </button>);
}

export default function FilmTemplate(params) {
    const [play, setPlay] = useState(false);
    const { clip, image, title, cast, date } = params;
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    return (
        <MDBContainer fluid
            className={"vh-100 h-100 d-flex flex-column justify-content-stretch align-items-stretch align-items-stretch p-0 m-0"}>
                
            <div id={"banner-film"} className={"bg-image jumbotron jumbotron-fluid h-100 min-vh-75"} style={{ backgroundImage: `url(${image})`,maxHeight:"100%",maxWidth:"100%",width:"auto",height:"auto" }}>
                <div className="mask bg-dark bg-opacity-25 "></div>
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
                <MDBModal open={basicModal} setOpen={setBasicModal} >
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
                </MDBModal>
            </div>
            <MDBTable
                className="h-stretch m-0"
                border={0}
            >
                <MDBTableBody>
                    <tr>
                        <td>
                            <dt>Release Date</dt>
                            <dd>{date}</dd>
                        </td>
                        <td>
                            <dt>Director</dt>
                            <dd>Daniel Grzywacz</dd>
                        </td>
                        <td>
                            <dt>Cast</dt>
                            <ul className="list-unstyled">
                                {cast.map((c) =>
                                    (<li key={cast.indexOf(c)}>{`${c}`}</li>))}

                            </ul>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>

        </MDBContainer>);
}