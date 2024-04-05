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



        <div className="vh-100 vw-100 h-100 w-100 p-0 m-0 bg-white vw-100 vh-100" >
            <MDBCard className="text-justify vh-100 w-100 p-0 m-0 bg-white vw-100">
                {!basicModal &&
                    <div className="bg-image hover-overlay ripple vh-100 vw-100 p-0 m-0" data-ripple-color="light">
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
                    <div className="embed-responsive embed-responsive-16by9 hover-overlay ripple vw-100 vh-50 bg-black justify-content-center align-items-center py-0" data-ripple-color="light">
                        <iframe className="embed-responsive-item vh-auto w-100 vw-100" src={fullLengthVideo} title={title} allowFullScreen></iframe>
                    </div>
                }

                <MDBCardBody className="h-100 bg-white">
                    <MDBCardTitle className="text-center">{title}</MDBCardTitle>
                    <MDBCardText className="text-justify">
                        {blurb}
                    </MDBCardText>

                    <div className="overflow-x-visible w-fit-content mw-100 vw-100 p-0 m-0 mb-3 d-flex flex-row justify-content-center align-content-center text-wrap flex-wrap ">
                        <MDBListGroupItem className="me-3 mb-4">
                            <dt>Director</dt>
                            <dd className="flex-wrap m-0">Daniel Grzywacz</dd>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="m-0">
                            <dt>Cast</dt>
                            <dd className="flex-wrap m-0">{cast.map((m) => { return (<li key={cast.indexOf(m)} className="list-unstyled text-nowrap small">{m.castMember} as {m.role} <br /></li>); })}</dd>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="me-3 mb-4">
                            <dt>Release</dt>
                            <dd className="flex-wrap m-0">{date}</dd>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="me-3 mb-4">
                            <dt>Runtime</dt>
                            <dd className="flex-wrap m-0">{runtime.value} {runtime.unit || runtime.units}</dd>
                        </MDBListGroupItem>

                    </div>

                    <MDBBtn onClick={toggleInfo} className="bg-white z-3 mw-100 justify-content-center text-center text-black bg-none border-0 shadow-none">
                        {showInfo ? <span className="fw-lighter">Hide <MDBIcon fa icon="caret-up" /></span> : <span className="fw-lighter">Peek into Daniel's Process <MDBIcon fa icon="caret-down" /></span>}
                    </MDBBtn>


                    <MDBCollapse open={showInfo} className="text-justify p-4 h-100 bg-white" col="12" >

                        {process.map((m) => { return (<p key={process.indexOf(m)}>{m}</p>); })}
                    </MDBCollapse>
                </MDBCardBody>

            </MDBCard>
        </div >
    );
}