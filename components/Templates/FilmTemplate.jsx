import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
let params = { clip: String, image: String, title: String, cast: Array, date: String };
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBCollapse, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBRow, MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { ListGroupItem } from "react-bootstrap";
export default function FilmTemplate(params) {
    const { date, fullLengthVideo, title, cast, runtime, blurb, still, process, director } = params;
    const [basicModal, setBasicModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => setShowInfo(!showInfo);

    const toggleModal = () => setBasicModal(!basicModal);
    return (



        <div className="p-0 m-0 bg-white vh-100" >
            <MDBCard className="text-justify vh-100 vw-100 p-0 m-0 bg-white vw-100">
                {!basicModal &&
                    <div className="bg-image hover-overlay ripple h-50 vw-100 p-0 m-0 position-fixed vh-50 top-0" data-ripple-color="light" style={{ backgroundImage: `url(${still})` }}>
                        <MDBBtn size="3x" onClick={toggleModal} color="white" floating tag='a' className="z-3 fw-lighter position-absolute w-100 h-100 d-flex flex-row justify-content-center align-items-center text-white align-items-center bg-none align-content-center">
                            <MDBIcon far color="white" className="fw-lighter" size="3x" icon="play-circle" />
                        </MDBBtn>


                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

                        </div>


                    </div>
                    ||
                    <div className="embed-responsive embed-responsive-16by9 position-fixed top-0 hover-overlay ripple vw-100 w-100 h-50 vh-50 bg-black justify-content-center align-items-center p-0" data-ripple-color="light">
                        <iframe className="embed-responsive-item h-100 w-auto min-vw-100" src={fullLengthVideo} title={title} allowFullScreen></iframe>
                    </div>
                }

                <MDBCardBody className="px-5 pt-2 h-50 bg-white vh-50 position-fixed bottom-0 overflow-y-scroll">
                    <MDBCardTitle className="text-center mb-3 mt-2">{title}</MDBCardTitle>
                    <MDBCardText className="text-justify mb-2">
                        {blurb}
                    </MDBCardText>

                    <div className=" ">
                        <MDBListGroupItem className="me-3 mb-4">
                            <dt>Director</dt>
                            <dd className="flex-wrap m-0">Daniel Grzywacz</dd>
                        </MDBListGroupItem>
                        <MDBListGroupItem className="me-3 mb-4">
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

                    <MDBBtn onClick={toggleInfo} className="bg-white z-3 mw-100 d-flex flex-row w-100 justify-content-center text-center text-black bg-none border-0 shadow-none">
                        {showInfo ? <span className="fw-lighter text-center w-100">Hide <MDBIcon fa icon="caret-up" /></span> : <span className="fw-lighter text-center w-100">Peek into Daniel's Process <MDBIcon fa icon="caret-down" /></span>}
                    </MDBBtn>


                    <MDBCollapse open={showInfo} className="text-justify p-4 h-100 bg-white " col="8" >

                        <div style={{ columnCount: 1 }} className=" col-md-12 gx-5 mb-4 text-muted">
                            
                            {process.map((m) => { return (<div key={process.indexOf(m)} className="mb-4">{m}</div>); })}
                            
                        </div>
                    </MDBCollapse>
                </MDBCardBody>

            </MDBCard>
        </div >
    );
}