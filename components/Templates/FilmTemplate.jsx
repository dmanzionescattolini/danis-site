import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
let params = { clip: String, image: String, title: String, cast: Array, date: String };
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCollapse, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
export default function FilmTemplate(params) {
    const { date, fullLengthVideo, title, cast, runtime, blurb, still, process, director } = params;
    const [basicModal, setBasicModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => setShowInfo(!showInfo);

    const toggleModal = () => setBasicModal(!basicModal);
    return (



        <div className="vh-100 vw-100 h-100 w-100 p-0 m-0 bg-white overflow-y-scroll" >
            <MDBCard className="text-justify vh-100 w-100 p-0 m-0 bg-white">
                {!basicModal &&
                    <div className="bg-image hover-overlay ripple" data-ripple-color="light">
                        <MDBBtn size="3x" onClick={toggleModal} color="white" floating tag='a' className="z-3 fw-lighter position-absolute w-100 h-100 d-flex flex-row justify-content-center align-items-center text-white align-items-center bg-none align-content-center">
                            <MDBIcon far color="white" className="fw-lighter" size="3x" icon="play-circle" />
                        </MDBBtn>
                        <img
                            src={still}
                            className="img-fluid"
                        />

                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

                        </div>


                    </div>
                    ||
                    <div className="embed-responsive embed-responsive-16by9 hover-overlay ripple" data-ripple-color="light">
                        <iframe className="embed-responsive-item vw-100 p-0 m-0 min-vh-100 h-100"src={fullLengthVideo} title={title} allowFullScreen></iframe>
                    </div>
                }

                <MDBCardBody className="h-100 bg-white">
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText className="text-justify">
                        {blurb}
                    </MDBCardText>
            
                <MDBListGroup horizontal className="border-0 shadow-0 vw-100  p-0 m-0 flex-row justify-content-evenly">
                    <MDBListGroupItem className="border-0 shadow-0">
                        <dt>Director</dt>
                        <dd>{director}</dd>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="border-0 shadow-0">
                        <dt>Cast</dt>
                        <dd>{cast.map((m) => <>{m.castMember} as {m.role} <br /></>)}</dd>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="border-0 shadow-0">
                        <dt>Release</dt>
                        <dd>{date}</dd>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="border-0 shadow-0">
                        <dt>Runtime</dt>
                        <dd>{runtime.value} {runtime.unit || runtime.units}</dd>
                    </MDBListGroupItem>

                </MDBListGroup>
                
                    <MDBBtn onClick={toggleInfo} className="bg-white z-3 w-100 justify-content-center text-center text-black bg-none border-0 shadow-none">
                        {showInfo ? 'Hide' : 'Peek into Daniel\'s Process'}
                    </MDBBtn>


                <MDBCollapse open={showInfo} className="text-justify p-4 h-100 bg-white" col="12" >
                    
                                {process.map((m) => {return (<p key={process.indexOf(m)}>{m}</p>);})}
                </MDBCollapse>
                </MDBCardBody>

            </MDBCard>
        </div >
    );
}