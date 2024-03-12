import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

export const FilmTemplate = (params) => {
    const title = params.title;
    const image = params.image;
    const cast = params.cast;
    const date = params.date;
    return (
        <MDBContainer fluid className=" h-100 p-0 d-flex flex-stretch flex-grow flex-column justify-content-evenly p-0 ">

            <header id={"banner-film"} >
                <div
                    className=' text-center bg-image mt-0'
                    style={{
                        backgroundImage: `url('${image}')`,
                        height: `70vh`
                    }}
                >
                    <div className='d-flex justify-content-start align-items-end pb-0 h-100'>
                        <div className='text-white'>
                            <h2 className={"mb-4  display-3 fw-medium  ms-3  pt-0"}>{title}</h2>

                        </div>

                    </div>

                </div>
            </header>
            <MDBTable id="movie-info" className="m-0 h-100" border={"none"} width={"100%"}>
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
                            <ul className="list-unstyled">{cast.map(c => {
                                <li>{c}</li>
                            })}</ul>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
    )
}
